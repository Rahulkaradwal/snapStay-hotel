/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  flowbite.content(),
];

export const theme = {
  extend: {
    colors: {
      golden: {
        100: "#b59c7b",
        500: "#b49062",
        800: "#b88039",
      },
      blueGray: {
        50: "#eceff1",
        100: "#90a4ae",
        500: "#607d8b",
        800: "#37474f",
        900: "#263238",
      },
      slate: {
        50: "#f8fafc",
        500: "#64748b",
        800: "#0f172a",
        950: "#020617",
      },
    },
    backgroundImage: {
      "about-us": "url('/rooms/aboutus.jpg')",
      "special-package": "url('/rooms/dark-hotel.jpg')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
};

export const plugins = [flowbite.plugin()];
