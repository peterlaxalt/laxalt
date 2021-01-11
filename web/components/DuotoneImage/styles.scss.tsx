// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { CssUtils } from "../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name DuotoneImageClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const DuotoneImageClassName = "duotone";

/**
 *
 * @name DuotoneImageStyle
 * @author Peter Laxalt
 *
 */
export const DuotoneImageStyle = styled.span`
  &.${DuotoneImageClassName} {
    background: ${Theme.Color.varForeground};

    line-height: 0;

    position: relative;

    z-index: 2;

    box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
    transition: box-shadow 1s ease;

    overflow: hidden;

    display: block;

    /* &:after {
      content: "";

      position: absolute;

      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      background: ${Theme.Color.varForeground};

      transform: scaleX(1);
      transform-origin: left center;

      transition: transform 1s ease;
    } */

    &:before {
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
      transition-delay: transform 2.75s ease;
    }

    .${DuotoneImageClassName}__image {
      ${CssUtils.ObjectFit()};

      &--filtered {
        mix-blend-mode: screen;
        filter: grayscale() blur(0px);

        transition: filter 1s ease;
      }

      &--normal {
        position: absolute;
        left: 0;
        top: 0;

        opacity: 0;

        transition: opacity 1s ease;
      }
    }

    &:hover {
      /* box-shadow: 0px 0px 0px 8px ${Theme.Color.varForeground}; */

      &:before {
        opacity: 0;
      }

      .${DuotoneImageClassName}__image--filtered {
        mix-blend-mode: screen;
        filter: grayscale() blur(20px);
      }

      .${DuotoneImageClassName}__image--normal {
        opacity: 1;

        transition: opacity 0.5s ease;
      }
    }
  }
`;
