import { createClient } from "@sanity/client";
import { config } from "dotenv";
config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-06-15',
  useCdn: false
});

async function main() {
  const menus = await client.fetch(`*[_type == "menu"]`);
  console.dir(menus, { depth: null });
}
main();
