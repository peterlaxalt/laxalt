// Imports
// _________________________________________________________________________

// Core
import styled, { createGlobalStyle } from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import {
  CssFramePaddingString,
  CssFrameSizeWithBorderString,
} from "../../MellowFrameHeader/styles.scss";
import { NoDistortCanvasClassName } from "../../../pages/projects/no-distort-with-canvas";
import { BlobRadius } from "../../../constants/styles/Animation";
import { hexToRGB } from "../../../utils/hexToRGB";
import { ProjectCardClassName } from "../../ProjectCard/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ProjectVerticalListingsClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const ProjectVerticalListingsClassName = "project-vertical-listings";

/**
 *
 * @name ProjectVerticalListingsStyle
 * @author Peter Laxalt
 *
 */
export const ProjectVerticalListingsStyle = styled.section`
  &.${ProjectVerticalListingsClassName} {
    .${ProjectVerticalListingsClassName}__inner {
      display: flex;
      flex-wrap: wrap;

      overflow: hidden;

      /* padding-bottom: calc(${Root.Size} * 8); */

      .${ProjectCardClassName} {
        width: 50%;

        &:first-child {
          .${ProjectCardClassName}__bg {
            display: none;
          }
        }

        &:nth-child(even) {
          /* transform: translateY(calc(${Root.Size} * 8)); */

          &:after {
            display: none;
          }

          .${ProjectCardClassName}__inner {
            &:before {
              height: unset;
              display: none;
            }
          }

        }

        .${ProjectCardClassName}__inner {
            // Borders
            &:before {
              content: "";

              position: absolute;

              height: unset;
              width: 1px;

              top: -70px;
              bottom: -25px;
              left: calc(var(--${ProjectCardClassName}__card-spacing) * -1);

              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0) 50%,
                ${Theme.Color.varForeground} 50%,
                ${Theme.Color.varForeground}
              );

              background-size: 100% 6px;
            }
          }
      }
    }
  }
`;
