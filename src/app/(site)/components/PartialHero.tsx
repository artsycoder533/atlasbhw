import React from "react";
import Title from "./Title";
import { HeroPartial } from "@/types";
import Image from "next/image";
import { urlFor } from "@/utils/helper";

type Props = {
  data: HeroPartial;
};

const PartialHero = ({ data }: Props) => {
  return (
    <section className="relative flex justify-center items-center h-72 w-full mt-20">
      <div className="absolute inset-0">
        <Image
          src={urlFor(data.backgroundImage).url()}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <Title title={data.heading} size="lg" altColor/>
    </section>
  );
};

export default PartialHero;
