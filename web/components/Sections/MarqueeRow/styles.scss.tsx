/**
 *
 * MarqueeRow.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website MarqueeRow Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import {} from "../../../constants/Root";
import {} from "../../../constants/styles/Animation";
import {} from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MarqueeRowClassName = `marquee-row`;
export const MarqueeRowMoveInitialVariableName = `${MarqueeRowClassName}__move-initial`;
export const MarqueeRowMoveFinalVariableName = `${MarqueeRowClassName}__move-final`;
export const MarqueeRowOffsetVariableName = `${MarqueeRowClassName}__offset`;

export const MarqueeRowAnim = keyframes`
  0% {
    transform: translate3d(var(--${MarqueeRowMoveInitialVariableName}), 0, 0);
  }

  100% {
    transform: translate3d(var(--${MarqueeRowMoveFinalVariableName}), 0, 0);
  }
`;

export const MarqueeRowStyle = styled.section`
  // @ts-ignore
  --${MarqueeRowOffsetVariableName}: 0vw;
  --${MarqueeRowMoveInitialVariableName}: calc(-25% + var(--${MarqueeRowOffsetVariableName}));
  --${MarqueeRowMoveFinalVariableName}: calc(-50% + var(--${MarqueeRowOffsetVariableName}));

  position: relative;
  overflow: hidden;

  .${MarqueeRowClassName}__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--${MarqueeRowMoveInitialVariableName}), 0, 0);
    animation: ${MarqueeRowAnim} 15s linear infinite;
    animation-play-state: running;
  }

  .${MarqueeRowClassName}__list {
    &__item {
      font-size: 10vw;
      padding: 0 2vw;
    }
  }

  /* &:hover {
    .${MarqueeRowClassName}__inner {
      animation-play-state: paused;
    }
  } */

`;
