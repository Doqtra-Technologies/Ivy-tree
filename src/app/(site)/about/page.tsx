import AboutSection from "@/components/AboutSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Ivy Tree Romford",
  description: "Good food. Great drinks. Late nights. Ivy Tree Romford brings together modern dining, handcrafted cocktails and live entertainment under one roof.",
  alternates: { canonical: "https://www.ivytreeessex.co.uk/about" }
};

export default function AboutPage() {
  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <div className="py-sp-48 text-center border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-white">About Us</h1>
        <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-sp-16" />
      </div>
      <AboutSection />
    </main>
  );
}
