/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkCyan: "hsl(167, 40%, 30%)", //graphic design
        DarkBlue: "hsl(198, 62%, 26%)", //photography
        DarkMCyan: "hsl(168, 34%, 66%)", //footer
        VeryDarkDBlue: "hsl(212, 27%, 19%)",
        VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        DarkGrayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)"
      },
      width:{
        nav:"95%",
        middle: "50%",
        clientSection:"80%"
      },
      height:{
        list:"50vh",
        mobileNav:"60vh",
        
      },
      letterSpacing:{
        space:"0.25em"
      },
      padding:{
        mobile: "5.5rem",
        minidesktop: "3.5rem",
        desktop: "6rem"
      }

    },
  },
  plugins: [],
};
