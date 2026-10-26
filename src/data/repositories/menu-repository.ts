import { menuContent } from "@/data/content";
import { pick, sanityFetch } from "@/sanity/fetch";
import { menuQuery } from "@/sanity/queries";
import type { PageSeo } from "@/utils/seo";

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
  seo?: PageSeo;
}

interface SanityMenuPage {
  page?: { heading?: string; description?: string; seo?: PageSeo } | null;
  menus?: Menu[];
}

export class MenuRepository {
  static async getMenuData(): Promise<MenuPageData> {
    const cms = await sanityFetch<SanityMenuPage>({
      query: menuQuery,
      tags: ["menuPage", "menu"],
    });
    const fallback = menuContent;

    return {
      heading: pick(cms?.page?.heading, fallback.heading),
      description: pick(cms?.page?.description, fallback.description),
      seo: cms?.page?.seo ?? fallback.seo,
      menus: pick(cms?.menus, fallback.menus).map(m => ({
        id: m.id,
        title: m.title,
        src: m.src,
        alt: m.alt,
        pdfUrl: m.pdfUrl,
      })),
    };
  }
}
