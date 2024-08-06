"use client";

import { FaDownload } from "react-icons/fa";

type Props = {
  label: string;
  url: string;
};

const DownloadButton = ({ label, url }: Props) => {
  const handleDownload = async (fileUrl: string) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Failed to fetch file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      if (!label) return;
      link.download = label; // Name of the file to download

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  return (
    <button
      onClick={() => handleDownload(url)}
      className="flex gap-2 items-center px-3 py-2 rounded-md bg-primary-brown text-white"
    >
      {label} <FaDownload />
    </button>
  );
};

export default DownloadButton;
