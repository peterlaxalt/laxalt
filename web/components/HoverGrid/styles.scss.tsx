// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

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

export const HoverGridDesktopStyle = styled.div`
  --cw: 1fr;
  --rh: calc(100vh / var(--c));

  position: fixed;

  left: 0;
  top: 0;

  overflow: hidden;

  width: 100vw;
  height: 100vh;

  /* transform: scale(1.0001); */
  opacity: 0;

  /* filter: blur(200px); */

  animation: gridEntrance .5s linear 1;
  animation-delay: .5s;
  animation-fill-mode: forwards;

  pointer-events: none;

  * {
    pointer-events: none;

    backface-visibility: hidden;
    user-select: none;
  }

  // View
  .v {
    position: absolute;

    left: 0;
    top: 0;

    width: calc(175vw * var(--c));
    height: auto;
    min-height: 100vh;

    display: grid;

    will-change: transform;

    grid-template-columns: repeat(var(--c), 175vw);
    grid-template-rows: repeat(var(--c), auto);

    &.--i {
      grid-template-rows: repeat(var(--c), var(--qh));
    }
    /* grid-template-rows: repeat(var(--c), auto); */
  }

  // Quadrants
  .q {

    display: grid;

    backface-visibility: hidden;

    grid-template-columns: repeat(4, var(--cw));
    grid-auto-rows: auto;
    grid-auto-flow: row;

    width: auto;
    min-width: 100vw;

    // Pseudo item to show background
    .i.--dead {
      content: "";

      position: static;

      /* background: rgba(255,255,255, .5); */

      grid-column: 1 / span 2;
    }

    .i.--dead,
    .i {
      position: relative;

      right: -0px;
    }

    .i {
      top: -80px;
    }
   
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
    display: flex;
    align-items: center;
    justify-content: center;

    ${_DEBUG_ &&
    `background: blue;

    &:nth-child(odd) {
      background: navy;
    }`}


    /* &:nth-child(odd) {
      margin-top: -200px;
      padding-bottom: 200px;
    } */

    .i-i {
      min-height: var(--rh);
      width: 100%;

      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      /* transform: scale(1.0001); */
    }

    .dw {
      width: 100%;

      position: relative;

      svg {
        position: absolute;

        left: 0;
        top: 0;

        fill: ${Theme.Color.varForeground};

        width: 100%;
        height: 400px;
      }
    }

    .i-t {
      width: 100%;

      padding: calc(${Root.Size} * 1);

      img {
        pointer-events: all;
        
        width: 100%;
        max-width: 100%;

        line-height: 0;

        box-shadow: 0px 0px 0px 0 ${Theme.Color.varForeground};

        transition: box-shadow .5s ease;

        /* transform: scale(1.0001); */

        &:hover {
          box-shadow: 0px 0px 0px calc(${Root.Size} * 1) ${Theme.Color.varForeground};
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

export const HoverGridTouchCapableStyle = styled.div`
  position: fixed;

  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  overflow: scroll;
  
  * {
    box-sizing: border-box;
  }

  img {
    backface-visibility: hidden;

    position: relative;
    
    transform: translate3d(0, 0, 0,);
  }

  .v {
    width: auto;
    height: auto;

    display: grid;

    grid-template-columns: repeat(var(--c), 1fr);
    grid-template-rows: repeat(var(--r), 1fr);

    &.--i {
      grid-template-columns: repeat(var(--c), var(--qw));
      grid-template-rows: repeat(var(--r), var(--qh));
    }
  }

  .q {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-auto-flow: row;

    grid-column: var(--x) / span 1;
    grid-row: var(--y) / span 1;

    width: 325vw;
    min-width: 100vw;

    gap: 30px;
    padding: 30px;

    box-shadow: 0px 0px 0px 1px blue;

    /* animation: redraw .001s ease infinite; */
  }

  .i {
    display: flex;

    align-items: center;
    justify-content: center;
  }

  .i-t {
    width: 100%;

    img {
      max-width: 100%;
    }
  }

  // Debugger
  ~ ._dbg {
    position: fixed;

    z-index: 999;

    background: fuchsia;

    left: 20px;
    bottom: 20px;

    padding: 10px;

    font-size: 12px;

    color: black;

    pointer-events: none;

    /* display: none; */
  }
`