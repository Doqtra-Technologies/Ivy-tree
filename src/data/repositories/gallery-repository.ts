import { galleryContent } from "@/data/content";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  images: Array<{src: string, alt: string}>;
  seo?: import('@/utils/seo').PageSeo;
}

export class GalleryRepository {
  static async getGallery(): Promise<GalleryData> {
    return {
      images: galleryContent.images.map(img => ({
        src: img.src,
        alt: img.alt || "Gallery image",
      })),
      seo: galleryContent.seo,
    };
  }
}
