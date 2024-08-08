import { sanityFetch } from "../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../sanity/lib/queries";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { PageData } from "@/types";
import ContactInfo from "@/components/ContactInfo";
import Partners from "@/components/Partners";
import Cta from "@/components/Cta";
import { notFound } from "next/navigation";

const Home = async () => {
  const pageData = await sanityFetch<PageData>({
    query: PAGE_QUERY,
    params: { slug: "/" },
  });

  if (!pageData) {
    // return <div className="mt-32">Page not found</div>;
    return notFound();
  }

  return (
    <>
      {pageData.content.map((section: any) => {
        switch (section._type) {
          case "heroSection":
            return <Hero key={section._id} data={section} />;
          case "services":
            return <Services key={section._id} data={section} />;
          case "contactInfo":
            return <ContactInfo key={section._id} data={section} />;
          case "partnerGroup":
            return <Partners key={section._id} data={section} />;
          case "scheduleCTA":
            return <Cta key={section._id} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Home;
