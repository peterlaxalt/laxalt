/**
 *
 * Footer.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Footer Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { UpAndRotate } from "../../constants/styles/Animation";
import { Theme } from "../../constants/Theme";
import { InteractiveEyeballClassName } from "../InteractiveEyeball/styles.scss";
import { CssFramePaddingString } from "../MellowFrameHeader/styles.scss";
import { OvalButtonClassName } from "../OvalButton/styles.scss";

// Constants
// import { Root } from "../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterClassName = "footer";

export const FooterStyle = styled.footer`
  &.${FooterClassName} {
    --${FooterClassName}__arrow-width: 1em;
    --${FooterClassName}__arrow-margin: .25em;
    --${FooterClassName}__arrow-total-size: calc(var(--${FooterClassName}__arrow-width) + var(--${FooterClassName}__arrow-margin));

    position: relative;

    z-index: 10;

    background: ${Theme.Color.varBackground};
    color: ${Theme.Color.varForeground};

    padding: 0 ${CssFramePaddingString} ${CssFramePaddingString} ${CssFramePaddingString};

    overflow: hidden;

    &.route__home {
      display: none;
    }

    @media(max-width: ${Theme.Base.Media.Width.Sm}) {
      padding: 0;
    }

    &:after {
      content: "";

      position: absolute;

      top: 0;
      left: 0;

      height: 2px;
      width: 100%;

      background: ${Theme.Color.varForeground};
    }

    font-size: 1.5rem;
    font-weight: 200;

    @media(max-width: ${Theme.Base.Media.Width.Sm}) {
      font-size: 1rem;
    }

    .${FooterClassName}__inner {
      position: relative;

      min-height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }

    .${FooterClassName}__canvas {
      position: absolute;

      left: 0%;
      top: 0%;

      width: 100%;
      height: 100%;

      .__footer-canvas-container {
        position: sticky;
        top: 0;

        div {
          font-size: 0;
        }
      }

      canvas {
        width: 100vw !important;
        height: 100vh !important;
      }

    }

    .${FooterClassName}__bottom, .${FooterClassName}__top {
      padding: ${Root.Size};
      width: 100%;
    }

    /* _________________________________________________ */
    /* Nav List */
    .${FooterClassName}__nav-list {
      width: 100%;

      margin-left: calc(${Root.Size} * -.5);

      &__item {
        overflow: hidden;

        font-size: 6vw;
        text-transform: uppercase;

        display: flex;
        align-items: center;

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          font-size: 3.5rem;
        }

        .${InteractiveEyeballClassName}__outline {
          border: 3px solid ${Theme.Color.varForeground};
        }

        .${InteractiveEyeballClassName}__pupil {
          &__el {
            border: 3px solid ${Theme.Color.varForeground};

            &:before {
              background: ${Theme.Color.varForeground};
              border-radius: 50%;
            }
          }
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
            }
          }
        }

        &__overflow-wrapper {
          overflow: hidden;
        }

        &__inner {
          display: block;

          transform: translateX(
            calc(var(--${FooterClassName}__arrow-total-size) * -1)
          );
          will-change: transform;

          transition: transform 0.5s ease-in-out;

          @media(max-width: ${Theme.Base.Media.Width.Sm}) {
            transform: unset;
          }
        }

        &:hover {
          .${FooterClassName}__nav-list__item__inner {
            transform: translateX(0);
          }

          .${FooterClassName}__nav-list__item__anchor__indicator {
            transform: translateX(0%);
          }
        }

        &__anchor {
          color: ${Theme.Color.varForeground};

          pointer-events: all;

          position: relative;
          display: flex;
          align-items: center;

          animation: ${UpAndRotate} 1s ease 1;

          &:hover {
            text-decoration: none;
          }

          &__indicator {
            width: var(--${FooterClassName}__arrow-width);

            display: block;

            margin-right: var(--${FooterClassName}__arrow-margin);

            height: 4px;
            background: ${Theme.Color.varForeground};

            position: relative;

            transform: translateX(-20%);
            will-change: transform;

            transition: transform 1.5s ease-in-out;

            @media(max-width: ${Theme.Base.Media.Width.Sm}) {
              display: none;
            }

            &:before,
            &:after {
              content: "";

              position: absolute;
              right: 0;

              height: 0.5em;
              width: 0.5em;
            }

            &:before {
              border-left: 4px solid ${Theme.Color.varForeground};
              border-bottom: 4px solid ${Theme.Color.varForeground};

              border-bottom-left-radius: 100%;

              bottom: 50%;
            }

            &:after {
              border-left: 4px solid ${Theme.Color.varForeground};
              border-top: 4px solid ${Theme.Color.varForeground};

              border-top-left-radius: 100%;

              top: 50%;
            }
          }
        }
      }
    }

    .${FooterClassName}__bottom {

      z-index: 10;

      position: relative;

      display: flex;
      justify-content: space-between;
      border-top: 2px solid ${Theme.Color.varForeground};

      align-items: center;

      background: ${Theme.Color.varBackground};

      &__col {
        width: calc(100% / 3);

        &__label {
          display: block;
        }

        strong {
          font-weight: 600;
        }

        &--three {
          text-align: right;
        }
      }

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        flex-wrap: wrap;

        .${FooterClassName}__bottom__col {
          width: calc(100% / 2);

          &--one {
            width: 66%;
            line-height: 1.2;
          }

          &--two {
            order: 3;
            width: 100%;

            margin-top: 2rem;
          }

          &--three {
            width: calc(100% / 3);

            .${OvalButtonClassName} {
              &__el {
                font-size: .65rem;
              }
            }
          }
        }
      }
    }
  }
`;
