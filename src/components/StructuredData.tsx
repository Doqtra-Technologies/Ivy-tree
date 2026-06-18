import { SiteSettingsData } from "@/data/repositories/settings-repository";

interface StructuredDataProps {
  settings: SiteSettingsData;
}

export default function StructuredData({ settings }: StructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness", "Organization"],
    name: "The Ivy Tree",
    url: "https://www.ivytreeessex.co.uk",
    logo: settings.logoUrl ? `https://www.ivytreeessex.co.uk${settings.logoUrl}` : undefined,
    image: settings.seo?.openGraphImage || "https://www.ivytreeessex.co.uk/gallery/4.jpg",
    description: settings.seo?.metaDescription || "Experience the vibrant essence of Mediterranean dining at The Ivy Tree in Romford, Essex.",
    telephone: settings.contact?.phone,
    email: settings.contact?.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.contact?.address,
      addressLocality: "Romford",
      addressRegion: "Essex",
      addressCountry: "UK"
    },
    servesCuisine: "Mediterranean",
    acceptsReservations: "True",
    menu: "https://www.ivytreeessex.co.uk/menu",
    sameAs: [
      settings.footer?.socialLinks?.instagram,
      settings.footer?.socialLinks?.facebook,
      settings.footer?.socialLinks?.tiktok,
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
