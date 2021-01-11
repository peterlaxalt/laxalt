// Core
import React from "react";
import LazyImage from "../../../utils/lazyImage";
import { DuotoneImage } from "../../DuotoneImage";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";

// Styles
import {
  StretchIntroSectionClassName,
  StretchIntroSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_StretchIntroSection = LXLT_SimpleContentNode & {
  hasSidebar?: boolean;
};

/**
 *
 * @name StretchIntroSection
 * @author Peter Laxalt
 * @requires /studio/sections/StretchIntroSection
 *
 */
export const StretchIntroSection: React.FunctionComponent<LMNTS_Section_StretchIntroSection> = ({
  hasSidebar,
}) => {
  return (
    <StretchIntroSectionStyle
      className={`${StretchIntroSectionClassName} ${StretchIntroSectionClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${StretchIntroSectionClassName}__inner`}>
        {/* ____________________________________________________________ */}
        {/* Row */}
        <div className={`${StretchIntroSectionClassName}__row`}>
          <span className={`${StretchIntroSectionClassName}__row__content`}>
            Peter is currently head of design
          </span>

          <span
            className={`${StretchIntroSectionClassName}__row__content ${StretchIntroSectionClassName}__row__content--separator`}
          />

          <span className={`${StretchIntroSectionClassName}__row__content`}>
            at <strong>Anycart</strong>
          </span>
        </div>

        {/* ____________________________________________________________ */}
        {/* Row */}
        <div className={`${StretchIntroSectionClassName}__row`}>
          <span className={`${StretchIntroSectionClassName}__row__content`}>
            & Runs
          </span>

          <span
            className={`${StretchIntroSectionClassName}__row__content ${StretchIntroSectionClassName}__row__content--separator`}
          />

          <span className={`${StretchIntroSectionClassName}__row__content`}>
            <strong>Studio Laxalt</strong> as a private
          </span>
        </div>

        {/* ____________________________________________________________ */}
        {/* Row */}
        <div className={`${StretchIntroSectionClassName}__row`}>
          <span className={`${StretchIntroSectionClassName}__row__content`}>
            Art, design, & type studio
          </span>

          <span
            className={`${StretchIntroSectionClassName}__row__content ${StretchIntroSectionClassName}__row__content--separator`}
          />

          <span className={`${StretchIntroSectionClassName}__row__content`}>
            In Brooklyn, NYC
          </span>
        </div>
      </div>
    </StretchIntroSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
