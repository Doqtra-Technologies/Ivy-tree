"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menuCovers = [
  {
    title: "A La Carte Menu",
    src: "/gallery/3.jpg",
    alt: "A La Carte Menu Cover",
    pdfUrl: "/menu/Ivy Tree A La Carte Menu Proof.pdf",
  },
  {
    title: "Father's Day Set Menu",
    src: "/gallery/8.jpg",
    alt: "Father's Day Set Menu Cover",
    pdfUrl: "/menu/Menu by. Omar_20260615_190452_0000.pdf",
  }
];

export default function MenuPage() {

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-[0.2em] text-black">
          OUR MENU
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite Mediterranean dishes. Click the covers below to view our menus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {menuCovers.map((cover, index) => (
            <motion.a
              key={index}
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
      </div>
    </main>
  );
}
