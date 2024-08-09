import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../sanity/env";
import { getPagesByDocumentTypeQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/fetch";

export const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

export const urlFor = (source: any) =>
    imageUrlBuilder({ projectId, dataset }).image(source);

// Function to get pages based on document type
export async function getPagesBasedOnDocumentType(documentType: string) {
    const query = getPagesByDocumentTypeQuery(documentType);
  
    // Fetch data from Sanity
    const data = await sanityFetch<{ slug: string }[]>({
      query,
      tags: [`_type:${documentType}`], // Adjust tags if needed
    });
  
    // Ensure data is an array and map the result to get the slugs
    if (Array.isArray(data)) {
      return data.map(item => ({ slug: item.slug }));
    }
  
    return [];
  }