// Core
import React from "react";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import {
  TableRowListingClassName,
  TableListingClassName,
  TableListingStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LXLT_Section_TableRowField = {
  fields: string[];
  href?: string;
};

export type LXLT_Section_TableRowListing = LXLT_SimpleContentNode & {
  tableName: string;
  tableHeaders: string[];
  data: LXLT_Section_TableRowField[];
};

/**
 *
 * @name TableRowListing
 * @author Peter Laxalt
 * @description Marquee rotating through items.
 * @requires /studio/sections/TableRowListing
 *
 */
export const TableRowListing: React.FunctionComponent<LXLT_Section_TableRowListing> = ({
  tableName,
  tableHeaders,
  data,
}) => {
  return (
    <TableListingStyle
      className={`${TableListingClassName} ${TableRowListingClassName}`}
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
          <ul
            className={`${TableListingClassName}__rows-data`}
            style={{
              [`--${TableListingClassName}__table-columns` as any]: tableHeaders.length,
            }}
          >
            {/* Headers */}
            {/* ______________________________________________ */}
            <li
              className={`${TableListingClassName}__row ${TableListingClassName}__row--headers`}
            >
              {tableHeaders.map((header: string, idx: number) => (
                <span key={idx} className={`${TableListingClassName}__item`}>
                  {header}
                </span>
              ))}
            </li>

            {data.map((row: LXLT_Section_TableRowField, idx: number) => (
              <li key={idx} className={`${TableListingClassName}__row `}>
                {row.fields.map((field: string, idxx: number) => (
                  <span key={idxx} className={`${TableListingClassName}__item`}>
                    {field}
                  </span>
                ))}
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
