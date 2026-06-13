import { getSiteSettings } from "@/services/wordpress";
import SemiPrivate from "@/components/SemiPrivate";

export const revalidate = 60;

export default async function SemiPrivatePage() {
  const settings = await getSiteSettings();

  return (
    <main className="page-container">
      <SemiPrivate 
        intro={settings.semiPrivateIntro} 
        rooms={settings.rooms} 
      />
    </main>
  );
}
