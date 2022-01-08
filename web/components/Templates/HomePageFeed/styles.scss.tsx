// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { ScaleYIn, UpAndRotate } from "../../../constants/styles/Animation";
import { CaptionTextStyles } from "../../../constants/styles/Font";
import { Theme } from "../../../constants/Theme";
import { MarqueeRowClassName } from "../../Sections/MarqueeRow/styles.scss";
import { SimpleContentTemplateClassName } from "../../SimpleContentTemplate/styles.scss";

// Constants

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name HomePageFeedClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const HomePageFeedClassName = "home";

/**
 *
 * @name HomePageFeedStyle
 * @author Peter Laxalt
 *
 */
export const HomePageFeedStyle = styled.div`
  &.${HomePageFeedClassName} {

    .${HomePageFeedClassName}__content-wrapper {
      margin: 0;
      padding: 0;

      .${SimpleContentTemplateClassName}__gridlines {
        z-index: 3;
      }
    }

    .${HomePageFeedClassName}__canvas-wrapper {
      @media(min-width: ${Theme.Base.Media.Width.Md}) {
        position: sticky;
        top: 0;
        left: 0;
        height: 0;
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        z-index: 1;
        position: relative;

        overflow: hidden;

        min-height: calc(100vh - ${Root.Nav.Size});
      }
    }

    .${HomePageFeedClassName}__inline-nav {
      display: none;

      mix-blend-mode: exclusion;

      &__list {
        display: flex;

        justify-content: space-between;

        padding: 0 ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left};

        mix-blend-mode: exclusion;

        &__item {
          a {
            color: ${Theme.Color.varForeground};

            font-size: 5vw;
          }
        }
      }

      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        display: block;

        position: sticky;

        top: ${Root.Nav.Size};

        z-index: 5;
      }
    }

    .${HomePageFeedClassName}__scroll-down {
      position: absolute;

      transform: translateX(-50%);

      left: 50%;
      bottom: calc(${Root.Size} * 1);

      ${CaptionTextStyles};

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        display: none;
      }

      &:before {
        content: "";

        position: absolute;

        left: 50%;
        top: calc(100% + 1em);

        transform: translateX(-50%);

        height: calc(${Root.Size} * 1.35);
        width: 1px;

        animation: ${ScaleYIn} 2s ease 1;

        background: currentColor;
      }

      &__label {
        display: block;
        position: relative;
        
        animation: ${UpAndRotate} 1s ease 1;
      }
    }

    .${HomePageFeedClassName}__canvas {
      position: relative;

      .no-distort-canvas {
        color: transparent;
      }

      @media(min-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
      }

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        min-height: calc(100vh - ${Root.Nav.Size});
      }
    }

    .${HomePageFeedClassName}__horizontal-listings {
      display: block;

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        display: none;
      }
    }

    .${HomePageFeedClassName}__vertical-listings {
      display: none;
      
      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        display: block;

        padding: 0 ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left}
      }
    }
  }
`;
