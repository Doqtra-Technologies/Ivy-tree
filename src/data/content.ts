/**
 * Static site content.
 *
 * Single source of truth for all editable copy, images and PDFs. Replaces the
 * previous Sanity CMS backend so the site builds and deploys to a plain Node
 * host with no external services or API keys.
 *
 * To change copy on the site, edit the values below and redeploy.
 */

export interface PageSeo {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
  openGraphImage?: string;
  noIndex?: boolean;
}

export const siteSettingsContent = {
  siteName: 'The Ivy Tree',
  logoUrl: '/logo.png',
  reservationUrl: 'https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208',
  contact: {
    address: '113-117 South St, Romford RM1 1NX',
    phone: '01708 208566',
    email: 'info.theivytree@gmail.com',
    gmapsUrl:
      'https://www.google.com/maps/search/?api=1&query=113-117+South+St+Romford+RM1+1NX',
  },
  openingHours: [
    { day: 'Monday', hours: '10 am – 12 am' },
    { day: 'Tuesday', hours: '10 am – 12 am' },
    { day: 'Wednesday', hours: '10 am – 12 am' },
    { day: 'Thursday', hours: '10 am – 1 am' },
    { day: 'Friday', hours: '10 am – 2 am' },
    { day: 'Saturday', hours: '10 am – 2 am' },
    { day: 'Sunday', hours: '10 am – 12 am' },
  ],
  socialLinks: {
    instagram: 'https://www.instagram.com/ivytreeessex/',
    facebook: 'https://www.facebook.com/profile.php?id=61581751713918',
    tiktok: 'https://www.tiktok.com/discover/ivy-tree-romford',
  },
  seo: undefined as PageSeo | undefined,
};

export const homepageContent = {
  hero: {
    heading: 'Restaurant | Brasserie | Lounge Bar',
    subheading:
      'Rustiq: A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.',
    videoUrl: '/homepage/banner/banner.mp4',
  },
  seo: undefined as PageSeo | undefined,
};

export const semiPrivateContent = {
  heading: 'Semi Private',
  text: 'Dine in our exclusive semi private Rooms at Ivy Tree. Semi private here is a luxurious and indulgent experience.',
  seo: undefined as PageSeo | undefined,
  rooms: [
    {
      id: 'room-luna',
      name: 'Luna Room',
      capacity: '50 people',
      description:
        'Our grandest semi-private event room offering a luxurious setting, complete with elegant lighting and premium finishes for large scale receptions.',
      imageUrl: '/rooms/luna.jpeg',
    },
    {
      id: 'room-apollo',
      name: 'Apollo Room',
      capacity: '30 people',
      description:
        'A gorgeous, spacious dining space styled with premium accents, tailored for medium-sized celebrations and special private banquets.',
      imageUrl: '/rooms/apollo.png',
    },
    {
      id: 'room-velvet',
      name: 'Velvet Room',
      capacity: '6-8 people',
      description:
        'An intimate and plush dining setting wrapped in rich velvet styling, perfect for private family gatherings or corporate dinners.',
      imageUrl: '/rooms/velvet.png',
    },
  ],
};

export const cocktailBarContent = {
  heading: 'Cocktail Bar',
  text: 'Enjoy expertly crafted cocktails at our upstairs Cocktail Bar at Ivy Tree. A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.',
  imageUrl: '/cocktail-bar.png',
  imageAlt: 'Cocktail Bar',
  seo: undefined as PageSeo | undefined,
};

export const whatsOnContent = {
  heading: "What's On",
  subtitle: 'Events & Promotions',
  seo: undefined as PageSeo | undefined,
  events: [
    {
      id: 'event-happy-hour',
      title: 'HAPPY HOUR',
      description:
        'Join us for Happy Hour! Enjoy 2-for-1 cocktails, draft beers, and select wines in our luxurious lounge bar.',
      pdfUrl: '',
      imageUrl: '/events/happy-hour.jpeg',
    },
    {
      id: 'event-bottomless-brunch',
      title: 'BOTTOMLESS PROSECCO BRUNCH',
      description:
        'Indulge in a Mediterranean feast with bottomless Prosecco, crafted cocktails, and a lively vibe every weekend.',
      pdfUrl: '/events/bottomless-brunch.pdf',
      imageUrl: '/events/bottomless-brunch.jpeg',
    },
    {
      id: 'event-dj-nights',
      title: 'DJ NIGHTS',
      description:
        'Experience our upstairs cocktail bar coming alive on Friday & Saturday nights with live DJ sets and a premium crowd.',
      pdfUrl: '/events/dj-nights.pdf',
      imageUrl: '/events/dj-nights.jpeg',
    },
  ],
};

export const galleryContent = {
  heading: 'Gallery',
  seo: undefined as PageSeo | undefined,
  images: [
    { src: '/gallery/1.jpg', alt: 'Ivy Tree interior table styling' },
    { src: '/gallery/2.jpg', alt: 'Plush cocktail seating' },
    { src: '/gallery/3.jpg', alt: 'Premium dining presentation' },
    { src: '/gallery/4.jpg', alt: 'Outdoor garden facade' },
    { src: '/gallery/5.jpg', alt: 'Expertly crafted cocktails' },
    { src: '/gallery/6.jpg', alt: 'Intimate bar setup' },
    { src: '/gallery/7.jpg', alt: 'Floral details and lounge' },
    { src: '/gallery/8.jpg', alt: 'Fresh Mediterranean entrees' },
    { src: '/gallery/9.jpg', alt: 'Cozy velvet booths' },
    { src: '/gallery/10.jpg', alt: 'Evening lighting atmosphere' },
  ],
};

export const menuContent = {
  heading: 'OUR MENU',
  description:
    'Discover our exquisite Mediterranean dishes. Click the covers below to view our menus.',
  seo: undefined as PageSeo | undefined,
  menus: [
    {
      id: 'menu-a-la-carte',
      title: 'A La Carte Menu',
      src: '/gallery/3.jpg',
      alt: 'A La Carte Menu Cover',
      pdfUrl: '/menu/Ivy Tree A La Carte Menu Proof.pdf',
    },
    {
      id: 'menu-fathers-day',
      title: "Father's Day Set Menu",
      src: '/gallery/8.jpg',
      alt: "Father's Day Set Menu Cover",
      pdfUrl: '/menu/Menu by. Omar_20260615_190452_0000.pdf',
    },
  ],
};

export const blogPostsContent = [
  {
    title: 'COCKTAIL BAR',
    slug: 'mediterranean-mixology',
    category: 'Mixology',
    readTime: '2 MIN READ',
    location: 'ROMFORD',
    quote:
      'Crafting a sensory journey through aromatic herbs, handcrafted syrups, and premium spirits.',
    excerpt: 'Read more about our journey and experiences...',
    imageUrl: '/cocktail-bar.png',
    publishedAt: '2026-01-15T00:00:00.000Z',
    body: [
      'Crafting a sensory journey through aromatic herbs, handcrafted syrups, and premium spirits.',
    ],
    seo: undefined as PageSeo | undefined,
  },
  {
    title: 'BAR',
    slug: 'mediterranean-flavors',
    category: 'FOOD & DINING',
    readTime: '2 MIN READ',
    location: 'ESSEX',
    quote:
      'A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.',
    excerpt: 'Read more about our journey and experiences...',
    imageUrl: '/gallery/8.jpg',
    publishedAt: '2026-01-10T00:00:00.000Z',
    body: [
      'A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.',
    ],
    seo: undefined as PageSeo | undefined,
  },
  {
    title: 'THE IVY TREE',
    slug: 'the-ivy-tree',
    category: 'FOOD & DINING',
    readTime: '2 MIN READ',
    location: 'ESSEX',
    quote:
      'A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.',
    excerpt: 'Read more about our journey and experiences...',
    imageUrl: '/gallery/1.jpg',
    publishedAt: '2026-01-05T00:00:00.000Z',
    body: [
      'A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.',
    ],
    seo: undefined as PageSeo | undefined,
  },
];
