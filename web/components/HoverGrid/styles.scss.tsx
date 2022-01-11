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

//  _____ _____ _____
// | _tl | _tc | _tr |
// |_____|_____|_____|
// | _ml |rooot| _mr |
// |_____|_____|_____|
// | _bl | _bc | _br |
// |_____|_____|_____|

export const topLeftQuadrantId = "_tl";
export const middleLeftQuadrantId = "_ml";
export const bottomLeftQuadrantId = "_bl";

export const topCenterQuadrantId = "_tc";
export const rootQuadrantId = "root"; // middle center
export const bottomCenterQuadrantId = "_bc";

export const topRightQuadrantId = "_tr";
export const middleRightQuadrantId = "_mr";
export const bottomRightQuadrantId = "_br";

const _DEBUG_ = false;

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

    grid-template-columns: repeat(var(--c), 100vw);
    grid-template-rows: repeat(var(--c), auto);

    &.--i {
      grid-template-rows: repeat(var(--c), var(--qh));
    }
    /* grid-template-rows: repeat(var(--c), auto); */
  }

  // Quadrants
  .q {
    background: black;

    display: grid;

    backface-visibility: hidden;

    grid-template-columns: repeat(var(--c), var(--cw));
    grid-auto-rows: auto;
    grid-auto-flow: row;

    width: auto;
    min-width: 100vw;

    /* height: auto;
    min-height: 100vh; */

    //  _____ _____ _____
    // | 123 | 123 | 123 |
    // | 456 | 456 | 456 |
    //  ----- ----- -----
    // | 123 | 123 | 123 |
    // | 456 | 456 | 456 |
    //  ----- ----- -----
    // | 123 | 123 | 123 |
    // | 456 | 456 | 456 |
    //  ----- ----- -----

    //  _____ _____ _____
    // | 123 | 123 | 123 |
    // | 456 | 456 | 456 |
    // |  7  |  7  |  7  |
    //  ----- ----- -----
    // | 123 | 123 | 123 |
    // | 456 | 456 | 456 |
    // |  7  |  7  |  7  |
    //  ----- ----- -----
    // | 123 | 123 | 123 |
    // | 456 | 456 | 456 |
    // |  7  |  7  |  7  |
    //  ----- ----- -----

    //  ____ ____ ____
    // | 1a | 2a | 3a |
    // |    |    |    |
    // |    |    |    |
    // |    |    |    |
    // |____|____|____|
    // | 1b | 2b | 3b |
    // |    |    |    |
    // |    |    |    |
    // |    |    |    |
    // |____|____|____|
    // | 1c | 2c | 3c |
    // |    |    |    |
    // |    |    |    |
    // |    |    |    |
    // |____|____|____|
    /*  */

    &[id="${rootQuadrantId}"] {
      filter: hue-rotate(180deg);
    }

    // Rows
    &[id="${topLeftQuadrantId}"],
    &[id="${topCenterQuadrantId}"],
    &[id="${topRightQuadrantId}"] {
      grid-row: 1 / span 1;
    }

    &[id="${rootQuadrantId}"],
    &[id="${middleLeftQuadrantId}"],
    &[id="${middleRightQuadrantId}"] {
      grid-row: calc(var(--c) - 1) / span 1;
    }

    &[id="${bottomLeftQuadrantId}"],
    &[id="${bottomCenterQuadrantId}"],
    &[id="${bottomRightQuadrantId}"] {
      grid-row: var(--c) / span 1;
    }

    // Columns
    &[id="${topLeftQuadrantId}"],
    &[id="${middleLeftQuadrantId}"],
    &[id="${bottomLeftQuadrantId}"] {
      grid-column: 1 / span 1;
    }

    &[id="${rootQuadrantId}"],
    &[id="${topCenterQuadrantId}"],
    &[id="${bottomCenterQuadrantId}"] {
      grid-column: calc(var(--c) - 1) / span 1;
    }

    &[id="${topRightQuadrantId}"],
    &[id="${middleRightQuadrantId}"],
    &[id="${bottomRightQuadrantId}"] {
      grid-column: var(--c) / span 1;
    }
  }

  // Items
  .i {
    background: black;

    ${_DEBUG_ &&
    `background: blue;

    &:nth-child(odd) {
      background: navy;
    }`}

    display: grid;

    .i-i {
      color: white;

      display: grid;
      place-items: center;

      font-size: 20vw;
      font-weight: 800;

      min-height: var(--rh);
      width: 100%;

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
