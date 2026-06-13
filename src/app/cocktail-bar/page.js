import { getSiteSettings } from "@/services/wordpress";
import CocktailBar from "@/components/CocktailBar";

export const revalidate = 60;

export default async function CocktailBarPage() {
  const settings = await getSiteSettings();

  return (
    <main className="page-container">
      <CocktailBar 
        heading={settings.cocktailBar.heading}
        text={settings.cocktailBar.text}
        imageUrl={settings.cocktailBar.imageUrl}
      />
    </main>
  );
}
