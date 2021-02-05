// Core
import React from "react";
import { CSSProperties } from "styled-components";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import { MarqueeRowClassName, MarqueeRowStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_MarqueeRow = LXLT_SimpleContentNode & {
  strings: string[];
  hasSidebar?: boolean;
};

/**
 *
 * @name MarqueeRow
 * @author Peter Laxalt
 * @description Marquee rotating through items.
 * @requires /studio/sections/MarqueeRow
 *
 */
export const MarqueeRow: React.FunctionComponent<LMNTS_Section_MarqueeRow> = ({
  strings,
  style,
  hasSidebar,
}) => {
  let items = Array.from(Array(4));

  if (strings) {
    return (
      <MarqueeRowStyle
        style={style}
        className={`${MarqueeRowClassName} ${MarqueeRowClassName}--${
          hasSidebar ? `has-sidebar` : `sans-sidebar`
        }`}
      >
        <div className={`${MarqueeRowClassName}__inner`}>
          {items.map((_, idx: number) => {
            return (
              <ul key={idx} className={`${MarqueeRowClassName}__list`}>
                {strings
                  ? strings.map((string: string, idx: any) => {
                      return (
                        <li
                          key={idx}
                          className={`${MarqueeRowClassName}__list__item`}
                          data-marquee-item={idx}
                        >
                          {string}
                        </li>
                      );
                    })
                  : false}
              </ul>
            );
          })}
        </div>
      </MarqueeRowStyle>
    );
  } else {
    console.log("🚫 Strings not provided to Section: MarqueeRow");
    return null;
  }
};

// End Component
// __________________________________________________________________________________________
