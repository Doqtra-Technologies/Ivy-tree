import { homepageContent } from '@/data/content';
import { pick, sanityFetch } from '@/sanity/fetch';
import { homepageQuery } from '@/sanity/queries';
import type { PageSeo } from '@/utils/seo';

export interface HomepageData {
  hero: {
    heading: string;
    subheading: string;
    videoUrl: string;
  };
  seo?: PageSeo;
}

export class HomepageRepository {
  static async getHomepage(): Promise<HomepageData> {
    const cms = await sanityFetch<{ hero?: Partial<HomepageData['hero']>; seo?: PageSeo }>({
      query: homepageQuery,
      tags: ['homepage'],
    });
    const fallback = homepageContent;

    return {
      hero: {
        heading: pick(cms?.hero?.heading, fallback.hero.heading),
        subheading: pick(cms?.hero?.subheading, fallback.hero.subheading),
        videoUrl: pick(cms?.hero?.videoUrl, fallback.hero.videoUrl),
      },
      seo: cms?.seo ?? fallback.seo,
    };
  }
}
