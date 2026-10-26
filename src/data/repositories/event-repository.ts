import { whatsOnContent } from "@/data/content";
import { pick, sanityFetch } from "@/sanity/fetch";
import { whatsOnQuery } from "@/sanity/queries";
import type { PageSeo } from "@/utils/seo";

export interface Event {
  id: string;
  title: string;
  description: string;
  pdfUrl?: string;
  imageUrl?: string;
}

export interface WhatsOnData {
  heading: string;
  subtitle: string;
  events: Event[];
  seo?: PageSeo;
}

interface SanityWhatsOn {
  page?: { heading?: string; subtitle?: string; seo?: PageSeo } | null;
  events?: Array<{ id: string; title: string; description: string; pdfUrl?: string | null; imageUrl?: string | null }>;
}

export class EventRepository {
  static async getWhatsOnData(): Promise<WhatsOnData> {
    const cms = await sanityFetch<SanityWhatsOn>({
      query: whatsOnQuery,
      tags: ["whatsOnPage", "event"],
    });
    const fallback = whatsOnContent;

    const events: Event[] = cms?.events?.length
      ? cms.events.map((evt) => ({
          id: evt.id,
          title: evt.title,
          description: evt.description,
          pdfUrl: evt.pdfUrl ?? undefined,
          imageUrl: evt.imageUrl ?? undefined,
        }))
      : fallback.events.map((evt) => ({
          id: evt.id,
          title: evt.title,
          description: evt.description,
          pdfUrl: evt.pdfUrl,
          imageUrl: evt.imageUrl,
        }));

    return {
      heading: pick(cms?.page?.heading, fallback.heading),
      subtitle: pick(cms?.page?.subtitle, fallback.subtitle),
      seo: cms?.page?.seo ?? fallback.seo,
      events,
    };
  }
}
