import { GalleryRepository } from "../src/data/repositories/gallery-repository";

async function run() {
  const data = await GalleryRepository.getGallery();
  console.log("Gallery Repo Data:", data);
}

run();
