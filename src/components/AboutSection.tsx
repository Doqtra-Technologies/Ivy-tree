"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const values = [
    { title: "Culinary Artistry", desc: "Crafting plates that showcase rich Mediterranean flavors and fresh ingredients." },
    { title: "Opulent Spaces", desc: "Indulgent interiors designed for memorable dining and exclusive nightlife." },
    { title: "Bespoke Service", desc: "Warm hospitality customized to create exceptional guest experiences." }
  ];

  return (
    <section className="py-[120px] bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-sp-64 lg:gap-sp-96 items-center">
          
          {/* Left Side: Luxury Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] md:aspect-[1.1] lg:aspect-[4/5] rounded-[16px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10"
          >
            <Image
              src="/gallery/4.jpg"
              alt="The Ivy Tree Dining Room"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </motion.div>

          {/* Right Side: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            {/* Eyebrow */}
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              DISCOVER IVY TREE
            </span>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] text-white uppercase tracking-wide mb-sp-24">
              A Symphony of Taste & Ambiance
            </h2>

            {/* Description */}
            <p className="text-white/70 text-xs md:text-sm font-sans tracking-wide leading-relaxed mb-sp-32 max-w-[600px]">
              Step into The Ivy Tree, where modern luxury meets the vibrant essence of Mediterranean hospitality. 
              Nestled in the heart of Romford, we bring together exquisite culinary craft, curated signature cocktails, 
              and stunning visual design. Whether joining us for an intimate dinner, a lively weekend brunch, 
              or exclusive cocktails in our upstairs lounge, every moment is curated to indulge.
            </p>

            {/* Brand Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-sp-24 mb-sp-48 border-t border-b border-white/5 py-sp-32">
              {values.map((val, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="font-serif text-brand-gold text-sm uppercase tracking-wider mb-sp-8">
                    {val.title}
                  </h4>
                  <p className="text-white/50 text-[11px] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
