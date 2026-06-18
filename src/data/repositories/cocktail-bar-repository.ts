import { sanityFetch } from "@/sanity/fetch";
import { getCocktailBarQuery } from "@/sanity/queries/cocktailBar";

export interface CocktailBarData {
  heading: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  seo?: import('@/utils/seo').SanitySeo;
}

export class CocktailBarRepository {
  static async getCocktailBar(): Promise<CocktailBarData> {
    try {
      const data = await sanityFetch<any>({ query: getCocktailBarQuery });
      if (data) {
        return {
          heading: data.heading || 'COCKTAIL BAR',
          text: data.text || '',
          imageUrl: data.imageUrl || '/gallery/IVY TREE  MAY POST (5).png',
          imageAlt: data.imageAlt || 'Cocktail Bar',
          seo: data.seo,
        };
      }
    } catch (error) {
      console.error("Sanity fetch failed for Cocktail Bar:", error);
    }

    return { heading: '', text: '', imageUrl: '', imageAlt: '' };
  }
}
