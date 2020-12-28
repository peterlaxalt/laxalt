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
};

export type LXLT_SimpleContentNode = {
  isFirstNode?: boolean;
  addClass?: boolean;
  style?: CSSProperties;
}

// Begin Data
// __________________________________________________________________________________________

export const SimpleContentTemplate: React.FunctionComponent<LXLT_SimpleContentTemplate> = ({
  addClass,
  children,
  globalSidebarPanes,
}) => {
  return (
    <SimpleContentTemplateStyle
      className={`${SimpleContentTemplateClassName} ${
        addClass && addClass
      } ${SimpleContentTemplateClassName}--${
        globalSidebarPanes ? `has-global-sidebar` : `sans-global-sidebar`
      }`}
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
          {children}
        </div>
      </div>
    </SimpleContentTemplateStyle>
  );
};

// End Component
// ______________________________________________________________________________
