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

  background: black;

  position: fixed;

  left: 0;
  top: 0;

  overflow: hidden;

  width: 100vw;
  height: 100vh;

  transform: scale(1.0001);

  // View
  .v {
    position: absolute;

    left: 0;
    top: 0;

    width: calc(100vw * var(--c));
    height: auto;
    min-height: 100vh;

    display: grid;

    backface-visibility: hidden;

    grid-template-columns: repeat(var(--c), 1fr);
    grid-template-rows: repeat(var(--c), 100vh);
  }

  // Quadrants
  .q {
    background: black;

    display: grid;

    backface-visibility: hidden;

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

    //  ____ ____ ____
    // | 1a | 2a | 3a |
    // |____|____|____|
    // | 1b | 2b | 3b |
    // |____|____|____|
    // | 1c | 2c | 3c |
    // |____|____|____|
    &.--root {
      // aka 2b
      grid-row: calc(var(--c) - 1) / span 1;
      grid-column: calc(var(--c) - 1) / span 1;
    }

    &.--1a,
    &.--2a,
    &.--3a {
      grid-row: 1 / span 1;
    }

    // Rows
    &.--root,
    &.--1b,
    &.--2b,
    &.--3b {
      grid-row: calc(var(--c) - 1) / span 1;
    }

    &.--1c,
    &.--2c,
    &.--3c {
      grid-row: var(--c) / span 1;
    }

    // Columns
    &.--1a,
    &.--1b,
    &.--1c {
      grid-column: 1 / span 1;
    }

    &.--2a,
    &.--2b,
    &.--2c,
    &.--root {
      grid-column: calc(var(--c) - 1) / span 1;
    }

    &.--3a,
    &.--3b,
    &.--3c {
      grid-column: var(--c) / span 1;
    }
  }

  // Items
  .i {
    background: black;

    box-shadow: 0px 0px 0px 1px white;

    display: grid;

    .i-i {
      color: white;

      display: grid;
      place-items: center;

      font-size: 20vw;
      font-weight: 800;

      min-height: var(--rh);

      position: relative;
      
      &:before {
        content: attr(data-i);
        
        display: block;
        
        position: absolute;
        
        left: 50%;
        top: 50%;

        transition: transform 0.25s ease;
        transform: translate(-50%, -50%) scale(1);
      }
  
      &:hover {
        &:before {
          transform: translate(-50%, -50%) scale (1.5);
        }
      }
    }

  }

  // Debugger
  ~ ._dbg {
    position: fixed;

    z-index: 999;

    background: pink;

    left: 20px;
    bottom: 20px;

    padding: 10px;

    font-size: 20px;

    color: black;
  }
`;
