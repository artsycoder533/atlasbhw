import { PortableText } from "@portabletext/react";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import Image from "next/image";
import { HeroSection } from "@/types";

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

type Props = {
  data: HeroSection;
};

const Hero = ({ data }: Props) => {
  const {
    subHeading,
    backgroundImage,
    heading,
    primaryCTA,
    secondaryCTA,
    heroStyle,
    announcementBanner,
  } = data;

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      id="hero"
    >
      {/* announcement */}
      {announcementBanner && <div className="border absolute top-16 left-1/2 transform -translate-x-1/2 font-bold bg-secondary-accent text-white font-xl z-50 w-96 p-4">
        <p>{announcementBanner}</p>
      </div>}

      <div className="absolute inset-0 z-10">
        <Image
          src={urlFor(backgroundImage).quality(90).url()}
          alt="hero background"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>
      <div className="relative z-30 flex flex-col gap-8 p-4 max-w-7xl w-[90vw] mx-auto">
        <h1 className="text-6xl text-white">{heading}</h1>
        <PortableText
          value={subHeading}
          components={{
            block: ({ children }) => <p className="text-white">{children}</p>,
          }}
        />
        <div className="flex gap-6 mt-4">
          <a
            href="#book"
            className="flex items-center text-white px-3 py-2 bg-accent"
          >
            {primaryCTA.label}
          </a>
          <a
            href="#about"
            className="flex items-center text-white px-3 py-2 border-2 border-accent"
          >
            {secondaryCTA.label}
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[200px] w-full"
        >
          <path d="M1200 0L0 120 1200 120 1200 0z" fill="#fff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
