// Imports
// _________________________________________________________________________

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../constants/Theme";
import {} from "../../constants/Root";
import { CssFrameSizeWithBorderString } from "../MellowFrameHeader/styles.scss";
import { LayeredSidebarWidth } from "../LayeredSidebar/styles.scss";

// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name SimpleContentTemplateClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
export const SimpleContentTemplateClassName = "simple-content";

/**
 *
 * @name SimpleContentTemplateStyle
 * @author Peter Laxalt
 *
 */
export const SimpleContentTemplateStyle = styled.nav`
  &.${SimpleContentTemplateClassName} {
    background: ${Theme.Color.varBackground};
    padding: ${CssFrameSizeWithBorderString};

    &.${SimpleContentTemplateClassName}--has-global-sidebar {
      .${SimpleContentTemplateClassName}__inner {
        display: flex;
        flex-wrap: nowrap;
      }

      .${SimpleContentTemplateClassName}__content {
        position: relative;
        z-index: 5;

        flex: 1;

        max-width: calc(100% - ${LayeredSidebarWidth});

        img {
          max-width: 100%;
        }

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          max-width: 100%;
        }
      }

      .${SimpleContentTemplateClassName}__sidebar {
        width: ${LayeredSidebarWidth};
        flex-shrink: 0;

        &__el {
          position: sticky;
          top: ${CssFrameSizeWithBorderString};

          height: calc(100vh - (${CssFrameSizeWithBorderString} * 2));
        }

        &__component {
          position: absolute;
          left: 0;
          top: 0;
        }

        @media(max-width: ${Theme.Base.Media.Width.Sm}) {
          display: none;
        }
      }
    }
  }
`;
