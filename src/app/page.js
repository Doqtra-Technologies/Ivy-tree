import { getSiteSettings } from "@/services/wordpress";
import Hero from "@/components/Hero";

export const revalidate = 60;

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <main>
      <Hero 
        videoUrl={settings.hero.videoUrl}
        heading={settings.hero.heading}
        subheading={settings.hero.subheading}
        reservationUrl={settings.reservationUrl}
      />
    </main>
  );
}
