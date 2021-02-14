// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name HomePageClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const HomePageClassName = "home";

/**
 *
 * @name HomePageStyle
 * @author Peter Laxalt
 *
 */
export const HomePageStyle = styled.div`
  &.${HomePageClassName} {
    .${HomePageClassName}__canvas-wrapper {
      @media(min-width: ${Theme.Base.Media.Width.Md}) {
        position: sticky;
        top: 0;
        left: 0;
        height: 0;
      }
    }

    .${HomePageClassName}__canvas {
      @media(min-width: ${Theme.Base.Media.Width.Md}) {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
      }
    }

    .${HomePageClassName}__horizontal-listings {
      display: block;

      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        display: none;
      }
    }

    .${HomePageClassName}__vertical-listings {
      display: none;
      
      @media(max-width: ${Theme.Base.Media.Width.Md}) {
        display: block;

        padding: 0 ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left}
      }
    }
  }
`;
