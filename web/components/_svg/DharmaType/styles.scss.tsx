// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import {} from "../../../constants/Theme";
import {} from "../../../constants/Root";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name DharmaTypeClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const DharmaTypeClassName = "dharma-type";

/**
 *
 * @name DharmaTypeStyle
 * @author Peter Laxalt
 *
 */
export const DharmaTypeStyle = styled.svg`
  &.${DharmaTypeClassName} {
    .${DharmaTypeClassName}__character-wrapper {
      filter: blur(0px);
      position: relative;

      transition: filter 0.5s ease-in-out;

      &:hover {
        filter: blur(0.25px);
      }

      // ___________________________________
      // @name Letter Kerning for "LAXALT"
      &[data-char-id="5"] {
        transform: translateX(2.25px);
      }

      &[data-char-id="4"] {
        transform: translateX(5.25px);
      }

      &[data-char-id="3"] {
        transform: translateX(3.25px);
      }

      &[data-char-id="2"] {
        transform: translateX(0.75px);
      }

      &[data-char-id="1"] {
        transform: translateX(-1.5px);
      }

      &[data-char-id="0"] {
        transform: translateX(0px);
      }
    }

    .${DharmaTypeClassName}__character {
      font-size: var(--${DharmaTypeClassName}-font-size);
      font-family: dharma;
      /* font-family: Bordeaux Roman Bold LET, DharmaGothicC-ExBold, Dharma Gothic C; */
      font-weight: 700;
      letter-spacing: 0em;

      ${CssUtils.DisableUserSelect()};
    }

    // ___________________________________
    // @name Simple Version

    .${DharmaTypeClassName}__text {
      font-size: var(--${DharmaTypeClassName}-font-size);
      font-family: DharmaGothicC-ExBold, Dharma Gothic C;
      /* font-family: Bordeaux Roman Bold LET, DharmaGothicC-ExBold, Dharma Gothic C; */
      font-weight: 700;
      letter-spacing: 0em;

      transition: filter 1s ease-in-out;
      will-change: filter;
    }
  }
`;
