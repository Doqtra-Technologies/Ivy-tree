import Image from "next/image";
import Link from "next/link";
import { BlogRepository } from "@/data/repositories/blog-repository";

import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Journal | The Ivy Tree Romford",
  description: "Explore stories, recipes, and updates from The Ivy Tree Romford. Discover our passion for Mediterranean cuisine and culture.",
  alternates: { canonical: "https://www.ivytreeessex.co.uk/blog" }
};

export default async function BlogPage() {
  const posts = await BlogRepository.getPosts();

  return (
    <main className="relative pt-[90px] bg-brand-dark min-h-screen py-16 px-4 md:px-12 overflow-hidden">
      {/* Background Image Facade blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/4.jpg" 
          alt="Restaurant Facade"
          fill
          className="object-cover opacity-25 filter blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16 my-12">
        <div className="text-center mb-8">
           <h1 className="font-serif text-4xl md:text-5xl lg:text-[50px] text-brand-gold uppercase tracking-wider font-bold">
             Journal
           </h1>
           <p className="text-white/70 font-sans tracking-wide mt-4">Stories, recipes, and updates from The Ivy Tree</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-white/50 py-20">No posts published yet.</div>
        ) : (
          posts.map((post, i) => (
            <div key={post.slug} className="w-full flex flex-col md:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-transparent">
              {/* Left Side: Image */}
              <div className="relative w-full md:w-5/12 aspect-[3/4] md:aspect-auto min-h-[350px] md:min-h-[550px] overflow-hidden">
                <Image
                  src={post.imageUrl || '/gallery/1.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121412]/50 via-transparent to-transparent md:hidden" />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-7/12 flex flex-col">
                <div className="bg-[#13110f] p-8 md:p-10 border-b border-white/5 text-left">
                  <div className="text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold font-sans flex items-center gap-2 mb-2">
                    <span>{post.category || 'News'}</span>
                    {post.readTime && (
                      <>
                        <span className="text-white/20">•</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                    {post.location && (
                      <>
                        <span className="text-white/20">•</span>
                        <span>{post.location}</span>
                      </>
                    )}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] text-white hover:text-brand-gold transition-colors uppercase tracking-wider font-bold leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                </div>

                <div className="bg-[#FAF8F5] p-8 md:p-12 text-[#2c2c2c] flex-grow flex flex-col justify-center text-left">
                  {post.quote && (
                    <p className="font-serif italic text-base md:text-lg text-[#3e3e3e] leading-relaxed mb-6 font-medium max-w-lg">
                      {post.quote}
                    </p>
                  )}

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
                    <div className="h-[1px] bg-brand-gold/25 w-24" />
                  </div>

                  <p className="text-[#4a4a4a] font-sans text-xs md:text-sm leading-relaxed tracking-wide font-medium mb-8">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link href={`/blog/${post.slug}`} className="inline-block border-b border-[#2c2c2c] pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-gold hover:border-brand-gold transition-colors">
                      Read Full Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
