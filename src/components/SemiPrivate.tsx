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

const defaultRooms = [
  {
    id: "apollo",
    name: "Apollo Room",
    capacity: "30 people",
    description: "A gorgeous, spacious dining space styled with premium accents, tailored for medium-sized celebrations and special private banquets.",
    imageUrl: "/rooms/apollo.png"
  },
  {
    id: "velvet",
    name: "Velvet Room",
    capacity: "6-8 people",
    description: "An intimate and plush dining setting wrapped in rich velvet styling, perfect for private family gatherings or corporate dinners.",
    imageUrl: "/rooms/velvet.png"
  },
  {
    id: "luna",
    name: "Luna Room",
    capacity: "50 people",
    description: "Our grandest semi-private event room offering a luxurious setting, complete with elegant lighting and premium finishes for large scale receptions.",
    imageUrl: "/rooms/luna.jpeg"
  }
];

export default function SemiPrivate({
  intro,
  rooms = [],
  reservationUrl = "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"
}: SemiPrivateProps) {
  const roomsList = rooms && rooms.length > 0 ? rooms : defaultRooms;

  // Helper to remove "Room" and "Area" from room name
  const getCleanName = (name: string) => name.replace(/\s*(room|area)\s*/gi, "").trim();
  
  // State for active room bookmark
  const [activeRoomId, setActiveRoomId] = useState("");

  // Default active room to apollo if exists
  useEffect(() => {
    const hasApollo = roomsList.some((r) => r.id === "apollo");
    setActiveRoomId(hasApollo ? "apollo" : roomsList[0]?.id || "");
  }, [rooms]);

  const activeRoom = roomsList.find((r) => r.id === activeRoomId) || roomsList[0];

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

  // Automatically sync form room selection with active tab selection
  useEffect(() => {
    if (activeRoom) {
      setFormData((prev) => ({
        ...prev,
        room: `${getCleanName(activeRoom.name)} (Capacity: ${activeRoom.capacity})`
      }));
    }
  }, [activeRoomId]);

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

      {/* Tabs + Room Card Wrapper */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-16 pt-16">
        
        {/* Bookmarks/Tabs Bar */}
        <div className="flex flex-wrap items-end justify-start gap-1">
          {roomsList.map((room) => {
            const isActive = activeRoomId === room.id;
            const displayName = getCleanName(room.name);
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                className={`px-6 py-3.5 text-xs md:text-sm font-sans uppercase tracking-widest font-bold transition-all duration-300 rounded-none ${
                  isActive 
                    ? "bg-black text-white" 
                    : "bg-[#121412] text-white/40 hover:text-white"
                }`}
              >
                {displayName}
              </button>
            );
          })}
        </div>

        {/* Active Room Display Section */}
        <AnimatePresence mode="wait">
          {activeRoom && (
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col mt-0"
            >
              {/* Active Room Gold Card Header */}
              <div className="bg-brand-gold px-8 py-10 md:px-12 md:py-10 text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-[36px] text-black uppercase tracking-widest leading-tight">
                    {getCleanName(activeRoom.name)}
                  </h2>
                </div>
                
                <div className="flex flex-col items-start text-left md:pr-12">
                  <span className="text-black/70 text-sm font-sans tracking-wide mb-1.5 font-medium">
                    Capacities:
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-[1.5px] h-[20px] bg-black/35" />
                    <span className="text-black text-sm md:text-base tracking-wide font-semibold font-sans">
                      {activeRoom.capacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Room Image */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-brand-secondary border-x border-b border-white/5">
                <Image
                  src={activeRoom.imageUrl}
                  alt={activeRoom.name}
                  fill
                  sizes="100vw"
                  className={`transition-all duration-700 hover:scale-[1.01] ${activeRoom.id === 'velvet' ? 'object-contain' : 'object-cover'}`}
                  priority
                />
              </div>

              {/* Active Room Description */}
              <div className="p-8 md:p-12 bg-brand-secondary/80 text-left border-x border-b border-white/5">
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-4xl font-sans">
                  {activeRoom.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                            onChange={(e) => {
                              const val = e.target.value;
                              setFormData({ ...formData, room: val });
                              const matchedRoom = roomsList.find(
                                (r) => `${getCleanName(r.name)} (Capacity: ${r.capacity})` === val
                              );
                              if (matchedRoom) {
                                setActiveRoomId(matchedRoom.id);
                              }
                            }}
                            className="w-full bg-[#121412] text-white px-4 py-3.5 border border-white/10 focus:outline-none focus:border-brand-gold text-sm transition-all rounded-none cursor-pointer"
                          >
                            <option value="No Preference">No Preference</option>
                            {roomsList.map((room) => (
                              <option key={room.id} value={`${getCleanName(room.name)} (Capacity: ${room.capacity})`}>
                                {getCleanName(room.name)} (Capacity: {room.capacity})
                              </option>
                            ))}
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
