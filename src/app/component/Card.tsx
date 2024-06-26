import Image from "next/image";
import React from "react";
import data from "../data.json";

export const Card = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center gap-6">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <div
                className="card_container flex flex-col gap-3 border rounded-lg p-3 dark:border-gray-700 border-gray-200 "
                key={index}
              >
                <Image
                  src={item.img}
                  alt="logo"
                  width={800}
                  height={80}
                  className="rounded-lg"
                />
                <p className="font-medium text-technology_text_color text-[14px] py-1 px-2 bg-gray-100 dark:bg-gray-900 w-fit rounded-sm">
                  Technology
                </p>
                <p className="dark:text-white font-bold text-[24px]">
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
                  <p>Delta4 InfoTech</p>
                  <p>25 June ,2024</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
