import React from "react";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { FOOTER_MENU_QUERY } from "../../../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import Image from "next/image";
import { getYear } from "@/utils/helper";
import Link from "next/link";
import { link } from "fs";

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
  const { copyrightInfo, author, image, title, footerLinks } = footerMenu[0];
  return (
    <footer className="bg-primary-black text-white">
      <div className="flex justify-between max-w-[1400px] mx-auto p-3">
        <div>
          <Image
            src={urlFor(image).width(200).height(219).quality(100).url()}
            alt="placeholder logo"
            width={200}
            height={219}
            className="object-contain"
          />
        </div>
        <div className="flex gap-24">
          {footerLinks.map((item: footerLink) => {
            const { heading, sublinks } = item;

            return (
              <div key={item._key} className="">
                <h4 className="uppercase text-lg font-medium mb-2">{heading}</h4>
                <ul className="space-y-3">
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
      <div className="flex flex-col items-center py-4">
          <p>
            &copy; {getYear()} {copyrightInfo}
          </p>
          <p className="text-sm">
            Made with ♥️ by{" "}
            <Link
              href="https://www.ten23.agency/"
              className="underline"
              target="_blank"
            >
              Ten-23 Agency, LLC
            </Link>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
