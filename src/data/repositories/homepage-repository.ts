import { sanityFetch } from '@/sanity/fetch';
import { homepageQuery } from '@/sanity/queries/homepage';

export interface HomepageData {
  hero: {
    heading: string;
    subheading: string;
    videoUrl: string;
  };
  seo?: import('@/utils/seo').SanitySeo;
}

export class HomepageRepository {
  static async getHomepage(): Promise<HomepageData> {
    try {
      const data = await sanityFetch<any>({ query: homepageQuery });
      if (data) {
        return {
          hero: {
            heading: data.hero?.heading || '',
            subheading: data.hero?.subheading || '',
            videoUrl: data.hero?.videoUrl || ''
          },
          seo: data.seo
        };
      }
    } catch (error) {
      console.error('Sanity fetch failed for homepage:', error);
    }

    return {
      hero: { heading: '', subheading: '', videoUrl: '' }
    };
  }
}
