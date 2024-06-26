import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        "16px":"16px"
      },
      width:{
        "31rem":"36.8rem",
        "22rem":"18rem"
      },
      height:{
        "100vh":"100vh",
        "19rem":"18.7rem"
      },
      spacing:{
        "22rem":"22rem"
      },
      customDark:{
        custom_background:"#181A2A",

      },
      backgroundColor:{
        bg_custom_colors:"#181A2A",
        custom_gray_colors:"#242535",
        custom_blue_colrs:"#4B6BFB",
        custom_footer_colors:"#141624",
        custom_light_footer_colors:"#E8E8EA"
      },
      colors:{
        custom_text_grey_color:"#97989F",
        technology_text_color:"#4B6BFB"
      },
      margin:{
        "22rem":"22rem"
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class'
};
export default config;
