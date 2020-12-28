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
import { Theme } from "../../../constants/Theme";
import { LayeredSidebarClassName, LayeredSidebarTransitionTime, LayeredSidebarWidth, SidebarFullwidthCss } from "../../LayeredSidebar/styles.scss";
import { CssFrameSizeWithBorderString } from "../../MellowFrameHeader/styles.scss";

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

  padding-top: 1.5rem;

  /* background: pink; */

  &.${MarqueeRowClassName}--has-sidebar {
    ${SidebarFullwidthCss}
  }

  .${MarqueeRowClassName}__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--${MarqueeRowMoveInitialVariableName}), 0, 0);
    animation: ${MarqueeRowAnim} 15s linear infinite;
    animation-play-state: running;
  }

  .${MarqueeRowClassName}__list {
    --${MarqueeRowClassName}__bullet-size: .15em;

    white-space: nowrap;

    /* display: flex;
    flex-wrap: nowrap; */

    &__item {
      display: inline-block;
      white-space: nowrap;

      font-size: 11rem;
      padding: 0 calc(var(--${MarqueeRowClassName}__bullet-size) * 2);

      position: relative;

      flex-shrink: 0;

      &:after {
        content: '';

        position: absolute;

        top: 50%;
        right: calc(var(--${MarqueeRowClassName}__bullet-size) * -.5);

        transform: translate3d(0%, -50%, 0);
        transform-style: preserve-3d;

        width: calc(var(--${MarqueeRowClassName}__bullet-size) * 1);
        height: calc(var(--${MarqueeRowClassName}__bullet-size) * 1);

        border-radius: 50%;

        background: ${Theme.Color.varForeground};
      }
    }
  }

  /* &:hover {
    .${MarqueeRowClassName}__inner {
      animation-play-state: paused;
    }
  } */

`;
