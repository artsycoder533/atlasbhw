import { JobListing } from "@/types";
import { PortableText } from "next-sanity";
import React from "react";

type Props = {
  data: JobListing;
};

const Job = ({ data }: Props) => {
  console.log("data ====>", data);
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
  } = data;

  if (!data) {
   return <p>We do not have any openings at this </p>;
  }
  return (
    <section className="py-16 mx-auto prose max-w-prose">
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
        <form
          action=""
          className="w-[90vw] max-w-prose flex flex-col"
        >
      
            <h2>Job Application</h2>
            <p>* Denotes field is required</p>
   

          <div className="flex flex-col mb-3">
            <label htmlFor="name">Name: *</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border p-1"
              placeholder="name"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="email">Email: *</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border p-1"
              placeholder="name@email.com"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="phone">Phone: *</label>
            <input
              type="phone"
              placeholder="(XXX)-XXX-XXXX"
              className="border p-1"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="coverLetter">Cover Letter: *</label>
            <input
              type="file"
              name="coverLetter"
              className="border p-1"
              id="coverLetter"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="resume">Resume: *</label>
            <input type="file" name="resume" id="resume" className="border p-1" />
          </div>

          <button className="px-4 py-2 mt-6 border self-start">Apply</button>
        </form>
      </div>
    </section>
  );
};

export default Job;
