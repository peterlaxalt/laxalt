// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { CssFrameSizeWithBorderString } from "../../MellowFrameHeader/styles.scss";
import { MarqueeRowClassName } from "../MarqueeRow/styles.scss";
import { LayeredSidebarWidth } from "../../LayeredSidebar/styles.scss";
import { CaptionTextStyles } from "../../../constants/styles/Font";

// Animation
import { ScaleXIn } from "../../../constants/styles/Animation";

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

    .${MarqueeRowClassName} {
      &__list {
        --${MarqueeRowClassName}__bullet-size: .05em;
      }

      &__list__item {
        font-family: "dharma";
        font-size: 25vw;
        text-transform: uppercase;

        line-height: .8;
      }
    }

    .${ProjectHeroClassName}__detail-stacked {
      position: absolute;

      right: ${Root.Grid.Gutter.Right};
      top: calc(${CssFrameSizeWithBorderString} * 3.5);

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
      position: absolute;

      left: 0;
      bottom: calc(${CssFrameSizeWithBorderString} * 2.5);

      width: 100%;

      padding-right: ${Root.Grid.Gutter.Right};

      &__list {
        display: flex;

        &__item {
          flex: 1;

          padding: 0 ${Root.Grid.Gutter.Right};

          ${CaptionTextStyles};

          &:last-child {
            padding-right: 0;
          }

          &:first-child {
            padding-left: 0;
          }

          &__inner {
            display: flex;
            justify-content: space-between;

            position: relative;

            padding-top: 1em;

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

      display: flex;
      justify-content: flex-end;

      padding-right: ${Root.Grid.Gutter.Right};

      &__list {
        display: flex;

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
