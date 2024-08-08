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

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target as HTMLFormElement;
      const formData = new FormData(myForm);
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value.toString());
      });
      const res = await fetch("/__forms.html", {
        method: "POST",
        body: params.toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
        (myForm as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
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
      data-netlify-recaptcha="true"
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
          name="phone"
          id="phone"
          placeholder="(XXX)-XXX-XXXX"
          className="border p-1 rounded-md"
          required
        />
      </div>
      {requestCoverLetter && (
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
      )}
      {requestResume && (
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
      )}
      <div data-netlify-recaptcha="true" />
      <button
        className="px-6 py-2 mt-6 self-start bg-accent text-white rounded-md"
        type="submit"
      >
        Apply
      </button>
      <p className="flex items-center gap-4">
        {status === "ok" ? (
          <>
            Submitted! Thank you for your application! <BiCheckCircle className="text-2xl text-green-500" />
          </>
        ) : null}
      </p>
      <p className="text-red-500">
        {error ? "Error submitting form, please try again" : null}
      </p>
    </form>
  );
};

export default JobApplicationForm;
