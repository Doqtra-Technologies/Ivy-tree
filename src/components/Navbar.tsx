"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


interface NavbarProps {
  logoUrl?: string;
  reservationUrl?: string;
}

export default function Navbar({ logoUrl = "/logo.png", reservationUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT US", href: "/about" },
    { name: "MENU", href: "#" },
    { name: "DINING ROOM", href: "/semi-private" },
    { name: "WHAT'S ON", href: "/whats-on" },
    { name: "BLOG", href: "#" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {/* Fixed Solid Dark Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[90px] w-full bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-sp-16 md:px-sp-32 h-full flex items-center justify-between">
          
          {/* Logo - Left */}
          <div className="flex-[0.5] flex items-center justify-start">
            <Link href="/" className="focus:outline-none flex items-center">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="The Ivy Tree"
                  width={140}
                  height={50}
                  className="object-contain max-h-[50px] w-auto transition-transform duration-300 hover:scale-105"
                  priority
                />
              ) : (
                <span className="font-serif text-xl md:text-2xl text-brand-gold tracking-[0.2em] uppercase">
                  Ivy Tree
                </span>
              )}
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="hidden lg:flex flex-auto items-center justify-center space-x-[28px] py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.05em] text-white/60 hover:text-white transition-colors duration-300 font-sans"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions & Socials - Right */}
          <div className="flex-[0.5] flex items-center justify-end h-full">
            {/* Book Table CTA (Desktop) */}
            <div className="hidden lg:flex items-center h-full">
              <a
                href={reservationUrl || "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"}
                target="_blank"
                rel="noreferrer"
                className="bg-[#d4b068] text-black text-[12px] uppercase tracking-wide font-semibold px-sp-24 h-full flex items-center hover:bg-[#ebd097] transition-colors"
              >
                RESERVATION
              </a>
              
              {/* Vertical Divider */}
              <div className="h-[40px] w-px bg-white/10 mx-sp-24"></div>

              {/* Social Icons */}
              <div className="flex items-center space-x-sp-16 text-[#d4b068]">
                <a href="#" className="hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-brand-gold focus:outline-none transition-colors ml-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] pt-[90px] flex flex-col items-center justify-center space-y-sp-32 px-sp-16"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl tracking-[0.25em] text-white hover:text-[#d4b068] uppercase transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={reservationUrl || "https://www.opentable.co.uk/r/the-ivy-tree-romford?ref=4208"}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#d4b068] text-black px-sp-32 py-sp-16 text-xs mt-sp-16 font-semibold"
            >
              RESERVATION
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
