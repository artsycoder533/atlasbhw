
"use client"
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
// import logo from "../../../../public/images/circular-logo.svg";
import RotatingHamburger from './RotatingHamburger';
import { useEffect } from "react";
import { SanityDocument } from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url"
import { projectId, dataset } from '../../../sanity/env';

const urlFor = (source: any) =>
    imageUrlBuilder({ projectId, dataset }).image(source)

const navItems = [
  { link: "Home", path: "/" },
  { link: "About", path: "/about" },
  { link: "Services", path: "/services" },
  { link: "Contact", path: "/contact" },
];

type Props = {
    navigationMenu: SanityDocument
}

const Navbar = ({navigationMenu}: Props) => {
    const {logo, links} = navigationMenu;
    
  const [open, setOpen] = useState(false);

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

  return (
    <nav
      className="flex items-center justify-between max-w-[1400px]  flex-col md:flex-row md:w-full mx-auto"
      >
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href='/' className="flex items-center gap-6 flex-row">
          <div className="w-[246px] h-[65px] relative">
             <Image
            src={urlFor(logo).width(246).height(65).quality(100).url()}
            alt="placeholder logo"
            width={246}
            height={65}
            // fill
          />
          </div>
          <h1 className="text-xl font-semibold text-secondary hidden xl:block">
            Classic Header
          </h1>
        </Link>
        <RotatingHamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[76px] left-0 right-0 h-[calc(100vh-76px)] md:h-auto bg-background transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }>
        {links.map((link) => {
          const { label, url } = link;
          return (
            <li key={label}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 text-primary-text hover:text-accent"
                href={url}
                scroll={false}
                onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar
  
  