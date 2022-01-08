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

//  ____ ____ ____
// | 1a | 2a | 3a |
// |____|____|____|
// | 1b | 2b | 3b |
// |____|____|____|
// | 1c | 2c | 3c |
// |____|____|____|

export const HoverGridStyle = styled.div`
 --cw: 1fr;

 --rh: calc(100vh / var(--c));

 background: red;

 display: grid;
 
 grid-template-columns: repeat(var(--c), 1fr);
 grid-template-rows: repeat(var(--c), 100vh);

 position: absolute;

 /* left: 50%;
 top: 50%;
 
 transform: translate(-50%, -50%); */

 width: calc(100vw * var(--c));
 height: auto;
 min-height: 100vh;

 // Quadrants
 .q {
  background: #910b0b;

  display: grid;

  grid-template-columns: repeat(var(--c), var(--cw));
  grid-auto-rows: auto;
  grid-auto-flow: row;

  position: absolute;

  left: 0;
  top: 0;

  width: auto;
  min-width: 100vw;
  height: auto;
  min-height: 100vh;

  &.--root {
    grid-row: calc(var(--c) - 1) / span 1;
    grid-column: calc(var(--c) - 1) / span 1;
  }
 }

 // Items
 .i {
   background: blue;

   display: grid;
   place-items: center;

   min-height: var(--rh);

   &:nth-child(odd) {
     background: navy;
   }
 }
`;
