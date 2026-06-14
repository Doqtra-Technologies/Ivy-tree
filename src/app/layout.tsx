import { getSiteSettings } from "@/services/wordpress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "The Ivy Tree Romford | Mediterranean Dining & Cocktail Bar",
  description: "Experience the vibrant essence of Mediterranean dining at The Ivy Tree in Romford, Essex. Premium dining, upstairs cocktail bar, private room hires, DJ nights, and bottomless brunch. Book your table today.",
  keywords: "Ivy Tree, Romford restaurant, Mediterranean dining Romford, Ivy Tree Essex, cocktail bar Romford, private hire rooms Romford, bottomless brunch Romford, Lokanta Romford",
  authors: [{ name: "The Ivy Tree" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://theivytreeromford.co.uk",
    title: "The Ivy Tree Romford | Mediterranean Dining & Cocktail Bar",
    description: "Experience the vibrant essence of Mediterranean dining at The Ivy Tree in Romford, Essex. Cozy ambiance, custom cocktails, and exclusive event spaces.",
    siteName: "The Ivy Tree",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
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
        />
      </body>
    </html>
  );
}
