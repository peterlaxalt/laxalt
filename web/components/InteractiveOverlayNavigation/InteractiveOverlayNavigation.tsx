// Core
import React from "react";

// Constants
import {
  LXLT_LinkItem,
  LXLT_LinkItemWithCaption,
  Settings,
  SiteNavigation,
  __DEBUG__,
} from "../../constants/site/Settings";

// Components
import Link from "next/link";
import { InteractiveEyeball } from "../InteractiveEyeball";

// Styles
import {
  InteractiveOverlayNavigationClassName,
  InteractiveOverlayNavigationStyle,
} from "./styles.scss";
import { createGlobalStyle } from "styled-components";
import { OvalButton } from "../OvalButton";
import { ThemePicker } from "../ThemePicker";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_InteractiveOverlayNavigation = {
  addClass?: string;
  toggleOverlayAndLogotypeExpansion?: () => void;
};

// Begin Data
// __________________________________________________________________________________________

/**
 *
 * @name InteractiveOverlayNavigation
 * @author Peter Laxalt
 *
 */

export const InteractiveOverlayNavigation: React.FunctionComponent<LXLT_InteractiveOverlayNavigation> = ({
  addClass,
  toggleOverlayAndLogotypeExpansion,
}) => {
  const GlobalScrollLock = createGlobalStyle`
    body,
    html {
      overflow: hidden !important;
    }
  `;

  const InteractiveOverlayRef = React.createRef<HTMLSpanElement>();

  return (
    <>
      <GlobalScrollLock />
      <InteractiveOverlayNavigationStyle
        className={`${InteractiveOverlayNavigationClassName} ${addClass}`}
        ref={InteractiveOverlayRef}
      >
        <div className={`${InteractiveOverlayNavigationClassName}__inner`}>
          {/* _______________________________________________ */}
          {/* Home Button */}
          <OvalButton
            label={`Home`}
            href={`/`}
            onClick={() => toggleOverlayAndLogotypeExpansion()}
            addClass={`${InteractiveOverlayNavigationClassName}__oval-btn--home`}
            invert={true}
          />

          {/* _______________________________________________ */}
          {/* Close Button */}
          <OvalButton
            label={`Misc`}
            href={Settings.miscPage}
            onClick={() => toggleOverlayAndLogotypeExpansion()}
            addClass={`${InteractiveOverlayNavigationClassName}__oval-btn--close`}
            invert={true}
          />

          {/* _______________________________________________ */}
          {/* Navigation List */}
          <ul className={`${InteractiveOverlayNavigationClassName}__nav-list`}>
            {SiteNavigation.OverlayNav.NavItems.map(
              (item: LXLT_LinkItemWithCaption, idx: number) => {
                return (
                  <li
                    key={idx}
                    className={`${InteractiveOverlayNavigationClassName}__nav-list__item`}
                  >
                    <span
                      className={`${InteractiveOverlayNavigationClassName}__nav-list__item__eyeball`}
                    >
                      <InteractiveEyeball
                        scrollContainer={InteractiveOverlayRef}
                      />
                    </span>
                    {/* _______________________________________________ */}
                    {/* Inner Item */}
                    <span
                      className={`${InteractiveOverlayNavigationClassName}__nav-list__item__overflow-wrapper`}
                    >
                      <span
                        className={`${InteractiveOverlayNavigationClassName}__nav-list__item__inner`}
                      >
                        <Link href={item.href}>
                          <a
                            className={`${InteractiveOverlayNavigationClassName}__nav-list__item__anchor`}
                            onClick={() => toggleOverlayAndLogotypeExpansion()}
                          >
                            <span
                              className={`${InteractiveOverlayNavigationClassName}__nav-list__item__anchor__indicator`}
                            />
                            <span
                              className={`${InteractiveOverlayNavigationClassName}__nav-list__item__anchor__label`}
                            >
                              {item.label}
                            </span>
                          </a>
                        </Link>
                      </span>
                    </span>
                  </li>
                );
              }
            )}
          </ul>

          {/* _______________________________________________ */}
          {/* Social Container */}
          <div className={`${InteractiveOverlayNavigationClassName}__social`}>
            <ul
              className={`${InteractiveOverlayNavigationClassName}__social__list`}
            >
              {/* _______________________________________________ */}
              {/* Subscribe Button */}
              {/* <li
                className={`${InteractiveOverlayNavigationClassName}__social__list__item`}
              >
                <span
                  className={`${InteractiveOverlayNavigationClassName}__social__list__item__label ${InteractiveOverlayNavigationClassName}__social__list__item__label--anchor`}
                >
                  Subscribe
                </span>
              </li> */}

              {/* _______________________________________________ */}
              {/* Social List */}
              {SiteNavigation.OverlayNav.SocialItems.map(
                (item: LXLT_LinkItem, idx: number) => {
                  return (
                    <li
                      className={`${InteractiveOverlayNavigationClassName}__social__list__item`}
                      key={idx}
                    >
                      <Link href={item.href}>
                        <a
                          className={`${InteractiveOverlayNavigationClassName}__social__list__item__label ${InteractiveOverlayNavigationClassName}__social__list__item__label--anchor`}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>

            <ul
              className={`${InteractiveOverlayNavigationClassName}__social__minor-list`}
            >
              <li
                className={`${InteractiveOverlayNavigationClassName}__social__minor-list__item`}
              >
                Currently / Brooklyn, NYC
              </li>
              <li
                className={`${InteractiveOverlayNavigationClassName}__social__minor-list__item`}
              >
                Originally / Reno, Nevada
              </li>
            </ul>
          </div>

          {/* _______________________________________________ */}
          {/* Theme Picker */}
          <div className={`${InteractiveOverlayNavigationClassName}__theme-picker`}>
            <ThemePicker />
          </div>
        </div>
      </InteractiveOverlayNavigationStyle>
    </>
  );
};

// End Component
// ______________________________________________________________________________
