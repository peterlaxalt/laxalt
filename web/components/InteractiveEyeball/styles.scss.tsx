// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import {} from "../../constants/Root";
import {} from "../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveEyeball
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const InteractiveEyeballClassName = "interactive-eyeball";

/**
 *
 * @name InteractiveEyeballStyle
 * @author Peter Laxalt
 *
 */
export const InteractiveEyeballStyle = styled.span`
  &.${InteractiveEyeballClassName} {
    --${InteractiveEyeballClassName}__eye-size: .8em;

    display: block;

    margin-left: calc(var(--${InteractiveEyeballClassName}__eye-size) * .3);
    margin-right: calc(var(--${InteractiveEyeballClassName}__eye-size) * .3);

    position: relative;

    .${InteractiveEyeballClassName}__outline {
      display: block;
      width: var(--${InteractiveEyeballClassName}__eye-size);
      height: var(--${InteractiveEyeballClassName}__eye-size);

      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;

      transform: rotate(-45deg);

      border: 4px solid ${Theme.Color.varBackground};
    }

    .${InteractiveEyeballClassName}__pupil-wrapper {
      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      transform-origin: center center;
    }

    .${InteractiveEyeballClassName}__pupil {
      height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .85);
      width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .85);

      display: flex;
      align-items: center;
      justify-content: flex-end;

      transition: .5s transform ease;
      will-change: transform;

      &__el {
        display: block;

        height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .65);
        width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .65);

        border-radius: 50%;

        position: relative;

        border: 4px solid ${Theme.Color.varBackground};

        &:before {
          content: '';

          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(1);
          transition: .5s transform ease;
          will-change: transform;

          width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .35);
          height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .35);

          background: ${Theme.Color.varBackground};

          border-radius: 50%;
        }

        /* &:after {
          content: '';

          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(0);
          transition: .5s transform ease;
          will-change: transform;

          width: calc(var(--${InteractiveEyeballClassName}__eye-size) * .45);
          height: calc(var(--${InteractiveEyeballClassName}__eye-size) * .45);

          background: ${Theme.Color.varForeground};

          border-radius: 50%;
        } */
      }
    }

    &.${InteractiveEyeballClassName}--is-inverted {
      .${InteractiveEyeballClassName}__outline {
        border: 4px solid ${Theme.Color.varForeground};
      }

      .${InteractiveEyeballClassName}__pupil {
        &__el {
          border: 4px solid ${Theme.Color.varForeground};

          &:before {
            background: ${Theme.Color.varForeground};
          }
        }
      }
    }
  }
`;
