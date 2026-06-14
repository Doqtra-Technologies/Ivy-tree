"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  location: string;
  imageUrl: string;
  slug: string;
  quote: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  "mediterranean-mixology": {
    title: "COCKTAIL BAR",
    category: "Mixology",
    readTime: "2 MIN READ",
    location: "ROMFORD",
    imageUrl: "/cocktail-bar.png",
    slug: "mediterranean-mixology",
    quote: "Crafting a sensory journey through aromatic herbs, handcrafted syrups, and premium spirits.",
    content: [
      "At The Ivy Tree, mixology is more than just combining spirits and juices. It is a precise culinary art form that blends seasonal botanicals, fresh infusions, and premium liquors to craft cocktails that tell a story.",
      "Our mixologists take inspiration from the Mediterranean coast, using aromatic herbs like rosemary, thyme, and lavender alongside fresh citrus and homemade syrups. This creates a sensory profile that is refreshing, layered, and sophisticated.",
      "Visit our upstairs Cocktail Bar to experience our curation firsthand, where each drink is individually crafted, garnished, and served in bespoke glassware to elevate your evening lounge experience."
    ]
  },
  "mediterranean-flavors": {
    title: "BAR",
    category: "FOOD & DINING",
    readTime: "2 MIN READ",
    location: "ESSEX",
    imageUrl: "/gallery/8.jpg",
    slug: "mediterranean-flavors",
    quote: "A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.",
    content: [
      "Located in Essex, The Ivy Tree is a contemporary Mediterranean brasserie & bar, where every hour of the day is an occasion worth savouring.",
      "Start your morning with our carefully prepared breakfast & brunch — from classic English breakfast to pancakes, Egg Royale and French toast, each crafted with quality ingredients.",
      "Our à la carte menu unites the finest Mediterranean flavours: hummus, bruschetta and baba ghanoush alongside calamari, premium steaks, salmon, seabass, tiger prawns, fresh pasta and gourmet burgers.",
      "On weekdays, settle into our set lunch menu — a refined and unhurried midday escape.",
      "Complete your experience with our cocktail selection, from timeless classics to signatures, perfect for wrapping up your dinner or evening at the lounge."
    ]
  },
  "perfect-ambiance": {
    title: "THE LOUNGE",
    category: "Lounge & Ambiance",
    readTime: "3 MIN READ",
    location: "ESSEX",
    imageUrl: "/gallery/10.jpg",
    slug: "perfect-ambiance",
    quote: "A symphony of lighting, textures, and curated acoustics designed to elevate your social escape.",
    content: [
      "Ambiance is the silent soul of a memorable dining experience. Beyond the menu, the lighting, textures, seating comfort, and auditory backdrop must work in perfect harmony to create a luxury social sanctuary.",
      "We select custom tracks and host live resident DJs and acoustic instrumentalists on selected nights, blending high-energy vibes with relaxing dining acoustics. The transition from evening dinner to late-night drinks is seamless.",
      "Our plush velvet booths, warm accent lighting, and custom fixtures are all intentionally styled to create an inviting, intimate environment where guests can relax and socialize late into the night."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="pt-[90px] bg-brand-dark min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl text-white mb-4">Post Not Found</h1>
        <p className="text-white/60 mb-8 max-w-sm">The editorial feature you are looking for does not exist or has been moved.</p>
        <Link href="/blog" className="px-6 py-3 bg-brand-gold text-black uppercase font-sans font-bold text-xs tracking-wider">
          Back to Journal
        </Link>
      </main>
    );
  }

  return (
    <main className="relative pt-[90px] bg-brand-dark min-h-screen flex items-center justify-center py-16 px-4 md:px-12 overflow-hidden">
      {/* Background Image Facade blur (matches visual reference) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/4.jpg" // restaurant outdoor facade
          alt="Restaurant Facade"
          fill
          className="object-cover opacity-25 filter blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Back Button (Z-20 to hover over container overlay) */}
      <div className="absolute top-28 left-6 md:left-12 z-20">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-[10px] uppercase tracking-wider text-brand-gold hover:text-white transition-colors font-semibold bg-black/40 px-4 py-2 border border-brand-gold/20 backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Journal
        </Link>
      </div>

      {/* Main Split-Card Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-transparent my-12">
        
        {/* Left Side: Portrait Featured Image */}
        <div className="relative w-full md:w-5/12 aspect-[3/4] md:aspect-auto min-h-[350px] md:min-h-[550px] overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay to tie image to dark header on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121412]/50 via-transparent to-transparent md:hidden" />
        </div>

        {/* Right Side: Cream-Colored Content Card */}
        <div className="w-full md:w-7/12 flex flex-col">
          {/* Dark Header of Card */}
          <div className="bg-[#13110f] p-8 md:p-10 border-b border-white/5 text-left">
            <div className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold font-sans flex items-center gap-2 mb-2">
              <span>{post.category}</span>
              <span className="text-white/20">•</span>
              <span>{post.readTime}</span>
              <span className="text-white/20">•</span>
              <span>{post.location}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] text-white uppercase tracking-wider font-bold leading-tight">
              {post.title}
            </h2>
          </div>

          {/* Light/Cream Content Body */}
          <div className="bg-[#FAF8F5] p-8 md:p-12 text-[#2c2c2c] flex-grow flex flex-col justify-center text-left">
            
            {/* Italic Blockquote/Intro Quote */}
            <p className="font-serif italic text-base md:text-lg text-[#3e3e3e] leading-relaxed mb-6 font-medium max-w-lg">
              {post.quote}
            </p>

            {/* Diamond Separator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
              <div className="h-[1px] bg-brand-gold/25 w-24" />
            </div>

            {/* Paragraphs list */}
            <div className="space-y-6 text-[#4a4a4a] font-sans text-xs md:text-sm leading-relaxed tracking-wide font-medium">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
