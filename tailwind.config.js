module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        adsy_com: { black: "#000000", lynch: "#6b6b6b" },
        amber: { 500: "#fbbc05", 700: "#f9a000", 900: "#ff7009" },
        black: {
          "60_": "#515151",
          "70_": "#3d3d3d",
          "900_3f": "#0000003f",
          "900_4c": "0000004c",
        },
        blue: {
          700: "#1c65d6",
          900: "#1434cb",
          a200: "#4285f4",
          a400: "#2d8cff",
        },
        blue_gray: {
          100: "#c5cfd9",
          200: "#b4c2d0",
          500: "#62788d",
          600: "#525f7f",
          700: "#425466",
          900: "#1e1b39",
          "200_01": "#a7b0bb",
          "700_0f": "#4247700f",
          "900_01": "#0a2540",
          "900_02": "#292d32",
        },
        dark: { 0: "#09132e", 1: "#09132e7f", 2: "#09132e99", 3: "#09132e0f" },
        deep_purple: { 700: "#52468c" },
        gray: {
          10: "#ffffff",
          50: "#f6f9fc",
          300: "#dedee8",
          600: "#6e6c82",
          800: "#424242",
          900: "#1b1a19",
          "50_01": "#f7f7fd",
          "50_02": "#f6f6fc",
          "50_4c": "#f6f9fc4c",
          "900_0f": "#0d0a2c0f",
          "900_33": "#06182c33",
        },
        custom_blue: "#a4b5f5",
        alice_blue: '#F0F8FF',
        green: { 50: "#def8dd", 600: "#34a853", 800: "#0aad0a" },
        indigo: {
          50: "#e7e8f2",
          300: "#8888b5",
          "50_01": "#e6ebf1",
          "800_0c": "#1f3b860c",
          a200: "#515de1",
          a400: "#3861fb",
        },
        
        light_blue: {
          600: "#00a1e0",
          800: "#016fd0",
          "300_a2": "#4abff2a2",
          a200: "#36c5f0",
        },
        
        light_green: { 500: "#95bf47", 800: "#5e8e3e" },
        neutral_colors: { color_300: "#f0f0f6" },
        orange: { a700: "#ff5d00" },
        pink: { 600: "e01e5a" },
        principal_blue: "#3171de",
        purple: { a400: "#ff00bf" },
        red: { 500: "#ea4335", a700: "#ed0006" },
        teal: {
          300: "#44b7bc",
          400: "#2eb67d",
          800: "#007e53",
          900: "#003d29",
          "600_33":"#1c817d33",
          "600_a2":"#1c817d33",
        },
        white:{a700_4c:"#ffffff4c",a700_66:"#fffffff66"},
        yellow:{800:"#efa82e",900:"#f27712","800_01":"#ecb22e"},
      },
      boxShadow:{
        xs:"0 4px 4px 0 #0000003f",
        sm:"0 30px 60px -30px #0000004c",
        md:"0 2.89px 8px 0 #0d0a2c0f",
        lg:"0 5.22px 20px 0 #0000003f",
        xl:"0 1px 3px -1px #0000004c",
        "2xl":"0 2px 4px -1px #06182c33"
      },
      fontFamily:{
        helveticaneue2:"Helvetica Neue",
        spacegrotesk2:"Space Grotesk",
        poppins2:"Poppins",
        dmsans2:"DM Sans",

      },
      boxShadow: {
        'grey-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)', // Customize the shadow here
      },
      backgroundImage: {
        "gradient4":"linear-gradient(187deg,#1c817da2,#4abff2a2)",
        "gradient5":"linear-gradient(180deg,#ffffff66,#ffffff4c,#f6f9fc4c,#f6f9fc)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
