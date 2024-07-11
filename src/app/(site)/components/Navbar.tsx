"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RotatingHamburger from "./RotatingHamburger";
import { useEffect } from "react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import { BiCaretDown } from "react-icons/bi";

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

type Link = {
  label: string;
  url: string;
  isDropdown: boolean;
  dropdownLinks: Link[];
  isCTA: boolean;
};

type Props = {
  navigationMenu: SanityDocument;
};

const Navbar = ({ navigationMenu }: Props) => {
  const { logo, links } = navigationMenu;

  const [open, setOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="flex items-center justify-between max-w-[1400px] flex-col md:flex-row md:w-full mx-auto">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="flex items-center gap-6 flex-row">
          <div className="w-[246px] h-[65px] relative">
            <Image
              src={urlFor(logo).width(246).height(65).quality(100).url()}
              alt="placeholder logo"
              width={246}
              height={65}
            />
          </div>
        </Link>
        <RotatingHamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[76px] left-0 right-0 h-[calc(100vh-76px)] md:h-auto bg-background transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }
      >
        {links.map((link: Link) => {
          const { label, url, isDropdown, dropdownLinks, isCTA } = link;
          if (isDropdown && dropdownLinks.length > 0) {
            return (
              <li key={label} className="relative">
                <button
                  onClick={() => toggleDropdown(label)}
                  className="flex gap-2 items-center"
                >
                  {label}
                  <BiCaretDown />
                </button>
                <ul
                  className={`w-[250px] absolute top-full left-0 mt-2 flex flex-col gap-2 border bg-white rounded-md transition-all ${openDropdown === label ? "block" : "hidden"}`}
                >
                  {dropdownLinks?.map((dropdownLink, idx) => {
                    const { label, url } = dropdownLink;
                    return (
                      <li key={idx}>
                        <Link
                          href={url || ""}
                          className="flex px-4 py-2 hover:bg-gray-100"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
          return (
            <li key={label}>
              <Link
                className={`text-2xl md:text-base hover:underline py-2 text-primary-text hover:text-accent ${isCTA ? 'bg-teal-700 p-4 text-white' : 'bg-none'}`}
                href={url}
                scroll={false}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
