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

export const PAGE_QUERY = groq`
*[_type == "pages" && menuItem->slug.current == $slug][0]{
  title,
  content[]->{
    ...,
    _type == 'heroSection' => @,
    _type == 'services' => {
      ...,
      servicesList[]->{
        title,
        image,
        slug,
        description,
        cta {
          menuItem->{
            label,
            slug
          }
        }
      }
    },
    _type == 'contactInfo' => {
      companyName,
      companyEmail,
      phoneNumber,
      fax,
      address->{
        streetAddress,
        addressLine2,
        city,
        state,
        postalCode
      },
      officeHours->{
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
      },
      socialMediaLinks[]->{
        linkedIn,
        instagram,
        facebook,
        twitter,
        tiktok
      }
    },
    _type == 'heroPartial' => {
      heading,
      backgroundImage
    },
    _type == 'about' => {
      missionStatement{
        heading,
        bodyText
      },
      teachingSiteStatment{
        heading,
        bodyText
      }
    },
     _type == 'faqs' => @,
    _type == 'socialMediaLinks' => @
  },
  menuItem->{
    label,
    slug
  }
}
`;
