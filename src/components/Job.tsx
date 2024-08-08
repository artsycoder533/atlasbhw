import { JobListing } from "@/types";
import { PortableText } from "next-sanity";
import React from "react";
import JobApplicationForm from "./JobApplicationForm";

type Props = {
  data: JobListing;
};

const Job = ({ data }: Props) => {
  const {
    title,
    pay,
    supplementalPay,
    description,
    schedule,
    workLocation,
    certification,
    benefits,
    responsibilities,
    requestCoverLetter,
    requestResume
  } = data;

  if (!data) {
    return (
      <p className="py-16 max-w-prose w-[90vw] mx-auto">
        We do not have any openings at this time.
      </p>
    );
  }
  return (
    <section className="py-16 mx-auto prose max-w-prose w-[90vw]">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <PortableText value={description} />
      <h3>Responsibilities:</h3>
      <PortableText value={responsibilities} />
      <h3>Pay:</h3>
      <p>{pay}</p>
      <h3>Benefits:</h3>
      <PortableText value={benefits} />
      <h3>Schedule:</h3>
      <PortableText value={schedule} />
      <h3>Supplemental Pay Types:</h3>
      <PortableText value={supplementalPay} />
      <h3>License/Certification:</h3>
      <p>{certification}</p>
      <h3>Work Location:</h3>
      <p>{workLocation}</p>

      <div>
        <h2>Job Application</h2>
        <p>* Denotes field is required</p>
        <JobApplicationForm requestResume={requestResume} requestCoverLetter={requestCoverLetter} />
      </div>
    </section>
  );
};

export default Job;
