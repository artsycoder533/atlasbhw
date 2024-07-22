import { type SchemaTypeDefinition } from "sanity";
import navigationMenu from "./schemaTypes/navigationMenu";
import footerMenu from "./schemaTypes/footerMenu";
import menuItem from "./schemaTypes/menuItem";
import services from "./schemaTypes/services";
import heroSection from "./schemaTypes/heroSection";
import page from "./schemaTypes/page";
import socialMediaLinks from "./schemaTypes/socialMediaLinks";
import contactInfo from "./schemaTypes/contactInfo";
import companyAddress from "./schemaTypes/companyAddress";
import officeHours from "./schemaTypes/officeHours";
import blog from "./schemaTypes/blog";
import category from "./schemaTypes/category";
import staff from "./schemaTypes/staff";
import faq from "./schemaTypes/faq";
import jobListing from "./schemaTypes/jobListing";
import service from "./schemaTypes/service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navigationMenu,
    footerMenu,
    menuItem,
    services,
    heroSection,
    page,
    socialMediaLinks,
    contactInfo,
    companyAddress,
    officeHours,
    blog,
    category,
    staff,
    faq,
    jobListing,
    service,
  ],
};
