import { getSiteSettings } from "@/services/wordpress";
import WhatsOn from "@/components/WhatsOn";

export const revalidate = 60;

export default async function WhatsOnPage() {
  const settings = await getSiteSettings();

  return (
    <main className="page-container">
      <WhatsOn 
        intro={settings.whatsOn} 
      />
    </main>
  );
}
