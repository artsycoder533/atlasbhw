import { ContactInfoSection } from "@/types";
import Title from "./Title";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { FaClock, FaLocationPin } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import React from "react";

type Props = {
  data: ContactInfoSection;
};

const ContactInfo = ({ data }: Props) => {
  const {
    fax,
    address,
    officeHours,
    phoneNumber,
    companyName,
    companyEmail,
    socialMediaLinks,
  } = data;
  const { streetAddress, addressLine2, city, state, postalCode } = address;
  console.log("data ====>", data);

  return (
    <section className="py-10 bg-primary-brown">
      <div className="flex max-w-screen-2xl mx-auto w-[90vw]">
        <div className="w-1/3 flex items-center">
          <Title title="Get In Touch" size="lg" altColor />
        </div>
        <div className="w-2/3">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="flex items-center gap-2 mb-3">
                <MdLocationPin /> Address
              </h3>
              <address>
                {companyName} <br />
                {streetAddress} <br />
                {addressLine2} <br />
                {city}, {state} {postalCode}
              </address>
            </div>
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FaClock /> Office Hours
              </h3>
              <p>Monday: {officeHours.monday}</p>
              <p>Tuesday: {officeHours.tuesday}</p>
              <p>Wednesday: {officeHours.wednesday}</p>
              <p>THursday: {officeHours.thursday}</p>
              <p>Friday: {officeHours.friday}</p>
              <p>Saturday: {officeHours.saturday}</p>
              <p>Sunday: {officeHours.sunday}</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold mb-3">Contact Us:</h3>
              <p>Telephone: {phoneNumber}</p>
              <p>Fax: {fax}</p>
              <p>Email: {companyEmail}</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-between">
              <h3 className="font-semibold flex">Follow Us:</h3>
              <ul className="flex justify-around items-center">
                {socialMediaLinks.map((socialMedia, index) => (
                  <React.Fragment key={index}>
                    {socialMedia?.linkedIn && (
                      <li className="flex justify-between text-2xl">
                        <Link
                          href={socialMedia.linkedIn}
                          className="text-accent"
                        >
                          <FaLinkedin />
                        </Link>
                      </li>
                    )}
                    {socialMedia?.facebook && (
                      <li className="flex justify-between text-2xl">
                        <Link
                          href={socialMedia.facebook}
                          className="text-accent"
                        >
                          <FaFacebook />
                        </Link>
                      </li>
                    )}
                    {socialMedia?.instagram && (
                      <li className="flex justify-between text-2xl">
                        <Link
                          href={socialMedia.instagram}
                          className="text-accent"
                        >
                          <FaInstagram />
                        </Link>
                      </li>
                    )}
                    {socialMedia?.twitter && (
                      <li className="flex justify-between text-2xl">
                        <Link
                          href={socialMedia.twitter}
                          className="text-accent"
                        >
                          <FaTwitter />
                        </Link>
                      </li>
                    )}
                    {socialMedia?.tiktok && (
                      <li className="flex justify-between text-2xl">
                        <Link href={socialMedia.tiktok} className="text-accent">
                          <FaTiktok />
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
