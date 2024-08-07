/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      colors: {
        tree_green: "#1AA873",
        tree_darkgreen: "#16705A",
        tree_pale: "#ECF6F2",
        gray: {
          1: "#F4F4F4",
          2: "#EDEDED",
          3: "#DEDEDE",
          4: "#CCCCCC",
          5: "#AEAEAE",
          6: "#8D8D8D",
          7: "#6B6B6B",
          8: "#4A4A4A",
          9: "#2D2D2D",
          black: "#0E0E0E",
          white: "#FDFDFD",
        },
      },
      fontSize: {
        "web-head1": ["44px", "60px"],
        "web-head2": ["28px", "50px"],
        "web-body1": ["24px", "40px"],
        "web-caption1": ["18px", "26px"],
        "mobile-head1": ["24px", "36px"],
        "mobile-head2": ["22px", "36px"],
        "mobile-head3": ["20px", "28px"],
        "mobile-head4": ["18px", "26px"],
        "mobile-body1": ["18px", "26px"],
        "mobile-body2": ["16px", "26px"],
        "mobile-body3": ["16px", "26px"],
        "mobile-body4": ["14px", "24px"],
        "mobile-body5": ["14px", "24px"],
        "mobile-caption1": ["12px", "18px"],
        "mobile-caption2": ["10px", "16px"],
      },
      fontWeight: {
        "web-head1": "bold",
        "web-head2": "semibold",
        "web-body1": "medium",
        "web-caption1": "medium",
        "mobile-head1": "semibold",
        "mobile-head2": "semibold",
        "mobile-head3": "semibold",
        "mobile-head4": "semibold",
        "mobile-body1": "medium",
        "mobile-body2": "semibold",
        "mobile-body3": "regular",
        "mobile-body4": "semibold",
        "mobile-body5": "regular",
        "mobile-caption1": "regular",
        "mobile-caption2": "regular",
      },
    },
  },
  plugins: [],
};
