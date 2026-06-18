import { Metadata } from "next";

export interface SanitySeo {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
  openGraphImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata(seo?: SanitySeo, fallbackUrl?: string): Metadata {
  if (!seo) return {};

  const metadata: Metadata = {};

  if (seo.metaTitle) metadata.title = seo.metaTitle;
  if (seo.metaDescription) metadata.description = seo.metaDescription;
  if (seo.keywords) metadata.keywords = seo.keywords;
  if (seo.noIndex) metadata.robots = "noindex, nofollow";

  const url = seo.canonicalUrl || fallbackUrl;

  metadata.openGraph = {
    title: seo.metaTitle,
    description: seo.metaDescription,
    url: url,
    images: seo.openGraphImage ? [{ url: seo.openGraphImage }] : [],
  };

  if (url) {
    metadata.alternates = {
      canonical: url,
    };
  }

  return metadata;
}
