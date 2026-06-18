"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryImageProps {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImageProps[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex! === images.length - 1 ? 0 : prevIndex! + 1
      );
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex! === 0 ? images.length - 1 : prevIndex! - 1
      );
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      {/* Gallery Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {images.map((image, index) => (
          <div
            key={image.src + index}
            onClick={() => openLightbox(index)}
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
                    src={images[lightboxIndex].src}
                    alt={images[lightboxIndex].alt}
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
                GALLERY
              </span>
              <p className="font-serif text-lg md:text-xl">
                {images[lightboxIndex].alt}
              </p>
              <span className="text-white/40 text-xs mt-2 block">
                Image {lightboxIndex + 1} of {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
