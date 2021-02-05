/**
 *
 * IntroSection.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website IntroSection Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { ScaleXIn } from "../../../constants/styles/Animation";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import {} from "../../MellowFrameHeader/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const IntroSectionClassName = `intro-section`;

export const IntroSectionStyle = styled.section`
  &.${IntroSectionClassName} {
    margin: calc(${Root.Size} * 2) 0;

    .${IntroSectionClassName}__inner {
      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        display: flex;
        flex-direction: column-reverse;
      }

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        .${IntroSectionClassName}__col {
          &--focus {
            width: calc(100% * 0.66666666);

            flex-shrink: 0;
          }

          &--content {
            flex: 1;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

      }
    }

    .${IntroSectionClassName}__media {
      position: relative;

      width: 100%;
    }

    .${IntroSectionClassName}__content {

      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: ${Theme.Base.Media.Width.Md}) {
        padding-left: calc(${Root.Size} * 2);

        position: sticky;
        top: ${Root.FrameSize};
      }

      &__media {
        margin-bottom: ${Root.Size};

        svg {
          max-width: 100%;
          fill: ${Theme.Color.varForeground};

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            height: auto;
          }
        }
      }

      &__item {
        margin-bottom: calc(${Root.Size} * 2);

        font-size: 1.25rem;

        line-height: 1.2;

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          font-size: 1rem;
        }

        &--intro {
          font-family: ${Theme.Font.Code};

          font-size: 1.75rem;

          letter-spacing: -1.25px;

          @media (max-width: ${Theme.Base.Media.Width.Md}) {
            font-size: 1.25rem;
          }

          strong {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
