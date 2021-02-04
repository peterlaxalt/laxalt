// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { NoDistortCanvasClassName } from "../../../pages/projects/no-distort-with-canvas";
import {
  LayeredSidebarWidth,
  SidebarFullwidthCss,
} from "../../LayeredSidebar/styles.scss";
import {
  CssFrameBorderWidth,
  CssFrameSizeWithBorderString,
} from "../../MellowFrameHeader/styles.scss";
import { ProjectCardClassName } from "../../ProjectCard/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectNextSectionClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectNextSectionClassName = "project-scroll";
export const ProjectNextSectionTransitionTime = "3s";

/**
 *
 * @name ProjectNextSectionStyle
 * @author Peter Laxalt
 *
 */
export const ProjectNextSectionStyle = styled.section`
  &.${ProjectNextSectionClassName} {
    --${ProjectNextSectionClassName}__dot-size: .75rem;

    ${SidebarFullwidthCss};


    &.${ProjectNextSectionClassName}--is-scrolled {

    }

    .${ProjectNextSectionClassName}__sticky-wrapper {
      position: sticky;

      top: 0;

      height: 100vh;
      width: 100%;

      overflow-x: hidden;
    }

    .${ProjectNextSectionClassName}__content-wrapper {
      position: relative;

      height: 100vh;

      padding: 0;

      display: flex;

      overflow: hidden;

      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      padding-left: ${LayeredSidebarWidth};
      padding-right: 10vw;

    }

    .${ProjectNextSectionClassName}__horizontal-wrapper {
      position: relative;

      width: 100%;
      min-height: 100vh;
    }

    .${ProjectNextSectionClassName}__x-translate-wrapper {
      position: absolute;

      height: 100%;

      transform-style: preserve-3d;

      /* transition: transform 0.5s ease-out; */
      will-change: transform;
    }

    .${ProjectNextSectionClassName}__outer {
      position: relative;

      width: 100%;
    }

    .${ProjectNextSectionClassName}__headline {
      position: absolute;

      top: calc(${CssFrameSizeWithBorderString} + ${Root.Size});

      font-size: 4vw;
      text-transform: uppercase;

      z-index: 800;

      &--next {
        left: ${LayeredSidebarWidth};
        /* font-weight: 600; */
      }

      &--keep-browsing {
        right: ${Root.Grid.Gutter.Right};

        span {
          opacity: .6;
        }

        a {
          opacity: .6;
          color: currentColor;

          margin-left: .5em;

          &:hover {
            opacity: 1;

            text-decoration: none;
          }
        }

      }
    }

    .${ProjectCardClassName} {
      padding-top: calc(${Root.Size} * 9);
      width: calc(100vw / 1.5);

      .${ProjectCardClassName}__inner {
        justify-content: flex-end;

        margin-bottom: -40vh;

        &:after {
          display: none;
        }

        &:before {
          bottom: 40vh;
        }
      }

      .${ProjectCardClassName}__row {
        &--top {
          display: none;
        }

        &--bottom {
          div {
            &:not(.project-card__col--bottom-right) {
              .${ProjectCardClassName}__col__content-row--content-major {
                font-size: 23vh;

                font-weight: 200;
                line-height: .7;

                font-family: "dharma";
              }
            }
          }

          &:before {
            left: calc(${CssFrameBorderWidth} * -1);

            width: calc(100% + (${CssFrameBorderWidth} * 2))
          }

          .project-card__col--bottom-right {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
        }

        &--center {
          order: 999;
        }
      }
    }
  }
`;
