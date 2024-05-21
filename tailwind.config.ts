import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"'],
        opensans: ['"Open Sans"'],
      },
      backgroundImage: {
        "auth-background": "url('/images/laundry.svg')",
      },
      colors: {
        primary: "#62CDFB",
        h_primary: "#13B2F7",
        f_primary: "#0f172a",
        secondary: "#B1E4F9",
        f_secondary: "#5a5a62",
      },
    },
    container: {
      screens: {
        sm: "470px",
        md: "598px",
        lg: "854px",
        xl: "1110px",
      },
      center: true,
    },
  },
};
