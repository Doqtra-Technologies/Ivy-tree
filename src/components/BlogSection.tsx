"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Mediterranean Mixology",
    category: "Cocktails",
    date: "June 10, 2026",
    imageUrl: "/cocktail-bar.png",
    slug: "mediterranean-mixology"
  },
  {
    id: "2",
    title: "A Journey Through Southern European Flavors",
    category: "Gastronomy",
    date: "May 28, 2026",
    imageUrl: "/gallery/8.jpg",
    slug: "mediterranean-flavors"
  },
  {
    id: "3",
    title: "Curating the Perfect Ambiance & Playlist",
    category: "Lounge",
    date: "May 14, 2026",
    imageUrl: "/gallery/10.jpg",
    slug: "perfect-ambiance"
  }
];

export default function BlogSection() {
  return (
    <section className="py-[120px] bg-brand-secondary border-t border-white/5">
      <div className="container-content">
        
        {/* Section Header */}
        <div className="text-center mb-sp-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-sp-16 block">
              JOURNAL
            </span>
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white uppercase tracking-wide mb-sp-16">
              Latest News
            </h2>
            {/* Description */}
            <p className="text-white/60 text-xs md:text-sm font-sans tracking-wide max-w-[600px] mb-sp-24">
              Explore editorial features, chef recipes, and cocktails updates from The Ivy Tree magazine.
            </p>
            {/* Divider */}
            <div className="w-12 h-[1px] bg-brand-gold" />
          </motion.div>
        </div>

        {/* Editorial Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-32">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col h-full group cursor-pointer"
            >
              {/* Post Image with category badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] mb-sp-24 shadow-md border border-white/5">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute top-sp-16 left-sp-16 bg-brand-dark/80 backdrop-blur-sm px-sp-12 py-sp-4 border border-brand-gold/25 rounded-[4px] z-10">
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Meta */}
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-sp-8">
                {post.date}
              </div>

              {/* Post Title */}
              <h3 className="font-serif text-xl text-white mb-sp-16 uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-300 line-clamp-2 leading-[1.2]">
                {post.title}
              </h3>

              {/* Read More Link */}
              <div className="mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[10px] uppercase tracking-[0.25em] text-white font-semibold group-hover:text-brand-gold transition-colors"
                >
                  <span className="border-b border-white/10 group-hover:border-brand-gold pb-sp-4 transition-all">
                    Read Feature
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-3 h-3 ml-sp-8 transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
