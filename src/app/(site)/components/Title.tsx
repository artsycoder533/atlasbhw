import React from "react";

type Props = {
  title: string;
  size: "sm" | "lg";
  altColor?: boolean;
};

const Title = ({ title, size, altColor }: Props) => {
  return (
    <div className="flex">
      {size === "sm" && (
        <p className="text-primary-gray uppercase relative mb-4 font-bold tracking-wide text-lg">
          {title}{" "}
          <span className="absolute left-0 -bottom-1 bg-accent h-[3px] w-10" />
        </p>
      )}
      {size === "lg" && (
        <h2 className={`relative inline-block text-center ${altColor ? 'text-white' : 'text-primary-brown'} font-bold tracking-wide text-5xl mb-4`}>
          {title}
          <span className="absolute bottom-0 left-0 bg-accent h-[3px] w-24"></span>
        </h2>
      )}
    </div>
  );
};

export default Title;
