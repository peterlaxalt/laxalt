// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name SvgHeadlineDisplayClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const SvgHeadlineDisplayClassName = "svg-headline";

/**
 *
 * @name SvgHeadlineDisplayStyle
 * @author Peter Laxalt
 *
 */
export const SvgHeadlineDisplayStyle = styled.div`
  &.${SvgHeadlineDisplayClassName} {
      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        padding-bottom: ${Root.Nav.Size};
        padding-top: calc(${Root.Nav.Size} * 2);
      }

      svg {
      width: 100%;
      height: 80vh;

      margin-top: 80px;
      padding-right: ${Root.Grid.Gutter.Right};

      fill: currentColor;

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        height: auto;

        padding-right: 0;
      }
    }
  }
`;
