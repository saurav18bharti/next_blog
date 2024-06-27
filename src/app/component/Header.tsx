"use client";
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "./ContentWrapper";
import Image from "next/image";
import Link from "next/link";
import logo from "../assests/Logo.png";
import search from "../assests/search.svg";
import darkmode from "../assests/darkmode.svg";
import lightmode from "../assests/lightmode.svg";
import logolightmode from "../assests/logolightmode.svg";
import useDarkMode from "../clientui/useDarkMode";
import { work_sans } from "../font";
import "../style/headerstyle.css";
import { useParams, usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const [buttonActive, setButtonActive] = useState<string>("Home");
  // const handleButtonActive = (clicked: string) => {
  //   setButtonActive(clicked);
  // };

  // useEffect(() => {
  //   console.log(buttonActive, "buttonactive");
  // }, [buttonActive]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Post", href: "/singlepost" },
    { name: "Author", href: "/authorpage" },
  ];

  console.log(pathname, "path");

  return (
    <ContentWrapper>

   
    <div className="h-14 flex justify-between items-center py-11 mb-8 ">
      {isDarkMode ? (
        <Image src={logo} alt="logo" className="md:w-24 lg:w-25 2xl:w-auto" />
      ) : (
        <Image
          src={logolightmode}
          alt="logo"
          className=" md:w-24 lg:w-25 2xl:w-auto"
        />
      )}
      <ul
        className={`flex md:gap-3 lg:gap-4  xl:gap-4 2xl:gap-9  text-black dark:text-white font-work_sans`}
      >
        {navItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <li
              className={`${
                pathname === item.href ? "font-bold text-red-500" : ""
              } cursor-pointer`}
              // onClick={() => handleButtonActive(item.name)}
              // className={`cursor-pointer ${
              //   buttonActive === item.name ? "font-bold text-red-500" : ""
              // }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex gap-6">
        <div className="flex relative">
          <input
            type="text"
            placeholder="Search"
            className="lg:w-44  h-9 border-gray-800 rounded-md outline-none pl-3 text-[14px] bg-gray-100 dark:bg-custom_gray_colors dark:text-white font-"
          />
          <Image
            src={search}
            alt="logo"
            width={24}
            height={24}
            className="absolute right-3 pl-2 top-3  "
          />
        </div>
        {isDarkMode ? (
          <Image
            className="cursor-pointer"
            onClick={toggleDarkMode}
            src={darkmode}
            alt="logo"
            width={48}
            height={28}
          />
        ) : (
          <Image
            className="cursor-pointer"
            onClick={toggleDarkMode}
            src={lightmode}
            alt="logo"
            width={48}
            height={28}
          />
        )}
      </div>
    </div>
    </ContentWrapper>
  );
};
