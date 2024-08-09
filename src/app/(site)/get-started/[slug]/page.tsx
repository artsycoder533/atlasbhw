import { sanityFetch } from "../../../../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { PAGE_QUERY } from "../../../../../sanity/lib/queries";
import ContactInfo from "@/components/ContactInfo";
import FaqAccordion from "@/components/FaqAccordion";
import PartialHero from "@/components/PartialHero";
import Resources from "@/components/Resources";
import Job from "@/components/Job";
import Cta from "@/components/Cta";

export async function generateStaticParams() {
  try {
    // Fetch slugs directly from the 'pages' schema where menuItem slug is not null
    const slugs = await sanityFetch<string[]>({
      query: `*[_type == "pages" && menuItem->slug.current != null].menuItem->slug.current`,
      perspective: 'published',
    });

    // Filter out invalid slugs
    const validSlugs = slugs.filter(slug => slug && slug !== '/');

    // Return slugs as they are
    return validSlugs.map((slug: string) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}




type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Props) => {
  const pageData = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
    params: { slug: params.slug },
  });

  return (
    <section>
      {pageData.content.map((section: any) => {
        switch (section._type) {
          case "heroPartial":
            return <PartialHero key={section._id} data={section} />;
          case "faqs":
            return <FaqAccordion key={section._id} data={section} />;
          case "contactInfo":
            return (
              <>
                <ContactInfo key={section._id} data={section} />
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
          case "resourceGroup":
            return <Resources key={section._id} data={section} />;
          case "jobListing":
            return <Job key={section._id} data={section} />;
            case "scheduleCTA":
              return <Cta key={section._id} data={section} />;
          default:
            return null;
        }
      })}
    </section>
  );
};

export default page;
