"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
      });
    }, 3000);
  };

  return (
    <section className="bg-brand-secondary py-20 border-t border-white/5 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact details & Hours */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white uppercase tracking-wider mb-12">
                Contact Us
              </h2>

              {/* Timeline Info List */}
              <div className="relative pl-12 flex flex-col gap-12 mb-16">
                {/* Vertical Dotted Line */}
                <div className="absolute left-[20px] top-6 bottom-6 w-0 border-l-2 border-dotted border-white/25 z-0" />

                {/* Call Us */}
                <div className="relative flex items-start">
                  <div className="absolute left-[-48px] w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark z-10 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.29.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase underline decoration-brand-gold decoration-2 underline-offset-4 pb-1">
                      CALL US
                    </span>
                    <a href="tel:01708208566" className="text-white/80 hover:text-brand-gold text-sm font-sans tracking-wide transition-colors mt-2">
                      01708 208566
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="relative flex items-start">
                  <div className="absolute left-[-48px] w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark z-10 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase underline decoration-brand-gold decoration-2 underline-offset-4 pb-1">
                      EMAIL
                    </span>
                    <a href="mailto:info.theivytree@gmail.com" className="text-white/80 hover:text-brand-gold text-sm font-sans tracking-wide transition-colors mt-2">
                      info.theivytree@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="relative flex items-start">
                  <div className="absolute left-[-48px] w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark z-10 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase underline decoration-brand-gold decoration-2 underline-offset-4 pb-1">
                      ADDRESS
                    </span>
                    <p className="text-white/80 text-sm font-sans tracking-wide mt-2 leading-relaxed">
                      113-117 South St, Romford RM1 1NX
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Section */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase flex-shrink-0">
                    Opening Hours
                  </h3>
                  <div className="flex-grow h-[1px] bg-white/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-white/60 text-xs md:text-sm leading-relaxed font-sans">
                  <div>
                    <span className="block font-semibold text-white/80 mb-0.5">Monday – Wednesday</span>
                    <span className="block">10:00 AM – 12:00 AM</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-white/80 mb-0.5">Thursday</span>
                    <span className="block">10:00 AM – 01:00 AM</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-white/80 mb-0.5">Friday & Saturday</span>
                    <span className="block">10:00 AM – 02:00 AM</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-white/80 mb-0.5">Sunday</span>
                    <span className="block">10:00 AM – 12:00 AM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white uppercase tracking-wider mb-12">
                Get in Touch
              </h2>

              {submitted ? (
                <div className="bg-brand-gold/10 border border-brand-gold/30 p-8 rounded-[8px] text-center">
                  <h4 className="font-serif text-brand-gold text-lg mb-2 uppercase tracking-wide">Thank You!</h4>
                  <p className="text-white/80 text-sm">Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                        Name <span className="text-[#c25336]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white text-black px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-gold text-sm transition-all"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                        Last Name <span className="text-[#c25336]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white text-black px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-gold text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone */}
                  <div className="flex flex-col">
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                      Phone <span className="text-[#c25336]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white text-black px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-gold text-sm transition-all"
                    />
                  </div>

                  {/* Row 3: Email */}
                  <div className="flex flex-col">
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                      Email <span className="text-[#c25336]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white text-black px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-gold text-sm transition-all"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div className="flex flex-col">
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                      Message <span className="text-[#c25336]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white text-black px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-gold text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Checkbox consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-1 flex-shrink-0 cursor-pointer accent-brand-gold"
                    />
                    <label htmlFor="consent" className="text-white/40 text-xs leading-relaxed cursor-pointer select-none font-medium">
                      I consent to having this website store my submitted information so they can respond to my inquiry. <span className="text-[#c25336]">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="px-10 py-4 bg-[#c25336] hover:bg-[#b04328] text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
