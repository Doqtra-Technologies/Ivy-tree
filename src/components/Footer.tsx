"use client";

import Link from "next/link";

interface FooterProps {
  logoUrl?: string;
  openingHours?: {
    days?: string;
    day?: string;
    hours: string;
  }[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

const defaultOpeningHours = [
  { days: "Mon - Wed", hours: "10:00 AM - 12:00 AM" },
  { days: "Thursday", hours: "10:00 AM - 01:00 AM" },
  { days: "Fri - Sat", hours: "10:00 AM - 02:00 AM" },
  { days: "Sunday", hours: "10:00 AM - 12:00 AM" }
];

export default function Footer({ 
  openingHours = defaultOpeningHours, 
  socialLinks 
}: FooterProps) {
  return (
    <footer className="bg-black text-white pt-[80px] pb-[40px] relative z-10 font-sans border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] md:gap-[40px]">
          
          {/* Column 1: Opening Hours */}
          <div className="flex flex-col text-left">
            <div className="flex items-center mb-6">
              <h4 className="text-[#a0a0a0] text-[18px] font-medium mr-4">
                Opening Hours
              </h4>
              <div className="h-px bg-[#222] flex-1 max-w-[100px]"></div>
            </div>
            
            <div className="space-y-[12px]">
              {openingHours.map((slot, index) => (
                <p key={index} className="text-[#666] text-[13px]">
                  {slot.days || slot.day} {slot.hours}
                </p>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col text-left">
            <div className="flex items-center mb-6">
              <h4 className="text-[#a0a0a0] text-[18px] font-medium mr-4">
                Quick Links
              </h4>
              <div className="h-px bg-[#222] flex-1 max-w-[100px]"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-[10px] gap-x-[20px]">
              <Link href="#" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">Menu</Link>
              <Link href="#" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">Blog</Link>
              
              <Link href="/about" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">About Us</Link>
              <Link href="/gallery" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">Gallery</Link>
              
              <Link href="/semi-private" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">Dining Room</Link>
              <Link href="/whats-on" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">What's On</Link>
              
              <Link href="/contact" className="text-white text-[13px] hover:text-[#d4b068] transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-[#666] text-[14px] mb-1">We Are Social</p>
            <h2 className="text-[#dcdcdc] font-serif text-[42px] font-light tracking-wide mb-6">
              Follow us!
            </h2>
            
            <div className="flex items-center gap-[16px]">
              {/* Facebook */}
              <a 
                href={socialLinks?.facebook || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="w-[46px] h-[46px] rounded-full bg-[#4267B2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href={socialLinks?.instagram || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="w-[46px] h-[46px] rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              
              {/* TikTok */}
              <a 
                href={socialLinks?.tiktok || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="w-[46px] h-[46px] rounded-full bg-[#555555] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 2.1-.82 4.21-2.37 5.67-1.84 1.77-4.57 2.4-7.05 1.83-2.64-.61-4.9-2.54-5.65-5.13-.88-3.03.35-6.52 3.01-8.11 1.05-.63 2.27-.92 3.48-.92v4.11c-.84.02-1.72.24-2.4.74-.99.73-1.35 2.14-.95 3.3.4 1.14 1.55 1.92 2.76 1.86 1.34-.06 2.48-1.12 2.62-2.45.1-.9.04-1.83.04-2.73.01-4.38-.02-8.77.02-13.15z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
