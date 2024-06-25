import Image from "next/image";
import React from "react";
import imgage from "../assests/Image.jpg";
import data from '../data.json'
import { Card } from "../component/Card";

export const Home = () => {
  return (
    <div className="">

 
      <div className="flex justify-center mt-3 relative">
        <div>

        <Image src={imgage} alt="logo" width={1000} height={100} className="rounded-3xl" />
        </div>
        <div className="absolute bottom-0 left-36 top-80   bg-bg_custom_colors w-31rem h-64 border-1 border-gray-800 dark:text-white py-6 px-6 pb-1 rounded-2xl  ">
            <span>
                <p className="bg-custom_blue_colrs w-fit py-1 px-3 rounded-lg text-[14px]">Technology</p>
                <p className="text-[30px] pb-2 pt-1 font-semibold pr-3">The Impact of Technology on the Workplace: How Technology is Changing</p>
            </span>
            <span className="flex items-center dark:text-custom_text_grey_color gap-3 text-[14px]">
                <Image src={imgage} alt="logo" width={40}  className="rounded-3xl h-10" />
                <p>Delta4 InfoTech</p>
                <p>25 June ,2024</p>
            </span>
        </div>
      </div>

      <div className="mt-60 flex flex-col justify-center items-center gap-6">
        <div>
        <p className="dark:text-white pb-6 ml-36 font-semibold">Latest Post</p>
        <div className="flex flex-wrap gap-4 justify-center items-center ">
            {data.map((item,index) => (
                <div key={index} className="shrink" >
                <Card  id={item.id} image={item.img}/>
                </div>
            ))}
        </div>

        </div>
        <p className="dark:text-custom_text_grey_color border border-gray-800 w-fit py-1 px-3 rounded-lg text-[14px]  text-center">View All Post</p>
      </div>
    </div>
  
  );
};
