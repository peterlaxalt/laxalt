// Core
import React from "react";
import { CSSProperties } from "styled-components";
import { SiteTakeoutMenu } from "../../../constants/site/Settings";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";
import {
  TakeoutMenuFaxNumber,
  TakeoutMenuPhoneNumber,
  TakeoutMenuText,
} from "../../_svg/TakeoutMenuText/TakeoutMenuText";

// Styles
import {
  TakeoutMenuClassName,
  TakeoutMenuColumnClassName,
  TakeoutMenuColumnStyle,
  TakeoutMenuStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_TakeoutMenu = LXLT_SimpleContentNode & {
  hasSidebar?: boolean;
};

export type LXLT_TakeoutMenuItem = {
  label: string;
  price: string;
  spicy?: boolean;
};

export type LXLT_TakeoutMenuColumn = {
  name: string;
  id: string;
  isAlternateRow?: boolean;
  items: LXLT_TakeoutMenuItem[];
};

export const TakeoutMenuColumn: React.FunctionComponent<LXLT_TakeoutMenuColumn> = ({
  name,
  isAlternateRow,
  items,
  id,
}) => {
  return (
    <TakeoutMenuColumnStyle
      className={`${TakeoutMenuColumnClassName} ${TakeoutMenuColumnClassName}--${
        isAlternateRow ? `is-alternate-row` : `is-not-alternate-row`
      }`}
    >
      <div className={`${TakeoutMenuColumnClassName}__inner`}>
        <div className={`${TakeoutMenuColumnClassName}__title`}>{name}</div>

        <ul className={`${TakeoutMenuColumnClassName}__items`}>
          {items.map((item: LXLT_TakeoutMenuItem, idx: number) => {
            return (
              <li
                className={`${TakeoutMenuColumnClassName}__items__item`}
                key={idx}
              >
                <span
                  className={`${TakeoutMenuColumnClassName}__items__item__count`}
                >
                  {id}
                  {idx + 1}
                </span>

                <span
                  className={`${TakeoutMenuColumnClassName}__items__item__label`}
                >
                  {item.label}
                </span>

                <span
                  className={`${TakeoutMenuColumnClassName}__items__item__price`}
                >
                  {item.price}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </TakeoutMenuColumnStyle>
  );
};

/**
 *
 * @name TakeoutMenu
 * @author Peter Laxalt
 * @requires /studio/sections/TakeoutMenu
 *
 */
export const TakeoutMenu: React.FunctionComponent<LMNTS_Section_TakeoutMenu> = ({
  style,
  hasSidebar,
}) => {
  return (
    <TakeoutMenuStyle
      style={style}
      className={`${TakeoutMenuClassName} ${TakeoutMenuClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${TakeoutMenuClassName}__inner`}>
        <div className={`${TakeoutMenuClassName}__top`}>
          <div className={`${TakeoutMenuClassName}__top__col`}>
            <div className={`${TakeoutMenuClassName}__top__col__row`}>
              <TakeoutMenuText />
            </div>
          </div>
          <div
            className={`${TakeoutMenuClassName}__top__col ${TakeoutMenuClassName}__top__col--right`}
          >
            <div className={`${TakeoutMenuClassName}__top__col__row`}>
              <TakeoutMenuFaxNumber />
            </div>

            <div className={`${TakeoutMenuClassName}__top__col__row`}>
              <TakeoutMenuPhoneNumber />
            </div>
          </div>
        </div>

        <div className={`${TakeoutMenuClassName}__bottom`}>
          {SiteTakeoutMenu.map(
            (column: LXLT_TakeoutMenuColumn, idx: number) => {
              return <TakeoutMenuColumn key={idx} {...column} />;
            }
          )}
        </div>
      </div>
    </TakeoutMenuStyle>
  );
};

// End Component
// __________________________________________________________________________________________
