import { getSiteSettings } from "@/services/wordpress";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import PromoBanner from "@/components/PromoBanner";
import EventsSection from "@/components/EventsSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import OpeningHours from "@/components/OpeningHours";

export const revalidate = 60;

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero 
          videoUrl={settings.hero.videoUrl}
          heading={settings.hero.heading}
          subheading={settings.hero.subheading}
          reservationUrl={settings.reservationUrl}
        />
      
      {/* 2. About Section */}
      {/* <AboutSection /> */}
      
      {/* 3. Our Offerings Section */}
      <ServiceCards />
      
      {/* 3.5. Promo Banner Section */}
      <PromoBanner />
      
      {/* 4. Events Section */}
      <EventsSection isHomepage />
      
      {/* 6. Testimonials Section */}
      <Testimonials />
      
      {/* 8. Contact + Map Section */}
      <Contact />
      
      {/* 9. Opening Hours Section */}
      {/* <OpeningHours reservationUrl={settings.reservationUrl} /> */}
    </div>
  );
}

