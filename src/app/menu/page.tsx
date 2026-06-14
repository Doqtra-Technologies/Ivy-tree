"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MenuImage {
  src: string;
  category: "interior" | "food" | "drinks" | "events";
  alt: string;
}

const menuImages: MenuImage[] = [
  { src: "/gallery/1.jpg", category: "interior", alt: "Ivy Tree interior table styling" },
  { src: "/gallery/2.jpg", category: "interior", alt: "Plush cocktail seating" },
  { src: "/gallery/3.jpg", category: "food", alt: "Premium dining presentation" },
  { src: "/gallery/4.jpg", category: "interior", alt: "Outdoor garden facade" },
  { src: "/gallery/5.jpg", category: "drinks", alt: "Expertly crafted cocktails" },
  { src: "/gallery/6.jpg", category: "drinks", alt: "Intimate bar setup" },
  { src: "/gallery/7.jpg", category: "interior", alt: "Floral details and lounge" },
  { src: "/gallery/8.jpg", category: "food", alt: "Fresh Mediterranean entrees" },
  { src: "/gallery/9.jpg", category: "interior", alt: "Cozy velvet booths" },
  { src: "/gallery/10.jpg", category: "interior", alt: "Evening lighting atmosphere" },
  { src: "/gallery/IVY TREE  MAY POST.png", category: "events", alt: "Special Event Flyer" },
  { src: "/gallery/IVY TREE  MAY POST (1).png", category: "events", alt: "Weekly DJ Night Flyer" },
  { src: "/gallery/IVY TREE  MAY POST (2).png", category: "events", alt: "Bottomless Brunch Flyer" },
  { src: "/gallery/IVY TREE  MAY POST (3).png", category: "events", alt: "Live Music & Sax Flyer" },
  { src: "/gallery/IVY TREE  MAY POST (4).png", category: "events", alt: "Seasonal Soirée Flyer" },
];

export default function MenuPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (imageSrc: string) => {
    const index = menuImages.findIndex((img) => img.src === imageSrc);
    if (index !== -1) setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex! === menuImages.length - 1 ? 0 : prevIndex! + 1
      );
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex! === 0 ? menuImages.length - 1 : prevIndex! - 1
      );
    }
  };

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-[0.2em] text-black">
          MENU
        </h1>
      </div>

      {/* Grid container matches gallery style: full-width, zero-gap, aspect-3/4 */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {menuImages.map((image, index) => (
            <div
              key={image.src}
              onClick={() => openLightbox(image.src)}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-none border-0 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                quality={95}
                priority={index < 6}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors cursor-pointer p-2 z-55"
              aria-label="Close Lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
              {/* Prev button */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors cursor-pointer p-3 z-55 bg-black/40 hover:bg-black/60 rounded-full"
                aria-label="Previous Image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Lightbox Image */}
              <div className="relative w-full h-full max-w-[90%] max-h-[100%] flex items-center justify-center">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={menuImages[lightboxIndex].src}
                    alt={menuImages[lightboxIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Next button */}
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors cursor-pointer p-3 z-55 bg-black/40 hover:bg-black/60 rounded-full"
                aria-label="Next Image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center mt-6 text-white max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold block mb-2">
                {menuImages[lightboxIndex].category}
              </span>
              <p className="font-serif text-lg md:text-xl">
                {menuImages[lightboxIndex].alt}
              </p>
              <span className="text-white/40 text-xs mt-2 block">
                Image {lightboxIndex + 1} of {menuImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
