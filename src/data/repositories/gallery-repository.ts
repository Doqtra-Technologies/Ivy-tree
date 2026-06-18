import { sanityFetch } from "@/sanity/fetch";
import { getGalleryQuery } from "@/sanity/queries/gallery";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  images: Array<{src: string, alt: string}>;
  seo?: import('@/utils/seo').SanitySeo;
}

export class GalleryRepository {
  static async getGallery(): Promise<GalleryData> {
    try {
      const data = await sanityFetch<any>({ query: getGalleryQuery });
      if (data && data.images) {
        return {
          images: data.images.map((img: any) => ({
            src: img.src,
            alt: img.alt || "Gallery image"
          })),
          seo: data.seo
        };
      }
    } catch (error) {
      console.error('Sanity fetch failed for gallery:', error);
    }
    return { images: [] };
  }
}
