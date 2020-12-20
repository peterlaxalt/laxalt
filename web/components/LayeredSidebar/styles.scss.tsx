// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name LayeredSidebarClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const LayeredSidebarClassName = "layered-sidebar";

/**
 *
 * @name LayeredSidebarStyle
 * @author Peter Laxalt
 *
 */
export const LayeredSidebarStyle = styled.nav`
  &.${LayeredSidebarClassName} {
    --${LayeredSidebarClassName}__pane-width: 200px;
    --${LayeredSidebarClassName}__pane-padding: calc(${Root.FrameSize} * .5);

    position: fixed;

    left: 0;
    top: 0;

    transform: translateX(${Root.FrameSize});

    will-change: transform;
    transition: transform .5s ease-in-out;

    z-index: 5;

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
          border-left: 2px solid ${Theme.Color.varForeground};
          /* transform: translateX(-50%); */
          margin-left: calc(var(--${LayeredSidebarClassName}__pane-width) * -.65);

          will-change: margin-left;
          transition: margin-left .25s ease-in-out;
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

          font-size: 2rem;
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


            &--major {
              font-size: 1.2rem;
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
