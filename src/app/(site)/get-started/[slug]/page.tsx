import { sanityFetch } from "../../../../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { PAGE_QUERY } from "../../../../../sanity/lib/queries";
import ContactInfo from "../../components/ContactInfo";
import FaqAccordion from "../../components/FaqAccordion";
import PartialHero from "../../components/PartialHero";
import Resources from "../../components/Resources";
import Job from "../../components/Job";

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
        console.log('section ==>', section)
        switch (section._type) {
          case "heroPartial":
            return <PartialHero key={section._id} data={section} />;
          case "faqs":
            return <FaqAccordion key={section._id} data={section} />;
          case "contactInfo":
            return <ContactInfo key={section._id} data={section} />;
          case "resourceGroup":
            return <Resources key={section._id} data={section} />;
          case "jobListing":
            return <Job key={section._id} data={section}/>
          default:
            return null;
        }
      })}
    </section>
  );
};

export default page;
