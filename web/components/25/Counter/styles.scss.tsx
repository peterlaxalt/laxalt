/**
 *
 * /components/25/Counter.tsx
 * @author Peter Laxalt
 * @description Counter styles.
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

const baseCounterSize = "15vw";
const baseOffset = "50px";

export const CounterStyle = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 300;
  font-family: "Portia";
  pointer-events: none;

  .number {
    position: fixed;
    left: calc(${baseOffset} * 3);
    top: calc(${baseOffset} * 3);
    width: ${baseCounterSize};
    height: ${baseCounterSize};

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(30deg);
      transform-origin: center center;
      width: 1px;
      height: ${baseCounterSize};
      background: ${(props: any) => props.theme.textColor};
    }
    span {
      position: absolute;
      color: ${(props: any) => props.theme.textColor};

      &:first-child {
        position: absolute;
        top: 0;
        right: 50%;
        font-weight: bold;
        font-size: calc(${baseCounterSize} * 0.55);
        text-align: right;
      }

      &:last-child {
        position: absolute;
        bottom: calc(${baseCounterSize} * 0.15);
        right: calc(${baseCounterSize} * 0.15);
        font-size: calc(${baseCounterSize} * 0.25);
      }
    }
  }

  .information {
    position: fixed;
    left: ${baseOffset};
    bottom: ${baseOffset};
    font-size: 2vw;
    color: ${(props: any) => props.theme.textColor};

    span {
      &:last-child {
        font-weight: bold;
      }
    }
  }
`;
