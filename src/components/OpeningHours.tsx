"use client";

import { motion } from "framer-motion";

interface HourSlot {
  days: string;
  hours: string;
}

const hoursData: HourSlot[] = [
  { days: "Monday - Wednesday", hours: "10:00 AM - 12:00 AM" },
  { days: "Thursday", hours: "10:00 AM - 01:00 AM" },
  { days: "Friday - Saturday", hours: "10:00 AM - 02:00 AM" },
  { days: "Sunday", hours: "10:00 AM - 12:00 AM" }
];

export default function OpeningHours({ reservationUrl }: { reservationUrl?: string }) {
  return (
    <section className="py-[120px] bg-brand-secondary border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container-content relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-sp-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              RESERVE A TABLE
            </span>
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-16">
              Opening Hours
            </h2>
            {/* Description */}
            <p className="text-white/60 text-xs md:text-sm font-sans tracking-wide max-w-[600px] mb-sp-24">
              Join us for exquisite Mediterranean dining, bespoke cocktail mixology, and weekend nightlife.
            </p>
            {/* Divider */}
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>
        </div>

        {/* Hours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sp-24 max-w-content mx-auto mb-sp-64">
          {hoursData.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-dark/50 border border-white/5 rounded-[12px] p-sp-32 flex flex-col justify-center items-center shadow-lg hover:border-brand-gold/25 transition-all duration-300 group"
            >
              <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-sp-12 group-hover:text-brand-goldBright transition-colors">
                {slot.days}
              </span>
              <div className="w-8 h-[1px] bg-white/10 mb-sp-12 group-hover:w-12 transition-all duration-300" />
              <span className="text-white text-sm tracking-wider font-sans font-medium">
                {slot.hours}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={reservationUrl || "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            Book A Table
          </a>
        </motion.div>

      </div>
    </section>
  );
}
