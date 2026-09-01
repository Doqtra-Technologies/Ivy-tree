import { semiPrivateContent } from "@/data/content";

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
  seo?: import('@/utils/seo').PageSeo;
}

export class RoomRepository {
  static async getSemiPrivateData(): Promise<SemiPrivateData> {
    return {
      heading: semiPrivateContent.heading,
      text: semiPrivateContent.text,
      seo: semiPrivateContent.seo,
      rooms: semiPrivateContent.rooms.map(room => ({
        id: room.id,
        name: room.name,
        capacity: room.capacity,
        description: room.description,
        imageUrl: room.imageUrl,
      })),
    };
  }
}
