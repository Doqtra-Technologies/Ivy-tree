import { createClient } from "@sanity/client";
import { config } from "dotenv";
config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

async function runValidation() {
  console.log("=== GROQ VALIDATION REPORT ===");
  const queries = {
    siteSettings: `count(*[_type=="siteSettings"])`,
    homepage: `count(*[_type=="homepage"])`,
    semiPrivatePage: `count(*[_type=="semiPrivatePage"])`,
    room: `count(*[_type=="room"])`,
    event: `count(*[_type=="event"])`,
    galleryPage: `count(*[_type=="galleryPage"])`,
    menu: `count(*[_type=="menu"])`,
    menuPage: `count(*[_type=="menuPage"])`,
    post: `count(*[_type=="post"])`,
  };

  for (const [key, query] of Object.entries(queries)) {
    const count = await client.fetch(query);
    console.log(`${key}: ${count}`);
  }
}

runValidation().catch(console.error);
