// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import {
  LayeredPaneCollapsedPaneWidth,
  LayeredSidebarClassName,
  LayeredSidebarTransitionTime,
  LayeredSidebarWidth,
} from "../../LayeredSidebar/styles.scss";
import {
  CssFrameBorderWidth,
  CssFrameSizeWithBorderString,
} from "../../MellowFrameHeader/styles.scss";
import { CaptionTextStyles } from "../../../constants/styles/Font";
import { OvalButtonClassName } from "../../OvalButton/styles.scss";
import { hexToRGB } from "../../../utils/hexToRGB";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectIntroSectionClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectIntroSectionClassName = "project-intro";
export const ProjectIntroSectionTransitionTime = "3s";

export const ProjectIntroSectionColumnHeight = `calc(100vh - calc(${CssFrameSizeWithBorderString} * 2))`;

/**
 *
 * @name ProjectIntroSectionStyle
 * @author Peter Laxalt
 *
 */
export const ProjectIntroSectionStyle = styled.section`
  &.${ProjectIntroSectionClassName} {
    // _____________________________________
    // Modifiers
    &.${ProjectIntroSectionClassName}--has-sidebar {
      width: calc(100vw - (${CssFrameSizeWithBorderString} * 2));
      margin-left: calc(${LayeredSidebarWidth} * -1);

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        width: 100%;
        max-width: 100%;
        margin-left: 0;
      }
    }

    &.${ProjectIntroSectionClassName}--is-scrolled {
      .${ProjectIntroSectionClassName}__content-wrapper {
      }
    }

    // _____________________________________
    // Scroller Setup
    .${ProjectIntroSectionClassName}__sticky-wrapper {
      position: sticky;

      top: 0;

      height: 100vh;
      width: 100%;

      overflow-x: hidden;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        position: relative;
        height: auto;

        overflow-x: unset;
      }
    }

    .${ProjectIntroSectionClassName}__content-wrapper {
      position: relative;

      height: 100vh;

      padding: 0;

      display: flex;

      overflow: hidden;

      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      padding-right: calc(
        ${CssFrameSizeWithBorderString} + ${Root.Grid.Gutter.Right} +
          (${CssFrameBorderWidth} * 4)
      );
      padding-left: calc(var(--${LayeredSidebarClassName}__global-pane-offset));

      transition: padding-left ${LayeredSidebarTransitionTime} ease;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        height: auto;

        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;

        display: block;

        overflow: visible;
      }
    }

    .${ProjectIntroSectionClassName}__horizontal-wrapper {
      position: relative;

      width: 100%;
      min-height: 100vh;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        min-height: unset;
      }
    }

    .${ProjectIntroSectionClassName}__x-translate-wrapper {
      position: absolute;

      height: 100%;

      transform-style: preserve-3d;

      /* transition: transform 0.5s ease-out; */
      will-change: transform;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        position: relative;
      }
    }

    .${ProjectIntroSectionClassName}__outer {
      position: relative;

      width: 100%;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        height: auto !important;
      }
    }

    // _____________________________________
    // Columns
    .${ProjectIntroSectionClassName}__col {
      flex-shrink: 0;

      background: ${Theme.Color.varBackground};

      &--image {
        /* max-width: 200vw; */

        padding-right: ${Root.Grid.Gutter.Right};

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          padding-right: 0;
        }

        .${ProjectIntroSectionClassName}__col__inner {
          box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};

          @media (max-width: ${Theme.Base.Media.Width.Md}) {

            margin-bottom: ${Root.Size};

            width: 100% !important;
            height: auto !important;

          }
        }
      }

      &--intro {

        height: ${ProjectIntroSectionColumnHeight};

        padding-top: calc(${CssFrameSizeWithBorderString} * 2);
        padding-bottom: calc(${CssFrameSizeWithBorderString} * 2);
        padding-right: calc(${Root.Grid.Gutter.Right} * 2);
        padding-left: ${Root.Grid.Gutter.Left};

        background:  linear-gradient(-90deg, ${Theme.Color.varBackground} 75%, ${hexToRGB(Theme.Color.White, 0)} 100%);

        width: calc(
          ${LayeredSidebarWidth} - ${LayeredPaneCollapsedPaneWidth} -
            calc((${Root.Grid.Gutter.Left} * 2) - (${CssFrameBorderWidth} * 2)) - ${CssFrameSizeWithBorderString}
        );
      }
    }

    // _____________________________________
    // Elements
    .${ProjectIntroSectionClassName}__intro-section {
      display: flex;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        display: none;
      }

      &__inner {
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-between;
      }

      &__top {
        &__badge,
        &__headline,
        &__large-body,
        &__body {
          margin-bottom: ${Root.Size};
        }

        &__headline {
          font-size: 1.5rem;

          text-transform: uppercase;

          position: relative;

          color: ${Theme.Color.varBackground};

          display: block;

          span {
            color: ${Theme.Color.varBackground};
            position: relative;
            z-index: 2;
          }

          &:before {
            content: "";

            position: absolute;

            left: 50%;
            top: 50%;

            transform: translate(-50%, -50%);

            background: ${Theme.Color.varForeground};

            width: 150%;
            height: 150%;

            border-radius: 50%;

            filter: blur(20px);

          }
        }

        &__large-body {
          font-family: ${Theme.Font.Code};

          font-size: 0.9rem;
        }

        &__body {
          font-size: 0.9rem;
        }

        &__cta {
          .${OvalButtonClassName} {
            &__el {
              width: 100%;
              min-width: unset;

              height: 4.5em;

              ${CaptionTextStyles};
            }
          }
        }

        &__badge {
          margin-bottom: ${Root.Size};

          svg {
            width: 50%;
            height: auto;
          }
        }
      }

      &__bottom {
        width: 100%;

        &__header {
          ${CaptionTextStyles};

          margin-bottom: ${Root.Size};

          position: relative;

          &:before {
            content: "";

            position: absolute;

            top: 50%;
            right: calc(${Root.Grid.Gutter.Right} * -2);

            transform: translateY(-50%);

            height: 1px;
            width: 95%;

            background: ${Theme.Color.varForeground};
          }
        }

        &__list {
          &__item {
            margin-bottom: 1.5em;

            &:last-child {
              margin-bottom: 0;
            }

            &__label,
            &__subtext {
              display: block;
            }

            &__label {
              font-weight: bold;
              text-transform: uppercase;

              margin-bottom: 0.25em;
            }

            &__subtext {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;
