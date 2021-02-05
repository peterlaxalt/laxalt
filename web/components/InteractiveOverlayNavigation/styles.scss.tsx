// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import {} from "../../constants/styles/CssUtils";
import { UpAndRotate } from "../../constants/styles/Animation";
import { InteractiveEyeballClassName } from "../InteractiveEyeball/styles.scss";
import { CssFrameBorderWidth, CssFramePaddingString, CssFrameSizeWithBorderString } from "../MellowFrameHeader/styles.scss";
import { OvalButtonClassName } from "../OvalButton/styles.scss";

// Begin Styles
// _________________________________________________________________________

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

    background: ${Theme.Color.varForeground};

    /* _________________________________________________ */
    /* Inner Grid */
    .${InteractiveOverlayNavigationClassName}__inner {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100vw;

      padding-bottom: 250px;
      padding-top: var(--${InteractiveOverlayNavigationClassName}__top-offset);

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        display: block;
      }
    }

    /* _________________________________________________ */
    /* Oval Buttons */
    .${InteractiveOverlayNavigationClassName}__oval-btn {
      position: relative;

      &--home,
      &--close {
        position: fixed;

        top: calc((${CssFramePaddingString}) * 2);

        z-index: 10;

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          top: 2.25rem;

          .${OvalButtonClassName}__el {
            font-size: .7rem;

            font-weight: 600;

            letter-spacing: 1px;
          }
        }
      }

      &--home {
        left: calc((${CssFramePaddingString}) * 2);

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          left: 1rem;
        }
      }

      &--close {
        right: calc((${CssFramePaddingString}) * 2);

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          right: 1rem;
        }
      }
    }

    /* _________________________________________________ */
    /* Social List */
    .${InteractiveOverlayNavigationClassName}__social {
      position: fixed;

      bottom: calc((${CssFramePaddingString}) * 2);
      right: 0;

      z-index: 50;

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        position: relative;
        bottom: 0;

        margin-top: 2rem;
        margin-left: ${Root.Grid.Gutter.Left};
      }

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

      margin-left: calc((${CssFramePaddingString}) * 1.5);

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        margin-left: 0;

        padding: 0 ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left};
      }

      &__item {
        overflow: hidden;

        font-size: 10vw;
        text-transform: uppercase;

        display: flex;
        align-items: center;

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          font-size: 12vw;
        }

        &:hover {
          .${InteractiveEyeballClassName} {
            .${InteractiveEyeballClassName}__pupil__el {
              &:before {
                transform: translate(-50%, -50%) scale(1.5);
              }

              &:after {
                transform: translate(-50%, -50%) scale(1);
              }

              @media(max-width: ${Theme.Base.Media.Width.Sm}) {
                &:before {
                  transform: translate(-50%, -50%) scale(1.1);
                }

                &:after {
                  transform: translate(-50%, -50%) scale(1);
                }
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

            @media(max-width: ${Theme.Base.Media.Width.Sm}) {
              height: ${CssFrameBorderWidth};

              &:before,
              &:after {
                border-width: ${CssFrameBorderWidth};
              }
            }
          }
        }
      }
    }
  }
`;
