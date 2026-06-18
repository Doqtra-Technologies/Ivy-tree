import SemiPrivate from "@/components/SemiPrivate";
import { RoomRepository } from "@/data/repositories/room-repository";
import { SettingsRepository } from "@/data/repositories/settings-repository";

import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await RoomRepository.getSemiPrivateData();
  return generatePageMetadata(data.seo, "https://www.ivytreeessex.co.uk/semi-private");
}

export default async function SemiPrivatePage() {
  const settings = await SettingsRepository.getSiteSettings();
  const semiPrivateData = await RoomRepository.getSemiPrivateData();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <SemiPrivate 
        intro={{ heading: semiPrivateData.heading, text: semiPrivateData.text }}
        rooms={semiPrivateData.rooms} 
        reservationUrl={settings.reservationUrl}
      />
    </main>
  );
}
