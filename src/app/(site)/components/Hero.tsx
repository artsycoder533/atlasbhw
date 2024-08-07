import { PortableText } from "@portabletext/react";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import Image from "next/image";
import { HeroSection } from "@/types";
import AnnouncementBanner from "./AnnouncementBanner";
import montserratAlternates from "../fonts.ts/Montserrat_Alternatives";
import Link from "next/link";

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
      className="mt-20 flex relative min-h-[80vh] sm:min-h-[60vh] md:min-h-[70vh] items-center overflow-hidden border"
      id="hero"
    >
      <div className="absolute inset-0 z-10">
        <Image
          src={urlFor(backgroundImage).quality(90).url()}
          alt="hero background"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>
      <div className="relative z-20 flex flex-col gap-8 p-4 max-w-7xl w-[90vw] mx-auto">
     {announcementBanner ? <AnnouncementBanner text={announcementBanner} /> : null}
        <h1 className={`text-4xl md:text-7xl text-white font-bold ${montserratAlternates.className}`}>{heading}</h1>
        <PortableText
          value={subHeading}
          components={{
            block: ({ children }) => <p className="text-white text-xl">{children}</p>,
          }}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
          <Link
            href="#book"
            className="flex items-center justify-center text-white px-4 py-3 bg-accent rounded-md w-full md:w-auto" 
          >
            {primaryCTA.label}
          </Link>
          <Link
            href="#about"
            className="flex items-center justify-center text-white px-4 py-2 border-2 border-accent rounded-md  w-full md:w-auto"
          >
            {secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
