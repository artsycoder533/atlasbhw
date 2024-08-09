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
