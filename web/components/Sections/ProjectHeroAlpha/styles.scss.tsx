// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import {
  CssFrameBorderWidth,
  CssFrameSizeWithBorderString,
} from "../../MellowFrameHeader/styles.scss";
import {
  MarqueeRowClassName,
  MarqueeRowOffsetVariableName,
} from "../MarqueeRow/styles.scss";
import {
  LayeredSidebarWidth,
  SidebarFullwidthCss,
} from "../../LayeredSidebar/styles.scss";
import { CaptionTextStyles } from "../../../constants/styles/Font";

// Animation
import { ScaleXIn, UpAndRotate } from "../../../constants/styles/Animation";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { OvalButtonClassName } from "../../OvalButton/styles.scss";
import { gradientStripesCss } from "../../../utils/gradientStripesCss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectHeroAlphaClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectHeroAlphaClassName = "project-hero";

/**
 *
 * @name ProjectHeroAlphaStyle
 * @author Peter Laxalt
 *
 */
export const ProjectHeroAlphaStyle = styled.div`
  &.${ProjectHeroAlphaClassName} {
    min-height: calc(100vh - calc(${CssFrameSizeWithBorderString} * 2));

    display: flex;
    flex-direction: column;

    justify-content: flex-end;
    align-items: flex-start;

    padding-bottom: calc(${Root.Size} * 3);

    position: relative;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      height: auto;
      justify-content: space-between;

      padding-bottom: 3em;
      padding-top: calc(${Root.Size} * 3);
    }

    .${ProjectHeroAlphaClassName}__cover {
      position: relative;

      width: 100%;

      margin-bottom: 1em;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        margin-top: 2em;

        padding-right: ${Root.Grid.Gutter.Right};
      }
    }

    .${ProjectHeroAlphaClassName}__title,
      .${ProjectHeroAlphaClassName}__detail-top,
      .${ProjectHeroAlphaClassName}__detail-stacked,
      .${ProjectHeroAlphaClassName}__section-nav {
      z-index: 5;

      color: ${Theme.Color.varForeground};

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        color: ${Theme.Color.varForeground};
      }
    }

    .${ProjectHeroAlphaClassName}__title,
      .${ProjectHeroAlphaClassName}__detail-top__list,
      .${ProjectHeroAlphaClassName}__detail-stacked,
      .${ProjectHeroAlphaClassName}__section-nav {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0%) rotate(0deg);

      transition: opacity 1s ease, filter 1s ease, transform 1s ease;
    }

    &.${ProjectHeroAlphaClassName}--is-scrolled {
      .${ProjectHeroAlphaClassName}__title,
        .${ProjectHeroAlphaClassName}__detail-top__list,
        .${ProjectHeroAlphaClassName}__detail-stacked {
        opacity: 0;
        filter: blur(20px);
      }

      .${ProjectHeroAlphaClassName}__bg {
        &:after {
          opacity: 0;
        }

        &__image {
          &--filtered {
            opacity: 0;
            filter: grayscale(0) blur(20px);
          }

          &--normal {
            opacity: 1;
          }
        }
      }
    }

    .${ProjectHeroAlphaClassName}__title {
      display: flex;

      align-items: flex-end;
      justify-content: flex-end;
      flex-wrap: wrap;

      padding: calc(${Root.Size} * 4) ${Root.Grid.Gutter.Right} 0 0;

      width: 100%;

      text-align: justify;

      transition: opacity 1s ease, filter 1s ease, transform 1s ease;

      position: relative;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        margin-top: 15vh;
      }

      &__el,
      &__details {
        width: 100%;
        max-width: 100%;

        position: relative;

        z-index: 5;
      }

      &__el,
      &__details {
        --ruleHeight: 11vw;
        --underlineHeight: 2px;
        --ruleMaskHeight: calc((var(--ruleHeight)) - var(--underlineHeight));

        display: block;

        color: currentColor;

        font-size: calc(var(--ruleHeight) * 0.9);
        line-height: var(--ruleHeight);
        font-weight: 600;
        text-align: left;
        word-wrap: break-all;
        overflow-wrap: break-all;
        text-transform: uppercase;

        margin: 0 auto;
        padding: 0px;

        resize: none;

        min-height: 0px;

        background-color: transparent;
        background-image: -moz-linear-gradient(
          top,
          transparent,
          transparent var(--ruleMaskHeight),
          currentColor 0px
        );
        background-image: -webkit-linear-gradient(
          top,
          transparent,
          transparent var(--ruleMaskHeight),
          currentColor 0
        );
        -webkit-background-size: 100% var(--ruleHeight);
        background-size: 100% var(--ruleHeight);

        border: unset;
        outline: unset;

        appearance: none;

        width: 100%;
        max-width: 100%;

        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
      }

      &__date {
        text-align: left;
        text-transform: uppercase;

        width: 100%;

        font-weight: 600;

        z-index: 5;

        border-bottom: 2px solid currentColor;

        display: flex;

        justify-content: space-between;

        &__highlight {
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

            width: 110%;
            height: 60px;

            border-radius: 50%;

            filter: blur(5px);
          }
        }

        a {
          color: currentColor;
        }
      }

      &__details {
        --ruleHeight: 1.75vw;
        --ruleMaskHeight: calc((var(--ruleHeight)) - var(--underlineHeight));

        text-align: justify;
        text-justify: inter-character;
        text-align-last: left;

        background-image: none;

        margin-top: 0.5em;
      }

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        /* background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground}; */
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;

        display: flex;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        padding: 0 0 0 0;

        margin-bottom: 1em;

        .${ProjectHeroAlphaClassName}__title__el {
          --ruleHeight: 22vw;

          text-align: left;

          font-weight: 700;
        }

        .${ProjectHeroAlphaClassName}__title__date {
          font-size: 2.5vw;

          position: relative;

          &__year {
            position: absolute;

            left: 50%;

            transform: translateX(-50%);
          }

          &__highlight {
            &:before {
              height: 45px;
            }
          }
        }

        .${ProjectHeroAlphaClassName}__title__details {
          --ruleHeight: 2.5vw;

          background-image: none;

          margin-top: 1em;

          line-height: 1.5;
        }
      }
    }

    .${ProjectHeroAlphaClassName}__detail-stacked {
      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;

        margin-bottom: 1em;
      }

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;

        background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground};

        /* border: ${CssFrameBorderWidth} solid ${Theme.Color.varBackground}; */

        border-radius: 50%;

        padding: calc(${Root.Grid.Gutter.Left} * 2)
          calc(${Root.Grid.Gutter.Left} * 3);

        right: ${Root.Grid.Gutter.Right};
        top: calc(${CssFrameSizeWithBorderString} * 3.5);
      }

      &__list {
        &__item {
          display: flex;
          align-items: center;

          margin-bottom: 0.25em;

          &__label {
            ${CaptionTextStyles}

            font-weight: 800;

            margin-right: 1em;

            min-width: 80px;
          }
        }

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          display: flex;

          flex-wrap: wrap;

          .${ProjectHeroAlphaClassName}__detail-stacked__list__item {
            width: 50%;

            justify-content: space-between;

            &__value {
              flex-shrink: 0;
              text-align: right;
            }

            &__label {
              min-width: unset;
            }

            &:nth-child(even) {
              &__value {
                flex-shrink: 0;
                text-align: right;
              }
              padding-left: ${Root.Grid.Gutter.Left};
            }
          }
        }
      }
    }

    .${ProjectHeroAlphaClassName}__section-nav {
      width: 100%;

      position: relative;
      z-index: 5;

      &.${ProjectHeroAlphaClassName}__section-nav--mobile {
        display: none;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          display: block;
        }
      }

      &.${ProjectHeroAlphaClassName}__section-nav--desktop {
        display: block;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          display: none;
        }

        .${ProjectHeroAlphaClassName}__section-nav__list {
          &__item {

            &:hover {
              .${ProjectHeroAlphaClassName}__section-nav__list__item__count {
                &:after {
                  transform: scaleX(1);
                }
              }
            }

            &__count {
              &:after {
                transform: scaleX(0);
              }
            }

            &__inner {
              margin-top: 1em;
            
              position: relative;

              &:before {
                content: "";

                position: absolute;

                left: 0;
                top: 0;

                width: 100%;
                height: 2px;

                background: currentColor;
              }
            }
          }
        }
      }

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        margin-left: calc(${Root.Grid.Gutter.Right} * -1);
        margin-right: calc(${Root.Grid.Gutter.Right} * -1);

        width: calc(100% + (${Root.Grid.Gutter.Right} * 2));
      }

      &__list {
        display: flex;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          display: block;
        }

        &__item {
          display: block;

          position: relative;

          animation: ${UpAndRotate} 1s ease 1;

          &__count {
            position: relative;

            flex: 1;

            display: flex;
            align-items: center;

            &:after {
              content: "";

              display: block;

              position: relative;

              height: 1px;
              width: auto;

              margin: 0 0.5em;

              flex: 1;

              transform: scaleX(1);
              transform-origin: left center;

              transition: transform 1s ease;

              background: currentColor;
            }
          }

          /* &:hover {
            .${ProjectHeroAlphaClassName}__section-nav__list__item__count {
              &:after {
                transform: scaleX(1);
              }
            }
          } */

          @media (min-width: ${Theme.Base.Media.Width.Md}) {
            flex: 1;

            padding: 0 ${Root.Grid.Gutter.Right};

            ${CaptionTextStyles};

            /* &:last-child {
              padding-right: 0;
            } */

            /* &:first-child {
              padding-left: 0;
            } */
          }

          &:not(.${ProjectHeroAlphaClassName}__section-nav__list__item--mobile-description) {
            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              position: relative;

              .${ProjectHeroAlphaClassName}__section-nav__list__item__inner {
                padding-right: 1.5em;
              }

              &:after {
                content: "";

                position: absolute;

                right: 0.5em;
                top: 50%;

                transform: translateY(-50%) rotate(-45deg);

                height: 0.5em;
                width: 0.5em;

                border-right: 1px solid currentColor;
                border-bottom: 1px solid currentColor;
              }
            }
          }

          &--mobile-description {
            display: none;

            .${ProjectHeroAlphaClassName}__section-nav__list__item__count {
              &:after {
                margin-left: 2em;
              }
            }

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

                transition: transform 0.5s ease;
              }

              &:after {
                left: 0.5em;

                transform: rotate(90deg);
              }

              &:before {
                left: 0.5em;

                transform: rotate(0deg);
              }

              &.${ProjectHeroAlphaClassName}__section-nav__list__item--is-expanded {
                &:after {
                  left: 0.5em;

                  transform: rotate(225deg);
                }

                &:before {
                  left: 0.5em;

                  transform: rotate(135deg);
                }

                .project-hero__section-nav__list__item__content {
                  position: relative;

                  padding-bottom: 1em;

                  display: block;

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

                .project-hero__section-nav__list__item__inner {
                  &:before {
                    display: none;
                  }
                }
              }
            }

            .${ProjectHeroAlphaClassName}__section-nav__list__item__label {
              font-weight: 600;
            }
          }

          &__inner {
            display: flex;
            justify-content: space-between;

            position: relative;

            padding-top: 1em;

            /* color: ${Theme.Color.varBackground}; */

            @media (max-width: ${Theme.Base.Media.Width.Md}) {
              padding-bottom: 1em;

              &:before {
                content: "";

                position: absolute;

                left: 0px;
                bottom: 0px;

                width: 100%;
                height: 2px;

                animation: ${ScaleXIn} 2s ease 1;
                animation-fill-mode: forwards;

                background: currentColor;
              }
            }
          }

          &__content {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            &__badge,
            &__headline,
            &__large-body,
            &__body,
            &__cta {
              margin-bottom: ${Root.Size};
              display: block;

              width: 100%;
            }

            &__headline {
              font-size: 1.5rem;

              font-weight: 600;

              text-transform: uppercase;

              max-width: 75%;

              position: relative;

              width: auto;

              span {
                color: ${Theme.Color.varBackground};
                position: relative;
                z-index: 2;
              }

              &:before {
                content: "";

                position: absolute;

                left: 40%;
                top: 50%;

                transform: translate(-50%, -50%);

                background: ${Theme.Color.varForeground};

                width: 100%;
                height: 100%;

                border-radius: 50%;

                filter: blur(8px);
              }
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

                  background: currentColor;
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

    .${ProjectHeroAlphaClassName}__detail-top {
      /* position: fixed;

      left: calc(50% - calc(${LayeredSidebarWidth} / 2));
      top: calc(${CssFrameSizeWithBorderString} * 2.5);

      transform: translateX(-50%); */

      width: 100%;

      /* color: ${Theme.Color.varBackground}; */

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        width: auto;

        /* margin-left: auto; */

        display: flex;
        /* justify-content: flex-end; */
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        font-size: 0.7rem;
      }

      &__list {
        display: flex;

        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          width: auto;

          /* background: ${Theme.Color.varForeground};
          color: ${Theme.Color.varBackground}; */

          margin-top: 0.5em;
          /* margin-right: ${Root.Grid.Gutter.Right}; */
          /* margin-left: auto; */

          display: flex;

          justify-content: flex-start;
          flex-wrap: wrap;

          /* padding-left: ${Root.Grid.Gutter.Right}; */
          padding-right: ${Root.Grid.Gutter.Right};
          padding-top: 0.5em;
          padding-bottom: 0.5em;

          overflow: hidden;
        }

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-wrap: nowrap;
          justify-content: flex-start;

          overflow-x: auto;

          padding: 0.5em 0;

          line-height: 1.5;

          ${CssUtils.ForceFullWidth(Root.Grid.Gutter.Left, true)};

          padding-bottom: 40px;
          margin-bottom: -30px;
          clip-path: inset(0px 0px 30px 0px);

          &:after {
            content: "";

            width: calc(${Root.Grid.Gutter.Left} - 1em);

            display: block;

            flex-shrink: 0;
          }
        }

        &__item {
          text-transform: uppercase;

          animation: ${UpAndRotate} 1s ease 1;

          display: flex;
          justify-content: center;

          font-weight: 600;

          box-shadow: inset 0px 0px 0px 2px ${Theme.Color.varForeground};

          border-radius: 50%;

          margin-right: 1em;
          margin-bottom: 1em;

          &:hover {
            background: ${Theme.Color.varForeground};
            color: ${Theme.Color.varBackground};
            box-shadow: 0px 0px 0px 2px ${Theme.Color.varBackground};
          }

          &--label {
            font-weight: 600;
          }

          a {
            color: currentColor;

            padding: 1em;

            &:hover {
              text-decoration: none;
            }
          }

          /* @media (min-width: ${Theme.Base.Media.Width.Md}) {
            &:after {
              content: "/";

              display: inline-block;

              position: relative;

              margin: 0 .5em;
            }
          } */

          /* &:last-child {
            &:after {
              display: none;
            }
          } */
        }
      }
    }
  }
`;

export const ProjectHeroAlphaGlobalStyles = createGlobalStyle`
  ${`[data-theme="galaxy"]`},
  ${`[data-theme="orangered"]`} {
    div.${ProjectHeroAlphaClassName} {
      .${ProjectHeroAlphaClassName}__bg {

      &:after {
        mix-blend-mode: screen;
      }

      .${ProjectHeroAlphaClassName}__bg__image--filtered {
        mix-blend-mode: multiply;
      }

      /* &:hover {
        .${ProjectHeroAlphaClassName}__bg__image--filtered {
          mix-blend-mode: multiply;
        }
      } */
      }
    }   
  }
`;
