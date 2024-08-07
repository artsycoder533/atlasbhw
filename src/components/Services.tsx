import { ServicesSection } from "@/types";
import Link from "next/link";
import { urlFor } from "@/utils/helper";
import Image from "next/image";
import Title from "./Title";

type Props = {
  data: ServicesSection;
};

const Services = ({ data }: Props) => {
  return (
    <section className="py-16" id="services">
      <div className="flex justify-center">
      <Title size="lg" title={data.title} />
      </div>
      <div className="flex justify-center py-10">
        <div className="p-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl">
          {data.servicesList.map((service) => {
            return (
              <Link
                key={service._id}
                href={`/services/${service.slug?.current}`}
                className="flex flex-col w-[300px] h-[300px] p-3"
              >
                <div className="w-full h-full relative rounded-xl">
                  <Image
                    src={urlFor(service.image).quality(90).url()}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-center p-3 border-b border-b-accent rounded-xl">
                  <p className="text-center font-bold">{service.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
