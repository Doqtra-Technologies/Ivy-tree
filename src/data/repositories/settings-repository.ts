import { siteSettingsContent } from '@/data/content';
import { pick, sanityFetch } from '@/sanity/fetch';
import { siteSettingsQuery } from '@/sanity/queries';
import type { PageSeo } from '@/utils/seo';
import type { OpeningHours } from './contact-repository';

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
    openingHours: OpeningHours[];
    socialLinks: {
      instagram: string;
      facebook: string;
      tiktok: string;
    };
  };
  seo?: PageSeo;
}

interface SanitySiteSettings {
  logoUrl?: string;
  reservationUrl?: string;
  contact?: Partial<SiteSettingsData['contact']>;
  openingHours?: OpeningHours[];
  socialLinks?: Partial<SiteSettingsData['footer']['socialLinks']>;
  seo?: PageSeo;
}

export class SettingsRepository {
  static async getSiteSettings(): Promise<SiteSettingsData> {
    const cms = await sanityFetch<SanitySiteSettings>({
      query: siteSettingsQuery,
      tags: ['siteSettings'],
    });
    const fallback = siteSettingsContent;

    return {
      logoUrl: pick(cms?.logoUrl, fallback.logoUrl),
      reservationUrl: pick(cms?.reservationUrl, fallback.reservationUrl),
      contact: {
        address: pick(cms?.contact?.address, fallback.contact.address),
        phone: pick(cms?.contact?.phone, fallback.contact.phone),
        email: pick(cms?.contact?.email, fallback.contact.email),
        gmapsUrl: pick(cms?.contact?.gmapsUrl, fallback.contact.gmapsUrl),
      },
      footer: {
        openingHours: pick(cms?.openingHours, fallback.openingHours),
        socialLinks: {
          instagram: pick(cms?.socialLinks?.instagram, fallback.socialLinks.instagram),
          facebook: pick(cms?.socialLinks?.facebook, fallback.socialLinks.facebook),
          tiktok: pick(cms?.socialLinks?.tiktok, fallback.socialLinks.tiktok),
        },
      },
      seo: cms?.seo ?? fallback.seo,
    };
  }
}
