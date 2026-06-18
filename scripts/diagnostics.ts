import { config } from "dotenv";
config({ path: ".env.local" });
import { createClient } from "@sanity/client";
import { MenuRepository } from "../src/data/repositories/menu-repository";
import { EventRepository } from "../src/data/repositories/event-repository";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-06-15',
  useCdn: false
});

async function run() {
  console.log("=== SANITY DOCUMENT AUDIT ===");
  const menuDoc = await client.fetch(`*[_type == "menu"][0]`);
  console.log("Menu Document:");
  console.log(JSON.stringify(menuDoc, null, 2));

  const eventDoc = await client.fetch(`*[_type == "event"][0]`);
  console.log("\nEvent Document:");
  console.log(JSON.stringify(eventDoc, null, 2));

  console.log("\n=== REPOSITORY AUDIT ===");
  const menuData = await client.fetch(`*[_type == "menu"] | order(order asc) {
    _id,
    title,
    "src": coverImage.asset->url,
    "alt": title,
    "pdfUrl": pdfFile.asset->url
  }`);
  console.log("Menu Repository Output:");
  console.log(JSON.stringify(menuData.map((m: any) => ({
    id: m._id,
    title: m.title,
    src: m.src,
    alt: m.alt,
    pdfUrl: m.pdfUrl
  })), null, 2));

  const whatsOnData = await client.fetch(`*[_type == "event"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "pdfUrl": pdfFile.asset->url
  }`);
  console.log("\n=== GALLERY AUDIT ===");
  const galleryDoc = await client.fetch(`*[_type == "galleryPage"][0]`);
  console.log("Gallery Document:");
  console.log(JSON.stringify(galleryDoc, null, 2));

  const galleryQuery = await client.fetch(`*[_type == "galleryPage"][0] {
    "images": images[] {
      "src": asset->url,
      alt
    }
  }`);
  console.log("\nGallery Query Output:");
  console.log(JSON.stringify(galleryQuery, null, 2));
}

run();
