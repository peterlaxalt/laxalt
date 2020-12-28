// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import {} from "../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name OvalButtonClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const OvalButtonClassName = "oval-btn";

/**
 *
 * @name OvalButtonStyle
 * @author Peter Laxalt
 *
 */
export const OvalButtonStyle = styled.span`
  &.${OvalButtonClassName} {
    display: inline-flex;

    .${OvalButtonClassName}__el {
      display: inline-flex;

      align-items: center;
      justify-content: center;

      min-width: 200px;
      height: 4rem;

      padding-left: 1.5em;
      padding-right: 1.5em;

      border-radius: 100%;
      background: ${Theme.Color.varBackground};
      color: ${Theme.Color.varForeground};
      border: 2px solid ${Theme.Color.varForeground};
      box-shadow: 0px 0px 0px 2px ${Theme.Color.varBackground};

      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 1.5rem;

      @media(max-width: ${Theme.Base.Media.Width.Sm}) {
        min-width: 100px;
        font-size: 1rem;

        height: 2.5rem;
      }

      &:hover {
        background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground};
        border: 2px solid ${Theme.Color.varForeground};

        text-decoration: none;
      }

      &--is-inverted {
        background: ${Theme.Color.varForeground};
        color: ${Theme.Color.varBackground};
        border: 2px solid ${Theme.Color.varBackground};
        box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};

        &:hover {
          background: ${Theme.Color.varBackground};
          color: ${Theme.Color.varForeground};
          border: 2px solid ${Theme.Color.varBackground};
        }
      }
    }
  }
`;
