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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="/gallery/4.jpg"
              alt="The Ivy Tree"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right Side: Text Content (Centered like Rustiq) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col text-center items-center px-2 md:px-6"
          >
            {/* Main Heading */}
            <h2 className="font-sans text-[22px] md:text-[28px] font-bold text-white mb-4">
              Good food. Great drinks. Late nights.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-white/90 text-[15px] md:text-[16px] leading-relaxed max-w-xl">
              <p>
                Located in the heart of Romford, Ivy Tree brings together modern dining, handcrafted cocktails and unforgettable entertainment under one roof.
              </p>
              <p>
                Join us for breakfast, lunch, dinner or our popular Saturday Bottomless Prosecco Brunch with live music. As the day turns into night, enjoy cocktails, live entertainment and DJs every Friday and Saturday.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
