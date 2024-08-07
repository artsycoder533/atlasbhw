import { Resource } from "@/types";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import DownloadButton from "./DownloadButton";

type Props = {
  resource: Resource;
};
const ResourceItem = ({ resource }: Props) => {
  const { title, description, urlLabel, url, file, fileLabel } = resource;
  const fileURL = file?.asset.url;

  return (
    <div className="flex flex-col gap-2 p-10 rounded-2xl bg-primary-brown/15">
      <h3 className="text-2xl">{title}</h3>
      <PortableText value={description} />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {url ? (
          <Link
            href={url}
            className="flex justify-between items-center gap-4 px-3 py-2 rounded-md bg-primary-brown text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {urlLabel} <FaExternalLinkAlt />
          </Link>
        ) : null}
        {fileURL && fileLabel ? (
          <DownloadButton label={fileLabel} url={fileURL} />
        ) : null}
      </div>
    </div>
  );
};

export default ResourceItem;
