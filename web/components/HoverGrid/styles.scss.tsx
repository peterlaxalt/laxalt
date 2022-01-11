// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";

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

  /* transform: scale(1.0001); */

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
    /* background: black; */

    display: grid;

    backface-visibility: hidden;

    grid-template-columns: repeat(2, var(--cw));
    grid-auto-rows: auto;
    grid-auto-flow: row;

    width: auto;
    min-width: 100vw;

    @media (min-width: 1600px) {
      grid-template-columns: repeat(3, var(--cw));
    }

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

    ${_DEBUG_ &&
    `&[id="${rootQuadrantId}"] {
      filter: hue-rotate(180deg);
    }`}

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

    display: flex;
    align-items: center;
    justify-content: center;

    ${_DEBUG_ &&
    `background: blue;

    &:nth-child(odd) {
      background: navy;
    }`}

    &:nth-child(odd) {
      margin-top: calc(${Root.Size} * -20);
      padding-bottom: calc(${Root.Size} * 20);
    }

    @media (min-width: 1600px) {
      &:nth-child(odd) {
        margin-top: 0;
        padding-bottom: 0;
      }
    }

    .i-i {
      color: white;

      min-height: var(--rh);
      width: 100%;

      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      transform: scale(1.0001);
    }

    .i-t {
      width: 95%;

      padding: calc(${Root.Size} * 2);

      img {
        width: 100%;
        max-width: 100%;

        line-height: 0;

        box-shadow: 0px 0px 0px 0 white;

        transition: box-shadow .5s ease;

        transform: scale(1.0001);

        &:hover {
          box-shadow: 0px 0px 0px calc(${Root.Size} * 2) white;
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
