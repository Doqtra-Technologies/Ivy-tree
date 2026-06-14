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
  contact?: {
    address: string;
    phone: string;
    email: string;
    gmapsUrl: string;
  };
}

const defaultOpeningHours = [
  { days: "Mon - Wed", hours: "10:00 AM - 12:00 AM" },
  { days: "Thursday", hours: "10:00 AM - 01:00 AM" },
  { days: "Fri - Sat", hours: "10:00 AM - 02:00 AM" },
  { days: "Sunday", hours: "10:00 AM - 12:00 AM" }
];

const defaultContact = {
  address: "113-117 South St, Romford RM1 1NX",
  phone: "01708 208566",
  email: "info.theivytree@gmail.com",
  gmapsUrl: "https://www.google.com/maps/search/?api=1&query=113-117+South+St+Romford+RM1+1NX"
};

export default function Footer({ 
  logoUrl,
  openingHours = defaultOpeningHours, 
  socialLinks,
  contact
}: FooterProps) {
  const {
    address = defaultContact.address,
    phone = defaultContact.phone,
    email = defaultContact.email,
    gmapsUrl = defaultContact.gmapsUrl,
  } = contact || {};

  return (
    <footer className="bg-black text-white pt-[60px] pb-[40px] relative z-10 font-sans border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section: Logo, Dotted Timeline Contact Info, Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center pb-6">
          
          {/* Logo Column */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            {logoUrl ? (
              <Link href="/">
                <img 
                  src={logoUrl} 
                  alt="The Ivy Tree Logo" 
                  className="h-[55px] w-auto object-contain brightness-95 hover:brightness-100 transition-all duration-300" 
                />
              </Link>
            ) : (
              <Link href="/" className="text-[#c5a059] font-serif text-[28px] tracking-wide font-light">
                The Ivy Tree
              </Link>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:pl-8">
            <div className="relative pl-12 flex flex-col gap-[20px] py-2">
              {/* Vertical Dotted Line */}
              <div className="absolute left-[18px] top-[12px] bottom-[12px] w-0 border-l-2 border-dotted border-white/25 z-0" />

              {/* Call Us */}
              <div className="relative flex items-center">
                <div className="absolute left-[-48px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-black z-10 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[14px] h-[14px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.29.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase font-sans">
                    CALL US
                  </span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white/80 hover:text-[#c5a059] text-[13px] font-sans mt-[2px] transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="relative flex items-center">
                <div className="absolute left-[-48px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-black z-10 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[14px] h-[14px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase font-sans">
                    EMAIL
                  </span>
                  <a href={`mailto:${email}`} className="text-white/80 hover:text-[#c5a059] text-[13px] font-sans mt-[2px] transition-colors break-all">
                    {email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="relative flex items-center">
                <div className="absolute left-[-48px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-black z-10 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[14px] h-[14px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase font-sans">
                    ADDRESS
                  </span>
                  <span className="text-white/80 text-[13px] font-sans mt-[2px] leading-relaxed">
                    {address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-[#222] shadow-xl">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="The Ivy Tree Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <hr className="border-t border-[#1a1a1a] my-8" />

        {/* Bottom Section: 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] pt-2">
          
          {/* Column 1: Opening Hours */}
          <div className="flex flex-col text-left">
            <div className="flex items-center mb-6">
              <h4 className="text-[#a0a0a0] text-[16px] font-medium mr-4 whitespace-nowrap">
                Opening Hours
              </h4>
              <div className="h-px bg-[#222] flex-1"></div>
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
              <h4 className="text-[#a0a0a0] text-[16px] font-medium mr-4 whitespace-nowrap">
                Quick Links
              </h4>
              <div className="h-px bg-[#222] flex-1"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-[12px] gap-x-[20px]">
              <Link href="/menu" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">Menu</Link>
              <Link href="/blog" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">Blog</Link>
              
              <Link href="/about" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">About Us</Link>
              <Link href="/gallery" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">Gallery</Link>
              
              <Link href="/semi-private" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">Dining Room</Link>
              <Link href="/whats-on" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">What's On</Link>
              
              <Link href="/contact" className="text-white/60 text-[13px] hover:text-[#d4b068] transition-colors">Contact Us</Link>
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
              {socialLinks?.facebook && (
                <a 
                  href={socialLinks.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[44px] h-[44px] rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-85 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              )}
              
              {/* Instagram */}
              {socialLinks?.instagram && (
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[44px] h-[44px] rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:opacity-85 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              )}
              
              {/* TikTok */}
              {socialLinks?.tiktok && (
                <a 
                  href={socialLinks.tiktok} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[44px] h-[44px] rounded-full bg-[#555] flex items-center justify-center text-white hover:opacity-85 transition-opacity"
                  aria-label="TikTok"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 2.1-.82 4.21-2.37 5.67-1.84 1.77-4.57 2.4-7.05 1.83-2.64-.61-4.9-2.54-5.65-5.13-.88-3.03.35-6.52 3.01-8.11 1.05-.63 2.27-.92 3.48-.92v4.11c-.84.02-1.72.24-2.4.74-.99.73-1.35 2.14-.95 3.3.4 1.14 1.55 1.92 2.76 1.86 1.34-.06 2.48-1.12 2.62-2.45.1-.9.04-1.83.04-2.73.01-4.38-.02-8.77.02-13.15z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
