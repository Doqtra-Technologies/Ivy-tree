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
    title: "SEMI PRIVATE",
    description: "Dine in our exclusive semi private Rooms at Ivy Tree. Semi private here is a luxurious and indulgent experience.",
    imageUrl: "/rooms/velvet.png",
    linkUrl: "/semi-private",
    linkText: "Read More →",
  },
  {
    id: "cocktail-bar",
    title: "COCKTAIL BAR",
    description: "Enjoy expertly crafted cocktails at our Cocktail Bar at Ivy Tree.",
    imageUrl: "/cocktail-bar.png",
    linkUrl: "/cocktail-bar",
    linkText: "View Menu →",
  },
];

interface ServiceCardsProps {
  bgColor?: string;
}

export default function ServiceCards({ bgColor = "bg-brand-gold" }: ServiceCardsProps) {
  return (
    <section className={`py-[80px] md:py-[120px] ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[380px] md:h-[420px] w-full overflow-hidden group rounded-[16px] border border-white/5 hover:border-brand-gold/25 shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={offering.imageUrl}
                alt={offering.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`transition-transform duration-750 ease-out group-hover:scale-105 ${offering.id === 'semi-private' ? 'object-contain p-4 bg-[#1a1a1a]' : 'object-cover'}`}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-500" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-12 z-10">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-[0.1em] uppercase mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {offering.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm font-sans tracking-wide leading-relaxed max-w-[85%] mb-6">
                  {offering.description}
                </p>
                <Link
                  href={offering.linkUrl}
                  className="inline-flex items-center text-xs md:text-sm uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors font-semibold border-b border-brand-gold/30 hover:border-white/50 pb-1"
                >
                  {offering.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


