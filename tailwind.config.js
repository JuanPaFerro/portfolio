module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      headline: ["62px", "70px"],
      subheadline: ["32px"],
      bodytext: ["18px"],
      label: ["16px"],
      snippets: ["14px"],
    },
    colors: {
      black: "#01080E",
      blue: "#011627",
      "darker-blue": "#011221",
      "gradient-blue": "#4D5BCE",
      "gradient-green": "#43D9AD",
      gray: "#607B96",
      lines: "#1E2D3D",
      green: "#3C9D93",
      white: "#FFFFFF",
      orange: "#FEA55F",
      pink: "#E99287",
      violet: "#C98BDF",
    },
    extend: {
      fontFamily: {
        monospace: ["Fira Code"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
