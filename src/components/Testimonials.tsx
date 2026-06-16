"use client";

import { useRef } from "react";

interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "David John",
    text: "Good choices of breakfast. The food was good and came quickly! Michaela look after us. Highly recommend!",
    rating: 5,
    date: "1 week ago",
    bgColor: "bg-[#4285F4]"
  },
  {
    id: "2",
    author: "Tahir Khan",
    text: "We were served by Sarah who exceeded our expectations with her professional approach and great service. This was equally matched by the wonderful food.",
    rating: 5,
    date: "2 weeks ago",
    bgColor: "bg-[#34A853]"
  },
  {
    id: "3",
    author: "MD ANISZZAMAN",
    text: "The food was absolutely amazing, full of flavor and clearly made with care. The customer service was top-notch—everyone was so welcoming and attentive, which made the experience even better. You can really feel the warmth and hospitality from the moment you walk in. I'll definitely be coming back and recommending this place to others!",
    rating: 5,
    date: "3 weeks ago",
    bgColor: "bg-[#FBBC05]"
  },
  {
    id: "4",
    author: "Yegor Prystavka",
    text: "It was our first time in this restaurant. All the staff is very friendly, especially our waitress Sarah. We had 2 steaks and 1 paella, everything was very good, especially the paella. Nice atmosphere, we enjoyed the live music performance as well.",
    rating: 5,
    date: "1 month ago",
    bgColor: "bg-[#EA4335]"
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth >= 768 ? current.clientWidth / 2 : current.clientWidth;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-[40px] md:py-[60px] bg-black relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <h3 className="text-white text-lg md:text-xl font-light mb-2">
            We are happy to have the best services for our customers
          </h3>
          <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide uppercase">
            GOOGLE TRUST INDEX
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-16px] md:left-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#222] shadow-xl flex items-center justify-center text-white hover:bg-[#333] transition-colors z-20 focus:outline-none"
            aria-label="Previous Reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Cards Track */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden md:justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-[#1f1f1f] rounded-[16px] p-6 shadow-lg text-left flex flex-col w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[350px] flex-shrink-0 snap-center border border-white/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm leading-tight">{testimonial.author}</span>
                      <span className="text-gray-400 text-xs mt-0.5">{testimonial.date}</span>
                    </div>
                  </div>
                  {/* Google Logo */}
                  <div className="w-5 h-5 flex-shrink-0">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center mb-3 gap-1">
                  {/* 5 Stars */}
                  <div className="flex text-[#fbbc04]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  {/* Verified Check */}
                  <div className="text-[#4285F4] ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <p className="text-white/90 text-[14px] leading-relaxed flex-grow">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-16px] md:right-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#222] shadow-xl flex items-center justify-center text-white hover:bg-[#333] transition-colors z-20 focus:outline-none"
            aria-label="Next Reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6 text-[#9aa0a6] text-[14px]">
          For more reviews, please visit our official{" "}
          <a 
            href="https://www.google.com/search?sca_esv=f6ab685adb5b71a7&sxsrf=ANbL-n46yL_SANObBgJoB-DsKABPz-Mvqg:1781448397036&q=ivy+tree+restaurant&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZDpDlfpUaR_DEUZRo7CLHup_6AyDDC0vHPv4_v83fJQI9RK2ls19VVIwQQZPKq3ULJvpGp52VxvxZgz8VdeKHZK1kgL&sa=X&sqi=2&ved=2ahUKEwjjgJC3_IaVAxVfV2wGHWy4Jr8QrrQLegQIHRAB&biw=1536&bih=742&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
          >
            <span className="font-medium tracking-wide">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-[#4285F4] font-medium ml-1">Business Page</span>
          </a>
        </div>
      </div>
    </section>
  );
}
