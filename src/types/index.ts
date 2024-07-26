import { SanityAsset } from "@sanity/image-url/lib/types/types";

export type MenuItem = {
    label: string;
    slug: {
        current: string;
        type: string;
    };
    slugType: string;
    isDropdown: boolean;
    dropdownLinks: MenuItem[];
    isCTA: boolean;
    _id: string;
};

interface Section {
    _type: string;
    _key: string;
  }

export interface HeroSection extends Section {
    _type: "heroSection";
    backgroundImage: SanityAsset;
    title: string;
    heading: string;
    secondaryCTA: {
      _type: string;
      label: string;
      linkType: string;
      url: string;
      // Define fields here based on your secondaryCTA object structure
    };
    subHeading: Array<{
      _type: string;
      // Define fields here based on your subHeading object structure
    }>;
    primaryCTA: {
      _type: string;
      label: string;
      linkType: string;
      url: string;
      // Define fields here based on your primaryCTA object structure
    };
    heroStyle: string;
}

export interface ServicesSection extends Section {
    _type: "services";
    title: string;
    slug: string;
    servicesList: Service[];
  }

export type Service = {
  _id: string;
    title: string;
      image: SanityAsset;
      slug: {
        current: string;
        type: string;
    };
      description: Array<{
        _type: 'block';
        children: Array<{
          _type: 'span';
          text: string;
          marks: string[];
        }>;
        markDefs: any[];
        style: string;
      }>;
      cta?: {
        _type: 'object';
        menuItem?: {
          _type: 'reference';
          _ref: string;
        };
      };
}

export type PageSection =
  | HeroSection
  | ServicesSection
  | ContactInfoSection
  | FaqsSection
  | SocialMediaLinksSection;

  interface ContactInfoSection extends Section {
    _type: "contactInfo";
    // Add specific fields for contactInfo
  }
  
  interface FaqsSection extends Section {
    _type: "faqs";
    // Add specific fields for faqs
  }
  
  interface SocialMediaLinksSection extends Section {
    _type: "socialMediaLinks";
    // Add specific fields for socialMediaLinks
  }
  
 export type PageData = {
    title: string;
    content: PageSection[];
  }