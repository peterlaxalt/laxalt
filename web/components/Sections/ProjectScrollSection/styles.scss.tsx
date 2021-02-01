// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import {} from "../../../constants/Root";
import { NoDistortCanvasClassName } from "../../../pages/projects/no-distort-with-canvas";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectScrollSectionClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectScrollSectionClassName = "project-scroll";
export const ProjectScrollSectionTransitionTime = "3s";

/**
 *
 * @name ProjectScrollSectionStyle
 * @author Peter Laxalt
 *
 */
export const ProjectScrollSectionStyle = styled.section`
  &.${ProjectScrollSectionClassName} {
    --${ProjectScrollSectionClassName}__dot-size: .75rem;


    &.${ProjectScrollSectionClassName}--is-scrolled {
      .${ProjectScrollSectionClassName}__content-wrapper {
        // Line
        &:before {
          transform: translate3d(0%, 50%, 0px) scaleX(1);
        }

        // Dot
        &:after {
          transform: translate3d(0%, -50%, 0px) scale(1);
          transition-delay: ${ProjectScrollSectionTransitionTime};
        }
      }
    }

    .${ProjectScrollSectionClassName}__sticky-wrapper {
      position: sticky;

      top: 0;

      height: 100vh;
      width: 100%;

      overflow-x: hidden;
    }

    .${ProjectScrollSectionClassName}__content-wrapper {
      position: relative;

      height: 100vh;

      padding: 0;

      display: flex;

      overflow: hidden;

      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      padding-left: 100vw;
      padding-right: 10vw;

      &:after {
        content: "";

        position: absolute;

        left: calc(100vw - (var(--${ProjectScrollSectionClassName}__dot-size) / 2));
        top: 50%;

        transform: translate3d(0%, -50%, 0px) scale(0);

        width: var(--${ProjectScrollSectionClassName}__dot-size);
        height: var(--${ProjectScrollSectionClassName}__dot-size);

        border-radius: 50%;

        background: ${Theme.Color.varForeground};

        transition: transform 1s ease-in-out;

      }

      &:before {
        content: "";

        position: absolute;

        top: 50%;
        left: 0;

        transform: translate3d(-100%, 50%, 0px) scaleX(1);
        transform-origin: left center;

        height: 1px;
        width: 100vw;

        transition: transform ${ProjectScrollSectionTransitionTime} ease-in-out;

        /* background: ${Theme.Color.varForeground}; */
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0) 50%,
          ${Theme.Color.varForeground} 50%,
          ${Theme.Color.varForeground}
        );

        background-size: 6px 100%;
      }
    }

    .${ProjectScrollSectionClassName}__horizontal-wrapper {
      position: relative;

      width: 100%;
      min-height: 100vh;
    }

    .${ProjectScrollSectionClassName}__x-translate-wrapper {
      position: absolute;

      height: 100%;

      transform-style: preserve-3d;

      /* transition: transform 0.5s ease-out; */
      will-change: transform;
    }

    .${ProjectScrollSectionClassName}__outer {
      position: relative;

      width: 100%;
    }
  }
`;

export const ProjectScrollSectionGlobalStyles = createGlobalStyle<{
  isScrolled: boolean;
}>`
  .${NoDistortCanvasClassName} {
    transition: filter 1s ease, opacity 1s ease;

    ${(props) =>
      props.isScrolled
        ? `filter: blur(50px); opacity: 0;`
        : `filter: blur(0px); opacity: 1;`}

  }
`;

export const ProjectScrollBlurOverlayStyles = styled.div<{
  isBreakpoint: boolean;
}>`
  transition: backdrop-filter 0.5s ease;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  ${(props) =>
    props.isBreakpoint
      ? `backdrop-filter: blur(50px) opacity(1);`
      : `backdrop-filter: blur(50px) opacity(0);`}

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    transition: opacity 2.5s ease;
    transition-delay: opacity 1s;

    background: ${Theme.Color.varBackground};

    ${(props) => (props.isBreakpoint ? `opacity: 1;` : `opacity: 0;`)}
  }
`;
