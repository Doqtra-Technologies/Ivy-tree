import { cocktailBarContent } from "@/data/content";
import { pick, sanityFetch } from "@/sanity/fetch";
import { cocktailBarQuery } from "@/sanity/queries";
import type { PageSeo } from "@/utils/seo";

export interface CocktailBarData {
  heading: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  seo?: PageSeo;
}

export class CocktailBarRepository {
  static async getCocktailBar(): Promise<CocktailBarData> {
    const cms = await sanityFetch<Partial<CocktailBarData>>({
      query: cocktailBarQuery,
      tags: ["cocktailBarPage"],
    });
    const fallback = cocktailBarContent;

    return {
      heading: pick(cms?.heading, fallback.heading),
      text: pick(cms?.text, fallback.text),
      imageUrl: pick(cms?.imageUrl, fallback.imageUrl),
      imageAlt: pick(cms?.imageAlt, fallback.imageAlt),
      seo: cms?.seo ?? fallback.seo,
    };
  }
}
