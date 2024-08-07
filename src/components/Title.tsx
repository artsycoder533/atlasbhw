import montserratAlternates from "@/fonts.ts/Montserrat_Alternatives";

type Props = {
  title: string;
  size: "sm" | "md" | "lg";
  altColor?: boolean;
};

const Title = ({ title, size, altColor }: Props) => {
  return (
    <div className="flex mt-4">
      {size === "sm" && (
        <p className="text-primary-gray uppercase relative mb-4 font-bold tracking-wide text-lg">
          {title}{" "}
          <span className="absolute left-0 -bottom-1 bg-accent h-[3px] w-full md:w-10" />
        </p>
      )}
      {size === "lg" && (
        <h2 className={`w-[90vw] md:w-auto mx-auto relative flex ${montserratAlternates.className} ${altColor ? 'text-white' : 'text-primary-brown'} font-bold tracking-wide text-4xl md:text-5xl mb-4`}>
          {title}
          <span className="hidden sm:block absolute bottom-0 left-0 bg-accent h-[3px] w-36"></span>
        </h2>
      )}
    </div>
  );
};

export default Title;
