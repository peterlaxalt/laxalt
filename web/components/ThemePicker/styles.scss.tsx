// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import { Root } from "../../constants/Root";
import {} from "../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ThemePickerClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ThemePickerClassName = "theme-picker";

/**
 *
 * @name ThemePickerStyle
 * @author Peter Laxalt
 *
 */
export const ThemePickerStyle = styled.div`
  &.${ThemePickerClassName} {
    position: fixed;

    right: 0;
    top: 0;

    height: calc(${Root.FrameSize});

    display: flex;
    align-items: center;

    border-left: 1px solid ${Theme.Color.varForeground};
    border-bottom: 1px solid ${Theme.Color.varForeground};

    background: ${Theme.Color.varBackground};

    z-index: 990;

    .${ThemePickerClassName}__option {
      width: calc(${Root.FrameSize} * 0.5);
      height: calc(${Root.FrameSize} * 0.5);

      border-radius: 50%;

      margin: 0 0.5rem;

      box-shadow: 0px 0px 0px 1px ${Theme.Color.varForeground};

      &:hover {
        box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
      }

      &:focus,
      &:active {
        box-shadow: 0px 0px 0px 1px ${Theme.Color.varForeground};
      }

      &--active {
        box-shadow: 0px 0px 0px 3px ${Theme.Color.varForeground};

        &:hover {
          box-shadow: 0px 0px 0px 3px ${Theme.Color.varForeground};
        }
      }
    }
  }
`;
