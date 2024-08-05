import { sanityFetch } from "../../../../../sanity/lib/fetch"
import { SanityDocument } from "next-sanity"
import { PAGE_QUERY } from "../../../../../sanity/lib/queries"
import ContactInfo from "../../components/ContactInfo"
import FaqAccordion from "../../components/FaqAccordion"
import PartialHero from "../../components/PartialHero"

type Props = {
    params: {
        slug: string;
    }
}

const page = async({params}: Props) => {
    const pageData = await sanityFetch<SanityDocument>({
        query: PAGE_QUERY,
        params: { slug: params.slug },
    })

    console.log('pageData =====>', pageData)

  return (
    <section>
        {pageData.content.map((section: any) => {
        switch (section._type) {
        //   case "heroSection":
        //     return <Hero key={section._id} data={section} />;
        //   case "services":
        //     return <Services key={section._id} data={section} />;
          case "heroPartial":
            return <PartialHero key={section._id} data={section} />;
        //   case "about":
        //     return <ContentSection key={section._id} data={section} />;
        //   case "staffGroup":
        //     return <StaffMembers key={section._id} data={section} />;
          case "faqs":
            return <FaqAccordion key={section._id} data={section} />;
          case "contactInfo":
            return <ContactInfo key={section._id} data={section} />;
          // case 'socialMediaLinks':
          //   return <SocialMediaLinks key={index} data={section} />;
          default:
            return null;
        }
      })}
    </section>
  )
}

export default page