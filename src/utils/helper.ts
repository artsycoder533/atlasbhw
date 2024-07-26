import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../sanity/env";

export const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

export const urlFor = (source: any) =>
    imageUrlBuilder({ projectId, dataset }).image(source);