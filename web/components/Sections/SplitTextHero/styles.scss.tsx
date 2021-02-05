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
import { ScaleXIn } from "../../../constants/styles/Animation";
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
        display: block;

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

        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          &:first-child {
            padding-bottom: .5em;
          }
        }
      }
    }
  }
`;
