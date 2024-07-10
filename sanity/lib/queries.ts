import { groq } from "next-sanity";

export const NAVIGATION_MENU_QUERY = groq`*[_type == "navigationMenu"] {
    logo,
    title,
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
  }[0]` // Assuming you have only one navigation menu document
  