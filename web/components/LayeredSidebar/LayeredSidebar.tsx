// Core
import Link from "next/link";
import { NextRouter } from "next/router";
import React, { Component } from "react";
import { __DEBUG__ } from "../../constants/site/Settings";
import { ThemePicker } from "../ThemePicker";

// Styles
import { LayeredSidebarClassName, LayeredSidebarStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

type LXLT_SidebarPaneItem = {
  label: string;
  href: string;
  isMajor: boolean;
};

type LXLT_SidebarPane = {
  header?: string;
  items?: LXLT_SidebarPaneItem[];
};

type LXLT_LayeredSidebar = {
  addClass?: string;
};

// Begin Data
// __________________________________________________________________________________________

export const LayeredSidebar: React.FunctionComponent<LXLT_LayeredSidebar> = ({
  addClass,
}) => {
  let panes: LXLT_SidebarPane[] = [
    {
      header: "Design",
      items: [
        {
          label: "Strategy",
          href: "/",
          isMajor: true,
        },
        {
          label: "Branding",
          href: "/",
          isMajor: true,
        },
        {
          label: "Illustration",
          href: "/",
          isMajor: true,
        },
        {
          label: "Packaging",
          href: "/",
          isMajor: true,
        },

        {
          label: "Creative Direction",
          href: "/",
          isMajor: false,
        },
        {
          label: "Linework",
          href: "/",
          isMajor: false,
        },
        {
          label: "Hospitality",
          href: "/",
          isMajor: false,
        },
      ],
    },

    {
      // header: "Pane 02",
      items: [
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
      ],
    },

    {
      // header: "Pane 02",
      items: [
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: true,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
        {
          label: "Item",
          href: "/",
          isMajor: false,
        },
      ],
    },
  ];

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
