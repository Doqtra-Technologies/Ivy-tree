import { whatsOnContent } from "@/data/content";

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
  seo?: import('@/utils/seo').PageSeo;
}

export class EventRepository {
  static async getWhatsOnData(): Promise<WhatsOnData> {
    return {
      heading: whatsOnContent.heading,
      subtitle: whatsOnContent.subtitle,
      seo: whatsOnContent.seo,
      events: whatsOnContent.events.map(evt => ({
        id: evt.id,
        title: evt.title,
        description: evt.description,
        pdfUrl: evt.pdfUrl,
        imageUrl: evt.imageUrl,
      })),
    };
  }
}
