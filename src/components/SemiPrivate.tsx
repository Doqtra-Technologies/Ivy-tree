"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Room {
  id: string;
  name: string;
  capacity: string;
  description: string;
  imageUrl: string;
}

interface SemiPrivateProps {
  intro?: {
    heading?: string;
    text?: string;
  };
  rooms?: Room[];
  reservationUrl?: string;
}

export default function SemiPrivate({
  intro,
  rooms = [],
  reservationUrl = "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"
}: SemiPrivateProps) {
  
  const headingText = intro?.heading || "Semi-Private Dining";
  const descText = intro?.text || "Experience exclusive dining in our private rooms at The Ivy Tree. Designed for intimate gatherings, celebrations, and corporate dinners, each space offers a luxurious and indulgent experience.";

  return (
    <section className="py-[120px] bg-brand-dark">
      <div className="container-content">
        
        {/* Intro */}
        <div className="max-w-text mx-auto text-center mb-sp-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              EXCLUSIVE DINING
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-24">
              {headingText}
            </h2>
            <p className="text-white/70 text-xs md:text-sm font-sans tracking-wide leading-relaxed mb-sp-24">
              {descText}
            </p>
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-32 mb-sp-64">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col h-full bg-brand-secondary rounded-[16px] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-white/5 hover:border-brand-gold/25 transition-all duration-500"
            >
              {/* Room Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={room.imageUrl || "/rooms/velvet.png"}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Capacity Badge */}
                <div className="absolute top-sp-16 right-sp-16 bg-brand-dark/80 backdrop-blur-sm px-sp-12 py-sp-4 border border-brand-gold/30 rounded-[4px]">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">
                    Capacity: {room.capacity}
                  </span>
                </div>
              </div>

              {/* Room Content */}
              <div className="flex flex-col flex-grow p-sp-32">
                <h3 className="font-serif text-xl text-white mb-sp-16 uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-sp-32 flex-grow">
                  {room.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={reservationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors font-semibold"
                  >
                    Reserve Room Table
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-3.5 h-3.5 ml-sp-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
