// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { BlobRadius } from "../../constants/styles/Animation";
import { Theme } from "../../constants/Theme";
import { ProjectScrollSectionTransitionTime, ProjectScrollSectionClassName } from "../Sections/ProjectScrollSection/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectCard
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectCardClassName = "project-card";

export const ProjectCardStyle = styled.div`
  &.${ProjectCardClassName} {
    --${ProjectCardClassName}__card-spacing: calc(${Root.Size} * 2);

    height: 100vh;
    width: 50vw;

    padding: calc(${Root.FrameSize} + (${Root.FrameSize} / 2))
      var(--${ProjectCardClassName}__card-spacing) calc(${Root.FrameSize} / 2) var(--${ProjectCardClassName}__card-spacing);

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
      .${ProjectCardClassName}__inner {
        // Borders
        &:before {
          content: "";

          position: absolute;

          height: 100vh;
          width: 1px;

          bottom: 0;
          left: calc(var(--${ProjectCardClassName}__card-spacing) * -1);

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

    .${ProjectCardClassName}__bg {
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
      .${ProjectCardClassName}__bg {
        opacity: .25;
      }
    }

    &:nth-child(even) {
      .${ProjectCardClassName}__bg {
        left: 100%;
        top: 100%;
      }
    }

    .${ProjectCardClassName}__dot {
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

    .${ProjectCardClassName}__inner {
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
        left: calc(var(--${ProjectCardClassName}__card-spacing) * -1);

        width: calc(100% + (var(--${ProjectCardClassName}__card-spacing) * 2));
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

    .${ProjectCardClassName}__row {
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

    .${ProjectCardClassName}__col {
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

    .${ProjectCardClassName}__image-wrapper {
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

      .${ProjectCardClassName}__image {
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

        .${ProjectCardClassName}__image--filtered {
          mix-blend-mode: screen;
          filter: grayscale() blur(20px);
        }

        .${ProjectCardClassName}__image--normal {
          opacity: 1;

          transition: opacity 0.5s ease;
        }
      }
    }

    &.${ProjectCardClassName}--is-visible {
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
      .${ProjectCardClassName}__dot {
        transform: translate3d(0%, -50%, 0px) scale(1);
        transition-delay: transform 10s ease;
      }

      // Content
      .${ProjectCardClassName}__col {
        &__content-row {
          transform: translateX(0%) rotate(0deg);
          opacity: 1;
        }
      }

      // Row Bottoms
      .${ProjectCardClassName}__row {
        &--bottom {
          &:before {
            transform: scaleX(1);
            transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
          }
        }
      }

      // Images
      .${ProjectCardClassName}__image-wrapper {
        &:after {
          transform: scaleX(0);

          transition-delay: transform ${ProjectScrollSectionTransitionTime} ease;
        }
      }
    }
  }
`;
