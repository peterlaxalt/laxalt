// Color.js:
// This is the sitewide palette.

// Imports
// _______________________________________________________

import React from "react";
import { createGlobalStyle } from "styled-components";

// Begin Component
// _______________________________________________________

export type LXLT_ColorTheme = {
  name?:
    | "default"
    | "goldenrod"
    | "cadetblue"
    | "orangered"
    | "galaxy"
    | "lemon"
    | "salmon";
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  setTheme?: (theme: LXLT_ColorTheme) => void;
};

export const Color = {
  // Color Variables
  varPrimary: "var(--clrPrimary)",
  varSecondary: "var(--clrSecondary)",
  varBackground: "var(--clrBackground)",
  varForeground: "var(--clrForeground)",

  // Core Colors
  Primary: "#000000",
  Secondary: "#000000",
  Background: "#FFF8DC",
  Text: "#000000",

  // Grayscale Palette
  Black: "#000000",
  Nightsky: "#151313",
  Warmsky: "#34281D",
  Gravel: "#4E4135",
  Slate: "#928070",
  Tan: "#C4AC97",
  Gray: "#DAC9BA",
  Blush: "#F6E7D9",
  Cream: "#FFF6EE",
  White: "#FFF6EE",

  // Warm Palette
  Clay: "#A33609",
  Nova: "#E24809",
  Sunlight: "#E9A200",
  Sunset: "#ED9158",

  // Cool Palette
  Galaxy: "#111b24",
  Deepsea: "#002F9E",
  Ocean: "#269FE2",
  Sky: "#7AC0E6",
  Dino: "#23023B",
  Eggplant: "#520589",
  Lilac: "#874BB4",

  // Feedback Palette
  Warning: "#FF8760",
  Success: "#40DA33",
};

/**
 *
 * @name ColorContext_Defaults
 * @description Defaults for our theming context
 *
 */
export const ColorContext_Defaults: LXLT_ColorTheme = {
  primary: Color.Primary,
  secondary: Color.Secondary,
  foreground: Color.Text,
  background: Color.Background,
  setTheme: () => {},
};

/**
 *
 * @name useColorContext
 * @description Our hook to update our color context
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */
export const useColorContext = (): LXLT_ColorTheme => {
  const [colorTheme, setColorTheme] = React.useState(ColorContext_Defaults);

  const setTheme = React.useCallback(
    (currentColorTheme: LXLT_ColorTheme): void => {
      setColorTheme(currentColorTheme);
    },
    []
  );

  return {
    ...colorTheme,
    setTheme,
  };
};

/**
 *
 * @name ColorContext
 * @description Our context to provide color themes
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */
export const ColorContext = React.createContext<LXLT_ColorTheme>(
  ColorContext_Defaults
);

/**
 *
 * @name Palette
 * @description Global CSS Variables for palette
 *
 */
export const Palette = createGlobalStyle`
  ::-moz-selection { background: ${Color.varForeground}; color: ${Color.varBackground} }
  ::selection { background: ${Color.varForeground}; color: ${Color.varBackground} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
