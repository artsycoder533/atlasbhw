import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

type Props = {
  socialMedia: {
    linkedIn: string;
    instagram: string;
    twitter: string;
    facebook: string;
  };
};

const SocialMediaLinks = ({ socialMedia }: Props) => {
  const { linkedIn, facebook, instagram, twitter } = socialMedia;
  return (
    <div className="flex justify-between text-2xl w-48 text-accent">
      {facebook && (
        <FaFacebook
          className={`${!linkedIn && !instagram && !twitter ? "ml-auto" : ""}`}
        />
      )}
      {linkedIn && (
        <FaLinkedin
          className={`${!facebook && !instagram && !twitter ? "ml-auto" : ""}`}
        />
      )}
      {instagram && (
        <FaInstagram
          className={`${!facebook && !linkedIn && !twitter ? "ml-auto" : ""}`}
        />
      )}
      {twitter && (
        <FaTwitter
          className={`${!facebook && !linkedIn && !instagram ? "ml-auto" : ""}`}
        />
      )}
    </div>
  );
};

export default SocialMediaLinks;
