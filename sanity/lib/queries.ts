import { groq } from "next-sanity";

export const NAVIGATION_MENU_QUERY = groq`*[_type == "navigationMenu"]{
  logo,
  title,
  "links": links[]->{
    _id,
    label,
    slugType,
    slug,
    isDropdown,
    isCTA,
    "dropdownLinks": dropdownLinks[]->{
      _id,
      label,
      slugType,
      slug,
      isDropdown,
      isCTA
    }
  }
}[0]`;

export const FOOTER_MENU_QUERY = groq`*[_type == "footerMenu"]{
  image{
    asset->{
      _id,
      url
    }
  },
  title,
  footerLinks[]{
    _key,
    heading,
    sublinks[]{
      _key,
      label,
      linkType,
      url
    }
  },
  copyrightInfo,
  createdBy,
  creatorWebsite
}
`;
