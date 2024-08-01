import { Staff } from "@/types";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/helper";
import Link from "next/link";

type Props = {
  staff: Staff;
};

const StaffMember = ({ staff }: Props) => {
  const { name, headshot, credentials, role, specialties, ehrLink } = staff;
  return (
    <section className="flex gap-10 w-full rounded-xl py-6">
      <div className="w-64 h-72 relative rounded-xl ">
        <Image
          src={urlFor(headshot).url()}
          alt={`headshot of ${name}`}
          fill
          className="rounded-xl object-cover w-full"
        />
      </div>
      <div className="flex flex-col basis-1/2">
        <h3 className="text-2xl font-medium mb-2">{name}</h3>
        <p className="font-light text-gray-600 capitalize text-lg">{`${role}, ${credentials}`}</p>
        <p className="mt-8 mb-2 font-medium">Specialties:</p>
        <ul className=" flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <li key={specialty} className="py-1 px-3 bg-gray-100 rounded-xl text-sm">{specialty}</li>
          ))}
        </ul>

        <Link
          href={ehrLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-accent text-white rounded-xl mt-auto self-start"
        >
          {ehrLink.label}
        </Link>
      </div>
    </section>
  );
};

export default StaffMember;
