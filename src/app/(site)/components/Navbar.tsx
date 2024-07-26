"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RotatingHamburger from "./RotatingHamburger";
import { useEffect } from "react";
import { SanityDocument } from "next-sanity";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { MenuItem } from "@/types";
import { urlFor } from "@/utils/helper";

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
        {links.map((link: MenuItem) => {
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
          if (isDropdown && dropdownLinks.length > 0) {
            return (
              <li
                key={_id}
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
                  className={`lg:w-[250px] lg:absolute top-full left-0 mt-2 flex flex-col gap-2 lg:border bg-white text-primary-text rounded-md transition-all ${
                    openDropdown === label ? "block" : "hidden"
                  }`}
                >
                  {dropdownLinks?.map((dropdownLink) => {
                    let href = "";
                    switch (dropdownLink.slugType) {
                      case "relativeUrl":
                        href = `/${current}/${dropdownLink.slug.current}`;
                        break;
                      case "externalUrl":
                        href = dropdownLink.slug.current;
                        break;
                      case "anchorLink":
                        href = `/${current}/#${dropdownLink.slug.current}`;
                        break;
                    }
                    return (
                      <li key={_id}>
                        <Link
                          href={href}
                          className="flex px-4 py-2 hover:bg-gray-100 hover:text-accent"
                        >
                          {dropdownLink.label}
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
                className={`text-xl lg:text-base py-2 text-primary-text hover:text-accent ${
                  isCTA
                    ? "bg-accent px-4 py-3 font-medium text-white hover:bg-primary-brown hover:text-white"
                    : "bg-none"
                }`}
                href={slug.current}
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
