import { groq } from "next-sanity";

export const NAVIGATION_MENU_QUERY = groq`*[_type == "navigationMenu"] {
    logo,
    "links": links[] {
      label,
      url,
      isDropdown,
      "dropdownLinks": dropdownLinks[] {
        label,
        url
      },
      isCTA
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
  author
}
`;
