import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../../sanity/lib/queries";
import PartialHero from "@/components/PartialHero";
import ContentSection from "@/components/ContentSection";
import StaffMembers from "@/components/StaffMembers";
import FaqAccordion from "@/components/FaqAccordion";
import ContactInfo from "@/components/ContactInfo";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { notFound } from "next/navigation";

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

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const pageData = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
    params: { slug: params.slug },
    tags: [`page:${params.slug}`],
  });

  if (!pageData) {
    // return <div className="mt-48">Page not found</div>;
    return notFound();
  }

  return (
    <div className="">
      {pageData.content.map((section: any) => {
        switch (section._type) {
          case "heroSection":
            return <Hero key={section._id} data={section} />;
          case "services":
            return <Services key={section._id} data={section} />;
          case "heroPartial":
            return <PartialHero key={section._id} data={section} />;
          case "about":
            return <ContentSection key={section._id} data={section} />;
          case "staffGroup":
            return <StaffMembers key={section._id} data={section} />;
          case "faqs":
            return <FaqAccordion key={section._id} data={section} />;
          case "contactInfo":
            return <ContactInfo key={section._id} data={section} />;
            case "scheduleCTA":
              return <Cta key={section._id} data={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Page;
