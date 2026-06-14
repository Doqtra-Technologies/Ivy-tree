"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const openingHours = [
    { days: "Mon - Wed", hours: "10:00 AM - 12:00 AM" },
    { days: "Thursday", hours: "10:00 AM - 01:00 AM" },
    { days: "Fri - Sat", hours: "10:00 AM - 02:00 AM" },
    { days: "Sunday", hours: "10:00 AM - 12:00 AM" }
  ];

  return (
    <section className="bg-brand-dark border-t border-white/5 relative overflow-hidden" id="contact">
      <div className="flex flex-col lg:flex-row w-full min-h-[650px]">
        
        {/* Left Side: Contact details & hours */}
        <div className="w-full lg:w-1/2 p-sp-32 md:p-sp-64 lg:py-[120px] lg:px-[120px] flex flex-col justify-center bg-brand-dark z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-left"
          >
            {/* Eyebrow */}
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              GET IN TOUCH
            </span>
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-48 leading-tight">
              Contact & Enquiries
            </h2>
            
            {/* Contact details list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sp-32 mb-sp-48">
              
              {/* Address */}
              <div className="flex gap-sp-16 group">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold bg-brand-secondary group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-sp-8">Address</h4>
                  <p className="text-white/60 text-xs leading-relaxed font-sans">
                    113-117 South St<br />
                    Romford, Essex<br />
                    RM1 1NX
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-sp-16 group">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold bg-brand-secondary group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.29.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-sp-8">Reservations</h4>
                  <a href="tel:01708208566" className="text-white/60 hover:text-brand-gold text-xs font-sans transition-colors">
                    01708 208566
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-sp-16 group">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold bg-brand-secondary group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-sp-8">Enquiries</h4>
                  <a href="mailto:info.theivytree@gmail.com" className="text-white/60 hover:text-brand-gold text-xs font-sans transition-colors">
                    info.theivytree@gmail.com
                  </a>
                </div>
              </div>

              {/* Opening Hours Summary */}
              <div className="flex gap-sp-16 group">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold bg-brand-secondary group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-sp-8">Opening Hours</h4>
                  <div className="flex flex-col gap-sp-8 text-white/60 text-xs font-sans">
                    {openingHours.map((slot, idx) => (
                      <div key={idx} className="flex gap-sp-8 justify-between border-b border-white/5 pb-1">
                        <span className="font-medium">{slot.days}</span>
                        <span>{slot.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Enquiry CTA */}
            <div>
              <a href="/contact" className="btn-gold">
                Send Direct Enquiry
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Luxury Dark Google Map */}
        <motion.div 
          className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-brand-secondary relative border-l border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.5878235284144!2d0.17937557723961175!3d51.57576597182811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4f009e4a3b1%3A0xe5c35bcf68e54737!2s113-117%20South%20St%2C%20Romford%20RM1%201NX!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)" }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="The Ivy Tree Location Map"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
