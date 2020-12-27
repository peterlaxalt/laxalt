// Core
import React from "react";
import { CSSProperties } from "styled-components";

// Styles
import { MarqueeRowClassName, MarqueeRowStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_MarqueeRow = {
  strings: string[];
  addClass?: string;
  style?: CSSProperties;
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
}) => {
  let items = Array.from(Array(4));

  if (strings) {
    return (
      <MarqueeRowStyle style={style} className={`${MarqueeRowClassName}`}>
        <div className={`${MarqueeRowClassName}__inner`} aria-hidden="true">
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
                          <span
                            className={`${MarqueeRowClassName}__list__item__label`}
                          >
                            {string}
                          </span>
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
