// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import {} from "../../constants/Root";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name HeadlineWrapperClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const HeadlineWrapperClassName = "headline-wrapper";

/**
 *
 * @name HeadlineWrapperStyle
 * @author Peter Laxalt
 *
 */
export const HeadlineWrapperStyle = styled.div`
  @media(min-width: ${Theme.Base.Media.Width.Md}) {
    &.${HeadlineWrapperClassName} {
      filter: blur(0px);
      opacity: 1;

      transition: filter 2s ease, opacity 2s ease;

      &.${HeadlineWrapperClassName}--is-scrolled {
        filter: blur(80px);
        opacity: 0;
      }
    }

    &.${HeadlineWrapperClassName}__after {
      filter: blur(80px);
      opacity: 0;

      transition: filter 1s ease, opacity 1s ease;

      &.${HeadlineWrapperClassName}__after--is-scrolled {
        filter: blur(0px);
        opacity: 1;
      }
    }
  }
`;
