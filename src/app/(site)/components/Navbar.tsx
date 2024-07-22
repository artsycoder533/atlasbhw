"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RotatingHamburger from "./RotatingHamburger";
import { useEffect } from "react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "../../../../sanity/env";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

type Link = {
  label: string;
  slug: {
    current: string;
    type: string;
  };
  slugType: string;
  isDropdown: boolean;
  dropdownLinks: Link[];
  isCTA: boolean;
  _id: string;
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
    <nav className="flex items-center justify-between max-w-[1400px] flex-col lg:flex-row lg:w-full mx-auto">
      <div className="flex items-center justify-between w-full lg:w-auto">
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
          "p-4 py-8 lg:p-0 flex flex-col lg:flex-row gap-12 lg:gap-8 lg:items-center w-full lg:w-auto lg:justify-end absolute lg:static top-[76px] left-0 right-0 h-[calc(100vh-76px)] lg:h-auto bg-white transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] lg:translate-x-0")
        }
      >
        {links.map((link: Link) => {
          const {
            label,
            isDropdown,
            dropdownLinks,
            isCTA,
            slug,
            slugType,
            _id,
          } = link;
          const { current } = slug;

          let href;
          if (slugType === "relativeUrl") {
            href = `/${current}`;
          } else if (slugType === "externalUrl") {
            href = current;
          } else if (slugType === "anchorLink") {
            href = `/#${current}`;
          } else {
            href = "";
          }
          if (isDropdown && dropdownLinks.length > 0) {
            return (
              <li
                key={label}
                className="relative text-xl lg:text-base text-primary-text hover:text-accent"
              >
                <button
                  onClick={() => toggleDropdown(label)}
                  className="flex gap-2 items-center"
                >
                  {label}
                  {openDropdown === label ? (
                    <BiCaretUp className="text-xl" />
                  ) : (
                    <BiCaretDown className="text-xl" />
                  )}
                </button>
                <ul
                  className={`lg:w-[250px] lg:absolute top-full left-0 mt-2 flex flex-col gap-2 lg:border bg-white text-primary-text rounded-md transition-all ${openDropdown === label ? "block" : "hidden"}`}
                >
                  {dropdownLinks?.map((dropdownLink) => {
                    const { label, slug, slugType, _id } = dropdownLink;
                    const { current } = slug;

                    let href;
                    if (slugType === "relativeUrl") {
                      href = `/${current}`;
                    } else if (slugType === "externalUrl") {
                      href = current;
                    } else if (slugType === "anchorLink") {
                      href = `/#${current}`;
                    } else {
                      href = "";
                    }
                    return (
                      <li key={_id}>
                        <Link
                          href={href}
                          className="flex px-4 py-2 hover:bg-gray-100 hover:text-accent"
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
            <li key={_id}>
              <Link
                className={`text-xl lg:text-base py-2 text-primary-text hover:text-accent ${isCTA ? "bg-accent px-4 py-3 font-medium text-white hover:bg-primary-brown hover:text-white" : "bg-none"}`}
                href={href}
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
