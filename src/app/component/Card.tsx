import Image from "next/image";
import React from "react";
import data from "../data.json";

export const Card = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center gap-6">
      <div>
       
        <div className="flex flex-wrap gap-4 justify-center items-center ">
          {data.map((item, index) => (
            <div key={index} className="flex-grow">
              <div
                className="card_container flex flex-col gap-3 w-22rem border rounded-lg p-2 border-gray-700 "
                key={index}
              >
                <Image
                  src={item.img}
                  alt="logo"
                  width={600}
                  height={80}
                  className="rounded-lg"
                />
                <p className="dark:text-technology_text_color text-[10px] py-1 px-2 bg-gray-900 w-fit rounded-sm">
                  Technology
                </p>
                <p className="dark:text-white">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
                <span className="flex items-center dark:text-custom_text_grey_color gap-3 text-[14px] pb-2">
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
