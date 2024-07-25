import Image from "next/image";
import { SanityDocument } from "sanity";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../sanity/lib/queries";
import ContactInfo from "../../../sanity/schemaTypes/contactInfo";
import HeroSection from "../../../sanity/schemaTypes/heroSection";
import Services from "../../../sanity/schemaTypes/services";
import SocialMediaLinks from "./components/SocialMediaLinks";
import { PortableText } from "next-sanity";

interface Section {
  _type: string;
  _key: string;
  // Add other common fields if necessary
}

interface HeroSection extends Section {
  _type: 'heroSection';
  backgroundImage: Array<{
    _type: string;
    // Define fields here based on your backgroundImage object structure
  }>;
  title: string;
  heading: string;
  secondaryCTA: Array<{
    _type: string;
    // Define fields here based on your secondaryCTA object structure
  }>;
  subHeading: Array<{
    _type: string;
    // Define fields here based on your subHeading object structure
  }>;
  primaryCTA: Array<{
    _type: string;
    // Define fields here based on your primaryCTA object structure
  }>;
}

interface ServicesSection extends Section {
  _type: 'services';
  // Add specific fields for services
}

interface ContactInfoSection extends Section {
  _type: 'contactInfo';
  // Add specific fields for contactInfo
}

interface FaqsSection extends Section {
  _type: 'faqs';
  // Add specific fields for faqs
}

interface SocialMediaLinksSection extends Section {
  _type: 'socialMediaLinks';
  // Add specific fields for socialMediaLinks
}

type PageSection = HeroSection | ServicesSection | ContactInfoSection | FaqsSection | SocialMediaLinksSection;

interface PageData {
  title: string;
  content: PageSection[];
}


const Home = async() => {
  const pageData = await sanityFetch<PageData>({
    query: PAGE_QUERY,
    params: { slug: '/' },
  });

  console.log('data --->', pageData)

  if (!pageData) {
    return <div className="mt-32">Page not found</div>;
  }

  console.log('pagedata ----->', pageData)
  const { content } = pageData;
  const heroSection = content[0] as HeroSection;
  const { subHeading, backgroundImage, heading, primaryCTA, secondaryCTA } = heroSection;


  return (
    <section className="mt-32">
      <h1>{heading}</h1>
      <PortableText value={subHeading} />
      {/* {pageData.content.map((section: any, index: number) => {
        switch (section._type) {
          case 'heroSection':
            return <HeroSection key={index} data={section} />;
          case 'services':
            return <Services key={index} data={section} />;
          case 'contactInfo':
            return <ContactInfo key={index} data={section} />;
          case 'faqs':
            return <Faqs key={index} data={section} />;
          case 'socialMediaLinks':
            return <SocialMediaLinks key={index} data={section} />;
          default:
            return null;
        }
      })} */}
    </section>
  );
}

export default Home;