import Image from "next/image";
import EventsSection from "@/components/EventsSection";
import ServiceCards from "@/components/ServiceCards";

export const revalidate = 60;

export default function WhatsOnPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Banner Area (Using 4.jpg) */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/gallery/4.jpg"
          alt="What's On at The Ivy Tree"
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
          WHAT&apos;S ON
        </h1>
      </div>

      {/* Service Cards Section (Black background like Rustiq) */}
      <ServiceCards bgColor="bg-black" />

      {/* Events Section */}
      {/* We can pass a background color if EventsSection supports it, but currently it's gold/brand-gold or whatever is default */}
      <EventsSection />
    </main>
  );
}
