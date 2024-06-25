import React from "react";
import { ContentWrapper } from "./ContentWrapper";

export const Footer = () => {
  return (
    <div className="bg-custom_footer_colors mt-36 ">
      <ContentWrapper>
        <div>
          <div>
            <span className="dark:text-white">
              About
              <p className="text-custom_text_grey_color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur ea, nemo recusandae vitae beatae incidunt
                aut obcaecati sequi, quis cumque reiciendis fugiat enim eos quae
                non. Sint, enim adipisci.
              </p>
            </span>
            <p>
              <span className="dark:text-white">Email:</span>
              delta4.infotech@gmail.com
            </p>
            <p>
              <span className="dark:text-white">Phone:</span>9867********
            </p>
          </div>
          <div>
            <p className="dark:text-white">Quick Links</p>
            <ul className="dark:text-custom_text_grey_color">
              <li>Home </li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="dark:text-white">Quick Links</p>
            <ul className="dark:text-custom_text_grey_color">
              <li>Home </li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div></div>
            <div>
              <input type="text" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div></div>
      </ContentWrapper>
    </div>
  );
};
