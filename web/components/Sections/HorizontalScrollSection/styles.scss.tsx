// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { CssFrameSizeWithBorderString } from "../../MellowFrameHeader/styles.scss";
import {
  LayeredSidebarWidth,
  SidebarFullwidthCss,
} from "../../LayeredSidebar/styles.scss";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name HorizontalScrollSectionClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const HorizontalScrollSectionClassName = "x-scroll";

/**
 *
 * @name HorizontalScrollSectionStyle
 * @author Peter Laxalt
 *
 */
export const HorizontalScrollSectionStyle = styled.section<{
  forceFullWidth: boolean;
}>`
  ${(props) =>
    props.forceFullWidth ? CssUtils.ForceFullWidth(Root.Grid.Gutter.Left) : ""};

  &.${HorizontalScrollSectionClassName} {
    &.${HorizontalScrollSectionClassName}--has-sidebar {
      /* ${SidebarFullwidthCss} */
      width: calc(100vw - (${CssFrameSizeWithBorderString} * 2));
      margin-left: calc(${LayeredSidebarWidth} * -1);

      /* padding-left: ${LayeredSidebarWidth}; */

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        width: 100%;
        max-width: 100%;
        margin-left: 0;

        .spacer {
          display: none;
        }
      }
    }

    .${HorizontalScrollSectionClassName}__content-wrapper {
      padding-left: ${(props) =>
        props.forceFullWidth ? Root.Grid.Gutter.Left : 0};
    }
  }
`;
