import Image from "next/image";
import EventsSection from "@/components/EventsSection";
import ServiceCards from "@/components/ServiceCards";
import { EventRepository } from "@/data/repositories/event-repository";

import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await EventRepository.getWhatsOnData();
  return generatePageMetadata(data.seo, "https://www.ivytreeessex.co.uk/whats-on");
}

export default async function WhatsOnPage() {
  const whatsOnData = await EventRepository.getWhatsOnData();

  // Combine fetched events with default UI properties that the component expects
  const displayEvents = whatsOnData.events.map((evt, idx) => {
    return {
      ...evt,
      eyebrow: idx === 0 ? "FAMILY SPECIAL" : (idx === 1 ? "SATURDAY & SUNDAY" : "FRIDAY & SATURDAY"),
      buttonText: "DISCOVER MORE",
      buttonSuffix: "›",
      isComingSoon: false,
      pdfName: evt.pdfUrl ? evt.pdfUrl.split('/').pop() : "menu.pdf",
      imageUrl: evt.imageUrl || `/events/${evt.id.replace('event-', '')}_page-0001.jpg`, 
    };
  });

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Banner Area (Using 4.jpg) */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/gallery/4.jpg"
          alt={whatsOnData.heading}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay for navbar visibility if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* WHAT'S ON Heading area */}
      <div className="bg-black text-center pt-16 pb-2">
        <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-sans font-medium tracking-wide uppercase">
          {whatsOnData.heading}
        </h1>
        {whatsOnData.subtitle && (
           <p className="text-white/60 mt-2 uppercase tracking-widest">{whatsOnData.subtitle}</p>
        )}
      </div>

      {/* Service Cards Section (Black background like Rustiq) */}
      <ServiceCards bgColor="bg-black" />

      {/* Events Section */}
      <EventsSection events={displayEvents} />
    </main>
  );
}
