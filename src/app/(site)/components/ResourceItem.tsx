import { Resource } from "@/types";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import { FaDownload, FaExternalLinkAlt, FaLink } from "react-icons/fa";

type Props = {
  resource: Resource;
};
const ResourceItem = ({ resource }: Props) => {
  const {title, description, urlLabel, url, file, fileLabel} = resource
  return (
    <div className="flex flex-col gap-2 border p-10 rounded-2xl bg-primary-brown/15">
      <h3 className="text-2xl">{title}</h3>
      <PortableText value={resource.description}/>
      <div className="flex gap-4">
      {url ? <Link href={url} className="flex gap-2 items-center px-3 py-2 rounded-md bg-primary-brown text-white" target="_blank" rel="noopener noreferrer">{urlLabel} <FaExternalLinkAlt /></Link> : null}
      {file ? <Link href={'/'} className="flex gap-2 items-center px-3 py-2 rounded-md bg-primary-brown text-white" target="_blank" rel="noopener noreferrer">{fileLabel} <FaDownload /></Link> : null}
      </div>
     
      
    </div>
  );
};

export default ResourceItem;
