/**
 *
 * SplitTextHero.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website SplitTextHero Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { ScaleXIn, SlideFromLeftMinor, SlideFromLeftMinorInitialCss, UpAndRotateXL, UpAndRotateXLInitialCss } from "../../../constants/styles/Animation";
import { Theme } from "../../../constants/Theme";
import {} from "../../MellowFrameHeader/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SplitTextHeroClassName = `split-text-hero`;

export const SplitTextHeroStyle = styled.section`
  &.${SplitTextHeroClassName} {
    &:first-child {
      margin-top: ${Root.FrameSize};
    }

    .${SplitTextHeroClassName}__headline,
      .${SplitTextHeroClassName}__bottom-details {
      position: relative;

      padding: calc(${Root.Size} * 1) 0;

      display: flex;
      justify-content: space-between;

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        display: block;
      }

      &:before {
        content: "";

        position: absolute;

        left: 0px;
        bottom: 0px;

        width: 100%;
        height: 2px;

        animation: ${ScaleXIn} 2s ease 1;
        animation-fill-mode: forwards;

        background: ${Theme.Color.varForeground};
      }
    }

    .${SplitTextHeroClassName}__headline {
      margin: 0;

      font-size: 44vw;
      font-weight: 400;

      line-height: 0.75;

      padding-top: 3vw;

      font-family: "Dharma";

      color: ${Theme.Color.varForeground};

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        font-size: calc(100vw / 1.1);
      }

      &__item {
        display: flex;

        overflow: hidden;


        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          width: calc(100% / 2);

          &:last-child {
            justify-content: flex-end;
          }
        }

        &__letter {
          position: relative;
          display: block;
          
          ${UpAndRotateXLInitialCss};

          animation: ${UpAndRotateXL} 2s ease 1 forwards;
          animation-delay: var(--animDelay);

          user-select: none; /* supported by Chrome and Opera */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */

          /* filter: blur(0); */

          padding-top: 20px;

          transition: filter 1s ease;

          cursor: pointer;

          &:hover {
            .${SplitTextHeroClassName}__headline__item__letter__el {
              &:before {
                transform: translateY(-100%);
              }

              &:after {
                transform: translateY(0%);
              }
            }
          }

          &--is-not-active {
            .${SplitTextHeroClassName}__headline__item__letter__el {
              &:before {
                transform: translateY(-100%);
              }

              &:after {
                transform: translateY(0%);
              }
            }

            &:hover {
              .${SplitTextHeroClassName}__headline__item__letter__el {
                &:before {
                  transform: translateY(0%);
                }

                &:after {
                  transform: translateY(100%);
                }
              }
            }

            &:active,
            &:focus {
              &:before {
                transform: translateY(-100%);
              }

              &:after {
                transform: translateY(0%);
              }
            }
          }

          &__el {
            color: ${Theme.Color.varBackground};

            &:before,
            &:after {
              content: attr(data-letter);

              position: absolute;

              padding-top: 20px;

              left: 0;
              top: 0;

              transition: transform 1s ease;

              /* transform: translateY(-50%); */
            }

            &:before {
              color: ${Theme.Color.varForeground};

              transform: translateY(0%);
            }

            &:after {
              color: ${Theme.Color.varBackground};

              transform: translateY(100%);

              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: ${Theme.Color.varForeground};
            }
          }
        }

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          &:last-child {
            font-size: calc(100vw / 1.06);
          }
        }
      }
    }

    .${SplitTextHeroClassName}__bottom-details {
      font-size: 1.25rem;

      &__col {
        font-size: 1rem;
        
        span,
        strong {
          display: block;
          position: relative;

          ${SlideFromLeftMinorInitialCss};

          animation: ${SlideFromLeftMinor} 2s ease 1 forwards;
          animation-delay: 1s;
        }

        @media (max-width: ${Theme.Base.Media.Width.Md}) {

          font-size: 3.25vw;

          &:first-child {
            padding-bottom: .5em;
          }
        }
      }
    }
  }
`;
