import Image from "next/image";
import React from "react";
import image from "../assests/Image.jpg";

import { Card } from "../component/Card";
import { ContentWrapper } from "../component/ContentWrapper";

export const Home = () => {
  return (
    <ContentWrapper>
    <div className="">
      <div className="flex justify-center mt-2 relative">
        <Image
          src={image}
          alt="logo"
          className=" rounded-lg w-full flex-grow"
        />
        <div className="absolute -bottom-12 left-16   bg-white dark:bg-bg_custom_colors lg:w-2/3  2xl:w-31rem  border-1 border-gray-200 dark:border-gray-800 dark:text-white lg:py-6 2xl:py-10 lg:pl-7 2xl:pl-10 lg:pr-2 2xl:pr-5  rounded-2xl shadow-lg ">
          <span>
            <p className="bg-custom_blue_colrs w-fit py-1 px-3 rounded-lg text-white text-[14px]">
              Technology
            </p>
            <p className="2xl:text-[34px] lg:text-[25px]  pb-2 lg:pt-1 2xl:pt-4   2xl:pr-3 font-bold leading-10">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </span>
          <span className="flex items-center text-custom_text_grey_color gap-3  lg:pt-1 2xl:pt-4">
            <Image
              src={image}
              alt="logo"
              width={40}
              className="rounded-3xl h-10"
            />
            <p>Delta4 InfoTech</p>
            <p>25 June ,2024</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full ">
          <p className="dark:text-white pb-3 pt-32  font-extrabold text-[24px]">
            Latest Post
          </p>
          <Card />
        </div>

        <p className="dark:text-custom_text_grey_color text-gray-500 border dark:border-gray-800 border-gray-200 w-fit py-3 px-5 rounded-lg font-medium  text-center">
          View All Post
        </p>
      </div>
    </div>

    </ContentWrapper>
  );
};
