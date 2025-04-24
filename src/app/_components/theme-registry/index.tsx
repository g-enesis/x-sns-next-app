"use client";
import CssBaseline from "@mui/joy/CssBaseline";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import * as React from "react";
import NextAppDirEmotionCacheProvider from "./emotion-cache";
import theme from "./theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InitColorSchemeScript />
      <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
}
