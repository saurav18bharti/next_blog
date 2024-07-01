import { ContentWrapper } from "@/app/component/ContentWrapper";
import Image from "next/image";
import image from "@/app/assests/Image.jpg";
import singlepost1 from "@/app/assests/singlepost1.jpg";
import singlepost2 from "@/app/assests/singlepost2.jpg";
import React from "react";
import data from "../data.json";

const SinglePost = ({ params }: { params: { slug: string } }) => {
  return (
    <>
  
 
        <div className=" app-content md:px-36 lg:px-52 xl:px-60 flex flex-col gap-4 justify-center px-48 ">
          <div className={`font-work_sans`}>
            <p className="bg-custom_blue_colrs w-fit py-[6px] px-4   rounded-lg md:text-[12px] lg:text-[14px] text-white ">
              Technology
            </p>
            <p className="dark:text-white md:text-[32px] lg:text-[36px] font-semibold leading-10 pt-4">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <span className="flex items-center text-custom_text_grey_color gap-3 text-[14px] py-4">
              <Image
                src={image}
                alt="logo"
                width={30}
                className="rounded-3xl h-8"
              />
              <p className="text-[14px] font-medium text-gray-500">
                Delta4 InfoTech
              </p>
              <p className="text-gray-500">25 June ,2024</p>
            </span>
          </div>
          <Image
            src={singlepost1}
            alt="logo"
            width={1000}
            height={100}
            className="rounded-3xl w-full"
          />

          <div className={` text-single_post_text_color pt-3`}>
            <div className="font-serif flex flex-col gap-3">
              <p className="md:text-[16px] lg:text-[20px] dark:text-custom_text_grey_color font-source">
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you dont plan and prepare
                adequately. In this blog article, we will explore tips and
                tricks for a memorable journey and how to make the most of your
                travels.
              </p>
              <br />
              <p className="md:text-[16px] lg:text-[20px] dark:text-custom_text_grey_color font-source">
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>

              {data[1].map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <p
                    className={`dark:text-white text-single_post_topic_text_color pt-4 font-semibold md:text-[22px] lg:text-[24px]  font-work_sans`}
                  >
                    {item.topic}
                  </p>
                  <span
                    className={`dark:text-custom_text_grey_color md:text-[16px] lg:text-[20px] md:leading-6 lg:leading-8 font-source`}
                  >
                    {item.description}
                  </span>
                </div>
              ))}
              <p
                className={`dark:text-white py-9  pl-6 pr-8 bg-gray-100 dark:bg-custom_gray_colors bg-cus rounded-lg border-3 border-r-0 border-t-0 border-b-0 my-4 md:text-[19px]text-[23px] text-single_post_topic_text_color leading-7 font-source`}
              >
                <i>
                  {" "}
                  “ Traveling can expose you to new environments and potential
                  health risks, so its crucial to take precautions to stay safe
                  and healthy. ”
                </i>
              </p>
            </div>

            <Image
              src={singlepost2}
              alt="logo"
              width={1000}
              height={100}
              className="rounded-3xl w-full"
            />

            {data[0].map((item, index) => (
              <div key={index} className="flex flex-col gap-3 pt-3">
                <p
                  className={`dark:text-white text-single_post_topic_text_color pt-4 font-semibold md:text-[22px] lg:text-[24px] font-work_sans`}
                >
                  {item.topic}
                </p>
                <span
                  className={`dark:text-custom_text_grey_color md:text-[16px] lg:text-[20px]  md:leading-6 lg:leading-8 font-source`}
                >
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>

    </>
  );
};

export default SinglePost;
