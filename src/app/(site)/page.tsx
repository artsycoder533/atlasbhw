import { sanityFetch } from "../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../sanity/lib/queries";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { PageData } from "@/types";
import ContactInfo from "./components/ContactInfo";

const Home = async () => {
  const pageData = await sanityFetch<PageData>({
    query: PAGE_QUERY,
    params: { slug: "/" },
  });

  if (!pageData) {
    return <div className="mt-32">Page not found</div>;
  }

  return (
    <>
      {pageData.content.map((section: any, index: number) => {
        switch (section._type) {
          case "heroSection":
            return <Hero key={section._id} data={section} />;
          case "services":
            return <Services key={section._id} data={section} />;
          case "contactInfo":
            return <ContactInfo key={section._id} data={section} />;
          default:
            return null;
        }
      })}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5089665145665!2d-77.61718592348326!3d37.51949787205098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b16da3bdf04f59%3A0x1222ac159601833e!2sAtlas%20Behavioral%20Health%20and%20Wellness!5e0!3m2!1sen!2sus!4v1721970757728!5m2!1sen!2sus"
        width="600"
        height="350"
        className="border-none w-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Home;
