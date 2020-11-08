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

export const CursorStyle = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;
  transition: all 0.25s ease-out;

  .cursor-border {
    /* border-radius: 50%; */
    border: 1px solid white;
    width: 40px;
    height: 40px;
    opacity: 1;
    pointer-events: none;
    transition: all 0.25s ease-out;
    transform: translate(-50%, -50%);
    filter: blur(0px);
  }

  &.active {
    .cursor-border {
      width: 400px;
      height: 400px;
      opacity: 0;
      filter: blur(5px);
    }
  }
`;

export const CursorPoint = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;

  .cursor-point {
    width: 10px;
    pointer-events: none;
    height: 10px;
    /* border-radius: 50%; */
    background: white;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.25s ease-out;
  }

  &.active {
    .cursor-point {
      transform: translate(-50%, -50%) scale(3);
    }
  }
`;
