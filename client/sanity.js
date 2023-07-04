import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "kc4n44fi",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;

// sanity cors add http://localhost:3333
// sanity cors add http://localhost:3000
