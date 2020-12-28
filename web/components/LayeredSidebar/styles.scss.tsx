// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle, css } from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import { CssFrameBorderWidth, CssFrameSizeWithBorderString } from "../MellowFrameHeader/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name LayeredSidebarClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const LayeredSidebarClassName = "layered-sidebar";
export const LayeredSidebarWidth = "350px";
export const LayeredPaneWidth = "180px";
export const LayeredSidebarTransitionTime = ".25s";
export const LayeredCollapsedRatio = -0.65;
export const LayeredPaneCollapsedPaneWidth = `calc(${LayeredPaneWidth} + (${LayeredPaneWidth} * ${LayeredCollapsedRatio}))`;

export const GlobalSidebarPaneOffsetVariables = createGlobalStyle<{ panes: number, isHovered: boolean }>`
  :root {
    /* --${LayeredSidebarClassName}__global-pane-offset: calc(${props => props.panes - 1} * (${LayeredPaneCollapsedPaneWidth}) + ${CssFrameBorderWidth}); */

    // Hovered
    --${LayeredSidebarClassName}__global-pane-offset: ${props => props.isHovered ? `calc(${LayeredPaneWidth} + (${props.panes - 2} * (${LayeredPaneCollapsedPaneWidth})) + ${CssFrameBorderWidth})` : `calc(${props.panes - 1} * (${LayeredPaneCollapsedPaneWidth}) + ${CssFrameBorderWidth})`};
  }
`;

export const SidebarFullwidthCss = css`
  width: calc(100vw - (${CssFrameSizeWithBorderString} * 2));

  clip-path: polygon(
      var(--${LayeredSidebarClassName}__global-pane-offset) 0%,
      100% 0%,
      100% 100%,
      var(--${LayeredSidebarClassName}__global-pane-offset) 100%
  );

  transition: clip-path ${LayeredSidebarTransitionTime} ease-in-out;

  margin-left: calc(${LayeredSidebarWidth} * -1);
`;

/**
 *
 * @name LayeredSidebarStyle
 * @author Peter Laxalt
 *
 */
export const LayeredSidebarStyle = styled.nav`
  &.${LayeredSidebarClassName} {
    --${LayeredSidebarClassName}__pane-width: ${LayeredPaneWidth};
    --${LayeredSidebarClassName}__pane-padding: calc(${Root.FrameSize} * .5);

    /* position: fixed;

    left: 0;
    top: 0; */

    /* transform: translateX(${Root.FrameSize}); */

    /* will-change: transform; */
    /* transition: transform .5s ease-in-out; */

    &.${LayeredSidebarClassName}--frame-inactive {
      transform: translateX(0);
    }

    .${LayeredSidebarClassName}__inner {
      display: flex;
      flex-wrap: nowrap;

      .${LayeredSidebarClassName}__pane {
        width: var(--${LayeredSidebarClassName}__pane-width);
        height: 100vh;

        background: ${Theme.Color.varBackground};

        padding-top: calc(${Root.FrameSize} * 2.5);

        &:not(:first-child) {
          border-left: ${CssFrameBorderWidth} solid ${Theme.Color.varForeground};
          /* transform: translateX(-50%); */
          margin-left: calc(var(--${LayeredSidebarClassName}__pane-width) * ${LayeredCollapsedRatio});

          will-change: margin-left;
          transition: margin-left ${LayeredSidebarTransitionTime} ease-in-out;
        }



        &:hover {
          + .${LayeredSidebarClassName}__pane {
            margin-left: 0;

            /* + .${LayeredSidebarClassName}__pane {
              margin-left: 0;
            } */
          }
        }

        /* &:first-child {
          padding-left: calc(${Root.FrameSize} * .5);
        } */

        &__header {
          /* font-family: dharma; */
          /* font-size: 5rem; */

          font-size: 1.9rem;
          font-weight: bold;

          padding-left: var(--${LayeredSidebarClassName}__pane-padding);
          padding-right: calc(${Root.FrameSize} / 2);

          text-transform: uppercase;
        }

        &__list {

          &--major {
            padding-top: calc(${Root.FrameSize} * 1.5);

            &:first-child {
              padding-top: calc(${Root.FrameSize} * 2.25);
            }
          }

          &--minor {
            padding-top: 1.5rem;

            &:first-child {
              padding-top: calc(${Root.FrameSize} * 2.25);
            }
          }

          &__item {
            white-space: nowrap;


            &--major {
              font-size: 1.1rem;
              letter-spacing: .05rem;

              font-family: ${Theme.Font.Code};
              font-style: italic;

              line-height: 1.5;
            }

            &--minor {
              font-size: .6rem;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: .1rem;

              line-height: 2.25;
            }

            a {
              color: ${Theme.Color.varForeground};

              display: block;

              padding-left: var(--${LayeredSidebarClassName}__pane-padding);
              padding-right: calc(${Root.FrameSize} / 2);

              &:hover {
                background: ${Theme.Color.varForeground};
                color: ${Theme.Color.varBackground};

                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
`;
