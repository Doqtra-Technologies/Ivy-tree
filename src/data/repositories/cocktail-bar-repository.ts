import { cocktailBarContent } from "@/data/content";

export interface CocktailBarData {
  heading: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  seo?: import('@/utils/seo').PageSeo;
}

export class CocktailBarRepository {
  static async getCocktailBar(): Promise<CocktailBarData> {
    return {
      heading: cocktailBarContent.heading,
      text: cocktailBarContent.text,
      imageUrl: cocktailBarContent.imageUrl,
      imageAlt: cocktailBarContent.imageAlt,
      seo: cocktailBarContent.seo,
    };
  }
}
