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
import { BlobRadius } from "../../../constants/styles/Animation";
import { hexToRGB } from "../../../utils/hexToRGB";

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

/**
 *
 * @name ScrollCard
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ScrollCardClassName = "scroll-card";

export const ScrollCardStyle = styled.div`
  &.${ScrollCardClassName} {
    --${ScrollCardClassName}__card-spacing: calc(${Root.Size} * 2);

    height: 100vh;
    width: 50vw;

    padding: calc(${Root.FrameSize} + (${Root.FrameSize} / 2))
      var(--${ScrollCardClassName}__card-spacing) calc(${Root.FrameSize} / 2) var(--${ScrollCardClassName}__card-spacing);

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

    &:before,
    &:after {
      transition: transform ${ProjectScrollSectionTransitionTime} ease-in-out;
      transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
    }

    // Right Border
    &:after {
      right: 0;
      top: 0;
      bottom: 0;

      transform: translateY(100%);
    }

    // Center Border
    &:before {
      left: 50%;
      top: 0;
      bottom: 0;

      transform: translate(-50%, -100%);
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
          left: calc(var(--${ScrollCardClassName}__card-spacing) * -1);

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

    .${ScrollCardClassName}__bg {
      position: absolute;

      left: 0%;
      top: 0%;

      transform: translate(-50%, -50%);

      width: 50%;
      height: 60%;

      box-shadow: 0px 0px 200px 200px ${Theme.Color.varSecondary};

      mix-blend-mode: multiply;

      background: ${Theme.Color.varSecondary};

      /* animation: ${BlobRadius} 5s ease infinite; */

      opacity: 0;

      border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;

      transition: opacity 2s ease;
    }

    &:hover {
      .${ScrollCardClassName}__bg {
        opacity: .25;
      }
    }

    &:nth-child(even) {
      .${ScrollCardClassName}__bg {
        left: 100%;
        top: 100%;
      }
    }

    .${ScrollCardClassName}__dot {
      position: absolute;

      transform: translate3d(0%, -50%, 0px) scale(0);

      width: var(--${ProjectScrollSectionClassName}__dot-size);
      height: var(--${ProjectScrollSectionClassName}__dot-size);

      border-radius: 50%;

      background: ${Theme.Color.varForeground};

      transition: transform 1s ease-in-out;
      transition-delay: transform 10s ease;

      &--right {
        left: calc(100% - (var(--${ProjectScrollSectionClassName}__dot-size) / 2));
        top: 50%;
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

      &:after {
        content: '';

        position: absolute;

        top: calc(50% - (${Root.FrameSize} / 2));
        left: calc(var(--${ScrollCardClassName}__card-spacing) * -1);

        width: calc(100% + (var(--${ScrollCardClassName}__card-spacing) * 2));
        height: 1px;

        transform: translate3d(0%, 50%, 0px) scaleX(1);
        transform-origin: left center;

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

          transform: scaleX(0);
          transform-origin: right center;

          transition: transform ${ProjectScrollSectionTransitionTime} ease;

          background: ${Theme.Color.varForeground};
        }
      }
    }

    .${ScrollCardClassName}__col {
      &__content-row {
        display: block;
        text-transform: uppercase;

        margin-top: 0.25em;

        transform: translateX(-20%) rotate(0deg);
        opacity: 0;

        transition: transform calc(${ProjectScrollSectionTransitionTime} / 2) ease, opacity calc(${ProjectScrollSectionTransitionTime} / 2) ease;
        transition-delay: transform calc(${ProjectScrollSectionTransitionTime} / 2), opacity calc(${ProjectScrollSectionTransitionTime} / 2);

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

      z-index: 2;

      box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
      transition: box-shadow 1s ease;

      overflow: hidden;

      &:after {
        content: "";

        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        background: ${Theme.Color.varForeground};

        transform: scaleX(1);
        transform-origin: left center;

        transition: transform 1s ease;
      }

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
        transition-delay: transform 2.75s ease;
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

          transition: opacity 0.5s ease;
        }
      }
    }

    &.${ScrollCardClassName}--is-visible {
      // Right Border
      &:after {
        transform: translateY(0%);

        transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
      }

      // Center Border
      &:before {
        transform: translate(-50%, 0%);

        transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
      }

      // Dots
      .${ScrollCardClassName}__dot {
        transform: translate3d(0%, -50%, 0px) scale(1);
        transition-delay: transform 10s ease;
      }

      // Content
      .${ScrollCardClassName}__col {
        &__content-row {
          transform: translateX(0%) rotate(0deg);
          opacity: 1;
        }
      }

      // Row Bottoms
      .${ScrollCardClassName}__row {
        &--bottom {
          &:before {
            transform: scaleX(1);
            transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
          }
        }
      }

      // Images
      .${ScrollCardClassName}__image-wrapper {
        &:after {
          transform: scaleX(0);

          transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
        }
      }
    }
  }
`;
