import React from "react";
import { ContentWrapper } from "./ContentWrapper";
import Image from "next/image";
import Link from "next/link";
import logo from "../assests/Logo.png";
import search from "../assests/search.svg";
import darkmode from "../assests/darkmode.svg";


export const Header = () => {
  return (
   
      <div className="h-14 flex justify-between items-center py-12 ">
        <Image src={logo} alt="logo" width={150} height={36} className="w-auto" />
        <div className="">
          <ul className="flex  gap-9 text-[14px] dark:text-white ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/page/singlepost"}>Single Post</Link>
            </li>
            <li>
              <Link href={"/"}>Pages</Link>
            </li>
            <li>
              <Link href={"/page/authorpage"}>Author</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-6">
          <div className="flex relative">
          <input type="text" placeholder="Search" className="w-44 h-9 border-gray-800 rounded-md outline-none pl-3 text-[14px] bg-custom_gray_colors dark:text-white "/>
          <Image src={search} alt="logo" width={24} height={24} className="absolute right-3 pl-2 top-3  "/>

          </div>
          <Image src={darkmode} alt="logo" width={48} height={28} />
        </div>
   
      </div>

  );
};
