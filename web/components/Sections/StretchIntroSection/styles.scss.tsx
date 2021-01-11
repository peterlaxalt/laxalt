/**
 *
 * StretchIntroSection.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website StretchIntroSection Styles.
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

export const StretchIntroSectionClassName = `stretch-intro-section`;

export const StretchIntroSectionStyle = styled.section`
  &.${StretchIntroSectionClassName} {
    margin: calc(${Root.Size} * 2) 0 0 0;
    padding: calc(${Root.Size} * 2.45) 0 calc(${Root.Size} * 2) 0;

    position: relative;

    &:before,
    &:after {
      content: "";

      position: absolute;

      width: 100%;
      height: 2px;

      left: 0px;

      animation: ${ScaleXIn} 2s ease 1;
      animation-fill-mode: forwards;

      background: ${Theme.Color.varForeground};
    }

    &:before {
      bottom: 0px;
    }

    &:after {
      top: 0px;
    }

    .${StretchIntroSectionClassName}__row {
      display: flex;

      font-size: 3.25vw;
      text-transform: uppercase;

      justify-content: stretch;

      margin-bottom: 0.25em;

      &__content {
        line-height: 1;

        &--separator {
          background: ${Theme.Color.varForeground};
          flex: 1;
          margin-left: 0.25em;
          margin-right: 0.25em;
        }
      }
    }
  }
`;
