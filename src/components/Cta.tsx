import { CtaItems } from "@/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  data: CtaItems;
};

const Cta = ({ data }: Props) => {
  const { ctaItems, heading } = data;
  return (
    <section id="schedule-appointment" className="py-16 bg-primary-gray flex flex-col justify-center items-center gap-4">
      <div className="max-w-7xl w-[90vw] mx-auto flex flex-col gap-8">
        <h3 className="font-bold text-primary-brown text-2xl md:text-center">{heading}</h3>
        <div className="flex flex-col gap-10">
          {ctaItems.map((ctaItem) => {
            const href = ctaItem.url ? ctaItem.url : `mailto:${ctaItem.email}`;
            return (
              <div
                key={ctaItem._key}
                className="flex flex-col items-center justify-center gap-4"
              >
                <h4 className="font-semibold text-xl">{ctaItem.label}</h4>
                <Link
                  href={href}
                  className="flex gap-4 items-center px-4 py-2 rounded-md bg-accent text-white"
                >
                  {ctaItem.ctaText} <FaArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cta;
