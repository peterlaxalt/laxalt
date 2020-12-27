// Core
import Link from "next/link";
import React from "react";
import { __DEBUG__ } from "../../constants/site/Settings";

// Styles
import { LayeredSidebarClassName, LayeredSidebarStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_SidebarPaneItem = {
  label: string;
  href: string;
  isMajor: boolean;
};

export type LXLT_SidebarPane = {
  header?: string;
  items?: LXLT_SidebarPaneItem[];
};

export type LXLT_LayeredSidebar = {
  addClass?: string;
  panes?: LXLT_SidebarPane[];
};

// Begin Data
// __________________________________________________________________________________________

export const LayeredSidebar: React.FunctionComponent<LXLT_LayeredSidebar> = ({
  addClass,
  panes,
}) => {
  if (panes) {
    return (
      <LayeredSidebarStyle
        className={`${LayeredSidebarClassName} ${addClass && addClass}`}
      >
        <div className={`${LayeredSidebarClassName}__inner`}>
          {panes.map((pane: LXLT_SidebarPane, idx: number) => {
            let paneItemsMajor: LXLT_SidebarPaneItem[] = pane.items
              ? pane.items.filter((item: LXLT_SidebarPaneItem) => item.isMajor)
              : [];

            let paneItemsMinor: LXLT_SidebarPaneItem[] = pane.items
              ? pane.items.filter((item: LXLT_SidebarPaneItem) => !item.isMajor)
              : [];

            return (
              <>
                {/* ____________________________________________________________ */}
                {/* Navigaton Pane */}
                <div className={`${LayeredSidebarClassName}__pane`} key={idx}>
                  {/* ____________________________________________________________ */}
                  {/* List header */}
                  {pane.header && (
                    <div className={`${LayeredSidebarClassName}__pane__header`}>
                      {pane.header}
                    </div>
                  )}

                  {/* ____________________________________________________________ */}
                  {/* List items */}
                  {pane.items && (
                    <>
                      {/* ____________________________________________________________ */}
                      {/* Major list items */}
                      {paneItemsMajor.length > 0 && (
                        <ul
                          className={`${LayeredSidebarClassName}__pane__list ${LayeredSidebarClassName}__pane__list--major`}
                        >
                          {paneItemsMajor.map(
                            (paneItem: LXLT_SidebarPaneItem, idxx: number) => {
                              return (
                                <li
                                  className={`${LayeredSidebarClassName}__pane__list__item ${LayeredSidebarClassName}__pane__list__item--${
                                    paneItem.isMajor ? "major" : "minor"
                                  }`}
                                  key={idxx}
                                >
                                  <Link href={paneItem.href}>
                                    <a>{paneItem.label}</a>
                                  </Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      )}

                      {/* ____________________________________________________________ */}
                      {/* Minor list items */}
                      {paneItemsMinor.length > 0 && (
                        <ul
                          className={`${LayeredSidebarClassName}__pane__list ${LayeredSidebarClassName}__pane__list--minor`}
                        >
                          {paneItemsMinor.map(
                            (paneItem: LXLT_SidebarPaneItem, idxx: number) => {
                              return (
                                <li
                                  className={`${LayeredSidebarClassName}__pane__list__item ${LayeredSidebarClassName}__pane__list__item--${
                                    paneItem.isMajor ? "major" : "minor"
                                  }`}
                                  key={idxx}
                                >
                                  <Link href={paneItem.href}>
                                    <a>{paneItem.label}</a>
                                  </Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </LayeredSidebarStyle>
    );
  } else {
    return null;
  }
};

// End Component
// ______________________________________________________________________________
