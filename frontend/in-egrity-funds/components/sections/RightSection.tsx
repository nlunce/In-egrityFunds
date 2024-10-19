import React from "react";
import ClientImage from "../ClientImage";

export interface RightSectionProps {
  content: {
    paragraph: string;
    header: string;
    headerHighlight: string;
  };
  image: string;
  imageAlt: string;
}

const RightSection: React.FC<RightSectionProps> = ({
  content,
  image,
  imageAlt,
}) => {
  return (
    <section className="relative mb-10 flex min-h-[250px] max-w-full flex-col justify-between md:pb-5 md:pt-20 lg:flex-row lg:py-20">
      <div className="relative h-[230px] w-[90%] sm:h-[260px] sm:w-[80%] md:h-[400px] md:w-[70%] lg:h-[605px] lg:w-[50%]">
        <ClientImage
          src={image} // Include the folder name in the src
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 50vw"
          className="rounded-r-full"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            boxShadow: "45px 0 80px -6px rgba(0, 0, 0, 0.2)",
          }}
          loading="eager"
          priority={true}
          quality={100}
        />
      </div>
      <div className="ml-auto mt-10 flex w-[80%] flex-col px-4 pr-8 text-right sm:w-2/3 lg:mr-20 lg:mt-0 lg:w-[35%] lg:justify-center lg:pt-0 lg:text-left xl:mr-36">
        <h2 className="text-3xl font-black leading-7 sm:text-4xl lg:leading-tight xl:text-5xl">
          {content.header}
          <br />
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            {content.headerHighlight}
          </span>
        </h2>
        <p className="my-2 pl-1 text-sm font-normal text-gray-800 lg:text-xl xl:text-2xl">
          {content.paragraph}
        </p>
      </div>
    </section>
  );
};

export default RightSection;