import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const destinations = (await getCollection("destinations")).sort((a, b) =>
    a.data.title.localeCompare(b.data.title)
  );

  return rss({
    title: "50 Beautiful Places",
    description: "Image-led destination guides and practical travel notes.",
    site: context.site ?? new URL("https://50beautifulplaces.com"),
    items: destinations.map((place) => ({
      title: place.data.title,
      description: place.data.summary,
      pubDate: new Date("2026-05-17"),
      link: `/places/${place.id}/`
    }))
  });
};
