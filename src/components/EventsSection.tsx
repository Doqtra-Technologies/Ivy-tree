"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
}

const originalEvents: EventItem[] = [
  {
    id: "dj-nights",
    title: "Weekly DJ Nights",
    subtitle: "Every Fri & Sat | 8pm - Late",
    description: "Ascend to our upstairs lounge for premium nightlife. Live sets from resident DJs, custom cocktails, and VIP bottle service.",
    imageUrl: "/gallery/IVY TREE  MAY POST (1).png",
    linkUrl: "/whats-on",
    linkText: "Book Evening Table",
  },
  {
    id: "bottomless-brunch",
    title: "Bottomless Brunch",
    subtitle: "Every Sat & Sun | 12pm - 4pm",
    description: "Indulge in a Mediterranean feast with bottomless Prosecco, crafted cocktails, and a high-energy lounge atmosphere.",
    imageUrl: "/gallery/IVY TREE  MAY POST (2).png",
    linkUrl: "/whats-on",
    linkText: "Book Brunch Table",
  },
  {
    id: "live-music",
    title: "Live Music & Sax",
    subtitle: "Selected Evenings",
    description: "Unwind to sophisticated acoustic performances and live saxophone, providing the perfect soundtrack to your dinner.",
    imageUrl: "/gallery/IVY TREE  MAY POST (3).png",
    linkUrl: "/whats-on",
    linkText: "Reserve Dinner Table",
  },
  {
    id: "seasonal-events",
    title: "Seasonal Soirées",
    subtitle: "Curated Calendar",
    description: "Celebrate key holiday events, private masterclasses, and exclusive wine tasting dinners hosted by guest experts.",
    imageUrl: "/gallery/IVY TREE  MAY POST (4).png",
    linkUrl: "/whats-on",
    linkText: "View Event Schedule",
  },
];

const homepageEvents = [
  {
    id: "happy-hour",
    title: "HAPPY HOUR",
    imageUrl: "/events/happy-hour.jpeg",
  },
  {
    id: "bottomless-brunch",
    title: "BOTTOMLESS PROSECCO BRUNCH",
    imageUrl: "/events/bottomless-brunch.jpeg",
  },
  {
    id: "dj-nights",
    title: "DJ NIGHTS",
    imageUrl: "/events/dj-nights.jpeg",
  },
];

const whatsOnEvents = [
  {
    id: "happy-hour",
    eyebrow: "WEEKDAYS SPECIAL",
    title: "HAPPY HOUR",
    description: "Join us for Happy Hour! Enjoy 2-for-1 cocktails, draft beers, and select wines in our luxurious lounge bar.",
    imageUrl: "/events/happy-hour.jpeg",
    linkUrl: "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208",
    buttonText: "BOOK A TABLE",
    buttonSuffix: "›",
    isComingSoon: false
  },
  {
    id: "bottomless-brunch",
    eyebrow: "SATURDAY & SUNDAY",
    title: "BOTTOMLESS BRUNCH",
    description: "Indulge in our famous bottomless brunch. Delicious plates paired with unlimited prosecco, cocktails, and great music.",
    imageUrl: "/events/bottomless-brunch.jpeg",
    pdfUrl: "/events/bottomless-brunch.pdf",
    pdfName: "bottomless-brunch.pdf",
    buttonText: "DISCOVER MORE",
    buttonSuffix: "›",
    isComingSoon: false
  },
  {
    id: "dj-nights",
    eyebrow: "FRIDAY & SATURDAY",
    title: "WEEKLY DJ NIGHTS",
    description: "Elevate your weekend at our upstairs bar and lounge. Live sets from resident DJs playing the best beats till late.",
    imageUrl: "/events/dj-nights.jpeg",
    pdfUrl: "/events/dj-nights.pdf",
    pdfName: "dj-nights.pdf",
    buttonText: "DISCOVER MORE",
    buttonSuffix: "→",
    isComingSoon: false
  }
];

interface EventsSectionProps {
  isHomepage?: boolean;
}

export default function EventsSection({ isHomepage = false }: EventsSectionProps) {
  if (isHomepage) {
    return (
      <section className="py-[60px] bg-brand-gold">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl lg:text-[40px] text-brand-dark uppercase tracking-[0.15em]"
            >
              EVENTS
            </motion.h2>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1300px] mx-auto mb-10">
            {homepageEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center group"
              >
                {/* Title Above Image */}
                <h3 className="font-serif text-sm md:text-base text-brand-dark font-bold uppercase tracking-wider text-center mb-4 min-h-[20px] flex items-center justify-center">
                  {event.title}
                </h3>
                {/* Flyer Image Container */}
                <div className="relative aspect-[2/3] w-full overflow-hidden border border-brand-dark/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <Link
              href="/whats-on"
              className="inline-block px-8 py-3 bg-brand-dark text-white border border-brand-dark font-sans font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-brand-dark transition-all duration-300 shadow-md"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>
    );
  }
  // Original What's On page version
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-[0.2em] text-black">
          EVENTS
        </h1>
      </div>

      {/* 3-Card Responsive Grid */}
      <div className="bg-brand-dark py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whatsOnEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full overflow-hidden flex flex-col justify-between p-8 md:p-10 text-center group rounded-none border border-white/5 shadow-2xl"
            >
              {/* Card Background Image */}
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index < 3}
              />
              {/* Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/80 z-10 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Card Content Overlay */}
              <div className="relative z-20 h-full flex flex-col justify-between items-center py-4">
                {/* Top: Eyebrow */}
                <span className="text-brand-gold uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold font-sans">
                  {event.eyebrow}
                </span>

                {/* Center: Title, Separator & Description */}
                <div className="flex flex-col items-center my-auto">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-bold uppercase tracking-wider italic leading-snug">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-center my-4">
                    <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
                  </div>
                  <p className="text-white/85 text-xs md:text-sm leading-relaxed font-sans max-w-[280px]">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Spacer to maintain symmetry */}
                <div className="h-[20px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
