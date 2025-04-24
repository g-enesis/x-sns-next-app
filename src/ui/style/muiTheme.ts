import pxToRem from "@/utils/pxToRem";
import { extendTheme } from "@mui/joy";
import localFont from "next/font/local";
import { breakpoint } from "./mediaQuery.theme";

export const pretendard = localFont({
  src: "../../assets/fonts/PretendardVariable.woff2",
  adjustFontFallback: false,
  display: "swap",
  weight: "45 920",
});

const muiTheme = extendTheme({
  fontFamily: {
    body: pretendard.style.fontFamily,
    display: pretendard.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      ...breakpoint,
    },
  },
  focus: {
    default: {
      outlineOffset: `var(--focus-outline-offset, 2px)`,
      outlineColor: "#000",
    },
  },
});

export { pxToRem };
export default muiTheme;
