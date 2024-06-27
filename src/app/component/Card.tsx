import Image from "next/image";
import React, { Suspense } from "react";
import data from "../data.json";
import { work_sans } from "../font";
import CustomSkeleton from "./CustomSkeleton";
import Loading from "../loading";

export const Card = () => {
  return (
    <div
      className={`mt-4 flex flex-col justify-center items-center gap-6 ${work_sans.className}`}
    >
      <div className="w-full">
        <Suspense fallback={<CustomSkeleton />}>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {data.map((item, index) => (
              <div key={index}>
                <div
                  className="card_container flex flex-col gap-3 border rounded-xl p-3 dark:border-gray-700 border-gray-200 "
                  key={index}
                >
                  <Image
                    src={item.img}
                    alt="logo"
                    width={800}
                    height={80}
                    className="rounded-lg"
                  />
                  <p className="font-medium text-technology_text_color text-[14px] py-1 px-3 bg-blue-50 dark:bg-gray-950 dark:text-opacity-80 w-fit rounded-lg">
                    Technology
                  </p>
                  <p className="dark:text-white font-semibold text-[24px] leading-7 tracking-tight">
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                  </p>
                  <span className="flex items-center text-custom_text_grey_color gap-3  pb-2">
                    <Image
                      src={item.img}
                      alt="logo"
                      width={40}
                      height={100}
                      className="rounded-3xl h-10"
                    />
                    <p className="font-medium">Delta4 InfoTech</p>
                    <p>25 June ,2024</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};
