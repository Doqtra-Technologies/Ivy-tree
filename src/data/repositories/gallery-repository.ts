import { galleryContent } from "@/data/content";
import { sanityFetch } from "@/sanity/fetch";
import { galleryQuery } from "@/sanity/queries";
import type { PageSeo } from "@/utils/seo";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  images: GalleryImage[];
  seo?: PageSeo;
}

interface SanityGallery {
  images?: Array<{ src?: string | null; alt?: string | null }> | null;
  seo?: PageSeo;
}

export class GalleryRepository {
  static async getGallery(): Promise<GalleryData> {
    const cms = await sanityFetch<SanityGallery>({
      query: galleryQuery,
      tags: ["galleryPage"],
    });
    const cmsImages = (cms?.images ?? []).filter((img) => img.src);
    const images = cmsImages.length ? cmsImages : galleryContent.images;

    return {
      images: images.map((img) => ({
        src: img.src!,
        alt: img.alt || "Gallery image",
      })),
      seo: cms?.seo ?? galleryContent.seo,
    };
  }
}
