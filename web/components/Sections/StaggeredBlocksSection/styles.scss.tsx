/**
 *
 * StaggeredBlocksSection.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website StaggeredBlocksSection Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { ScaleXIn } from "../../../constants/styles/Animation";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import {} from "../../MellowFrameHeader/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const StaggeredBlockClassName = `staggered-block`;
export const StaggeredBlocksSectionClassName = `staggered-blocks-section`;

//////////////////////////////////////////////////////////////////////

export const StaggeredBlockStyle = styled.section`
  &.${StaggeredBlockClassName} {
    .${StaggeredBlockClassName}__content {
      margin-bottom: calc(${Root.Size} * 1);
      padding-right: calc(
        var(--${StaggeredBlocksSectionClassName}__block-spacing) * 2
      );

      p {
        font-size: 1.25rem;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////

export const StaggeredBlocksSectionStyle = styled.section`
  &.${StaggeredBlocksSectionClassName} {

    .${StaggeredBlocksSectionClassName}__block-listings {
      --${StaggeredBlocksSectionClassName}__block-spacing: calc(${
  Root.Size
} * 3);

      display: flex;
      flex-wrap: wrap;

      ${CssUtils.ForceFullWidth(
        `var(--${StaggeredBlocksSectionClassName}__block-spacing)`,
        true
      )};

      padding-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * 5);
      padding-bottom: var(--${StaggeredBlocksSectionClassName}__block-spacing);

      .${StaggeredBlockClassName} {
        width: calc(100% / 3);

        padding: var(--${StaggeredBlocksSectionClassName}__block-spacing);

        &:nth-child(3n+1) {
          margin-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * -4);

          .${StaggeredBlockClassName}__content {
            margin-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * 0);
          }
        }

        &:nth-child(3n+2) {
          margin-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * -4);

          .${StaggeredBlockClassName}__content {
            margin-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * 2);
          }
        }

        &:nth-child(3n+3) {
          margin-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * -4);

          .${StaggeredBlockClassName}__content {
            margin-top: calc(var(--${StaggeredBlocksSectionClassName}__block-spacing) * 4);
          }
        }

      }
    }
  }
`;
