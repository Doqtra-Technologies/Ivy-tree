import CocktailBar from "@/components/CocktailBar";
import { getSiteSettings } from "@/services/wordpress";

export const revalidate = 60;

export default async function CocktailBarPage() {
  const settings = await getSiteSettings();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <div className="py-sp-48 text-center border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-white">Cocktail Bar</h1>
        <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-sp-16" />
      </div>
      <CocktailBar 
        heading={settings.cocktailBar.heading}
        text={settings.cocktailBar.text}
        imageUrl={settings.cocktailBar.imageUrl}
        reservationUrl={settings.reservationUrl}
      />
    </main>
  );
}
