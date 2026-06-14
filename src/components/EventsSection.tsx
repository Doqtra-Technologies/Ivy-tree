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
    id: "kids-eat-free",
    title: "KIDS EAT FREE",
    imageUrl: "/gallery/IVY TREE  MAY POST (3).png",
  },
  {
    id: "bottomless-brunch",
    title: "BOTTOMLESS PROSECCO BRUNCH",
    imageUrl: "/gallery/IVY TREE  MAY POST (2).png",
  },
  {
    id: "dj-nights",
    title: "DJ NIGHTS",
    imageUrl: "/gallery/IVY TREE  MAY POST (1).png",
  },
];

interface EventsSectionProps {
  isHomepage?: boolean;
}

export default function EventsSection({ isHomepage = false }: EventsSectionProps) {
  if (isHomepage) {
    return (
      <section className="py-[120px] bg-brand-gold">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            {homepageEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center group"
              >
                {/* Title Above Image */}
                <h3 className="font-serif text-sm md:text-base text-brand-dark font-bold uppercase tracking-wider text-center mb-6 min-h-[40px] flex items-center justify-center">
                  {event.title}
                </h3>
                {/* Flyer Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-brand-dark/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
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
    <section className="py-[120px] bg-brand-dark border-t border-white/5">
      <div className="container-content">
        
        {/* Section Header */}
        <div className="text-center mb-sp-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              EXPERIENCE
            </span>
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-16">
              What's On
            </h2>
            {/* Description */}
            <p className="text-white/60 text-xs md:text-sm font-sans tracking-wide max-w-[600px] mb-sp-24">
              Explore our upcoming calendar of high-end events and curated luxury experiences.
            </p>
            {/* Divider */}
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-sp-24">
          {originalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col h-full bg-brand-secondary rounded-[12px] overflow-hidden group shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-brand-gold/20 transition-colors duration-500"
            >
              {/* Event Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                {/* Dark gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-black/10 to-transparent" />
                
                {/* Subtitle / Date Badge over Image */}
                <div className="absolute bottom-sp-16 left-sp-16 bg-brand-dark/80 backdrop-blur-sm px-sp-12 py-sp-8 border border-brand-gold/30 rounded-[4px]">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">
                    {event.subtitle}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex flex-col flex-grow p-sp-24">
                <h3 className="font-serif text-lg text-white mb-sp-12 uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-sp-24 flex-grow">
                  {event.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={event.linkUrl}
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors font-semibold"
                  >
                    {event.linkText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-3.5 h-3.5 ml-sp-8 transition-transform group-hover:translate-x-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
