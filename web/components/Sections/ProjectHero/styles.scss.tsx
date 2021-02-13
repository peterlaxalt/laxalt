// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { CssFrameBorderWidth, CssFrameSizeWithBorderString } from "../../MellowFrameHeader/styles.scss";
import { MarqueeRowClassName, MarqueeRowOffsetVariableName } from "../MarqueeRow/styles.scss";
import { LayeredSidebarWidth, SidebarFullwidthCss } from "../../LayeredSidebar/styles.scss";
import { CaptionTextStyles } from "../../../constants/styles/Font";

// Animation
import { ScaleXIn, UpAndRotate } from "../../../constants/styles/Animation";
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

      padding-bottom: 3em;
      padding-top: 550px;
    }

    .${ProjectHeroClassName}__bg {
      position: absolute;

      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      overflow: hidden;

      background: ${Theme.Color.varForeground};

      ${SidebarFullwidthCss};

      z-index: -1;

      line-height: 0;

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        left: calc(${Root.Grid.Gutter.Left} * -1);
        top: calc(${Root.Grid.Gutter.Top} * -1);

        height: 600px;

        width: calc(100% + (${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right}));
        max-width: 100vw;
      }

      // Filter overlay
      &:after {
        content: "";

        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        background: ${Theme.Color.varBackground};
        mix-blend-mode: multiply;

        z-index: 2;

        opacity: 1;

        transition: opacity 1s ease;
      }

      // Gradient cut
      &:before {
        content: "";

        position: absolute;

        left: 0;
        bottom: 0;

        height: 350px;
        width: 100%;

        opacity: 1;

        background: linear-gradient(180deg, rgba(var(--${ProjectHeroClassName}__bg--rgb),0) 20%, rgba(var(--${ProjectHeroClassName}__bg--rgb),1) 100%);

        z-index: 5;

        @media(max-width: ${Theme.Base.Media.Width.Md}) {
          height: 100%;

          background: linear-gradient(180deg, rgba(var(--${ProjectHeroClassName}__bg--rgb),0) 0%, rgba(var(--${ProjectHeroClassName}__bg--rgb),1) 100%, rgba(var(--${ProjectHeroClassName}__bg--rgb),1) 100%);
        }
      }

      &__image {
        ${CssUtils.ObjectFit("cover")};

        transition: opacity 1s ease;

        &--filtered {
          mix-blend-mode: screen;
          filter: grayscale(1) blur(0px);

          opacity: 1;

          transition: filter 1s ease, opacity 1s ease;

          @media(max-width: ${Theme.Base.Media.Width.Md}) {
            opacity: 1;
          }
        }

        &--normal {
          position: absolute;
          left: 0;
          top: 0;

          opacity: 0;

          transition: opacity 1s ease;
        }
      }
    }

    .${ProjectHeroClassName}__title,
    .${ProjectHeroClassName}__detail-top,
    .${ProjectHeroClassName}__detail-stacked,
    .${ProjectHeroClassName}__section-nav {
      z-index: 5;

      color: ${Theme.Color.varForeground};

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        color: ${Theme.Color.varForeground};
      }
    }

    .${ProjectHeroClassName}__title,
    .${ProjectHeroClassName}__detail-top__list,
    .${ProjectHeroClassName}__detail-stacked,
    .${ProjectHeroClassName}__section-nav {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0%) rotate(0deg);

      transition: opacity 1s ease, filter 1s ease, transform 1s ease;
    }

    &.${ProjectHeroClassName}--is-scrolled {

      .${ProjectHeroClassName}__title,
      .${ProjectHeroClassName}__detail-top__list,
      .${ProjectHeroClassName}__detail-stacked {
        opacity: 0;
        filter: blur(20px);
        transform: translateY(-100%) rotate(3deg);
      }
      
      .${ProjectHeroClassName}__bg {
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

    .${ProjectHeroClassName}__title {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      margin-left: auto;

      padding: 0 ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left};

      overflow: hidden;

      &__el {
        /* font-family: "dharma"; */

        text-align: right;

        font-size: 5vw;
        font-weight: 600;
        line-height: 1;
        
        text-transform: uppercase;

        animation: ${UpAndRotate} 1s ease 1;
      }

      @media(min-width: ${Theme.Base.Media.Width.Md}) {
        background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground};

        margin-right: ${Root.Grid.Gutter.Right};
      }

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        width: 100%;

        justify-content: flex-start;

        padding: 0 0 0 0;

        .${ProjectHeroClassName}__title__el {
          text-align: left;

          font-size: 7vw;
          font-weight: 800;
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

        background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground};

        /* border: ${CssFrameBorderWidth} solid ${Theme.Color.varBackground}; */

        border-radius: 50%;

        padding: calc(${Root.Grid.Gutter.Left} * 2) calc(${Root.Grid.Gutter.Left} * 3);

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

        @media(max-width: ${Theme.Base.Media.Width.Md}) {
          display: flex;

          flex-wrap: wrap;

          .${ProjectHeroClassName}__detail-stacked__list__item {
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

    .${ProjectHeroClassName}__section-nav {
      width: 100%;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;

        left: 0;
        bottom: calc(${CssFrameSizeWithBorderString} * 1);

        margin-left: calc(${Root.Grid.Gutter.Right} * -1);
        margin-right: calc(${Root.Grid.Gutter.Right} * -1);

        width: calc(100% + ${Root.Grid.Gutter.Right});

        padding-right: ${Root.Grid.Gutter.Right};
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

              margin: 0 .5em;

              flex: 1;

              transform: scaleX(0);
              transform-origin: left center;

              transition: transform 1s ease;

              background: currentColor;
            }
          }

          &:hover {
            .${ProjectHeroClassName}__section-nav__list__item__count {
              &:after {
                transform: scaleX(1);
              }
            }
          }

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

            .${ProjectHeroClassName}__section-nav__list__item__count {
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

              background: currentColor;
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

    .${ProjectHeroClassName}__detail-top {
      /* position: fixed;

      left: calc(50% - calc(${LayeredSidebarWidth} / 2));
      top: calc(${CssFrameSizeWithBorderString} * 2.5);

      transform: translateX(-50%); */

      width: 100%;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        width: auto;

        margin-left: auto;

        display: flex;
        justify-content: flex-end;
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

        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          width: auto;

          background: ${Theme.Color.varForeground};
          color: ${Theme.Color.varBackground};

          margin-top: .5em;
          margin-right: ${Root.Grid.Gutter.Right};
          margin-left: auto;

          display: flex;
          justify-content: flex-end;

          padding-left: ${Root.Grid.Gutter.Right};
          padding-right: ${Root.Grid.Gutter.Right};
          padding-top: .5em;
          padding-bottom: .5em;

          overflow: hidden;
        }

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          flex-wrap: wrap;
          justify-content: center;

          line-height: 1.5;
        }

        &__item {

          text-transform: uppercase;
          
          animation: ${UpAndRotate} 1s ease 1;

          &--label {
            font-weight: 600;
          }

          a {
            color: currentColor;
          }

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-weight: 600;
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

export const ProjectHeroGlobalStyles = createGlobalStyle`
  ${`[data-theme="galaxy"]`},
  ${`[data-theme="orangered"]`} {
    div.${ProjectHeroClassName} {
      .${ProjectHeroClassName}__bg {

      &:after {
        mix-blend-mode: screen;
      }

      .${ProjectHeroClassName}__bg__image--filtered {
        mix-blend-mode: multiply;
      }

      /* &:hover {
        .${ProjectHeroClassName}__bg__image--filtered {
          mix-blend-mode: multiply;
        }
      } */
      }
    }   
  }
`