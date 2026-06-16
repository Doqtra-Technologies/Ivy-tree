"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  videoUrl?: string;
  heading?: React.ReactNode;
  subheading?: string;
  reservationUrl?: string;
}

export default function Hero({
  videoUrl = "/homepage/banner/banner.mp4",
  heading,
  subheading,
  reservationUrl,
}: HeroProps) {
  return (
    <section className="relative w-full h-[calc(100vh-90px)] mt-[90px] bg-brand-dark overflow-hidden">

      {/* 3-Panel Grid Background */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">

        {/* Left Panel - Hidden on mobile */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/homepage/banner/left.png"
            alt="Ivy Tree Ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* Vertical white divider line */}
          <div className="absolute top-0 right-0 h-full w-[7px] bg-white z-10" />
        </div>

        {/* Center Panel */}
        <div className="col-span-1 relative h-full w-full">
          {videoUrl && (
            <video
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right Panel - Hidden on mobile */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/homepage/banner/right.png"
            alt="Ivy Tree Drinks"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* Vertical white divider line */}
          <div className="absolute top-0 left-0 h-full w-[7px] bg-white z-10" />
        </div>
      </div>

      {/* Foggy Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_25%,rgba(10,11,10,0.85)_100%)] pointer-events-none z-[15]" />
      
      {/* Bottom fog fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-brand-dark to-transparent pointer-events-none z-[15]" />

      {/* Floating Centered Text Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-sp-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-sans font-medium text-white text-[24px] md:text-[36px] lg:text-[48px] text-center w-full max-w-[1200px]"
          style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.8)" }}
        >
          {heading || "Restaurant | Brasserie | Lounge Bar"}
        </motion.h1>
      </div>

    </section>
  );
}
