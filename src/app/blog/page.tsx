"use client";

import Image from "next/image";

export default function BlogPage() {
  const post = {
    title: "THE IVY TREE",
    category: "FOOD & DINING",
    readTime: "2 MIN READ",
    location: "ESSEX",
    imageUrl: "/gallery/1.jpg", // The flowers neon sign image
    quote: "A dining experience that flows effortlessly from morning to evening — where every detail is crafted with care.",
    content: [
      "Located in Essex, The Ivy Tree is a contemporary Mediterranean brasserie & bar, where every hour of the day is an occasion worth savouring.",
      "Start your morning with our carefully prepared breakfast & brunch — from classic English breakfast to pancakes, Egg Royale and French toast, each crafted with quality ingredients.",
      "Our à la carte menu unites the finest Mediterranean flavours: hummus, bruschetta and baba ghanoush alongside calamari, premium steaks, salmon, seabass, tiger prawns, fresh pasta and gourmet burgers.",
      "On weekdays, settle into our set lunch menu — a refined and unhurried midday escape.",
      "Complete your experience with our cocktail selection, from timeless classics to signatures, perfect for wrapping up your dinner or evening at the lounge."
    ]
  };

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

      {/* Main Split-Card Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-transparent my-12">
        
        {/* Left Side: Portrait Featured Image (The flowers neon light sign) */}
        <div className="relative w-full md:w-5/12 aspect-[3/4] md:aspect-auto min-h-[350px] md:min-h-[550px] overflow-hidden">
          <Image
            src={post.imageUrl}
            alt="The Ivy Tree Neon Sign"
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
