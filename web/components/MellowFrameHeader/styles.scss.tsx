// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import {} from "../../constants/styles/CssUtils";
import { hexToRGB } from "../../utils/hexToRGB";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name MellowFrameHeaderClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const MellowFrameHeaderClassName = "mellow-frame-header";
export const CssFrameBorderWidth = `2px`;
export const CssFrameBorderString = `${CssFrameBorderWidth} solid ${Theme.Color.varForeground}`;
export const CssFramePaddingString = `calc(${Root.FrameSize} / 2)`;
export const CssFrameSizeWithBorderString = `calc(${CssFramePaddingString} + ${CssFrameBorderWidth})`;

/**
 *
 * @name MellowFrameHeaderStyle
 * @author Peter Laxalt
 *
 */
export const MellowFrameHeaderStyle = styled.div`
  &.${MellowFrameHeaderClassName} {
    // __________________________
    // Settings
    --${MellowFrameHeaderClassName}__frame-edge-size: ${Root.FrameSize};
    --${MellowFrameHeaderClassName}__frame-padding: ${CssFramePaddingString};
    --${MellowFrameHeaderClassName}__marquee-speed: 60s;

    @media(max-width: ${Theme.Base.Media.Width.Md}) {
      --${MellowFrameHeaderClassName}__frame-edge-size: ${Root.FrameSize};
    }


    overflow: hidden;

    position: fixed;

    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    z-index: 900;

    pointer-events: none;


    &.${MellowFrameHeaderClassName}--inactive,
    &.${MellowFrameHeaderClassName}--fill-bars-is-expanded {
      .${MellowFrameHeaderClassName}__frame__nav--top {
        transform: translateY(-100%);
      }

      .${MellowFrameHeaderClassName}__frame__nav--bottom {
        transform: translateY(100%);
      }
    }

    // __________________________
    // Inner Grid
    .${MellowFrameHeaderClassName}__inner {
      width: 100vw;
      height: 100vh;

      position: relative;

      z-index: 999;

      pointer-events: none;

      border: var(--${MellowFrameHeaderClassName}__frame-padding) solid ${Theme.Color.varBackground};

      display: flex;
    }

    // __________________________
    // Frame container
    .${MellowFrameHeaderClassName}__frame {
      border: ${CssFrameBorderString};
      width: 100%;

      z-index: 500;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      overflow: hidden;

      &__nav {
        width: 100%;
        height: ${Root.FrameSize};

        background: ${Theme.Color.varBackground};

        pointer-events: all;

        text-transform: uppercase;

        transform: translateY(0%);
        will-change: transform;
        transition: transform .5s ease-in-out;

        &--top {
          border-bottom: ${CssFrameBorderString};
          transform-origin: top center;
        }

        &--bottom {
          border-top: ${CssFrameBorderString};
          transform-origin: bottom center;
        }

        &__inner {
          display: flex;
          align-items: center;
        }

        &__col {
          width: 50%;
          height: ${Root.FrameSize};

          display: flex;
          align-items: center;

          &--time {
            flex: 1;
          }

          &--contact {
            width: auto;
            flex-shrink: 0;
          }

          &--left {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          &--right {
            padding-right: 1rem;
          }
        }

        &__inner-col {
          width: 50%;

          &--misc {
            text-align: right;
            font-weight: 800;
          }

          &--contact-btn,
          &--theme-picker {
            width: auto;
            flex-shrink: 0;
          }

          &--contact-btn {
            font-weight: 800;
            padding-left: 1.5rem;
          }
        }

        &__misc-wrapper,
        &__linklist {
          position: relative;

          &:before {
            content: '';
            position: absolute;

            top: 50%;

            width: 1.5rem;
            height: 1px;

            background: ${Theme.Color.varForeground};

            transform: translateY(-50%);
          }
        }

        &__linklist {
          padding-left: 2.5rem;

          &:before {
            left: 0;
          }
        }

        &__misc-wrapper {
          padding-right: 2.5rem;
          display: flex;
          justify-content: flex-end;

          &:before {
            right: 0;
          }

          &__el {
            margin-right: 0 !important;
          }
        }

        &__brandmark {
          font-weight: 800;

          padding-left: 2rem;

          &__label {
            width: auto;
          }
        }

        &__linklist {
          display: flex;

          position: relative;

          &__item {
            margin-right: 2rem;

            &__el {
              color: ${Theme.Color.varForeground};

              height: ${Root.FrameSize};

              display: inline-flex;
              align-items: center;

              position: relative;

              overflow: hidden;

              &--contact-btn {
                &:before {
                  bottom: unset;
                  top: 0;
                }
              }

              &:before {
                content: '';
                position: absolute;

                left: 0;
                right: 0;
                bottom: 0;

                width: 100%;
                height: 3px;

                background: ${Theme.Color.varForeground};

                /* transform: translateY(100%);
                transition: transform .5s ease; */

                opacity: 0;
              }

              &:hover {
                text-decoration: none;

                &:before {
                  /* transform: translateY(0%); */
                  opacity: 1;
                }
              }
            }

            &__time {
              font-size: .6rem;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: .1rem;

              line-height: 2.25;
            }
          }
        }
      }
    }

  }

`;

/**
 *
 * @name InteractiveLogotypeClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const InteractiveLogotypeClassName = "interactive-logotype";

/**
 *
 * @name InteractiveLogotypeStyle
 * @author Peter Laxalt
 *
 */
export const InteractiveLogotypeStyle = styled.div`
  &.${InteractiveLogotypeClassName} {
    --${InteractiveLogotypeClassName}__icon-size: calc(${Root.FrameSize} / 1.75);
    --${InteractiveLogotypeClassName}__circle-size: calc(var(--${InteractiveLogotypeClassName}__icon-size) * 1.2);
    --${InteractiveLogotypeClassName}__circle-radius: calc(var(--${InteractiveLogotypeClassName}__circle-size) / 2);
    --${InteractiveLogotypeClassName}__circle-circumference: calc(2 * ${Math.PI} * var(--${InteractiveLogotypeClassName}__circle-radius));

    position: fixed;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: calc(100vw - (${CssFramePaddingString} * 2));
    height: calc(100vh - (${CssFramePaddingString} * 2));

    overflow: hidden;

    pointer-events: none;

    z-index: 900;

    &--inactive {
      .${InteractiveLogotypeClassName}__el {
        .${InteractiveLogotypeClassName}__el__circle {
          stroke-dashoffset: 0 !important;
        }
      }
    }

    &--is-expanded {

      .${InteractiveLogotypeClassName}__inner {
        transform: translate(-50%, 90%) !important;
      }

      .${InteractiveLogotypeClassName}__el {

        .${InteractiveLogotypeClassName}__el__circle {
          stroke-dashoffset: 0 !important;
          stroke-width: calc(${CssFrameBorderWidth} / 1.5) !important;

          transform: translate(-50%, -50%) scale(1.5) !important;

          fill: ${Theme.Color.varForeground} !important;
          stroke: ${Theme.Color.varBackground} !important;
        }

        &__icon {
          transform: scale(1.25) rotate(90deg) !important;

          /* &:hover {
            transform: scale(1.25) rotate(0deg) !important;
          } */

          &:before {
            transform: translate(-50%, -50%) scaleY(0) !important;

            background: ${Theme.Color.varBackground} !important;
          }

          &:after {
            transform: translate(-50%, -50%) scaleX(0) !important;

            background: ${Theme.Color.varBackground} !important;
          }

          &__diagonal {
            &:before, &:after {
              transform: scaleY(1) !important;

              background: ${Theme.Color.varBackground} !important;
            }
          }
        }
      }
    }

    &--fill {
      z-index: 800;
    }

    .${InteractiveLogotypeClassName}__inner {
      position: absolute;

      top: calc(${Root.FrameSize} / 4.35);
      left: 50%;

      transform: translate(-50%, 0%);
      transition: transform 1s ease;
      will-change: transform;

      z-index: 800;

      .${InteractiveLogotypeClassName}__el {
        display: block;

        width: var(--${InteractiveLogotypeClassName}__icon-size);
        height: var(--${InteractiveLogotypeClassName}__icon-size);

        transform: scale(1);

        color: ${Theme.Color.varBackground};

        pointer-events: all;

        position: relative;

        transition: transform 1s ease;

        &:hover {
          .${InteractiveLogotypeClassName}__el__circle {
            stroke-dashoffset: 0;
          }
        }

        &__circle {
          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          overflow: visible;

          stroke: ${Theme.Color.varForeground};
          stroke-width: ${CssFrameBorderWidth};
          stroke-dasharray: var(--${InteractiveLogotypeClassName}__circle-circumference);
          stroke-dashoffset: var(--${InteractiveLogotypeClassName}__circle-circumference);

          fill: ${Theme.Color.varBackground};

          width: calc(var(--${InteractiveLogotypeClassName}__circle-radius) * 2);
          height: calc(var(--${InteractiveLogotypeClassName}__circle-radius) * 2);

          transition: stroke-dasharray 1s ease, stroke-dashoffset 1s ease, transform 1s ease, stroke-width 1s ease;


        }

        &:before,
        &:after {
          content: "";

          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(1);
          transform-style: preserve-3d;
          transform-origin: center center;
          transition: transform 1.5s ease;
          will-change: transform;

          width: 100%;
          height: 100%;
        }

        &:after {
          /* background: ${Theme.Color.varBackground}; */
          /* border: 2px solid ${Theme.Color.varBackground};
          box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground},
            0px 0px 0px 4px ${Theme.Color.varBackground}; */
        }

        &__icon {
          position: relative;

          width: var(--${InteractiveLogotypeClassName}__icon-size);
          height: var(--${InteractiveLogotypeClassName}__icon-size);

          display: block;

          z-index: 10;

          transform: scale(1);

          transform-origin: center center;
          transform-style: preserve-3d;

          transition: transform 1s ease;
          will-change: transform;

          &:hover {
            transform: scale(1.25);

            &:before {
              transform: translate(-50%, -50%) scaleY(0);
            }

            &:after {
              transform: translate(-50%, -50%) scaleX(0);
            }
          }

          &:before,
          &:after {
            content: '';
            position: absolute;

            background: ${Theme.Color.varForeground};

            left: 50%;
            top: 50%;


            transform-origin: center center;

            transition: transform 1s ease;
            will-change: transform;
          }

          &:before {
            width: 2px;
            height: 80%;

            transform: translate(-50%, -50%) scaleY(1);
          }

          &:after {
            width: 80%;
            height: 2px;

            transform: translate(-50%, -50%) scaleX(1);
          }

          &__diagonal {
            position: absolute;

            z-index: 15;

            display: block;

            left: 50%;
            top: 50%;

            width: 2px;
            height: 80%;

            transform-origin: center center;

            &--down {
              transform: translate(-50%, -50%) rotate(45deg);
            }

            &--up {
              transform: translate(-50%, -50%) rotate(-45deg);
            }

            &:before, &:after {
              content: '';

              position: absolute;

              width: 100%;
              height: 100%;

              transform: scaleY(.25);

              transition: transform 1s ease;
              will-change: transform;

              background: ${Theme.Color.varForeground};
            }

            &:before {
              top: 0;
              left: 0;

              transform-origin: top center;
            }

            &:after {
              bottom: 0;
              left: 0;

              transform-origin: bottom center;
            }
          }
        }
      }
    }

    &--inactive,
    &--fill-bars-is-expanded {
      .${InteractiveLogotypeClassName}__inner {
        transform: translate(-50%, 0%);
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      .${InteractiveLogotypeClassName}__inner {
        transform: translate(-50%, 0%);
      }
    }
  }
`;

/**
 *
 * @name InteractiveFillBarsClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const InteractiveFillBarsClassName = "interactive-fill-bars";

/**
 *
 * @name InteractiveFillBarsStyle
 * @author Peter Laxalt
 *
 */
export const InteractiveFillBarsStyle = styled.div`
  &.${InteractiveFillBarsClassName} {
    // __________________________
    // Active state
    &.${InteractiveFillBarsClassName}--is-expanded {
      .${InteractiveFillBarsClassName}__fill-bar {
        &--top,
        &--bottom {
          transform: scaleY(1);
        }

        &--left,
        &--right {
          transform: scaleX(1);
        }
      }
    }

    // __________________________
    // Fill bars
    .${InteractiveFillBarsClassName}__fill-bar {
      background: ${Theme.Color.varForeground};

      will-change: transform;
      transition: transform 1.5s ease-in-out;

      display: block;

      position: fixed;

      z-index: 700;

      &--top,
      &--bottom {
        height: 60vh;
        width: 100vw;

        transform: scaleY(0);
        left: 0;
      }

      &--left,
      &--right {
        width: 60vw;
        height: 100vh;

        transform: scaleX(0);
        top: 0;
      }

      &--top {
        transform-origin: top center;
        top: 0;
      }

      &--bottom {
        transform-origin: bottom center;
        bottom: 0;
      }

      &--left {
        transform-origin: left center;
        left: 0;
      }

      &--right {
        transform-origin: right center;
        right: 0;
      }
    }
  }
`;
