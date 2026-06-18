import { SettingsRepository } from "@/data/repositories/settings-repository";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Playfair_Display, Montserrat } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await SettingsRepository.getSiteSettings();
  const seo = settings.seo;

  return {
    title: seo?.metaTitle || "The Ivy Tree Romford | Mediterranean Dining & Cocktail Bar",
    description: seo?.metaDescription || "Experience the vibrant essence of Mediterranean dining at The Ivy Tree in Romford, Essex.",
    keywords: seo?.keywords || "Ivy Tree, Romford restaurant, Mediterranean dining Romford, Ivy Tree Essex",
    authors: [{ name: "The Ivy Tree" }],
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: seo?.canonicalUrl || "https://www.ivytreeessex.co.uk",
      title: seo?.metaTitle || "The Ivy Tree Romford",
      description: seo?.metaDescription || "Experience the vibrant essence of Mediterranean dining.",
      siteName: "The Ivy Tree",
      images: seo?.openGraphImage ? [{ url: seo.openGraphImage }] : [],
    },
    alternates: {
      canonical: seo?.canonicalUrl || "https://www.ivytreeessex.co.uk",
    }
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const settings = await SettingsRepository.getSiteSettings();

  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <StructuredData settings={settings} />
      </head>
      <body className="bg-brand-dark text-white antialiased font-sans flex flex-col min-h-screen">
        <Navbar 
          logoUrl={settings.logoUrl} 
          reservationUrl={settings.reservationUrl} 
        />
        <main className="flex-grow">
          {children}
        </main>
        <Footer 
          logoUrl={settings.logoUrl}
          openingHours={settings.footer.openingHours}
          socialLinks={settings.footer.socialLinks}
          contact={settings.contact}
        />
      </body>
    </html>
  );
}
