import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import bannerimg from "../../../public/bannerimg.jpg";
import Link from "next/link";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, refetch } = useGetHeroDataQuery("Banner", {});

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 md:px-8 lg:px-16 py-10">
      {/* Left Side: Text Content */}
      <div className="flex flex-col justify-center items-start md:w-1/2 lg:w-[40%] space-y-6 text-center md:text-left">
        <h1 className="font-Josefin text-[#000000b3] dark:text-[#edfff4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug">
          {data?.layout?.banner?.title}
          Improve Your Online <br />
          Learning Experience <br />
          Better Instantly
        </h1>
        <h3 className="font-Josefin text-[#000000b3] dark:text-[#edfff4] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          We have 40k+ Online courses & 500k+ Online Registered students.
          <br />
          Find Your desired Courses with us.
        </h3>

        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full bg-transparent border border-gray-300 dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-md py-2 px-4 pr-10 outline-none text-[#0000004e] dark:text-[#ffffffe6] text-base sm:text-lg font-medium"
            placeholder="Search Courses"
          />
          <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-500 dark:text-white" />
        </div>

        <p className="font-Josefin text-[#000000b3] dark:text-[#edfff4] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          500k+ People already trusted us.{" "}
          <Link href="/courses" className="text-[crimson] dark:text-[#46e256]">
            View Courses
          </Link>
        </p>
      </div>

      {/* Right Side: Banner Image */}
      <div className="w-full md:w-1/2 lg:w-[40%] flex justify-center md:justify-end items-center pt-10 md:pt-0">
        <Image
          src={data?.layout?.banner?.image?.url || bannerimg}
          width={400}
          height={400}
          className="object-contain rounded-full max-w-full md:max-w-[90%] lg:max-w-[85%] h-auto z-[10]"
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Hero;
