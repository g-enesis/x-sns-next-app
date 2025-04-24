import color from "./color.theme";
import { breakpoint, mediaQueries } from "./mediaQuery.theme";
import muiTheme, { pxToRem } from "./muiTheme";
import { space, spacer } from "./space.theme";
import typo from "./typo.theme";
import vars, { Vars } from "./vars.theme";
import zIndexes from "./zIndexes.theme";

declare module "@mui/joy/styles" {
  interface Theme {
    pxToRem: typeof pxToRem;
    spacer: typeof spacer;
    space: typeof space;
    breakpoint: typeof breakpoint;
    mediaQueries: typeof mediaQueries;
    type: typeof typo;
    color: typeof color;
    zIndexes: typeof zIndexes;
    typo: typeof typo;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ThemeVars extends Vars {}
}

export const theme = {
  ...muiTheme,
  space,
  spacer,
  breakpoint,
  vars: {
    ...vars,
    ...muiTheme.vars,
  },
  mediaQueries,
  typo,
  color,
  zIndexes,
  pxToRem,
} as const;
