import React from "react";
import { sanityFetch } from "../../../../../sanity/lib/fetch";
import { PortableText, SanityDocument } from "next-sanity";
import { SERVICE_QUERY } from "../../../../../sanity/lib/queries";
import { notFound } from "next/navigation";
import Title from "@/components/Title";
import { urlFor } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<string[]>({
      query: `*[_type == "service"].slug.current`,
      perspective: 'published',
    });

    return slugs.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

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
  const { title, image, description, ehrLink } = serviceData;

  return (
    <section>
      <div className="mt-20 relative flex justify-center items-center h-72 w-full">
        <div className="absolute inset-0">
          <Image
            src={urlFor(image).url()}
            alt="Background Image"
            fill
            className="z-0 object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="flex flex-col z-10">
          <Title title={title} size="lg" altColor />
          <Link
            href={ehrLink.url}
            target="_blank"
            rel="noreferrer noopener"
            className="z-10 rounded-md bg-accent px-4 py-3 no-underline text-white shadow-sm hover:bg-primary-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent self-center mt-6"
          >
            {ehrLink.label}
          </Link>
        </div>
      </div>
      <div className="py-16">
        <div className="prose prose-base xl:prose-lg mx-auto w-[90vw] py-12">
          <PortableText value={description} />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
