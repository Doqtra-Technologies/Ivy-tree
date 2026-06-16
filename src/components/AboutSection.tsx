"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-[40px] md:py-[60px] bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="/gallery/4.jpg"
              alt="The Ivy Tree"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Right Side: Text Content (Centered like Rustiq) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col text-center items-center px-2 md:px-6"
          >
            {/* Main Heading */}
            <h2 className="font-sans text-[22px] md:text-[28px] font-bold text-white mb-4">
              Welcome to The Ivy Tree
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-white/90 text-[15px] md:text-[16px] leading-relaxed max-w-xl">
              <p>
                Nestled in the heart of Romford, The Ivy Tree brings together Mediterranean flavors, handcrafted cocktails, and elegant dining. Inspired by coastal traditions and elevated with modern flair, every dish is crafted to create a memorable experience.
              </p>
              <p>
                Whether you're joining us for a relaxed dinner, weekend brunch, or an evening of cocktails and entertainment, The Ivy Tree offers the perfect blend of luxury, warmth, and hospitality.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
