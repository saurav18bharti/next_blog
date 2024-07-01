"use client"
import Image from "next/image";
import React, { Suspense } from "react";
import data from "../data.json";
import { work_sans } from "../font";
import CustomSkeleton from "./CustomSkeleton";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Card = () => {
  const router = useRouter();
  function truncateWords(text:string) {
    const words = text.split(' ');
    // console.log(words, "words")
    const text2 = words[2] + "-" + words[3];
    router.push(`/blog/${text2.toLowerCase()}`)

  }
  

  return (
    <div
      className={`mt-4 flex flex-col justify-center items-center gap-6 ${work_sans.className}`}
    >
      <div className="w-full">
        <Suspense fallback={<CustomSkeleton />}>
          <div className="grid lg:grid-cols-3 lg:gap-3 grid-cols-2 gap-4 2xl:gap-5">
            {data.map((item, index) => (
              <div key={index}>
                <Link
                 href={`/blog/${item.slug}`} className="card_container flex flex-col gap-3 border rounded-xl p-3 dark:border-gray-700 border-gray-200 cursor-pointer"
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
                  <p className="dark:text-white font-semibold lg:text-[18px] xl:text-[24px] text-[19px] leading-7 tracking-tight">
                  {item.topic}
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
                </Link>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};
