import Contact from "@/components/Contact";
import { ContactRepository } from "@/data/repositories/contact-repository";

import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact Us | The Ivy Tree Romford",
  description: "Get in touch with The Ivy Tree Romford. Find our opening hours, location, and contact details to book your table or private event.",
  alternates: { canonical: "https://www.ivytreeessex.co.uk/contact" }
};

export default async function ContactPage() {
  const contactData = await ContactRepository.getContactData();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-[0.2em] text-black">
          CONTACT US
        </h1>
      </div>
      <Contact data={contactData} />
    </main>
  );
}
