// Core
import React, { useState } from "react";
import LazyImage from "../../../utils/lazyImage";
import { DuotoneImage } from "../../DuotoneImage";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import {
  AccordionListingRowClassName,
  AccordionListingRowStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_AccordionListingRow = LXLT_SimpleContentNode & {
  hasSidebar?: boolean;
  labelLeft: string;
  labelRight: string;
  isInitiallyExpanded?: boolean;
  children: React.ReactNode;
};

/**
 *
 * @name AccordionListingRow
 * @author Peter Laxalt
 * @requires /studio/sections/AccordionListingRow
 *
 */
export const AccordionListingRow: React.FunctionComponent<LMNTS_Section_AccordionListingRow> = ({
  hasSidebar,
  labelLeft,
  labelRight,
  isInitiallyExpanded,
  children,
}) => {
  const [isExpanded, toggleRow] = useState(isInitiallyExpanded ? true : false);

  return (
    <AccordionListingRowStyle
      aria-expanded={isExpanded}
      className={`${AccordionListingRowClassName} ${AccordionListingRowClassName}--${
        isExpanded ? "is-visible" : "is-not-visible"
      } ${AccordionListingRowClassName}--${
        isInitiallyExpanded
          ? "is-initially-expanded"
          : "is-not-initially-expanded"
      } ${AccordionListingRowClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${AccordionListingRowClassName}__inner`}>
        {/* Title */}
        {/* _________________________________________________ */}
        <div className={`${AccordionListingRowClassName}__title`}>
          <button
            className={`${AccordionListingRowClassName}__title__btn`}
            onClick={() => toggleRow(isExpanded ? false : true)}
          >
            {/* Left */}
            {/* _________________________________________________ */}
            <span
              className={`${AccordionListingRowClassName}__title__btn__label`}
            >
              {labelLeft}
            </span>

            {/* Middle */}
            {/* _________________________________________________ */}
            <span
              className={`${AccordionListingRowClassName}__title__btn__label ${AccordionListingRowClassName}__title__btn__label--indicator`}
            />

            {/* Right */}
            {/* _________________________________________________ */}
            <span
              className={`${AccordionListingRowClassName}__title__btn__label`}
            >
              {labelRight}
            </span>
          </button>
        </div>

        {/* Content */}
        {/* _________________________________________________ */}
        <div className={`${AccordionListingRowClassName}__content`}>
          <div className={`${AccordionListingRowClassName}__content__wrapper`}>
            {children}
          </div>
        </div>
      </div>
    </AccordionListingRowStyle>
  );
};

// End Component
// __________________________________________________________________________________________
