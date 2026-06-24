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
          events: events.map(evt => {
            const isKidsFree = evt._id === 'event-kids-eat-free' || evt.title === 'KIDS EAT FREE';
            if (isKidsFree) {
              return {
                id: 'event-happy-hour',
                title: 'HAPPY HOUR',
                description: 'Join us for Happy Hour! Enjoy 2-for-1 cocktails, draft beers, and select wines in our luxurious lounge bar.',
                pdfUrl: '',
                imageUrl: '/events/happy-hour.jpeg'
              };
            }
            return {
              id: evt._id,
              title: evt.title,
              description: evt.description,
              pdfUrl: evt.pdfUrl,
              imageUrl: evt.imageUrl
            };
          })
        };
      }
    } catch (error) {
      console.error("Sanity fetch failed for Events:", error);
    }

    return { heading: '', subtitle: '', events: [] };
  }
}

