import { groq } from "next-sanity";

export const NAVIGATION_MENU_QUERY = groq`
  *[_type == "navigationMenu"]{
    logo,
    title,
    "links": links[]->{
      _id,
      label,
      slugType,
      slug,
      isDropdown,
      isCTA,
      "dropdownLinks": select(
        isDropdown == true => dropdownLinks[]->{
          _id,
          label,
          slugType,
          slug,
          isDropdown,
          isCTA
        },
        null
      )
    }
  }[0]
`;

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
        _id,
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
      pages[]-> {
        slug
      }
  }
    },
    _type == 'heroPartial' => {
      heading,
      backgroundImage,
      pages[]-> {
        slug
      }
    },
    _type == 'about' => {
      missionStatement{
        heading,
        bodyText,
      },
      teachingSiteStatment{
        heading,
        bodyText
      },
      pages[]-> {
        slug
      }
    },
    _type == 'staffGroup' => {
      title,
      staffMembers[]-> {
        _id,
        name,
        headshot,
        credentials,
        role,
        specialties,
        ehrLink {
          label,
          url
        }
      },
      pages[]->{
        slug
      }
    },
     _type == 'faqs' => {
      title,
      faqsList[] {
        _key,
        question,
        answer
      },
      pages[]-> {
        slug
      }
    },
    _type == 'resourceGroup' => {
      _id,
      title,
      resources[] {
        _key,
        label,
        description,
        resourceType,
        title,
        url,
        urlLabel,
        file {
          asset-> {
            _id,
            url
          }
        },
        fileLabel,
     },
     pages[]-> {
        slug
      }
    },
    _type == 'partnerGroup' => {
      _id,
      title,
      content[] {
        _key,
        companyName,
        logo {
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        }
      },
      pages[]-> {
        slug
      }
    },
    _type == 'jobListing' => {
      _id,
      title,
      description,
      certification,
      pay,
      supplementalPay,
      schedule,
      workLocation,
      requestResume,
      requestCoverLetter,
      benefits,
      responsibilities,
      pages[]-> {
        slug
      }
    },
    _type == 'scheduleCTA' => {
      _id,
      heading,
      ctaItems[] => {
        _key,
        label,
        url,
        email,
        ctaText,
      },
      pages[]-> {
        slug
      }
    },
  },
  menuItem->{
    label,
    slug
  }
}
`;

export const SERVICE_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0]{
    title,
    image,
    slug,
    description,
    cta {
      menuItem-> {
        label,
        url
      }
    },
    ehrLink {
      label,
      url
    }
  }
`;
