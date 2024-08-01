import React from "react";
import { sanityFetch } from "../../../../../sanity/lib/fetch";
import { PortableText, SanityDocument } from "next-sanity";
import { SERVICE_QUERY } from "../../../../../sanity/lib/queries";
import { notFound } from "next/navigation";
import Title from "../../components/Title";
import { urlFor } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const ServiceDetail = async ({ params }: Props) => {
  const serviceData = await sanityFetch<SanityDocument>({
    query: SERVICE_QUERY,
    params: { slug: params.slug },
  });

  if (!serviceData) {
    notFound();
  }
  const { title, image, slug, description, cta } = serviceData;
  console.log('cta ==>', cta)
  return (
    <section>
      <div className="mt-20 relative flex justify-center items-center h-72 w-full">
        <div className="absolute inset-0">
          <Image
            src={urlFor(image).url()}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <Title title={title} size="lg" altColor />
      </div>
      <div className="border-l-accent border-l-8 max-w-7xl mx-auto">
        <div className="prose prose-base lg:prose-lg xl:prose-xl max-w-prose mx-auto w-[90vw] border py-12 px-10">
          <PortableText value={description} />
        </div>
      </div>
      {/* <Link href={cta.slug.current}>{cta.label}</Link> */}
    </section>
  );
};

export default ServiceDetail;
