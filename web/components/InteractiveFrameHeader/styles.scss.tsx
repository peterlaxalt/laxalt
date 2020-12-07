// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import { DharmaTypeClassName } from "../_svg/DharmaType/styles.scss";
import {} from "../../constants/styles/CssUtils";
import { ThemePickerClassName } from "../ThemePicker/styles.scss";
import { UpAndRotate } from "../../constants/styles/Animation";

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
    --${InteractiveFrameHeaderClassName}__frame-edge-size: ${Root.FrameSize};
    --${InteractiveFrameHeaderClassName}__marquee-speed: 60s;

    @media(max-width: ${Theme.Base.Media.Width.Md}) {
      --${InteractiveFrameHeaderClassName}__frame-edge-size: ${Root.FrameSize};
    }

    @media(max-width: ${Theme.Base.Media.Width.Sm}) {
      display: none;
    }

    overflow: hidden;

    position: fixed;

    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    z-index: 900;

    pointer-events: none;

    transform: scale(1);
    transform-origin: center center;
    will-change: transform;
    transition: transform .5s ease-in-out;


    &.${InteractiveFrameHeaderClassName}--inactive,
    &.${InteractiveFrameHeaderClassName}--fill-bars-is-expanded {
      transform: scale(1.2);
    }

    // __________________________
    // Inner Grid
    .${InteractiveFrameHeaderClassName}__inner {
      width: 100vw;
      height: 100vh;

      position: relative;

      z-index: 999;

      pointer-events: none;
    }

    // __________________________
    // Frame container
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

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        transform: translate(-50%, -50%) rotate(90deg);

        width: calc(100vh - (var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 2.25));
        height: calc(100vw - (var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 2.25));
      }

      .${DharmaTypeClassName} {
        --${DharmaTypeClassName}-offset-size: 10px;

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          --${DharmaTypeClassName}-offset-size: 5px;
        }

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        &--offset {
          top: calc(var(--${DharmaTypeClassName}-offset-size) * (var(--${DharmaTypeClassName}-offset) * -1));
          left: calc(var(--${DharmaTypeClassName}-offset-size) * (var(--${DharmaTypeClassName}-offset) * 1));
          right: calc(var(--${DharmaTypeClassName}-offset-size) * (var(--${DharmaTypeClassName}-offset) * -1));
          bottom: calc(var(--${DharmaTypeClassName}-offset-size) * (var(--${DharmaTypeClassName}-offset) * 1));
        }
      }

      .${DharmaTypeClassName}__character {
        fill: ${Theme.Color.varForeground};

        transition: stroke-width .5s ease;
      }
    }

    .${InteractiveFrameHeaderClassName}__frame {
      z-index: 500;

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
        font-size: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * 0.5);
        text-transform: uppercase;
        line-height: 0;

        z-index: 800;

        background: ${Theme.Color.varBackground};

        .${InteractiveFrameHeaderClassName}__frame-items {
          list-style-type: none;

          color: ${Theme.Color.varForeground};

          height: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);

          display: block;
          align-items: center;
          justify-content: flex-start;

          li {
            margin-right: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 2);

            a {
              color: ${Theme.Color.varForeground};

              position: relative;

              &:before {
                content: '';

                position: absolute;

                top: 50%;
                left: 0;

                width: 100%;

                height: 2px;
                background: ${Theme.Color.varForeground};

                opacity: 0;
              }

              &:hover {
                text-decoration: none;

                &:before {
                  opacity: 1;
                }
              }
            }



            &:focus, &:active {
              text-decoration: line-through;
            }
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
          /* border-bottom: 2px solid ${Theme.Color.varForeground}; */

          .${InteractiveFrameHeaderClassName}__frame-items {
            padding-top: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);
            padding-bottom: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);

            position: relative;

            border-bottom: 2px solid ${Theme.Color.varForeground};

            animation: marqueeTopRightQuadrants var(--${InteractiveFrameHeaderClassName}__marquee-speed) linear infinite;
          }
        }

        &--bottom,
        &--left {
          /* border-top: 2px solid ${Theme.Color.varForeground}; */

          .${InteractiveFrameHeaderClassName}__frame-items {
            padding-top: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);
            padding-bottom: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) / 6);

            border-top: 2px solid ${Theme.Color.varForeground};

            animation: marqueeBottomLeftQuadrants var(--${InteractiveFrameHeaderClassName}__marquee-speed) linear infinite;
          }
        }

        &--top,
        &--bottom {
          /* width: calc(100vw - var(--${InteractiveFrameHeaderClassName}__frame-edge-size)); */
          width: 100vw;
        }

        &--left,
        &--right {
          /* width: calc(100vh - var(--${InteractiveFrameHeaderClassName}__frame-edge-size)); */
          width: 100vh;
        }

        &--top {
          /* background: seashell; */

          top: 0;
          left: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);

          .${ThemePickerClassName} {
            position: absolute;

            top: 0;
            left: calc(50% - var(--${InteractiveFrameHeaderClassName}__frame-edge-size));

            transform: translateX(-50%);
          }
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

      /* Corners */
      /* ____________________________________________ */
      .${InteractiveFrameHeaderClassName}__frame__corner-action {
        width: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);
        height: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);

        position: fixed;

        z-index: 999;

        pointer-events: all;

        &__wrapper {
          display: grid;
          place-items: center;

          width: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);
          height: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);

          background: ${Theme.Color.varForeground};

          pointer-events: all;

          cursor: pointer;

          &:hover {
            color: ${Theme.Color.varBackground};
            text-decoration: none;
          }
        }

        &--top-left {
          top: 0;
          left: 0;
        }

        &--top-right {
          top: 0;
          right: 0;
        }

        &--bottom-left {
          bottom: 0;
          left: 0;
        }

        &--bottom-right {
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  /* Icons */
  /* ____________________________________________ */
  .icon {
    display: block;

    position: relative;

    width: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);
    height: var(--${InteractiveFrameHeaderClassName}__frame-edge-size);

    background: ${Theme.Color.varForeground};

    border: 2px solid ${Theme.Color.varForeground};

    z-index: 20;

    &:hover {
      background: ${Theme.Color.varBackground};

      .icon__el {
        background: ${Theme.Color.varForeground};

        &:before,
        &:after {
          background: ${Theme.Color.varForeground};
        }
      }
    }

    &__el {
      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      display: block;
    }

     /* _________________________________________________ */
    /* Eye Icon */
    &--eye {

      position: relative;

      &:before {
        content: "";

        position: absolute;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        width: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * .15);
        height: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * .15);

        border-radius: 50%;

        background: ${Theme.Color.varBackground};

        z-index: 5;
      }

      &:hover {
        &:before {
          background: ${Theme.Color.varBackground};
        }
      }

      &__el {

        width: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * .5);
        height: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * .5);

        background: ${Theme.Color.varForeground};
        border: 2px solid ${Theme.Color.varBackground};

        transform: translate(-50%, -50%) rotate(45deg);

        border-radius: 75% 0%;
      }
    }

    /* _________________________________________________ */
    /* Star Icon */
    &--star {

      position: relative;

      &:before {
        content: "";

        position: absolute;

        left: 50%;
        top: 50%;

        display: block;

        height: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * .6);
        width: 2px;

        transform: translate(-50%, -50%);
        transform-origin: center center;

        background: ${Theme.Color.varBackground};
      }

      &:hover {
        &:before {
          background: ${Theme.Color.varForeground};
        }
      }

      &__el {
        width: calc(var(--${InteractiveFrameHeaderClassName}__frame-edge-size) * .6);
        height: 2px;

        background: ${Theme.Color.varBackground};

        position: relative;

        &:before,
        &:after {
          content: "";

          position: absolute;

          left: 0;
          top: 0;

          display: block;

          width: 100%;
          height: 2px;

          background: ${Theme.Color.varBackground};
        }

        &:before {
          transform: rotate(45deg);
          transform-origin: center center;
        }

        &:after {
          transform: rotate(-45deg);
          transform-origin: center center;
        }
      }
    }

    /* _________________________________________________ */
    /* Home Icon */
    &--brandmark {

      &:before {
        content: '';

        position: absolute;

        top: 20%;
        right: 20%;

        display: block;

        width: 25%;
        height: 25%;

        border-radius: 50%;

        background: ${Theme.Color.varBackground};
      }

      &:hover {
        &:before {
          background: ${Theme.Color.varForeground};
        }
      }

      &__el {
        width: 60%;
        padding-bottom: 60%;


        background: ${Theme.Color.varBackground};

        clip-path: polygon(0 0, 0 100%, 100% 100%);
      }
    }

    /* _________________________________________________ */
    /* Menu Icon */
    &--menu {
      &__el {
        width: 60%;
        height: 2px;

        background: ${Theme.Color.varBackground};

        &:before,
        &:after {
          content: "";

          position: absolute;

          left: 0;

          width: 100%;
          height: 2px;

          background: ${Theme.Color.varBackground};
        }

        &:before {
          top: -.65rem;
        }

        &:after {
          bottom: -.65rem;
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
    position: fixed;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    overflow: hidden;

    pointer-events: none;

    z-index: 800;

    &.${InteractiveLogotypeClassName}--is-expanded {
      .${InteractiveLogotypeClassName}__inner {
        .${InteractiveLogotypeClassName}__el {
          &:before {
            transform: translate(-50%, -50%) scale(30);

            pointer-events: none;
          }
        }
      }
    }

    .${InteractiveLogotypeClassName}__inner {
      position: absolute;

      top: 1rem;
      left: 50%;

      transform: translate(-50%, -150%);
      transition: transform 1s ease;
      will-change: transform;

      z-index: 800;

      max-width: 101px;

      .${InteractiveLogotypeClassName}__el {
        font-family: "dharma";
        font-size: calc(${Root.FrameSize} * 1.5);
        line-height: 0.8;

        display: block;

        padding: 1rem;

        color: ${Theme.Color.varBackground};

        pointer-events: all;

        &__label {
          position: relative;
          z-index: 5;
        }

        &:before,
        &:after {
          content: "";

          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(1);
          transform-origin: center center;
          transition: transform 1.5s ease;
          will-change: transform;

          width: 100%;
          height: 100%;
        }

        &:before {
          background: ${Theme.Color.varForeground};
        }

        &:after {
          background: ${Theme.Color.varForeground};
          border: 2px solid ${Theme.Color.varForeground};
          box-shadow: 0px 0px 0px 2px ${Theme.Color.varBackground};
        }

        &:hover {
          color: ${Theme.Color.varForeground};

          &:after {
            background: ${Theme.Color.varBackground};
            border: 2px solid ${Theme.Color.varForeground};
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

/**
 *
 * @name InteractiveEyeball
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const InteractiveEyeballClassName = "interactive-eyeball";

/**
 *
 * @name InteractiveEyeballStyle
 * @author Peter Laxalt
 *
 */
export const InteractiveEyeballStyle = styled.span`
  &.${InteractiveEyeballClassName} {
    --${InteractiveEyeballClassName}__eye-size: .8em;

    display: block;

    margin-left: calc(var(--${InteractiveEyeballClassName}__eye-size) * .3);
    margin-right: calc(var(--${InteractiveEyeballClassName}__eye-size) * .3);

    position: relative;

    .${InteractiveEyeballClassName}__outline {
      display: block;
      width: var(--${InteractiveEyeballClassName}__eye-size);
      height: var(--${InteractiveEyeballClassName}__eye-size);

      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;

      transform: rotate(-45deg);

      border: 4px solid ${Theme.Color.varBackground};
    }

    .${InteractiveEyeballClassName}__pupil-wrapper {
      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      transform-origin: center center;
    }

    .${InteractiveEyeballClassName}__pupil {
      height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .85);
      width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .85);

      display: flex;
      align-items: center;
      justify-content: flex-end;

      transition: .5s transform ease;
      will-change: transform;

      &__el {
        display: block;

        height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .65);
        width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .65);

        border-radius: 50%;

        position: relative;

        border: 4px solid ${Theme.Color.varBackground};

        &:before {
          content: '';

          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(1);
          transition: .5s transform ease;
          will-change: transform;

          width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .35);
          height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .35);

          background: ${Theme.Color.varBackground};

          border-radius: 50%;
        }

        /* &:after {
          content: '';

          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(0);
          transition: .5s transform ease;
          will-change: transform;

          width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .45);
          height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .45);

          background: ${Theme.Color.varForeground};

          border-radius: 50%;
        } */
      }
    }
  }
`;

/**
 *
 * @name InteractiveOverlayNavigation
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const InteractiveOverlayNavigationClassName = "interactive-overlay-nav";

/**
 *
 * @name InteractiveOverlayNavigationStyle
 * @author Peter Laxalt
 *
 */
export const InteractiveOverlayNavigationStyle = styled.nav`
  &.${InteractiveOverlayNavigationClassName} {
    --${InteractiveOverlayNavigationClassName}__top-offset: 123px;
    --${InteractiveOverlayNavigationClassName}__arrow-width: 1em;
    --${InteractiveOverlayNavigationClassName}__arrow-margin: .25em;
    --${InteractiveOverlayNavigationClassName}__arrow-total-size: calc(var(--${InteractiveOverlayNavigationClassName}__arrow-width) + var(--${InteractiveOverlayNavigationClassName}__arrow-margin));

    position: fixed;

    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    overflow-x: hidden;

    z-index: 850;

    /* _________________________________________________ */
    /* Inner Grid */
    .${InteractiveOverlayNavigationClassName}__inner {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100vw;

      padding-bottom: 250px;
      padding-top: var(--${InteractiveOverlayNavigationClassName}__top-offset);
    }

    /* _________________________________________________ */
    /* Oval Buttons */
    .${InteractiveOverlayNavigationClassName}__oval-btn {
      position: relative;

      &--home,
      &--close {
        position: fixed;

        top: 1rem;

        z-index: 10;
      }

      &--home {
        left: 1rem;
      }

      &--close {
        right: 1rem;
      }

      &__el {
        display: flex;

        align-items: center;
        justify-content: center;

        min-width: 200px;
        height: 4rem;

        border-radius: 100%;
        background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground};
        border: 2px solid ${Theme.Color.varBackground};
        box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};

        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.5rem;

        &:hover {
          background: ${Theme.Color.varBackground};
          color: ${Theme.Color.varForeground};
          border: 2px solid ${Theme.Color.varBackground};

          text-decoration: none;
        }

      }
    }

    /* _________________________________________________ */
    /* Social List */
    .${InteractiveOverlayNavigationClassName}__social {
      position: fixed;

      bottom: 1rem;
      right: 0;

      z-index: 50;

      &__list {
        min-width: 250px;

        font-size: 1.5rem;
        font-family: ${Theme.Font.Code};
        font-style: italic;

        &__item {
          position: relative;

          &__label {
            color: ${Theme.Color.varBackground};
            display: block;

            padding: .5rem 0;

            &:hover {
              text-decoration: none;

              color: ${Theme.Color.varForeground};
              background: ${Theme.Color.varBackground};

            }
          }
        }
      }

      &__minor-list {
        margin-top: 1rem;

        font-size: .6rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .1rem;

        line-height: 2.25;

        color: ${Theme.Color.varBackground}
      }
    }

    /* _________________________________________________ */
    /* Nav List */
    .${InteractiveOverlayNavigationClassName}__nav-list {
      width: 100%;

      margin-left: ${Root.Grid.Gutter.Left};

      &__item {
        overflow: hidden;

        font-size: 10vw;
        text-transform: uppercase;

        display: flex;
        align-items: center;

        &:hover {
          .${InteractiveEyeballClassName} {
            .${InteractiveEyeballClassName}__pupil__el {
              &:before {
                transform: translate(-50%, -50%) scale(1.5);
              }

              &:after {
                transform: translate(-50%, -50%) scale(1);
              }
            }
          }
        }

        &__overflow-wrapper {
          overflow: hidden;
        }

        &__inner {
          display: block;

          transform: translateX(calc(var(--${InteractiveOverlayNavigationClassName}__arrow-total-size) * -1));
          will-change: transform;

          transition: transform .5s ease-in-out;
        }

        &:hover {
          .${InteractiveOverlayNavigationClassName}__nav-list__item__inner {
            transform: translateX(0);
          }

          .${InteractiveOverlayNavigationClassName}__nav-list__item__anchor__indicator {
            transform: translateX(0%);
          }
        }

        &__anchor {
          color: ${Theme.Color.varBackground};

          pointer-events: all;

          position: relative;
          display: flex;
          align-items: center;

          animation: ${UpAndRotate} 1s ease 1;

          &:hover {
            text-decoration: none;
          }

          &__indicator {
            width: var(--${InteractiveOverlayNavigationClassName}__arrow-width);

            display: block;

            margin-right: var(--${InteractiveOverlayNavigationClassName}__arrow-margin);

            height: 4px;
            background: ${Theme.Color.varBackground};

            position: relative;

            transform: translateX(-20%);
            will-change: transform;

            transition: transform 1.5s ease-in-out;

            &:before,
            &:after {
              content: "";

              position: absolute;
              right: 0;

              height: .5em;
              width: .5em;
            }

            &:before {
              border-left: 4px solid ${Theme.Color.varBackground};
              border-bottom: 4px solid ${Theme.Color.varBackground};

              border-bottom-left-radius: 100%;

              bottom: 50%;
            }

            &:after {
              border-left: 4px solid ${Theme.Color.varBackground};
              border-top: 4px solid ${Theme.Color.varBackground};

              border-top-left-radius: 100%;

              top: 50%;
            }
          }
        }
      }
    }
  }
`;
