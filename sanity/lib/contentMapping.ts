// src/lib/contentMapping.ts

import { sanityFetch } from "./fetch"; // Ensure you have a configured Sanity client
import { PAGES_AND_CONTENT_QUERY } from "./queries";
import { PageDataForMappings } from "@/types";

let pageContentMapping: Record<string, string[]> = {};

export async function fetchPageContentMapping() {
  const pages = await sanityFetch<PageDataForMappings[]>({
    query: PAGES_AND_CONTENT_QUERY,
  });
  pageContentMapping = {};

  pages.forEach((page: { slug: string; content: { _type: string }[] }) => {
    page.content.forEach((contentItem) => {
      const tag = `page:${page.slug}`;
      if (!pageContentMapping[contentItem._type]) {
        pageContentMapping[contentItem._type] = [];
      }
      pageContentMapping[contentItem._type].push(tag);
    });
  });
}

// Call this function to initialize or update the mapping
export async function initializeContentMapping() {
  await fetchPageContentMapping();
}

export function getContentMapping() {
  return pageContentMapping;
}
