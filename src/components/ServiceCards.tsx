"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Offering {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
}

const offerings: Offering[] = [
  {
    id: "semi-private",
    title: "Semi Private Dining",
    description: "Indulge in intimate luxury within our exclusive rooms (Velvet, Apollo, and Luna), tailored for private family feasts or elite corporate dinners.",
    imageUrl: "/rooms/velvet.png",
    linkUrl: "/semi-private",
    linkText: "Explore Rooms",
  },
  {
    id: "cocktail-bar",
    title: "The Cocktail Bar",
    description: "Ascend to our sophisticated upstairs cocktail lounge. Our master mixologists craft signature recipes in an opulent, high-vibe setting.",
    imageUrl: "/cocktail-bar.png",
    linkUrl: "/cocktail-bar",
    linkText: "View Bar Details",
  },
  {
    id: "events",
    title: "Private Events",
    description: "From elegant wedding receptions to milestone celebrations, host your bespoke events in our premium spaces with custom catering.",
    imageUrl: "/rooms/apollo.png",
    linkUrl: "/whats-on",
    linkText: "Book Event Space",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-[120px] bg-brand-secondary border-t border-white/5">
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
              DISCOVER IVY TREE
            </span>
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-16">
              Our Offerings
            </h2>
            {/* Description */}
            <p className="text-white/60 text-xs md:text-sm font-sans tracking-wide max-w-[600px] mb-sp-24">
              Experience luxury dining, private rooms and events.
            </p>
            {/* Small Gold Divider */}
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>
        </div>

        {/* 3-Card Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-32">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col h-full bg-brand-dark rounded-[16px] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-white/5 hover:border-brand-gold/25 transition-colors duration-500"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={offering.imageUrl}
                  alt={offering.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-sp-32">
                <h3 className="font-serif text-xl text-white mb-sp-16 uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                  {offering.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-sp-32 flex-grow">
                  {offering.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={offering.linkUrl}
                    className="inline-flex items-center text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-gold hover:text-white transition-colors font-semibold border-b border-brand-gold/30 pb-sp-8"
                  >
                    {offering.linkText}
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
