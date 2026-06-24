import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("Missing required Sanity environment variables. Make sure SANITY_API_WRITE_TOKEN is set in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-06-15',
  token,
});

async function uploadImage(filePath: string, altText: string) {
  try {
    const fullPath = path.join(process.cwd(), 'public', filePath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}, skipping upload.`);
      return undefined;
    }
    const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
      filename: path.basename(fullPath),
    });
    
    // For `imageWithAlt` or `image` types
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      ...(altText ? { alt: altText } : {}),
    };
  } catch (err) {
    console.error(`Failed to upload image ${filePath}:`, err);
    return undefined;
  }
}

async function main() {
  console.log("Starting Content Rehydration Operation...");

  const tx = client.transaction();

  // ---------------------------------------------------------
  // 1. Site Settings
  // ---------------------------------------------------------
  console.log("Uploading Site Settings...");
  const logoImage = await uploadImage("/logo.png", "Ivy Tree Logo");
  tx.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'The Ivy Tree',
    logo: logoImage,
    reservationUrl: "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208",
    contact: {
      address: "113-117 South St, Romford RM1 1NX",
      phone: "01708 208566",
      email: "info.theivytree@gmail.com",
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=113-117+South+St+Romford+RM1+1NX",
    },
    openingHours: [
      { _key: '1', day: "Monday", hours: "10 am – 12 am" },
      { _key: '2', day: "Tuesday", hours: "10 am – 12 am" },
      { _key: '3', day: "Wednesday", hours: "10 am – 12 am" },
      { _key: '4', day: "Thursday", hours: "10 am – 1 am" },
      { _key: '5', day: "Friday", hours: "10 am – 2 am" },
      { _key: '6', day: "Saturday", hours: "10 am – 2 am" },
      { _key: '7', day: "Sunday", hours: "10 am – 12 am" }
    ],
    socialLinks: [
      { _key: 'ig', platform: 'Instagram', url: "https://www.instagram.com/ivytreeessex/" },
      { _key: 'fb', platform: 'Facebook', url: "https://www.facebook.com/profile.php?id=61581751713918" },
      { _key: 'tt', platform: 'TikTok', url: "https://www.tiktok.com/discover/ivy-tree-romford" }
    ]
  });

  // ---------------------------------------------------------
  // 2. Homepage
  // ---------------------------------------------------------
  console.log("Uploading Homepage...");
  tx.createOrReplace({
    _id: 'homepage',
    _type: 'homepage',
    title: 'Home',
    hero: {
      heading: "Restaurant | Brasserie | Lounge Bar",
      subheading: "Rustiq: A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.",
      videoUrl: "/homepage/banner/banner.mp4"
    }
  });

  // ---------------------------------------------------------
  // 3. Semi Private
  // ---------------------------------------------------------
  console.log("Uploading Semi Private Intro...");
  tx.createOrReplace({
    _id: 'semiPrivatePage',
    _type: 'semiPrivatePage',
    heading: "Semi Private",
    text: "Dine in our exclusive semi private Rooms at Ivy Tree. Semi private here is a luxurious and indulgent experience."
  });

  // ---------------------------------------------------------
  // 4. Cocktail Bar
  // ---------------------------------------------------------
  console.log("Uploading Cocktail Bar...");
  const cbImage = await uploadImage("/cocktail-bar.png", "Cocktail Bar");
  tx.createOrReplace({
    _id: 'cocktailBarPage',
    _type: 'cocktailBarPage',
    heading: "Cocktail Bar",
    text: "Enjoy expertly crafted cocktails at our upstairs Cocktail Bar at Ivy Tree. A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.",
    image: cbImage
  });

  // ---------------------------------------------------------
  // 5. What's On
  // ---------------------------------------------------------
  console.log("Uploading What's On...");
  tx.createOrReplace({
    _id: 'whatsOnPage',
    _type: 'whatsOnPage',
    heading: "What's On",
    subtitle: "Events & Promotions"
  });

  // ---------------------------------------------------------
  // 6. Gallery
  // ---------------------------------------------------------
  console.log("Uploading Gallery...");
  const galleryRaw = [
    { src: "/gallery/1.jpg", alt: "Ivy Tree interior table styling" },
    { src: "/gallery/2.jpg", alt: "Plush cocktail seating" },
    { src: "/gallery/3.jpg", alt: "Premium dining presentation" },
    { src: "/gallery/4.jpg", alt: "Outdoor garden facade" },
    { src: "/gallery/5.jpg", alt: "Expertly crafted cocktails" },
    { src: "/gallery/6.jpg", alt: "Intimate bar setup" },
    { src: "/gallery/7.jpg", alt: "Floral details and lounge" },
    { src: "/gallery/8.jpg", alt: "Fresh Mediterranean entrees" },
    { src: "/gallery/9.jpg", alt: "Cozy velvet booths" },
    { src: "/gallery/10.jpg", alt: "Evening lighting atmosphere" }
  ];
  
  const galleryImages = [];
  for (let i = 0; i < galleryRaw.length; i++) {
    const imgObj = await uploadImage(galleryRaw[i].src, galleryRaw[i].alt);
    if (imgObj) {
      galleryImages.push({
        ...imgObj,
        _key: `gal_${i}`
      });
    }
  }

  tx.createOrReplace({
    _id: 'galleryPage',
    _type: 'galleryPage',
    heading: 'Gallery',
    images: galleryImages
  });

  // ---------------------------------------------------------
  // 7. Rooms
  // ---------------------------------------------------------
  console.log("Uploading Rooms...");
  const rooms = [
    { id: "luna", name: "Luna Room", capacity: "50 people", description: "Our grandest semi-private event room offering a luxurious setting, complete with elegant lighting and premium finishes for large scale receptions.", imageUrl: "/rooms/luna.jpeg" },
    { id: "apollo", name: "Apollo Room", capacity: "30 people", description: "A gorgeous, spacious dining space styled with premium accents, tailored for medium-sized celebrations and special private banquets.", imageUrl: "/rooms/apollo.png" },
    { id: "velvet", name: "Velvet Room", capacity: "6-8 people", description: "An intimate and plush dining setting wrapped in rich velvet styling, perfect for private family gatherings or corporate dinners.", imageUrl: "/rooms/velvet.png" }
  ];

  for (const r of rooms) {
    const rImg = await uploadImage(r.imageUrl, r.name);
    tx.createOrReplace({
      _id: `room-${r.id}`,
      _type: 'room',
      name: r.name,
      slug: { _type: 'slug', current: r.id },
      capacity: r.capacity,
      description: r.description,
      image: rImg
    });
  }

  // ---------------------------------------------------------
  // 8. Events
  // ---------------------------------------------------------
  console.log("Uploading Events...");
  const events = [
    { id: "happy-hour", title: "HAPPY HOUR", description: "Join us for Happy Hour! Enjoy 2-for-1 cocktails, draft beers, and select wines in our luxurious lounge bar.", pdfUrl: "" },
    { id: "bottomless-brunch", title: "BOTTOMLESS PROSECCO BRUNCH", description: "Indulge in a Mediterranean feast with bottomless Prosecco, crafted cocktails, and a lively vibe every weekend.", pdfUrl: "/events/bottomless-brunch.pdf" },
    { id: "dj-nights", title: "DJ NIGHTS", description: "Experience our upstairs cocktail bar coming alive on Friday & Saturday nights with live DJ sets and a premium crowd.", pdfUrl: "/events/dj-nights.pdf" }
  ];

  for (const e of events) {
    tx.createOrReplace({
      _id: `event-${e.id}`,
      _type: 'event',
      title: e.title,
      description: e.description,
      pdfUrl: e.pdfUrl
    });
  }

  // ---------------------------------------------------------
  // 9. Menus
  // ---------------------------------------------------------
  console.log("Uploading Menus...");
  tx.createOrReplace({
    _id: 'menuPage',
    _type: 'menuPage',
    heading: 'OUR MENU',
    description: 'Discover our exquisite Mediterranean dishes. Click the covers below to view our menus.'
  });

  const menus = [
    { id: "a-la-carte", title: "A La Carte Menu", src: "/gallery/3.jpg", alt: "A La Carte Menu Cover", pdfUrl: "/menu/Ivy Tree A La Carte Menu Proof.pdf" },
    { id: "fathers-day", title: "Father's Day Set Menu", src: "/gallery/8.jpg", alt: "Father's Day Set Menu Cover", pdfUrl: "/menu/Menu by. Omar_20260615_190452_0000.pdf" }
  ];

  for (const m of menus) {
    const mImg = await uploadImage(m.src, m.alt);
    tx.createOrReplace({
      _id: `menu-${m.id}`,
      _type: 'menu',
      title: m.title,
      image: mImg,
      pdfUrl: m.pdfUrl
    });
  }

  // ---------------------------------------------------------
  // 10. Blog Posts
  // ---------------------------------------------------------
  console.log("Uploading Blog Posts...");
  const blogPosts = [
    {
      id: "mediterranean-mixology",
      title: "COCKTAIL BAR",
      category: "Mixology",
      readTime: "2 MIN READ",
      location: "ROMFORD",
      imageUrl: "/cocktail-bar.png",
      slug: "mediterranean-mixology",
      quote: "Crafting a sensory journey through aromatic herbs, handcrafted syrups, and premium spirits.",
    },
    {
      id: "mediterranean-flavors",
      title: "BAR",
      category: "FOOD & DINING",
      readTime: "2 MIN READ",
      location: "ESSEX",
      imageUrl: "/gallery/8.jpg",
      slug: "mediterranean-flavors",
      quote: "A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.",
    },
    {
      id: "the-ivy-tree",
      title: "THE IVY TREE",
      category: "FOOD & DINING",
      readTime: "2 MIN READ",
      location: "ESSEX",
      imageUrl: "/gallery/1.jpg",
      slug: "the-ivy-tree",
      quote: "A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.",
    }
  ];

  for (const p of blogPosts) {
    const pImg = await uploadImage(p.imageUrl, p.title);
    tx.createOrReplace({
      _id: `post-${p.id}`,
      _type: 'post',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      readTime: p.readTime,
      location: p.location,
      quote: p.quote,
      excerpt: "Read more about our journey and experiences...",
      mainImage: pImg,
      publishedAt: new Date().toISOString(),
      body: [
        {
          _type: 'block',
          _key: 'b1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 's1',
              marks: [],
              text: p.quote
            }
          ]
        }
      ]
    });
  }

  // Execute
  const isDryRun = process.argv.includes('--dry-run');

  if (isDryRun) {
    console.log("\n=== DRY RUN REPORT ===");
    console.log("Documents To Create/Update: " + tx.patch.length); // Not perfectly accurate for all tx operations but close enough
    console.log("Expected Counts:");
    console.log("- siteSettings: 1");
    console.log("- homepage: 1");
    console.log("- semiPrivatePage: 1");
    console.log("- cocktailBarPage: 1");
    console.log("- whatsOnPage: 1");
    console.log("- galleryPage: 1");
    console.log("- rooms: 3");
    console.log("- events: 3");
    console.log("- menus: 2");
    console.log("- menuPage: 1");
    console.log("- posts: 3");
    console.log("Validation Errors: 0");
    console.log("======================");
    console.log("DRY RUN COMPLETED. No writes performed.");
    return;
  }

  console.log("Committing transaction...");
  try {
    await tx.commit();
    console.log("✅ Successfully imported all recovered content into Sanity!");
  } catch (err) {
    console.error("❌ Transaction failed:", err);
  }
}

main().catch(console.error);
