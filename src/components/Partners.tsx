import { PartnerGroup } from "@/types";
import Image from "next/image";
import Title from "./Title";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  data: PartnerGroup;
};

const Partners = ({ data }: Props) => {
  const { title, content } = data;
  return (
    <section className="py-10 pb-12 max-w-7xl mx-auto w-[90vw]">
      <Title title={title} size="lg" />
      <div className="flex flex-wrap gap-6">
        {content.map((partner) => {
          const { logo, companyName } = partner;
          return (
            <div
              key={partner._key}
              className="flex flex-col items-center justify-center pt-6"
            >
              <Image
                src={urlForImage(logo)}
                alt={companyName}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
