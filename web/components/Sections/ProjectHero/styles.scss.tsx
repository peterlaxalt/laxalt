// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { CssFrameSizeWithBorderString } from "../../MellowFrameHeader/styles.scss";
import { MarqueeRowClassName, MarqueeRowOffsetVariableName } from "../MarqueeRow/styles.scss";
import { LayeredSidebarWidth, SidebarFullwidthCss } from "../../LayeredSidebar/styles.scss";
import { CaptionTextStyles } from "../../../constants/styles/Font";

// Animation
import { ScaleXIn } from "../../../constants/styles/Animation";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { OvalButtonClassName } from "../../OvalButton/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectHeroClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectHeroClassName = "project-hero";

/**
 *
 * @name ProjectHeroStyle
 * @author Peter Laxalt
 *
 */
export const ProjectHeroStyle = styled.div`
  &.${ProjectHeroClassName} {
    height: calc(100vh - calc(${CssFrameSizeWithBorderString} * 2));

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    position: relative;

    @media(max-width: ${Theme.Base.Media.Width.Md}) {
      height: auto;
      justify-content: space-between;

      padding-bottom: 1em;
    }

    .${MarqueeRowClassName} {
      --${MarqueeRowOffsetVariableName}: ${LayeredSidebarWidth};

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        flex: 1;

        display: flex;
        align-items: center;

        margin-top: 3em;

        ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left)};

        min-height: 400px;

        .${MarqueeRowClassName}__inner {
          animation-duration: 10s;
        }
      }

      .${MarqueeRowClassName}__inner {
        /* animation: unset; */

        width: unset;

        display: inline-block;
        /* flex-wrap: nowrap; */

        white-space: nowrap;

        animation-duration: 10s;

        transform-style: preserve-3d;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;

        text-rendering: auto;

        .${MarqueeRowClassName}__list {
          display: inline-block;

          transform-style: preserve-3d;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

        }
      }

      &__list {
        --${MarqueeRowClassName}__bullet-size: .05em;
      }

      &__list__item {
        // _________________________________________________
        // @TODO: FIGURE THE FUCKING SAFARI BUG
        /* font-size: 25vw;
        text-transform: uppercase;
        line-height: .8;

        font-family: "dharma", sans-serif; */
        // _________________________________________________

        font-size: 10vw;
        text-transform: uppercase;

        opacity: 1;

        line-height: 1;

        position: relative;
        z-index: 60000;

        transform-style: preserve-3d;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;

        @media(max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 15vw;
        }
      }
    }

    .${ProjectHeroClassName}__detail-stacked {

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;

        margin-bottom: 1em;
      }

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;

        right: ${Root.Grid.Gutter.Right};
        top: calc(${CssFrameSizeWithBorderString} * 3.5);
      }

      &__list {

        &__item {

          display: flex;
          align-items: center;

          margin-bottom: .25em;

          &__label {
            ${CaptionTextStyles}

            font-weight: 800;

            margin-right: 1em;

            min-width: 80px;
          }
        }
      }
    }

    .${ProjectHeroClassName}__section-nav {
      width: 100%;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;

        left: 0;
        bottom: calc(${CssFrameSizeWithBorderString} * 2.5);

        padding-right: ${Root.Grid.Gutter.Right};
      }

      &__list {
        display: flex;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          display: block;
        }

        &__item {

          @media (min-width: ${Theme.Base.Media.Width.Md}) {
            flex: 1;

            padding: 0 ${Root.Grid.Gutter.Right};

            ${CaptionTextStyles};

            &:last-child {
              padding-right: 0;
            }

            &:first-child {
              padding-left: 0;
            }
          }

          &:not(.${ProjectHeroClassName}__section-nav__list__item--mobile-description) {
            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              position: relative;

              .${ProjectHeroClassName}__section-nav__list__item__inner {
                padding-right: 1.5em;
              }

              &:after {
                content: "";

                position: absolute;

                right: .5em;
                top: 50%;

                transform: translateY(-50%) rotate(-45deg);

                height: .5em;
                width: .5em;

                border-right: 1px solid currentColor;
                border-bottom: 1px solid currentColor;
              }
            }
          }

          &--mobile-description {
            display: none;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              display: block;

              position: relative;

              &:after,
              &:before {
                content: "";

                position: absolute;

                top: 1em;

                width: 1px;
                height: 1em;

                background: currentColor;

                transition: transform .5s ease;
              }

              &:after {
                left: .5em;

                transform: rotate(90deg);
              }

              &:before {
                left: .5em;

                transform: rotate(0deg);
              }

              &.${ProjectHeroClassName}__section-nav__list__item--is-expanded {
                &:after {
                  left: .5em;

                  transform: rotate(225deg);
                }

                &:before {
                  left: .5em;

                  transform: rotate(135deg);
                }
              }
            }

            .${ProjectHeroClassName}__section-nav__list__item__label {
              font-weight: 600;
            }
          }

          &__inner {
            display: flex;
            justify-content: space-between;

            position: relative;

            padding-top: 1em;

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-bottom: 1em;
            }

            &:before {
              content: "";

              position: absolute;

              left: 0px;
              top: 0px;

              width: 100%;
              height: 2px;

              animation: ${ScaleXIn} 2s ease 1;
              animation-fill-mode: forwards;

              background: ${Theme.Color.varForeground};
            }

          }

          &__content {

            &__badge,
            &__headline,
            &__large-body,
            &__body,
            &__cta {
              margin-bottom: ${Root.Size};
              display: block;
            }

            &__headline {
              font-size: 1.5rem;

              font-weight: 600;

              text-transform: uppercase;

              max-width: 75%;
            }

            &__large-body {
              font-family: ${Theme.Font.Code};

              font-size: 1.2rem;

              max-width: 75%;
            }

            &__body {
              font-size: 1rem;
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

            &__bottom {
              width: 100%;
              display: block;

              position: relative;

              margin-top: calc(${Root.Size} * 2);
              margin-bottom: calc(${Root.Size} * 2);

              &__header {
                ${CaptionTextStyles};

                margin-bottom: ${Root.Size};

                position: relative;

                display: block;

                &:before {
                  content: "";

                  position: absolute;

                  top: 50%;
                  right: 0;

                  transform: translateY(-50%);

                  height: 1px;
                  width: 85%;

                  background: ${Theme.Color.varForeground};
                }
              }

              &__list {
                display: block;

                &__item {
                  display: block;

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

          &__count {
            font-weight: 800;
          }
        }
      }
    }

    .${ProjectHeroClassName}__detail-top {
      /* position: fixed;

      left: calc(50% - calc(${LayeredSidebarWidth} / 2));
      top: calc(${CssFrameSizeWithBorderString} * 2.5);

      transform: translateX(-50%); */

      width: 100%;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        display: flex;
        justify-content: flex-end;

        padding-right: ${Root.Grid.Gutter.Right};
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;

        top: ${Root.Nav.Size};
        left: 50%;

        transform: translateX(-50%);

        width: 90%;

        font-size: .7rem;

      }

      &__list {

        display: flex;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-wrap: wrap;
          justify-content: center;

          line-height: 1.5;
        }

        &__item {

          text-transform: uppercase;

          &--label {
            font-weight: 600;
          }

          a {
            color: ${Theme.Color.varForeground};
          }

          &:after {
            content: "/";

            display: inline-block;

            position: relative;

            margin: 0 .5em;
          }

          &:last-child {
            &:after {
              display: none;
            }
          }
        }
      }
    }
  }
`;
