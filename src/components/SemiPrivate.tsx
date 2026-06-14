"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const roomImages = [
  { src: "/rooms/apollo.png", name: "Apollo Room" },
  { src: "/rooms/luna.jpeg", name: "Luna Room" },
  { src: "/rooms/velvet.png", name: "Velvet Room" }
];

export default function SemiPrivate({
  intro,
  rooms = [],
  reservationUrl = "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"
}: SemiPrivateProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % roomImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Form state
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    people: "",
    room: "No Preference",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleNext = () => {
    setError("");
    if (step === 1 && !formData.people) {
      setError("Please select the number of people.");
      return;
    }
    if (step === 2 && !formData.room) {
      setError("Please select a room preference.");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError("Please fill in all required contact details.");
      return;
    }

    setSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      people: "",
      room: "No Preference",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: ""
    });
    setStep(1);
    setSubmitted(false);
  };

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-[0.2em] text-black">
          DINING AT THE IVY TREE
        </h1>
      </div>

      {/* Info Section */}
      <div className="bg-brand-dark py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Heading and Description */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <div className="border border-white/20 px-4 py-1.5 mb-6 rounded-none">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                GROUP DINING
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight">
              Enjoy a refined group dining experience at The Ivy Tree.
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Our thoughtfully designed spaces provide a stylish and comfortable setting, perfect for special occasions, business gatherings, or relaxed celebrations. Every detail is designed to make your experience seamless and memorable.
            </p>
          </div>

          {/* Right: Capacities */}
          <div className="md:col-span-5 flex flex-col items-start md:pl-12 text-left">
            <h3 className="text-white font-sans font-bold text-lg mb-4 uppercase tracking-wider">
              Capacities:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-10 bg-brand-gold" />
                <div>
                  <span className="block text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Luna Room:</span>
                  <span className="text-white font-sans text-base font-semibold">50 people</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-10 bg-brand-gold" />
                <div>
                  <span className="block text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Apollo Room:</span>
                  <span className="text-white font-sans text-base font-semibold">25 people</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-10 bg-brand-gold" />
                <div>
                  <span className="block text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Velvet Room:</span>
                  <span className="text-white font-sans text-base font-semibold">6 - 8 people</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliding Image Gallery */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-brand-secondary border border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={roomImages[currentSlide].src}
                alt={roomImages[currentSlide].name}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Progress / Dot Indicators in the bottom-right */}
          <div className="absolute bottom-6 right-6 flex gap-2.5 z-10 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            {roomImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "bg-brand-gold w-6" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="bg-brand-gold py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-black uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            MAKE AN ENQUIRY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] text-black mb-12 font-medium tracking-wide">
            Send us a message today to make your group booking
          </h2>

          {/* Form Box */}
          <div className="bg-brand-dark p-8 md:p-12 text-left shadow-2xl rounded-none relative border border-white/5">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-brand-gold mb-3 uppercase tracking-wide">Enquiry Received</h3>
                <p className="text-white/80 max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Thank you for your enquiry. Our events manager will check availability and get back to you within 24 hours to confirm your booking details.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-brand-gold hover:bg-brand-goldBright text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step Indicators */}
                <div className="flex items-center justify-center mb-12 relative max-w-md mx-auto">
                  {/* Progress Line */}
                  <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-white/10 z-0" />
                  <div 
                    className="absolute top-[20px] left-0 h-[2px] bg-brand-green transition-all duration-300 z-0" 
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  />

                  {/* Step 1 */}
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <button
                      type="button"
                      onClick={() => step > 1 && setStep(1)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        step === 1
                          ? "bg-brand-green text-white ring-4 ring-brand-green/20"
                          : step > 1
                          ? "bg-brand-green text-white"
                          : "bg-[#121412] text-white/40 border border-white/10"
                      }`}
                    >
                      1
                    </button>
                    <span className={`text-[10px] uppercase tracking-wider mt-2.5 font-semibold ${step === 1 ? "text-brand-gold" : "text-white/40"}`}>
                      PEOPLE
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <button
                      type="button"
                      onClick={() => step > 2 && setStep(2)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        step === 2
                          ? "bg-brand-green text-white ring-4 ring-brand-green/20"
                          : step > 2
                          ? "bg-brand-green text-white"
                          : "bg-[#121412] text-white/40 border border-white/10"
                      }`}
                    >
                      2
                    </button>
                    <span className={`text-[10px] uppercase tracking-wider mt-2.5 font-semibold ${step === 2 ? "text-brand-gold" : "text-white/40"}`}>
                      ROOM
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <button
                      type="button"
                      disabled={step < 3}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        step === 3
                          ? "bg-brand-green text-white ring-4 ring-brand-green/20"
                          : "bg-[#121412] text-white/40 border border-white/10"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M3 2v20h2v-8h13l2-3-2-3H5V2H3z" />
                      </svg>
                    </button>
                    <span className={`text-[10px] uppercase tracking-wider mt-2.5 font-semibold ${step === 3 ? "text-brand-gold" : "text-white/40"}`}>
                      BIO DATA
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="min-h-[220px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-2 font-medium">Number of people</h3>
                        <div className="flex flex-col">
                          <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                            PEOPLE <span className="text-brand-gold">*</span>
                          </label>
                          <select
                            value={formData.people}
                            onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                            className="w-full bg-[#121412] text-white px-4 py-3.5 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none cursor-pointer"
                          >
                            <option value="">Select number of people...</option>
                            <option value="1 - 10 people">1 - 10 people</option>
                            <option value="11 - 20 people">11 - 20 people</option>
                            <option value="21 - 50 people">21 - 50 people</option>
                            <option value="51 - 75 people">51 - 75 people</option>
                            <option value="75+ people">75+ people</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-2 font-medium">Select a dining room</h3>
                        <div className="flex flex-col">
                          <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                            ROOM PREFERENCE <span className="text-brand-gold">*</span>
                          </label>
                          <select
                            value={formData.room}
                            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                            className="w-full bg-[#121412] text-white px-4 py-3.5 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none cursor-pointer"
                          >
                            <option value="No Preference">No Preference</option>
                            <option value="Luna Room (Capacity: 50)">Luna Room (Capacity: 50)</option>
                            <option value="Apollo Room (Capacity: 25)">Apollo Room (Capacity: 25)</option>
                            <option value="Velvet Room (Capacity: 6-8)">Velvet Room (Capacity: 6-8)</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-2 font-medium">Contact Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                              FIRST NAME <span className="text-brand-gold">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full bg-[#121412] text-white px-4 py-3 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                              LAST NAME <span className="text-brand-gold">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full bg-[#121412] text-white px-4 py-3 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                              EMAIL <span className="text-brand-gold">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-[#121412] text-white px-4 py-3 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                              PHONE <span className="text-brand-gold">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-[#121412] text-white px-4 py-3 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                            SPECIAL NOTES / REQUEST
                          </label>
                          <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            rows={3}
                            className="w-full bg-[#121412] text-white px-4 py-3 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {error && (
                  <p className="text-red-500 text-xs mt-4 font-sans font-medium">{error}</p>
                )}

                {/* Footer Buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-white/60 hover:text-white text-xs uppercase tracking-wider transition-colors font-semibold flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand-gold hover:bg-brand-goldBright text-black text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3.5 transition-colors flex items-center gap-2 rounded-none"
                    >
                      Next Step
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-brand-gold hover:bg-brand-goldBright text-black text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3.5 transition-colors flex items-center gap-2 rounded-none disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Submit Enquiry"}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
