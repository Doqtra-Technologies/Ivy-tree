import { sanityFetch } from '@/sanity/fetch';
import { siteSettingsQuery } from '@/sanity/queries/settings';

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
    try {
      const data = await sanityFetch<any>({ query: siteSettingsQuery });
      if (data) {
        const socialLinks = { instagram: '', facebook: '', tiktok: '' };
        data.socialLinks?.forEach((link: any) => {
          if (link.platform === 'instagram') socialLinks.instagram = link.url;
          if (link.platform === 'facebook') socialLinks.facebook = link.url;
          if (link.platform === 'tiktok') socialLinks.tiktok = link.url;
        });

        return {
          logoUrl: data.logoUrl || '/logo.png',
          reservationUrl: data.reservationUrl || '#',
          contact: data.contact || { address: '', phone: '', email: '', gmapsUrl: '' },
          footer: {
            openingHours: data.openingHours || [],
            socialLinks
          },
          seo: data.seo
        };
      }
    } catch (error) {
      console.error('Sanity fetch failed for settings:', error);
    }
    
    // Empty default to prevent breaking UI if nothing comes back
    return {
      logoUrl: '/logo.png',
      reservationUrl: '#',
      contact: { address: '', phone: '', email: '', gmapsUrl: '' },
      footer: { openingHours: [], socialLinks: { instagram: '', facebook: '', tiktok: '' } }
    };
  }
}
