"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CocktailBarProps {
  heading?: string;
  text?: string;
  imageUrl?: string;
  reservationUrl?: string;
}

export default function CocktailBar({
  heading = "The Cocktail Bar",
  text = "Ascend to our sophisticated upstairs cocktail lounge. Our expert mixologists craft signature drinks in an opulent, high-vibe setting, making it the perfect destination for your evening.",
  imageUrl = "/cocktail-bar.png",
  reservationUrl = "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"
}: CocktailBarProps) {
  
  const highlights = [
    { title: "Master Mixology", desc: "Handcrafted cocktails using premium spirits and fresh botanicals." },
    { title: "Opulent Ambience", desc: "A cozy, plush lounge setting with gold accents and warm lighting." },
    { title: "VIP Experience", desc: "Perfect for group celebrations, late night socializing, and table service." }
  ];

  return (
    <section className="py-[120px] bg-brand-dark overflow-hidden">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-sp-64 lg:gap-sp-96 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              UPSTAIRS LOUNGE
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] text-white uppercase tracking-wide mb-sp-24">
              {heading}
            </h2>
            
            <p className="text-white/70 text-xs md:text-sm font-sans tracking-wide leading-relaxed mb-sp-32 max-w-[600px]">
              {text}
            </p>

            {/* Highlights list */}
            <div className="space-y-sp-24 mb-sp-48 border-t border-white/5 pt-sp-32">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-sp-16">
                  <div className="w-6 h-6 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0 text-xs font-bold font-serif">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-sm uppercase tracking-wider mb-sp-4">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-[11px] leading-relaxed max-w-[480px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a
                href={reservationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Reserve Bar Table
              </a>
            </div>
          </motion.div>

          {/* Right Side: Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] md:aspect-[1.1] lg:aspect-[4/5] rounded-[16px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10"
          >
            <Image
              src={imageUrl}
              alt="The Ivy Tree Cocktail Bar"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
