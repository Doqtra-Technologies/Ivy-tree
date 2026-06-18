import { MenuRepository } from "@/data/repositories/menu-repository";
import MenuGrid from "@/components/MenuGrid";

import { Metadata } from "next";
import { generatePageMetadata } from "@/utils/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await MenuRepository.getMenuData();
  return generatePageMetadata(data.seo, "https://www.ivytreeessex.co.uk/menu");
}

export default async function MenuPage() {
  const menuData = await MenuRepository.getMenuData();

  return (
    <main className="pt-[90px] bg-brand-dark min-h-screen">
      {/* Gold Header Bar */}
      <div className="py-12 text-center bg-brand-gold">
        <h1 className="font-sans font-bold text-2xl md:text-3xl uppercase tracking-[0.2em] text-black">
          {menuData.heading}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {menuData.description && (
          <div className="text-center mb-12">
            <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed">
              {menuData.description}
            </p>
          </div>
        )}

        <MenuGrid menus={menuData.menus} />
      </div>
    </main>
  );
}
