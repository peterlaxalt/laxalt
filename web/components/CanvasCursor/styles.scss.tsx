/**
 *
 * Listings.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Listings Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
// import { Theme } from "../../constants/Theme";
// import { Root } from "../../constants/Root";

// Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CanvasCursorClassName = `canvas-cursor`;

export const CanvasCursorStyle = styled.canvas`
  position: fixed;

  top: 0;
  left: 0;

  padding: 0;
  margin: 0;

  z-index: 99999999;

  pointer-events: none;

  mix-blend-mode: exclusion;
`;

export const CanvasCursorGlobalStyles = createGlobalStyle`
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
`
