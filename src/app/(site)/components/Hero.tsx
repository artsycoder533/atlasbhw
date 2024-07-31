import { PortableText } from "@portabletext/react";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import Image from "next/image";
import { HeroSection } from "@/types";
import AnnouncementBanner from "./AnnouncementBanner";
import montserratAlternates from "../fonts.ts/Montserrat_Alternatives";
import Title from "./Title";

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
      className="flex relative min-h-[70vh] items-center overflow-hidden rounded-br-full bg-accent"
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
        <h1 className="text-6xl text-white font">{heading}</h1>
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
    </section>
  );
};

export default Hero;
