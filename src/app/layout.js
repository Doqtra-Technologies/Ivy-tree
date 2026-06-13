import { getSiteSettings } from "@/services/wordpress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <Navbar 
          logoUrl={settings.logoUrl} 
          reservationUrl={settings.reservationUrl} 
        />
        {children}
        <Footer 
          logoUrl={settings.logoUrl}
          openingHours={settings.footer.openingHours}
          socialLinks={settings.footer.socialLinks}
        />
      </body>
    </html>
  );
}
