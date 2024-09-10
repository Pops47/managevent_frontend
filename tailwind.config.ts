import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // backgroundImage: {
    //   'mobileBgDp': "url('/src/assets/img/pictures/fireworkMobile.jpg')",
    //   'desktopBgDp': "url('/src/assets/img/pictures/celebration-3443777.jpg')"
    // },
    extend: {},
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    colors: {
      orangeDP: "#FFB647",
      darkOrangeDP: "#F09C1A",
      darkBlueDP: "#0B1247",
      mediumBlueDP: "#111b6c",
      navBarBlueDP: "#2e3461",
      hoverBlueDP: "#4f5aa9",
      lightBlueDP: "#00D7FF",
      redDP: "#e42828",
      darkRedDP: "#be1818",
      greenDP: "#0bb55b",
    },
  },
  plugins: [],
});
