/**
 * Seed Sanity with the static fallback content from src/data/content.ts,
 * uploading images, PDFs and video from /public.
 *
 *   npm run sanity:seed               # create documents that don't exist yet
 *   npm run sanity:seed -- --replace  # overwrite existing documents
 *
 * Runs through `sanity exec --with-user-token`, so it uses your
 * `sanity login` session and needs no API token.
 */

import fs from 'node:fs'
import path from 'node:path'
import { getCliClient } from 'sanity/cli'

import {
  blogPostsContent,
  cocktailBarContent,
  galleryContent,
  homepageContent,
  menuContent,
  semiPrivateContent,
  siteSettingsContent,
  whatsOnContent,
} from '../src/data/content'

const client = getCliClient({ apiVersion: '2025-02-19' })
const replace = process.argv.includes('--replace')

type AssetRef = { _type: 'reference'; _ref: string }

async function upload(kind: 'image' | 'file', publicPath: string): Promise<AssetRef | undefined> {
  if (!publicPath) return undefined
  const fullPath = path.join(process.cwd(), 'public', publicPath)
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ! missing ${fullPath}, skipped`)
    return undefined
  }
  const asset = await client.assets.upload(kind, fs.createReadStream(fullPath), {
    filename: path.basename(fullPath),
  })
  console.log(`  ↑ ${publicPath}`)
  return { _type: 'reference', _ref: asset._id }
}

async function image(publicPath: string, alt?: string) {
  const asset = await upload('image', publicPath)
  return asset ? { _type: 'image', asset, ...(alt ? { alt } : {}) } : undefined
}

async function file(publicPath: string) {
  const asset = await upload('file', publicPath)
  return asset ? { _type: 'file', asset } : undefined
}

let keyCounter = 0
const key = () => `k${(keyCounter++).toString(36)}`

async function main() {
  console.log(`Seeding ${client.config().projectId}/${client.config().dataset}${replace ? ' (replace)' : ''}`)
  const docs: Array<{ _id: string; _type: string; [field: string]: unknown }> = []

  const s = siteSettingsContent
  docs.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: s.siteName,
    logo: await image(s.logoUrl),
    reservationUrl: s.reservationUrl,
    contact: s.contact,
    openingHours: s.openingHours.map((h) => ({ _key: key(), _type: 'openingHours', ...h })),
    socialLinks: s.socialLinks,
  })

  docs.push({
    _id: 'homepage',
    _type: 'homepage',
    // The banner video is large; keep serving it from /public by URL.
    hero: { ...homepageContent.hero },
  })

  docs.push({ _id: 'menuPage', _type: 'menuPage', heading: menuContent.heading, description: menuContent.description })
  for (const [i, m] of menuContent.menus.entries()) {
    docs.push({
      _id: m.id,
      _type: 'menu',
      title: m.title,
      order: i + 1,
      coverImage: await image(m.src, m.alt),
      pdfFile: await file(m.pdfUrl),
    })
  }

  docs.push({ _id: 'whatsOnPage', _type: 'whatsOnPage', heading: whatsOnContent.heading, subtitle: whatsOnContent.subtitle })
  for (const [i, e] of whatsOnContent.events.entries()) {
    docs.push({
      _id: e.id,
      _type: 'event',
      title: e.title,
      order: i + 1,
      description: e.description,
      image: await image(e.imageUrl),
      pdfFile: await file(e.pdfUrl),
    })
  }

  docs.push({ _id: 'semiPrivatePage', _type: 'semiPrivatePage', heading: semiPrivateContent.heading, text: semiPrivateContent.text })
  for (const [i, r] of semiPrivateContent.rooms.entries()) {
    docs.push({
      _id: r.id,
      _type: 'room',
      name: r.name,
      order: i + 1,
      capacity: r.capacity,
      description: r.description,
      image: await image(r.imageUrl, r.name),
    })
  }

  docs.push({
    _id: 'cocktailBarPage',
    _type: 'cocktailBarPage',
    heading: cocktailBarContent.heading,
    text: cocktailBarContent.text,
    image: await image(cocktailBarContent.imageUrl, cocktailBarContent.imageAlt),
  })

  const galleryImages = []
  for (const img of galleryContent.images) {
    const uploaded = await image(img.src, img.alt)
    if (uploaded) galleryImages.push({ _key: key(), ...uploaded })
  }
  docs.push({ _id: 'galleryPage', _type: 'galleryPage', images: galleryImages })

  for (const p of blogPostsContent) {
    docs.push({
      _id: `post-${p.slug}`,
      _type: 'post',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      publishedAt: p.publishedAt,
      category: p.category,
      readTime: p.readTime,
      location: p.location,
      quote: p.quote,
      excerpt: p.excerpt,
      mainImage: await image(p.imageUrl),
      body: p.body.map((text) => ({
        _type: 'block',
        _key: key(),
        style: 'normal',
        markDefs: [],
        children: [{ _type: 'span', _key: key(), text, marks: [] }],
      })),
    })
  }

  const tx = client.transaction()
  for (const doc of docs) {
    if (replace) tx.createOrReplace(doc)
    else tx.createIfNotExists(doc)
  }
  await tx.commit()
  console.log(`Done: ${docs.length} documents ${replace ? 'written' : 'created if missing'}.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
