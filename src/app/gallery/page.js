import { getSiteSettings } from "@/services/wordpress";
import Gallery from "@/components/Gallery";

export const revalidate = 60;

export default async function GalleryPage() {
  const settings = await getSiteSettings();

  return (
    <main className="page-container">
      <Gallery 
        images={settings.gallery} 
      />
    </main>
  );
}
