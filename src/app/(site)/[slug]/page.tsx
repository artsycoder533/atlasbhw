import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../../sanity/lib/queries";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Title from "../components/Title";
import PartialHero from "../components/PartialHero";
import ContentSection from "../components/ContentSection";
import StaffMembers from "../components/StaffMembers";
import FaqAccordion from "../components/FaqAccordion";

interface PageProps {
    params: {
        slug: string;
    }
}

const Page = async ({params}: PageProps) => {
  console.log('params.slug ====>', params.slug)
    const pageData = await sanityFetch<SanityDocument>({
        query: PAGE_QUERY,
        params: {slug: params.slug}
    })

    console.log('pageData ===>', pageData)

    if(!pageData){
      return <div className="mt-48">Page not found</div>
    }

    return (
        <div className="">
          <Title size="lg" title={pageData.title} />
          {pageData.content.map((section: any) => {
            switch (section._type) {
              case 'heroSection':
                return <Hero key={section._id} data={section} />;
              case 'services':
                return <Services key={section._id} data={section} />;
              case 'heroPartial':
                return <PartialHero key={section._id} data={section} />;
              case 'about':
                return <ContentSection key={section._id} data={section} />
              case 'staffGroup':
                return <StaffMembers key={section._id} data={section} />
              case 'faqs':
                return <FaqAccordion key={section._id} data={section} />;
              // case 'socialMediaLinks':
              //   return <SocialMediaLinks key={index} data={section} />;
              default:
                return null;
            }
          })}
        </div>
      );
}

export default Page;