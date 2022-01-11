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

    &[id='1a'],
    &[id='2a'],
    &[id='3a'] {
      grid-row: 1 / span 1;
    }

    // Rows
    &[id='root'] {
      filter: hue-rotate(180deg);
    }

    &[id='root'],
    &[id='1b'],
    &[id='2b'],
    &[id='3b'] {
      grid-row: calc(var(--c) - 1) / span 1;
    }

    &[id='1c'],
    &[id='2c'],
    &[id='3c'] {
      grid-row: var(--c) / span 1;
    }

    // Columns
    &[id='1a'],
    &[id='1b'],
    &[id='1c'] {
      grid-column: 1 / span 1;
    }
    
    &[id='root'],
    &[id='2a'],
    &[id='2b'],
    &[id='2c'] {
      grid-column: calc(var(--c) - 1) / span 1;
    }

    &[id='3a'],
    &[id='3b'],
    &[id='3c'] {
      grid-column: var(--c) / span 1;
    }
  }

  // Items
  .i {
    background: blue;

    &:nth-child(odd) {
      background: navy;
    }

    box-shadow: 0px 0px 0px 1px white;

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
