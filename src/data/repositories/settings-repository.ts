import { siteSettingsContent } from '@/data/content';

export interface SiteSettingsData {
  logoUrl: string;
  reservationUrl: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    gmapsUrl: string;
  };
  footer: {
    openingHours: any[];
    socialLinks: {
      instagram: string;
      facebook: string;
      tiktok: string;
    };
  };
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalUrl: string;
    openGraphImage: string;
    noIndex: boolean;
  };
}

export class SettingsRepository {
  static async getSiteSettings(): Promise<SiteSettingsData> {
    return {
      logoUrl: siteSettingsContent.logoUrl,
      reservationUrl: siteSettingsContent.reservationUrl,
      contact: siteSettingsContent.contact,
      footer: {
        openingHours: siteSettingsContent.openingHours,
        socialLinks: siteSettingsContent.socialLinks,
      },
      seo: siteSettingsContent.seo as SiteSettingsData['seo'],
    };
  }
}
