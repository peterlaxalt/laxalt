// Color.js:
// This is the sitewide palette.

// Imports
// _______________________________________________________

import { createGlobalStyle } from "styled-components";

// Begin Component
// _______________________________________________________

export const Color = {
  // Core Colors
  Primary: "#000000",
  Secondary: "#5D6376",
  Background: "#ff988c",
  Text: "#520589",

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
  White: "#FFFFFF",

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
  Warning: "#FC6376",
  Success: "#40DA33",
};

export const Palette = createGlobalStyle`
  ::-moz-selection { background: ${Color.Primary}; color: ${Color.White} }
  ::selection { background: ${Color.Primary}; color: ${Color.White} }
`;

//////////////////////////////////////////////////////////////////////
// End Component
