"use client"
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "./ContentWrapper";
import Image from "next/image";
import logo from "../assests/logoletter.svg";
import logolightmode from '../assests/logoletter.svg'
import footerlogodark from '../assests/footerlogodark.svg'
import message from '../assests/message.svg'
import useDarkMode from "../clientui/useDarkMode";
import { plus_jakarta, work_sans } from "../font";


export const Footer = () => {
  const {isDarkMode}= useDarkMode();


  return (
    <div className="dark:bg-custom_footer_colors  bg-custom_light_footer_colors border-t-1 border-b-0 dark:border-gray-800 border-gray-200 mt-36 ">
      <ContentWrapper>
        <div className={`pt-16 pb-8 flex flex-col gap-8 ${plus_jakarta.className}  justify-center`}>
       
        <div className="flex justify-between items-center pb-8">
          <div className=" flex flex-col gap-8">
            <span className="dark:text-white flex flex-col gap-4 font-bold lg:text-[16px] 2xl:text-[18px]">
              About
              <p className="text-custom_text_grey_color font-normal  w-72 leading-6 lg:text-[14px] 2xl:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aspernatur iure quam numquam necessitatibus cum optio quod recusandae quae,
              </p>
            </span>
            <span>

            <div className=" flex gap-1">
              <span className="dark:text-white flex gap-1 font-bold ">Email :</span> <p className="dark:text-custom_text_grey_color ">delta4.infotech@gmail.com</p> 
        
            </div>
            <div className="flex mt-1 gap-1">
              <span className="dark:text-white font-bold">Phone :</span> <p className="dark:text-custom_text_grey_color ">9867********</p>
            </div>
            </span>
          </div>
          <div className="flex justify-around lg:gap-6 2xl:gap-14">
            <div className="flex flex-col  gap-6">
              <p className="dark:text-white font-bold text-[18px]">Quick Links</p>
              <ul className="dark:text-custom_text_grey_color  flex flex-col  justify-center gap-2">
                <li>Home </li>
                <li>About</li>
                <li>Blog</li>
                <li>Archived</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <p className="dark:text-white font-bold text-[18px]">Quick Links</p>
              <ul className="dark:text-custom_text_grey_color  flex flex-col justify-center gap-2">
                <li>Home </li>
                <li>About</li>
                <li>Blog</li>
                <li>Archived</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className={`flex flex-col gap-8 justify-center items-center dark:bg-custom_gray_colors bg-white rounded-2xl py-8 px-9  ${work_sans.className}`}>
            <div className="dark:text-white">
              <p className={`text-center text-black font-semibold dark:text-white text-[20px]`}>Weekly Newsletter</p>
              <p className="text-gray-500 mt-1 whitespace-nowrap">Subscribe to our weekly newsletter</p>
            </div>
            <div className="flex flex-col gap-2 lg:w-60 2xl:w-80">
              <div className="relative">

              <input type="text" placeholder="Your Email" className=" w-full border dark:border-gray-700 border-gray-200 rounded-md outline-none  py-3 px-2 dark:bg-custom_footer_colors dark:text-white" />
              <Image src={message} alt="logo" width={22} height={5} className="rounded-3xl absolute top-4 right-4"/>
              </div>
              <button className="text-white bg-custom_blue_colrs px-20 py-3 rounded-md ">Subscribe</button>
            </div>
          </div>
        </div>
          
        <div className="empty_border border border-b-0 dark:border-gray-800 border-gray-300  "></div>
        <div className="flex justify-between items-center">
          <div className={`flex gap-2 justify-between${plus_jakarta.className}`}>
           { isDarkMode  ? <Image src={footerlogodark} alt="logo" width={40} height={10} className="" /> : <Image src={logolightmode} alt="logo" width={45} height={10} className="" />} 
           <div>
            <p className="text-[20px]">Meta<span className="font-extrabold">Blog</span></p>
            <p className="dark:text-white">© <span className="font-semibold">JS Template</span> <span className="dark:text-custom_text_grey_color">2023. All Rights Reserved</span> </p>
           </div>
          </div>
          <div className="flex dark:text-white dark:opacity-80 text-gray-800  gap-4 justify-center  font-jakarata dark:font-thin dark:tracking-wide">    
            <p>Term of Use</p>
            <div className="empty_border border border-r-0 dark:border-gray-800 border-gray-200   w-0 h-auto"></div>
            <p>Term of Use</p>
            <div className="empty_border border border-r-0 dark:border-gray-800 border-gray-200  w-0 h-auto"></div>
            <p>Term of Use</p>
          </div>
        </div>

        </div>
     
      </ContentWrapper>
    </div>
  );
};
