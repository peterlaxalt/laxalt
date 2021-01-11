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
import styled from "styled-components";

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

  mix-blend-mode: difference;
`;
