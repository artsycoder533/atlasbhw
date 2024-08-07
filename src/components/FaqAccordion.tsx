import { FAQS } from "@/types";
import React from "react";
import Title from "./Title";
import { PortableText } from "next-sanity";

type Props = {
  data: FAQS;
};

const FaqAccordion = ({ data }: Props) => {
  const { title, faqsList } = data;

  return (
    <section className="border py-12">
      <div className="flex justify-center">
        <Title title={title} size="lg" />
      </div>

      <div className="max-w-prose mx-auto space-y-2 py-10">
        {faqsList.map((faq) => {
          return (
            <details className="p-6" key={faq._key}>
              <summary className="">{faq.question}</summary>
              <div className="py-4">
                <PortableText value={faq.answer} />
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default FaqAccordion;
