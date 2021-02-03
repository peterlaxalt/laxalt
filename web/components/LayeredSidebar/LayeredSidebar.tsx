// Core
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { __DEBUG__ } from "../../constants/site/Settings";
import { HeadlineTransitionThreshold } from "../HeadlineWrapper";

// Styles
import {
  GlobalSidebarPaneOffsetVariables,
  LayeredSidebarClassName,
  LayeredSidebarStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_SidebarPaneItem = {
  label: string;
  href: string;
  isMajor: boolean;
  isActive: boolean;
};

export type LXLT_SidebarPane = {
  header?: string;
  headerBadge?: () => JSX.Element;
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
    const [isHovered, setHover] = useState(false);
    const [isScrolled, toggleScroll] = useState(false);

    let scrollModifier = `${LayeredSidebarClassName}--${
      isScrolled ? `is-scrolled` : `is-not-scrolled`
    }`;

    const listenToScroll = () => {
      if (window.scrollY > HeadlineTransitionThreshold) {
        toggleScroll(true);

        return;
      } else {
        toggleScroll(false);

        return;
      }
    };

    useEffect(() => {
      if (typeof window) {
        window.addEventListener("scroll", listenToScroll);
      }
      return () => {
        window.removeEventListener("scroll", listenToScroll);
      };
    });

    return (
      <LayeredSidebarStyle
        className={`${LayeredSidebarClassName} ${scrollModifier} ${addClass && addClass}`}
      >
        <GlobalSidebarPaneOffsetVariables
          panes={panes.length}
          isHovered={isHovered}
        />

        <div className={`${LayeredSidebarClassName}__inner`}>
          {panes.map((pane: LXLT_SidebarPane, idx: number) => {
            let paneItemsMajor: LXLT_SidebarPaneItem[] = pane.items
              ? pane.items.filter((item: LXLT_SidebarPaneItem) => item.isMajor)
              : [];

            let paneItemsMinor: LXLT_SidebarPaneItem[] = pane.items
              ? pane.items.filter((item: LXLT_SidebarPaneItem) => !item.isMajor)
              : [];

            return (
              <Fragment key={idx}>
                {/* ____________________________________________________________ */}
                {/* Navigaton Pane */}
                <div
                  className={`${LayeredSidebarClassName}__pane`}
                  onMouseEnter={() =>
                    idx == panes.length - 1 ? null : setHover(true)
                  }
                  onMouseLeave={() =>
                    idx == panes.length - 1 ? null : setHover(false)
                  }
                >
                  {/* ____________________________________________________________ */}
                  {/* List header */}
                  {pane.header && !pane.headerBadge ? (
                    <div className={`${LayeredSidebarClassName}__pane__header`}>
                      {pane.header}
                    </div>
                  ) : pane.headerBadge ? (
                    <div
                      className={`${LayeredSidebarClassName}__pane__header ${LayeredSidebarClassName}__pane__header--badge`}
                    >
                      <pane.headerBadge />
                    </div>
                  ) : null}

                  {/* ____________________________________________________________ */}
                  {/* List items */}
                  {pane.items && (
                    <>
                      {/* ____________________________________________________________ */}
                      {/* Major list items */}
                      {paneItemsMajor.length > 0 && (
                        <ul
                          className={`${LayeredSidebarClassName}__pane__list ${LayeredSidebarClassName}__pane__list--major`}
                          style={{ opacity: idx === 2 ? 0 : 1 }} // TEMPORARY
                        >
                          {paneItemsMajor.map(
                            (paneItem: LXLT_SidebarPaneItem, idxx: number) => {
                              return (
                                <li
                                  className={`${LayeredSidebarClassName}__pane__list__item ${LayeredSidebarClassName}__pane__list__item--${
                                    paneItem.isActive
                                      ? "is-active"
                                      : "is-not-active"
                                  }  ${LayeredSidebarClassName}__pane__list__item--${
                                    paneItem.isMajor ? "major" : "minor"
                                  }`}
                                  key={idxx + idx}
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
                          style={{ opacity: idx === 2 ? 0 : 1 }} // TEMPORARY
                        >
                          {paneItemsMinor.map(
                            (paneItem: LXLT_SidebarPaneItem, idxx: number) => {
                              return (
                                <li
                                  className={`${LayeredSidebarClassName}__pane__list__item ${LayeredSidebarClassName}__pane__list__item--${
                                    paneItem.isActive
                                      ? "is-active"
                                      : "is-not-active"
                                  } ${LayeredSidebarClassName}__pane__list__item--${
                                    paneItem.isMajor ? "major" : "minor"
                                  }`}
                                  key={idxx + idx}
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
              </Fragment>
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
