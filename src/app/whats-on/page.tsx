import EventsSection from "@/components/EventsSection";
import OpeningHours from "@/components/OpeningHours";
import { getSiteSettings } from "@/services/wordpress";

export const revalidate = 60;

export default async function WhatsOnPage() {
  const settings = await getSiteSettings();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <EventsSection />
      <OpeningHours reservationUrl={settings.reservationUrl} />
    </main>
  );
}
