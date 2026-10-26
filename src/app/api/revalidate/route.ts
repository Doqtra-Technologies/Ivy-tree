import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

/**
 * Sanity webhook target. Configure a webhook in sanity.io/manage with:
 *   URL:        https://<site>/api/revalidate
 *   Trigger on: Create, Update, Delete
 *   Projection: { _type }
 *   Secret:     same value as SANITY_REVALIDATE_SECRET
 *
 * Every published change expires the cache tag for that document type, so
 * the site reflects edits on the next request.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ message: 'SANITY_REVALIDATE_SECRET is not set' }, { status: 500 })
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true)

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }
    if (!body?._type) {
      return NextResponse.json({ message: 'Missing _type in body' }, { status: 400 })
    }

    revalidateTag(body._type, { expire: 0 })
    return NextResponse.json({ revalidated: body._type })
  } catch (error) {
    console.error('[sanity] revalidate webhook failed:', error)
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
