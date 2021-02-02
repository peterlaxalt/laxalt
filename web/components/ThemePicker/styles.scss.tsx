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
    height: calc(${Root.FrameSize});

    display: flex;
    align-items: center;

    z-index: 990;

    .${ThemePickerClassName}__label {
      font-size: 0.6rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;

      line-height: 2.25;

      position: relative;

      padding-right: calc(${Root.Size} + 1em);
      margin-right: 1em;

      &:before {
        content: '';

        position: absolute;

        right: 0;
        top: 50%;

        height: 1px;
        width: calc(${Root.Size} / 1);

        background: currentColor;
      }
    }

    .${ThemePickerClassName}__option {
      width: calc(${Root.FrameSize} * 0.35);
      height: calc(${Root.FrameSize} * 0.35);

      flex-shrink: 0;

      position: relative;

      border: 2px solid ${Theme.Color.varBackground};

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
        box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};

        &:hover {
          box-shadow: 0px 0px 0px 2px ${Theme.Color.varForeground};
        }
      }

      &__el {
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        display: block;

        border-radius: 50%;

        &--secondary {
          clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);

          transform: rotate(45deg);
        }
      }
    }
  }
`;
