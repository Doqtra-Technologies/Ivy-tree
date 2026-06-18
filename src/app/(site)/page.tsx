import { HomepageRepository } from "@/data/repositories/homepage-repository";
import { SettingsRepository } from "@/data/repositories/settings-repository";
import { EventRepository } from "@/data/repositories/event-repository";
import { ContactRepository } from "@/data/repositories/contact-repository";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";

import PromoBanner from "@/components/PromoBanner";
import EventsSection from "@/components/EventsSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import OpeningHours from "@/components/OpeningHours";

import { GalleryRepository } from "@/data/repositories/gallery-repository";
import GallerySection from "@/components/GallerySection";

import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await HomepageRepository.getHomepage();
  return generatePageMetadata(homepage.seo, "https://www.ivytreeessex.co.uk");
}

export default async function Home() {
  const homepage = await HomepageRepository.getHomepage();
  const settings = await SettingsRepository.getSiteSettings();
  const whatsOnData = await EventRepository.getWhatsOnData();
  const contactData = await ContactRepository.getContactData();
  const galleryData = await GalleryRepository.getGallery();

  // Map events for the homepage view
  const displayEvents = whatsOnData.events.slice(0, 3).map((evt) => ({
    id: evt.id,
    title: evt.title,
    imageUrl: evt.imageUrl || `/events/${evt.id.replace('event-', '')}_page-0001.jpg`,
  }));

  const classNames = [
    "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
    "aspect-square",
    "aspect-square",
    "md:row-span-2 aspect-[3/4] md:aspect-auto",
    "aspect-square",
    "md:col-span-2 aspect-[2/1] md:aspect-auto",
    "aspect-square",
    "aspect-square",
    "md:col-span-2 aspect-[2/1] md:aspect-auto",
    "aspect-square"
  ];
  const displayGallery = galleryData.images.slice(0, 10).map((img, index) => ({
    ...img,
    className: classNames[index % classNames.length]
  }));

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero 
          videoUrl={homepage.hero.videoUrl}
          heading={homepage.hero.heading}
          subheading={homepage.hero.subheading}
          reservationUrl={settings.reservationUrl}
        />
      
      {/* 2. About Section */}
      {/* <AboutSection /> */}
      
      {/* 3. Our Offerings Section */}
      <ServiceCards />
      
      {/* 3.5. Promo Banner Section */}
      <PromoBanner />
      
      {/* 4. Events Section */}
      <EventsSection isHomepage events={displayEvents} />

      {/* 5. Gallery Section */}
      <GallerySection images={displayGallery} />
      
      {/* 6. Testimonials Section */}
      <Testimonials />
      
      {/* 8. Contact + Map Section */}
      <Contact data={contactData} />
      
      {/* 9. Opening Hours Section */}
      {/* <OpeningHours reservationUrl={settings.reservationUrl} /> */}
    </div>
  );
}
