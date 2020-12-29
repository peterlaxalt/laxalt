// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import {
  CssFramePaddingString,
  CssFrameSizeWithBorderString,
} from "../../MellowFrameHeader/styles.scss";
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

/**
 *
 * @name ProjectScrollSectionStyle
 * @author Peter Laxalt
 *
 */
export const ProjectScrollSectionStyle = styled.section`
  &.${ProjectScrollSectionClassName} {
    &.${ProjectScrollSectionClassName}--is-scrolled {
      .${ProjectScrollSectionClassName}__content-wrapper {
        &:before {
          /* transform: translate3d(0px, 50%, 0px) scaleX(1); */
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

      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      padding-left: 100vw;
      padding-right: 10vw;

      &:before {
        content: "";

        position: absolute;

        top: 50%;
        left: 0;

        transform: translate3d(0px, 50%, 0px) scaleX(0);
        transform-origin: left center;

        height: 1px;
        width: 100%;

        transition: transform 3s ease;

        background: ${Theme.Color.varForeground};
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

export const ProjectScrollSectionGlobalStyles = createGlobalStyle<{ isScrolled: boolean }>`
  .${NoDistortCanvasClassName} {
    transition: filter 1s ease, opacity 1s ease;

    ${ props => props.isScrolled ? `filter: blur(50px); opacity: 0;` : `filter: blur(0px); opacity: 1;`}

  }
`;

/**
 *
 * @name ScrollCard
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ScrollCardClassName = "scroll-card";

export const ScrollCardStyle = styled.div`
  &.${ScrollCardClassName} {
    height: 100vh;
    width: 50vw;

    padding: calc(${Root.FrameSize} + (${Root.FrameSize} / 2))
      calc(${Root.Size} * 2) calc(${Root.FrameSize} / 2) calc(${Root.Size} * 2);

    display: flex;
    align-items: flex-end;

    flex-shrink: 0;

    position: relative;

    // Borders
    &:before,
    &:after {
      content: "";

      position: absolute;

      height: 100%;
      width: 1px;

      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 50%,
        ${Theme.Color.varForeground} 50%,
        ${Theme.Color.varForeground}
      );

      background-size: 100% 6px;
    }

    // Right Border
    &:after {
      right: 0;
      top: 0;
      bottom: 0;
    }

    // Center Border
    &:before {
      left: 50%;
      top: 0;
      bottom: 0;

      transform: translateX(-50%);
    }

    img {
      width: 100%;
      max-width: 100%;
    }

    &:first-child {
      .${ScrollCardClassName}__inner {
        // Borders
        &:before {
          content: "";

          position: absolute;

          height: 100vh;
          width: 1px;

          bottom: 0;
          left: calc(${Root.Size} * -2);

          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0) 50%,
            ${Theme.Color.varForeground} 50%,
            ${Theme.Color.varForeground}
          );

          background-size: 100% 6px;
        }
      }
    }

    .${ScrollCardClassName}__inner {
      height: 100%;
      width: 100%;

      position: relative;
      z-index: 2;

      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .${ScrollCardClassName}__row {
      display: flex;
      justify-content: space-between;

      &--top {
        padding-top: calc(${Root.FrameSize} / 4);
      }

      &--bottom {
        padding-bottom: calc(${Root.FrameSize} / 2);

        position: relative;

        &:before {
          content: "";

          position: absolute;

          bottom: 0;
          left: 0;

          height: 5px;
          width: 100%;

          background: ${Theme.Color.varForeground};
        }
      }
    }

    .${ScrollCardClassName}__col {
      &__content-row {
        display: block;
        text-transform: uppercase;

        margin-top: 0.25em;

        &--content-major {
          font-size: 1.2rem;
        }
      }

      &--bottom-right {
        text-align: right;
      }
    }

    .${ScrollCardClassName}__image-wrapper {
      background: ${Theme.Color.varForeground};

      line-height: 0;

      position: relative;

      box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
      transition: box-shadow 1s ease;

      overflow: hidden;

      &:before {
        content: "";

        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        background: ${Theme.Color.varBackground};
        mix-blend-mode: multiply;

        z-index: 2;

        opacity: 1;

        transition: opacity 1s ease;
      }

      .${ScrollCardClassName}__image {
        &--filtered {
          mix-blend-mode: screen;
          filter: grayscale() blur(0px);

          transition: filter 1s ease;
        }

        &--normal {
          position: absolute;
          left: 0;
          top: 0;

          opacity: 0;

          transition: opacity 1s ease;
        }
      }

      &:hover {
        /* box-shadow: 0px 0px 0px 8px ${Theme.Color.varForeground}; */

        &:before {
          opacity: 0;
        }

        .${ScrollCardClassName}__image--filtered {
          mix-blend-mode: screen;
          filter: grayscale() blur(20px);
        }

        .${ScrollCardClassName}__image--normal {
          opacity: 1;

          transition: opacity .5s ease;
        }
      }
    }
  }
`;
