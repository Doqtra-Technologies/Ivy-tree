import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { BlogRepository } from "@/data/repositories/blog-repository";
import { Metadata } from "next";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

import { generatePageMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await BlogRepository.getPostBySlug(resolvedParams.slug);

  if (!post) return { title: 'Post Not Found' };

  return generatePageMetadata(post.seo, `https://www.ivytreeessex.co.uk/blog/${resolvedParams.slug}`);
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await BlogRepository.getPostBySlug(slug);

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

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-transparent my-12">
        
        <div className="relative w-full md:w-5/12 aspect-[3/4] md:aspect-auto min-h-[350px] md:min-h-[550px] overflow-hidden">
          <Image
            src={post.imageUrl || '/gallery/1.jpg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121412]/50 via-transparent to-transparent md:hidden" />
        </div>

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
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[40px] text-white uppercase tracking-wider font-bold leading-tight">
              {post.title}
            </h1>
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

            <div className="space-y-6 text-[#4a4a4a] font-sans text-xs md:text-sm leading-relaxed tracking-wide font-medium portable-text-container">
              {post.body ? (
                <PortableText value={post.body} />
              ) : (
                <p>{post.excerpt}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
