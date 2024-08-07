import { About } from "@/types";
import { PortableText } from "next-sanity";
import React from "react";

type Props = {
  data: About;
};

const ContentSection = ({ data }: Props) => {
  const { missionStatement, teachingSiteStatement } = data;

  return (
    <div className="space-y-12 py-10">
      <section
        id="our-mission"
        className=" flex flex-col md:flex-row items-center max-w-7xl w-[90vw] p-10 rounded-2xl bg-primary-brown/25 mx-auto"
      >
        <div className="md:w-1/2 w-full">
          <h3 className="mb-3 text-2xl">{missionStatement.heading}</h3>
        </div>
        <div className="md:w-1/2 max-w-prose">
          <PortableText value={missionStatement.bodyText} />
        </div>
      </section>
      <section
        id="teaching-site-statement"
        className="flex flex-col md:flex-row items-center max-w-7xl p-10 w-[90vw] rounded-2xl bg-secondary-accent/35 mx-auto"
      >
        <div className="md:w-1/2 w-full">
          <h3 className="mb-3 text-2xl">{teachingSiteStatement.heading}</h3>
        </div>
        <div className="md:w-1/2 max-w-prose">
          <div className="prose">
            <PortableText value={teachingSiteStatement.bodyText} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
