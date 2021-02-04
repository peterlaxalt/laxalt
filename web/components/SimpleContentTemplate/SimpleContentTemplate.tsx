// Core
import React, { CSSProperties } from "react";

// Constants
import { __DEBUG__ } from "../../constants/site/Settings";

// Types
import { LayeredSidebar, LXLT_SidebarPane } from "../LayeredSidebar";

// Components

// Styles
import {
  SimpleContentTemplateClassName,
  SimpleContentTemplateStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_SimpleContentTemplate = {
  addClass?: string;
  globalSidebarPanes?: LXLT_SidebarPane[];
  children: React.ReactNode;
  style?: React.CSSProperties;
  showGridlines?: boolean;
};

export type LXLT_SimpleContentNode = {
  isFirstNode?: boolean;
  addClass?: string;
  style?: CSSProperties;
};

// Begin Data
// __________________________________________________________________________________________

export const SimpleContentTemplate: React.FunctionComponent<LXLT_SimpleContentTemplate> = ({
  addClass,
  children,
  globalSidebarPanes,
  style,
  showGridlines,
}) => {
  return (
    <SimpleContentTemplateStyle
      className={`${SimpleContentTemplateClassName} ${
        addClass && addClass
      } ${SimpleContentTemplateClassName}--${
        globalSidebarPanes ? `has-global-sidebar` : `sans-global-sidebar`
      } ${SimpleContentTemplateClassName}--${
        showGridlines ? `has-gridlines` : `sans-gridlines`
      }`}
      style={{ ...style }}
    >
      <div className={`${SimpleContentTemplateClassName}__inner`}>
        {/* _____________________________________________________________ */}
        {/* Global Sidebar */}
        {globalSidebarPanes ? (
          <div className={`${SimpleContentTemplateClassName}__sidebar`}>
            <div className={`${SimpleContentTemplateClassName}__sidebar__el`}>
              <LayeredSidebar
                panes={globalSidebarPanes}
                addClass={`${SimpleContentTemplateClassName}__sidebar__component`}
              />
            </div>
          </div>
        ) : null}

        {/* _____________________________________________________________ */}
        {/* Content */}
        <div className={`${SimpleContentTemplateClassName}__content`}>
          {showGridlines && (
            <span className={`${SimpleContentTemplateClassName}__gridlines`}>
              <span
                className={`${SimpleContentTemplateClassName}__gridlines__el`}
              />
            </span>
          )}

          {children}
        </div>
      </div>
    </SimpleContentTemplateStyle>
  );
};

// End Component
// ______________________________________________________________________________
