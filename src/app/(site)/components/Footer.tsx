import React from "react";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { FOOTER_MENU_QUERY } from "../../../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import Image from "next/image";
import { getYear } from "@/utils/helper";
import Link from "next/link";
import Title from "./Title";
import { FaHeart, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

type Link = {
  _key: string;
  label: string;
  linkType: string;
  url: string;
};

type footerLink = {
  heading: string;
  sublinks: Link[];
  _key: string;
};
type Props = {};

const Footer = async (props: Props) => {
  const footerMenu = await sanityFetch<SanityDocument>({
    query: FOOTER_MENU_QUERY,
  });
  const { copyrightInfo, createdBy, creatorWebsite, image, footerLinks } =
    footerMenu[0];

  return (
    <footer className="bg-primary-black text-primary-white py-6">
      <div className="flex flex-col xl:flex-row justify-between max-w-[1400px] mx-auto px-6 2xl:px-0 gap-10">
        <div className="flex self-center justify-between xl:self-start">
          <Image
            src={urlFor(image).width(200).height(219).quality(100).url()}
            alt="placeholder logo"
            width={200}
            height={219}
            className="object-contain"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-24 xl:gap-24 py-3">
          {footerLinks.map((item: footerLink) => {
            const { heading, sublinks } = item;

            return (
              <div key={item._key} className="">
                <Title title={heading} size="sm" />
                <ul className="space-y-4">
                  {sublinks.map((sublink) => (
                    <li key={sublink._key}>
                      <Link href={sublink.url}>{sublink.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-4 mt-3 space-y-2 lg:space-y-0 text-primary-gray max-w-[1400px] mx-auto px-6 2xl:px-0">
        <p className="text-sm">
          &copy; {getYear()} {copyrightInfo}
        </p>
        <div className="flex justify-between text-2xl w-48 text-accent">
          <FaLinkedin />
          <MdEmail />
          <FaPhoneAlt />
        </div>
      </div>
      <p className="text-sm flex gap-1 items-center justify-center">
        Made with <FaHeart className="text-red-700" /> by:
        <Link
          href={creatorWebsite}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {createdBy}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
