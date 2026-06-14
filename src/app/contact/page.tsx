import Contact from "@/components/Contact";
import { getSiteSettings } from "@/services/wordpress";

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-[0.2em] text-black">
          CONTACT US
        </h1>
      </div>
      <Contact />
    </main>
  );
}
