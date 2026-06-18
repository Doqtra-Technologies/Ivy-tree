"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "@/data/repositories/menu-repository";

interface MenuGridProps {
  menus: Menu[];
}

export default function MenuGrid({ menus }: MenuGridProps) {
  if (!menus || menus.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
      {menus.map((cover, index) => (
        <motion.a
          key={cover.id}
          href={cover.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="group block"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 group-hover:border-brand-gold/50 transition-colors duration-300 shadow-2xl rounded-lg">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
              <span className="bg-brand-dark/95 text-brand-gold px-6 py-3 font-bold tracking-[0.15em] uppercase text-sm border border-brand-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                View Menu
              </span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="font-serif text-xl md:text-2xl text-white tracking-[0.05em] uppercase group-hover:text-brand-gold transition-colors duration-300">
              {cover.title}
            </h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
