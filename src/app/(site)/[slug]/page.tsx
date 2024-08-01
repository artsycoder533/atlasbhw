import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../../../sanity/lib/queries";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Title from "../components/Title";
import PartialHero from "../components/PartialHero";
import ContentSection from "../components/ContentSection";
import StaffMembers from "../components/StaffMembers";

interface PageProps {
    params: {
        slug: string;
    }
}

const Page = async ({params}: PageProps) => {
    const pageData = await sanityFetch<SanityDocument>({
        query: PAGE_QUERY,
        params: {slug: params.slug}
    })

    if(!pageData){
      return <div className="mt-48">Page not found</div>
    }

    return (
        <div className="flex flex-col gap-4">
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
        </div>
      );
}

export default Page;