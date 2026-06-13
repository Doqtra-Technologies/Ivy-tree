import { getSiteSettings } from "@/services/wordpress";
import Contact from "@/components/Contact";

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <main className="page-container">
      <Contact 
        details={settings.contact} 
      />
    </main>
  );
}
