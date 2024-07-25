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
    image,
    title,
    "footerLinks": footerLinks[]{
      heading,
      "sublinks": sublinks[]->{
        _id,
        label,
        slugType,
        slug {
          current
        },
        isDropdown,
        isCTA,
        "dropdownLinks": dropdownLinks[]->{
          _id,
          label,
          slugType,
          slug {
            current
          },
          isDropdown,
          isCTA
        }
      }
    },
    copyrightInfo,
    createdBy,
    creatorWebsite,
    "socialMedia": socialMedia {
      title,
      linkedIn,
      instagram,
      facebook,
      twitter
    }
  }[0]
`;

export const PAGE_QUERY = groq`*[_type == "pages" && menuItem->slug.current == $slug][0]{
  title,
  content[]->{
    ...,
    _type == 'heroSection' => @,
    _type == 'services' => @,
    _type == 'contactInfo' => @,
    _type == 'faqs' => @,
    _type == 'socialMediaLinks' => @
  },
  menuItem->{
    label,
    slug
  }
}
`
