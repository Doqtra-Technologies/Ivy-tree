"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-16 bg-brand-dark border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative background glow to match premium aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="font-serif text-base md:text-lg lg:text-xl text-white/90 tracking-wide leading-relaxed italic max-w-4xl mx-auto mb-6">
            <span className="text-brand-gold not-italic font-sans font-bold uppercase tracking-[0.15em] text-xs md:text-sm mr-3 block md:inline mb-1 md:mb-0">
              Ivy tree:
            </span>
            A premium destination where Mediterranean-inspired culinary art meets the mastery of custom mixology.
          </p>
          <Link
            href="/cocktail-bar"
            className="inline-flex items-center text-xs md:text-sm uppercase tracking-[0.25em] text-white hover:text-white/80 transition-colors font-semibold border-b border-white/50 hover:border-white pb-1"
          >
            View Menu →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
