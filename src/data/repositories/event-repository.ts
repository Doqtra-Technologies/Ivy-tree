import { sanityFetch } from "@/sanity/fetch";
import { getEventsQuery, getWhatsOnIntroQuery } from "@/sanity/queries/events";

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
  seo?: import('@/utils/seo').SanitySeo;
}

export class EventRepository {
  static async getWhatsOnData(): Promise<WhatsOnData> {
    try {
      const [intro, events] = await Promise.all([
        sanityFetch<any>({ query: getWhatsOnIntroQuery }),
        sanityFetch<any[]>({ query: getEventsQuery })
      ]);

      if (intro && events) {
        return {
          heading: intro.heading,
          subtitle: intro.subtitle,
          seo: intro.seo,
          events: events.map(evt => ({
            id: evt._id,
            title: evt.title,
            description: evt.description,
            pdfUrl: evt.pdfUrl,
            imageUrl: evt.imageUrl
          }))
        };
      }
    } catch (error) {
      console.error("Sanity fetch failed for Events:", error);
    }

    return { heading: '', subtitle: '', events: [] };
  }
}
