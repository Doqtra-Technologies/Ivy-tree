import { semiPrivateContent } from "@/data/content";
import { pick, sanityFetch } from "@/sanity/fetch";
import { semiPrivateQuery } from "@/sanity/queries";
import type { PageSeo } from "@/utils/seo";

export interface Room {
  id: string;
  name: string;
  capacity: string;
  description: string;
  imageUrl: string;
}

export interface SemiPrivateIntro {
  heading: string;
  text: string;
}

export interface SemiPrivateData {
  heading: string;
  text: string;
  rooms: Room[];
  seo?: PageSeo;
}

interface SanitySemiPrivate {
  page?: { heading?: string; text?: string; seo?: PageSeo } | null;
  rooms?: Room[];
}

export class RoomRepository {
  static async getSemiPrivateData(): Promise<SemiPrivateData> {
    const cms = await sanityFetch<SanitySemiPrivate>({
      query: semiPrivateQuery,
      tags: ["semiPrivatePage", "room"],
    });
    const fallback = semiPrivateContent;

    return {
      heading: pick(cms?.page?.heading, fallback.heading),
      text: pick(cms?.page?.text, fallback.text),
      seo: cms?.page?.seo ?? fallback.seo,
      rooms: pick(cms?.rooms, fallback.rooms).map(room => ({
        id: room.id,
        name: room.name,
        capacity: room.capacity,
        description: room.description,
        imageUrl: room.imageUrl,
      })),
    };
  }
}
