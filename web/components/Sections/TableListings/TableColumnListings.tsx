// Core
import React from "react";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import {
  TableColumnListingClassName,
  TableListingClassName,
  TableListingStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LXLT_Section_TableColumnField = {
  label: string;
  href?: string;
};

export type LXLT_Section_TableColumnListing = LXLT_SimpleContentNode & {
  tableName: string;
  data: LXLT_Section_TableColumnField[];
};

/**
 *
 * @name TableColumnListing
 * @author Peter Laxalt
 * @description Marquee rotating through items.
 * @requires /studio/sections/TableColumnListing
 *
 */
export const TableColumnListing: React.FunctionComponent<LXLT_Section_TableColumnListing> = ({
  tableName,
  data,
}) => {
  return (
    <TableListingStyle
      className={`${TableListingClassName} ${TableColumnListingClassName}`}
    >
      <div className={`${TableListingClassName}__inner`}>
        <div
          className={`${TableListingClassName}__col ${TableListingClassName}__col--table-name`}
        >
          <h3>{tableName}</h3>
        </div>

        <div
          className={`${TableListingClassName}__col ${TableListingClassName}__col--data`}
        >
          <ul className={`${TableListingClassName}__columns-data`}>
            {data.map((item: LXLT_Section_TableColumnField, idx: number) => (
              <li
                className={`${TableListingClassName}__item ${TableListingClassName}__item--columns`}
                key={idx}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TableListingStyle>
  );
};

// End Component
// __________________________________________________________________________________________
