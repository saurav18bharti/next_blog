import Image from "next/image";
import React from "react";
import image from "@/app/assests/Image.jpg";
import { ContentWrapper } from "@/app/component/ContentWrapper";
import { Card } from "@/app/component/Card";

export const Home = () => {
  return (
    <div className="app-content lg:px-32 xl:px-0 md:px-8">
      <div className="flex justify-center mt-2 relative">
        <Image
          src={image}
          alt="logo"
          className=" rounded-lg w-full flex-grow"
        />
        <div className="absolute md:-bottom-12 lg:-bottom-16 xl:-bottom-14 md:left-8 lg:left-11 xl:max-w-auto max-w-[60%] w-fit xl:left-16 bg-white dark:bg-bg_custom_colors border-1 border-gray-200 dark:border-gray-800 dark:text-white p-7 lg:p-10  rounded-2xl shadow-lg ">
          <span>
            <p className="bg-custom_blue_colrs w-fit py-1 px-3 rounded-lg text-white text-xs lg:text-[14px]">
              Technology
            </p>
            <p className="xl:text-[34px] lg:text-[25px] text-lg pb-2 md:pt-3 2xl:pt-4 2xl:pr-3 font-bold md:leading-6 lg:leading-7 xl:leading-10 leading-10 ">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </span>
          <span className="flex items-center text-custom_text_grey_color gap-3  lg:pt-1 2xl:pt-4 md:text-[13px] lg:text-[14px] xl:text-base">
            <Image
              src={image}
              alt="logo"
              width={40}
              className="rounded-3xl lg:h-10 lg:w-10 md:h-8 md:w-8"
            />
            <p>Delta4 InfoTech</p>
            <p>25 June ,2024</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full ">
          <p className="dark:text-white pb-3 pt-32  font-extrabold md:text-[16px] text-[24px]">
            Latest Post
          </p>
          <Card />
        </div>

        <p className="dark:text-custom_text_grey_color text-gray-500 border dark:border-gray-800 border-gray-200 w-fit md:py-2 md:px-3 md:mt-8  lg:py-3 lg:px-5 rounded-lg font-medium  text-center">
          View All Post
        </p>
      </div>
    </div>
  );
};
