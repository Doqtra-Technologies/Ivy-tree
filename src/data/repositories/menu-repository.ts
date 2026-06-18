import { sanityFetch } from "@/sanity/fetch";
import { getMenusQuery, getMenuPageIntroQuery } from "@/sanity/queries/menus";

export interface Menu {
  id: string;
  title: string;
  src: string;
  alt: string;
  pdfUrl: string;
}

export interface MenuPageData {
  heading: string;
  description: string;
  menus: Menu[];
  seo?: import('@/utils/seo').SanitySeo;
}

export class MenuRepository {
  static async getMenuData(): Promise<MenuPageData> {
    try {
      const [intro, menus] = await Promise.all([
        sanityFetch<any>({ query: getMenuPageIntroQuery }),
        sanityFetch<any[]>({ query: getMenusQuery })
      ]);

      return {
        heading: intro?.heading || "OUR MENU",
        description: intro?.description || "Discover our exquisite Mediterranean dishes. Click the covers below to view our menus.",
        seo: intro?.seo,
        menus: menus && menus.length > 0 ? menus.map(m => ({
          id: m._id,
          title: m.title,
          src: m.src,
          alt: m.alt,
          pdfUrl: m.pdfUrl
        })) : []
      };
    } catch (error) {
      console.error("Sanity fetch failed for Menus:", error);
    }

    return {
      heading: "OUR MENU",
      description: "Discover our exquisite Mediterranean dishes. Click the covers below to view our menus.",
      menus: []
    };
  }
}
