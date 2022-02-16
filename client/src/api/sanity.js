import sanityClinet from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClinet({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  // quickly show images
  useCdn: true,
  token: process.env.REACT_APP_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const url = (source) => builder.image(source);
