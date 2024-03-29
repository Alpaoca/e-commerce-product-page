/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "very-dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
    },
    fontSize: {
      sm: "1rem",
    },
    fontFamily: {
      "kumbh-sans": ["Kumbh Sans", "sans-serif"],
    },
    screen: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
