import { sanityFetch } from "@/sanity/fetch";
import { getRoomsQuery, getSemiPrivateIntroQuery } from "@/sanity/queries/rooms";

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
  seo?: import('@/utils/seo').SanitySeo;
}

export class RoomRepository {
  static async getSemiPrivateData(): Promise<SemiPrivateData> {
    try {
      const [intro, rooms] = await Promise.all([
        sanityFetch<any>({ query: getSemiPrivateIntroQuery }),
        sanityFetch<any[]>({ query: getRoomsQuery })
      ]);

      if (intro && rooms) {
        return {
          heading: intro.heading,
          text: intro.text,
          seo: intro.seo,
          rooms: rooms.map(room => ({
            id: room._id,
            name: room.name,
            capacity: room.capacity,
            description: room.description,
            imageUrl: room.imageUrl
          }))
        };
      }
    } catch (error) {
      console.error("Sanity fetch failed for Rooms:", error);
    }

    return {
      heading: '', text: '',
      rooms: []
    };
  }
}
