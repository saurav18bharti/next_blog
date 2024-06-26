import { ContentWrapper } from "@/app/component/ContentWrapper";
import { Header } from "@/app/component/Header";
import Image from "next/image";
import image from "../../assests/Image.jpg";
import singlepost1 from "../../assests/singlepost1.jpg";
import singlepost2 from "../../assests/singlepost2.jpg";
import React from "react";
import { Footer } from "@/app/component/Footer";
import data from './data.json'

const SinglePost = () => {
  return (
    <>
      <ContentWrapper>
        <Header />
        <div className="flex flex-col gap-4 justify-center px-40 pt-10">
          <p className="bg-custom_blue_colrs w-fit py-1 px-3 rounded-lg text-[14px]">
            Technology
          </p>
          <p className="dark:text-white text-[36px] font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <span className="flex items-center text-custom_text_grey_color gap-3 text-[14px]">
            <Image
              src={image}
              alt="logo"
              width={40}
              className="rounded-3xl h-10"
            />
            <p>Delta4 InfoTech</p>
            <p>25 June ,2024</p>
          </span>
          <Image
            src={singlepost1}
            alt="logo"
            width={1000}
            height={100}
            className="rounded-3xl w-full"
          />
          <div className="font-serif flex flex-col gap-3">
            <p className="text-[18px] dark:text-custom_text_grey_color">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you dont plan and prepare adequately.
              In this blog article, we will explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>
            <br />
            <p className="text-[18px] dark:text-custom_text_grey_color">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          
         
         {
          data[1].map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <p className="dark:text-white font-sans font-semibold text-[24px]">{item.topic}</p>
              <span className="dark:text-custom_text_grey_color text-[18px] font-serif leading-7">
                {item.description}
              </span>
              </div>
          ))
         }
            <p className="dark:text-white p-8 bg-gray-100 dark:bg-custom_gray_colors bg-cus rounded-lg border-3 border-r-0 border-t-0 border-b-0 font-serif my-4"><i> “ Traveling can expose you to new environments and potential health risks, so its crucial to take precautions to stay safe and healthy. ”</i></p>
            </div>

            
            <Image
            src={singlepost2}
            alt="logo"
            width={1000}
            height={100}
            className="rounded-3xl w-full"
          />

            {data[0].map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="dark:text-white font-sans font-semibold text-[24px]">{item.topic}</p>
                <span className="dark:text-custom_text_grey_color text-[18px] font-serif leading-7">
                  {item.description}
                </span>
                </div>
            ))}
            
          
        </div>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default SinglePost;
