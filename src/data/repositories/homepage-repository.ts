import { homepageContent } from '@/data/content';

export interface HomepageData {
  hero: {
    heading: string;
    subheading: string;
    videoUrl: string;
  };
  seo?: import('@/utils/seo').PageSeo;
}

export class HomepageRepository {
  static async getHomepage(): Promise<HomepageData> {
    return {
      hero: {
        heading: homepageContent.hero.heading,
        subheading: homepageContent.hero.subheading,
        videoUrl: homepageContent.hero.videoUrl,
      },
      seo: homepageContent.seo,
    };
  }
}
