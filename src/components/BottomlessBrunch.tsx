"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BottomlessBrunchProps {
  imageUrl?: string;
}

export default function BottomlessBrunch({
  imageUrl = "/events/bottomless-brunch.jpeg"
}: BottomlessBrunchProps) {

  const highlights = [
    "Unlimited Prosecco or selected cocktails",
    "Live music by Martin Bell",
    "Delicious brunch menu",
    "The perfect Saturday afternoon with friends",
  ];

  return (
    <section className="py-[80px] md:py-[120px] bg-brand-dark overflow-hidden">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-sp-48 lg:gap-sp-96 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left order-2 lg:order-1"
          >
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              SATURDAY ONLY | 1:00 PM &ndash; 5:00 PM
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] text-white uppercase tracking-wide mb-sp-24">
              Bottomless Prosecco Brunch
            </h2>

            <p className="text-white/70 text-xs md:text-sm font-sans tracking-wide leading-relaxed mb-sp-32 max-w-[600px]">
              Join us every Saturday from 1:00 PM &ndash; 5:00 PM for our Bottomless Prosecco Brunch.
            </p>

            {/* Highlights list */}
            <ul className="space-y-sp-16 border-t border-white/5 pt-sp-32">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-sp-16">
                  <span className="w-1.5 h-1.5 bg-brand-gold rotate-45 flex-shrink-0" />
                  <span className="text-white/80 text-xs md:text-sm font-sans tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Event Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[2/3] max-w-[460px] mx-auto lg:mx-0 lg:ml-auto overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 order-1 lg:order-2"
          >
            <Image
              src={imageUrl}
              alt="Bottomless Prosecco Brunch at The Ivy Tree Romford"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
