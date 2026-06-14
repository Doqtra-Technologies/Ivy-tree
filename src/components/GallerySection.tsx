"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  className: string;
}

// Staggered layout configurations for a premium editorial grid
const galleryItems: GalleryItem[] = [
  { src: "/gallery/1.jpg", alt: "Ivy Tree interior table styling", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: "/gallery/2.jpg", alt: "Plush cocktail seating", className: "aspect-square" },
  { src: "/gallery/3.jpg", alt: "Premium dining presentation", className: "aspect-square" },
  { src: "/gallery/4.jpg", alt: "Outdoor garden facade", className: "md:row-span-2 aspect-[3/4] md:aspect-auto" },
  { src: "/gallery/5.jpg", alt: "Expertly crafted cocktails", className: "aspect-square" },
  { src: "/gallery/6.jpg", alt: "Intimate bar setup", className: "md:col-span-2 aspect-[2/1] md:aspect-auto" },
  { src: "/gallery/7.jpg", alt: "Floral details and lounge", className: "aspect-square" },
  { src: "/gallery/8.jpg", alt: "Fresh Mediterranean entrees", className: "aspect-square" },
  { src: "/gallery/9.jpg", alt: "Cozy velvet booths", className: "md:col-span-2 aspect-[2/1] md:aspect-auto" },
  { src: "/gallery/10.jpg", alt: "Evening lighting atmosphere", className: "aspect-square" },
];

export default function GallerySection() {
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
              VISUAL JOURNEY
            </span>
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-16">
              Our Gallery
            </h2>
            {/* Description */}
            <p className="text-white/60 text-xs md:text-sm font-sans tracking-wide max-w-[600px] mb-sp-24">
              Explore the opulent spaces, vibrant ambiance, and meticulously styled settings of The Ivy Tree.
            </p>
            {/* Divider */}
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>
        </div>

        {/* Premium Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-sp-16 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-[12px] group border border-white/5 shadow-lg ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-sp-24 z-10">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-left"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-sp-8">
                    Ivy Tree Vibe
                  </p>
                  <h4 className="font-serif text-sm text-white uppercase tracking-wide">
                    {item.alt}
                  </h4>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
