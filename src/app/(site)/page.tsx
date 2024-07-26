import { sanityFetch } from "../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../sanity/lib/queries";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { PageData } from "@/types";

const Home = async () => {
  const pageData = await sanityFetch<PageData>({
    query: PAGE_QUERY,
    params: { slug: "/" },
  });

  if (!pageData) {
    return <div className="mt-32">Page not found</div>;
  }

  // console.log("pagedata ----->", pageData.content);

  return (
    <>
  
      
      {pageData.content.map((section: any, index: number) => {
        switch (section._type) {
          case 'heroSection':
            return <Hero key={index} data={section} />;
          case 'services':
            return <Services key={index} data={section} />;
          // case 'contactInfo':
          //   return <ContactInfo key={index} data={section} />;
          // case 'faqs':
          //   return <Faqs key={index} data={section} />;
          // case 'socialMediaLinks':
          //   return <SocialMediaLinks key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Home;
