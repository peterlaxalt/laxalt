// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import {} from "../../../constants/Root";
import { DharmaTypeClassName } from "../../_svg/DharmaType/styles.scss";
import {} from "../../../constants/styles/CssUtils";
import { PulseStroke } from "../../../constants/styles/Animation";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeaderClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const InteractiveFrameHeaderClassName = "interactive-frame-header";

/**
 *
 * @name InteractiveFrameHeaderStyle
 * @author Peter Laxalt
 *
 */
export const InteractiveFrameHeaderStyle = styled.div`
  &.${InteractiveFrameHeaderClassName} {
    // __________________________
    // Settings
    --${InteractiveFrameHeaderClassName}__frame-edge-size: 3rem;
    --${InteractiveFrameHeaderClassName}__marquee-speed: 60s;

    @media(max-width: ${Theme.Base.Media.Width.Md}) {
      --${InteractiveFrameHeaderClassName}__frame-edge-size: 2rem;
    }

    // __________________________
    // Inner Grid
    .${InteractiveFrameHeaderClassName}__inner {
      width: 100vw;
      height: 100vh;

      position: relative;
    }

    .${DharmaTypeClassName}, .${InteractiveFrameHeaderClassName}__frame {
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 100%;
    }

    .${InteractiveFrameHeaderClassName}__type {
      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      width: calc(100% - (var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 2));
      height: calc(100% - (var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 2.25));

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        transform: translate(-50%, -50%) rotate(90deg);

        width: calc(100vh - (var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 2.25));
        height: calc(100vw - (var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 2.25));
      }

      cursor: crosshair;

      .${DharmaTypeClassName} {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;
      }

      .${DharmaTypeClassName}__character {
        fill: ${Theme.Color.Galaxy};

        /* stroke: salmon; */
        /* stroke-width: .15px; */

        transition: stroke-width .5s ease;


        filter: url(#displacementFilter);

        /* animation: ${PulseStroke} calc(1s * ((var(--dharma-type-key) / 2) + 1)) ease infinite; */

        &:hover {
          /* stroke-width: 1px; */
          /* fill: none; */
        }
      }
    }

    .${InteractiveFrameHeaderClassName}__frame {
      &__y-axis,
      &__x-axis {
        position: absolute;

        overflow: hidden;

        left: 50%;
        top: 50%;

        pointer-events: none;

      }

      &__y-axis {
        width: 100vw;
        height: 100vh;

        transform: translate(-50%, -50%);
      }

      &__x-axis {
        width: 100vh;
        height: 100vw;

        transform: translate(-50%, -50%) rotate(90deg);
      }

      &__edge {
        font-size: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 0.75);
        text-transform: uppercase;
        line-height: 0;

        .${InteractiveFrameHeaderClassName}__frame-items {
          list-style-type: none;

          color: ${Theme.Color.Galaxy};

          height: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);

          display: block;
          align-items: center;
          justify-content: flex-start;

          li {
            margin-right: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 2);
          }
        }

        .${InteractiveFrameHeaderClassName}__marquee-container {
          flex-shrink: 0;

          display: flex;
          justify-content: flex-start;

          flex-wrap: nowrap;
          position: relative;

          overflow: hidden;

          .${InteractiveFrameHeaderClassName}__frame-items {
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;

            flex-shrink: 0;

            li {
              width: auto;
              flex-shrink: 0;
              white-space: nowrap;

              vertical-align: middle;
              display: table-cell;
            }
          }
        }

        &--top,
        &--bottom,
        &--left,
        &--right {
          position: absolute;

          overflow: hidden;

          pointer-events: all;
        }

        &--top,
        &--right {
          border-bottom: 1px solid ${Theme.Color.Galaxy};

          .${InteractiveFrameHeaderClassName}__frame-items {
            padding-top: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);
            padding-bottom: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);

            position: relative;

            animation: marqueeTopRightQuadrants var(--${InteractiveFrameHeaderClassName}__marquee-speed) linear infinite;
          }
        }

        &--bottom,
        &--left {
          border-top: 1px solid ${Theme.Color.Galaxy};

          .${InteractiveFrameHeaderClassName}__frame-items {
            padding-top: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);
            padding-bottom: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);

            animation: marqueeBottomLeftQuadrants var(--${InteractiveFrameHeaderClassName}__marquee-speed) linear infinite;
          }
        }

        &--top,
        &--bottom {
          width: calc(100vw - var(--${InteractiveFrameHeaderClassName}__frame-edge-size));
        }

        &--left,
        &--right {
          width: calc(100vh - var(--${InteractiveFrameHeaderClassName}__frame-edge-size));
        }

        &--top {
          /* background: seashell; */

          top: 0;
          left: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);
        }

        &--bottom {
          /* background: magenta; */

          bottom: 0;
          right: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);
        }

        &--right {
          /* background: orange; */

          top: 0;
          left: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);
        }

        &--left {
          /* background: goldenrod; */

          bottom: 0;
          left: 0;
        }
      }
    }
  }
`;
