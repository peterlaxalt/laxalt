/**
 *
 * /components/25/13/styles.scss.tsx
 * @author Peter Laxalt
 * @description The Styles for Number 13 of the 25 Series.
 * @see https://www.dropbox.com/s/9p6ysxa71rowlvj/Screenshot%202020-01-26%2020.15.49.png?dl=0
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
// import { Theme } from "../../constants/Theme";
// import { Root } from "../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FrameStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  pointer-events: none;

  .svg-wrap {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    pointer-events: none;

    &:before,
    &:after {
      content: "";
      position: absolute;
      height: 100vh;
      width: 100vw;
      background: ${(props: any) => props.theme.bgColor};
      top: 0;
      bottom: 0;
    }
    &:before {
      left: 25vw;
    }
    &:after {
      right: 25vw;
    }
  }

  svg {
    position: absolute;
    transform-origin: center center;
    width: 50vw;
    height: 100vh;
    bottom: 0;
    fill: ${(props: any) => props.theme.bgColor};
    pointer-events: none;
  }
`;
