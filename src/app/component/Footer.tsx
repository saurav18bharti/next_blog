"use client"
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "./ContentWrapper";
import Image from "next/image";
import logo from '../assests/Logo.png'
import logolightmode from '../assests/logolightmode.svg'
import useDarkMode from "../clientui/useDarkMode";

export const Footer = () => {
  const {isDarkMode}= useDarkMode();


  return (
    <div className="dark:bg-custom_footer_colors  bg-custom_light_footer_colors mt-36 ">
      <ContentWrapper>
        <div className=" py-12 flex flex-col gap-14 ">
       
        <div className="flex justify-between items-center">
          <div className="w-64 flex flex-col gap-4">
            <span className="dark:text-white flex flex-col gap-4 font-semibold">
              About
              <p className="text-custom_text_grey_color text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur ea
              </p>
            </span>
            <span>

            <div className="flex gap-1 ">
              <span className="dark:text-white">Email :</span>
             <p className="dark:text-custom_text_grey_color text-[14px]">delta4.infotech@gmail.com</p> 
            </div>
            <div className="flex mt-1 gap-1">
              <span className="dark:text-white">Phone :</span> <p className="dark:text-custom_text_grey_color text-[14px]">9867********</p>
            </div>
            </span>
          </div>
          <div className="flex justify-around gap-20">
            <div className="flex flex-col gap-4">
              <p className="dark:text-white font-semibold">Quick Links</p>
              <ul className="dark:text-custom_text_grey_color text-[14px]  flex flex-col gap-1">
                <li>Home </li>
                <li>About</li>
                <li>Blog</li>
                <li>Archived</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="dark:text-white font-semibold">Quick Links</p>
              <ul className="dark:text-custom_text_grey_color text-[14px] flex flex-col gap-1">
                <li>Home </li>
                <li>About</li>
                <li>Blog</li>
                <li>Archived</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center dark:bg-custom_gray_colors bg-white p-4 rounded-lg">
            <div className="dark:text-white text-[14px]">
              <p className="text-center text-black font-semibold dark:text-white">Weekly Newsletter</p>
              <p className="text-custom_text_grey_color mt-1">Subscribe to our weekly newsletter</p>
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="Your Email" className="w-60 h-9 border border-gray-700 rounded-md outline-none pl-3 text-[12px] bg-custom_footer_colors text-white" />
              <button className="dark:text-white bg-custom_blue_colrs h-9 rounded-md text-[12px]">subscribe</button>
            </div>
          </div>
        </div>
          
        <div className="empty_border border border-b-0 dark:border-gray-800 border-gray-300  mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 flex-col justify-between">
           { isDarkMode  ? <Image src={logo} alt="logo" width={150} height={36} className="" /> : <Image src={logolightmode} alt="logo" width={150} height={36} className="" />} 
            <p className="dark:text-white text-[14px]">© <span className="font-semibold">JS Template</span> <span className="dark:text-custom_text_grey_color">2023. All Rights Reserved</span> </p>
          </div>
          <div className="flex dark: text-gray-500 text-[14px] gap-3 justify-center ">    
            <p>Term of Use</p>
            <div className="empty_border border border-r-0 dark:border-gray-800 border-gray-300   w-0 h-auto"></div>
            <p>Term of Use</p>
            <div className="empty_border border border-r-0 dark:border-gray-800 border-gray-300  w-0 h-auto"></div>
            <p>Term of Use</p>
          </div>
        </div>

        </div>
     
      </ContentWrapper>
    </div>
  );
};
