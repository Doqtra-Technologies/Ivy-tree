import SemiPrivate from "@/components/SemiPrivate";
import { getSiteSettings } from "@/services/wordpress";

export const revalidate = 60;

export default async function SemiPrivatePage() {
  const settings = await getSiteSettings();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <SemiPrivate 
        intro={settings.semiPrivateIntro} 
        rooms={settings.rooms} 
        reservationUrl={settings.reservationUrl}
      />
    </main>
  );
}
