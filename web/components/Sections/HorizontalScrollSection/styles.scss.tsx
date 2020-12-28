// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import {} from "../../../constants/Root";
import { CssFrameSizeWithBorderString } from "../../MellowFrameHeader/styles.scss";
import { LayeredSidebarWidth, SidebarFullwidthCss } from "../../LayeredSidebar/styles.scss";

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
export const HorizontalScrollSectionStyle = styled.section`
  &.${HorizontalScrollSectionClassName} {
    &.${HorizontalScrollSectionClassName}--has-sidebar {
      /* ${SidebarFullwidthCss} */
      width: calc(100vw - (${CssFrameSizeWithBorderString} * 2));
      margin-left: calc(${LayeredSidebarWidth} * -1);

      /* padding-left: ${LayeredSidebarWidth}; */
    }
  }
`;
