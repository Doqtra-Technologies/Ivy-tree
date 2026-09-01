import { menuContent } from "@/data/content";

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
  seo?: import('@/utils/seo').PageSeo;
}

export class MenuRepository {
  static async getMenuData(): Promise<MenuPageData> {
    return {
      heading: menuContent.heading,
      description: menuContent.description,
      seo: menuContent.seo,
      menus: menuContent.menus.map(m => ({
        id: m.id,
        title: m.title,
        src: m.src,
        alt: m.alt,
        pdfUrl: m.pdfUrl,
      })),
    };
  }
}
