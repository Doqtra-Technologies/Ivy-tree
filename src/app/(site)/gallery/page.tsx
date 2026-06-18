import { GalleryRepository } from "@/data/repositories/gallery-repository";
import GalleryGrid from "@/components/GalleryGrid";

import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await GalleryRepository.getGallery();
  return generatePageMetadata(data.seo, "https://www.ivytreeessex.co.uk/gallery");
}

export default async function GalleryPage() {
  const data = await GalleryRepository.getGallery();
  const images = data.images;
  
  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-[0.2em] text-black">
          GALLERY
        </h1>
      </div>
      
      <GalleryGrid images={images} />
    </main>
  );
}
