import CocktailBar from "@/components/CocktailBar";
import { CocktailBarRepository } from "@/data/repositories/cocktail-bar-repository";
import { SettingsRepository } from "@/data/repositories/settings-repository";

import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await CocktailBarRepository.getCocktailBar();
  return generatePageMetadata(data.seo, "https://www.ivytreeessex.co.uk/cocktail-bar");
}

export default async function CocktailBarPage() {
  const settings = await SettingsRepository.getSiteSettings();
  const cocktailBarData = await CocktailBarRepository.getCocktailBar();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      <div className="py-sp-48 text-center border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-white">Cocktail Bar</h1>
        <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-sp-16" />
      </div>
      <CocktailBar 
        heading={cocktailBarData.heading}
        text={cocktailBarData.text}
        imageUrl={cocktailBarData.imageUrl}
        reservationUrl={settings.reservationUrl}
      />
    </main>
  );
}
