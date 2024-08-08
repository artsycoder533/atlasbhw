"use client";
import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

type Props = {
  requestResume: boolean;
  requestCoverLetter: boolean;
};

const JobApplicationForm = ({ requestCoverLetter, requestResume }: Props) => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("pending");
      const myForm = e.target;
      const formData = new FormData(myForm as HTMLFormElement);

      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value as string);
      });

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (res.status === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (error) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      name="atlasbhw-jobs"
      className="w-[90vw] max-w-prose flex flex-col"
      data-netlify="true"
      hidden
    >
      <div className="flex flex-col mb-3">
        <label htmlFor="name">Name: *</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border p-1 rounded-md"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="email">Email: *</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border p-1 rounded-md"
          placeholder="name@email.com"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="phone">Phone: *</label>
        <input
          type="text"
          placeholder="(XXX)-XXX-XXXX"
          className="border p-1 rounded-md"
          required
        />
      </div>
      {requestCoverLetter ? (
        <div className="flex flex-col mb-3">
          <label htmlFor="coverLetter">Cover Letter: *</label>
          <input
            type="file"
            name="coverLetter"
            className="border p-1 rounded-md"
            id="coverLetter"
            required
            accept=".pdf,.doc,.docx"
          />
        </div>
      ) : null}
      {requestResume ? (
        <div className="flex flex-col">
          <label htmlFor="resume">Resume: *</label>
          <input
            type="file"
            name="resume"
            id="resume"
            className="border p-1 rounded-md"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
      ) : null}
      <div data-netlify-recaptcha="true" />
      <button
        className="px-6 py-2 mt-6 self-start bg-accent text-white rounded-md"
        type="submit"
      >
        {status === "ok" ? (
          <>
            Submitted! <BiCheckCircle className="text-green-500" />
          </>
        ) : (
          "Apply"
        )}
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default JobApplicationForm;
