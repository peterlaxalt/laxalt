// Core
import React from "react";
import LazyImage from "../../../utils/lazyImage";
import { DuotoneImage } from "../../DuotoneImage";
import { LXLT_SimpleContentNode } from "../../SimpleContentTemplate";
import { HeronIllustration } from "../../_svg/HeronIllustration/HeronIllustration";

// Styles
import { IntroSectionClassName, IntroSectionStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_IntroSection = LXLT_SimpleContentNode & {
  hasSidebar?: boolean;
};

/**
 *
 * @name IntroSection
 * @author Peter Laxalt
 * @requires /studio/sections/IntroSection
 *
 */
export const IntroSection: React.FunctionComponent<LMNTS_Section_IntroSection> = ({
  hasSidebar,
}) => {
  return (
    <IntroSectionStyle
      className={`${IntroSectionClassName} ${IntroSectionClassName}--${
        hasSidebar ? `has-sidebar` : `sans-sidebar`
      }`}
    >
      <div className={`${IntroSectionClassName}__inner`}>
        {/* ____________________________________________________________ */}
        {/* Column */}
        <div
          className={`${IntroSectionClassName}__col ${IntroSectionClassName}__col--focus`}
        >
          <div className={`${IntroSectionClassName}__media`}>
            <DuotoneImage
              src={"/img/headshot-2.png"}
              alt="Peter Laxalt"
              aspectRatio={1}
              addClass={`${IntroSectionClassName}__media__image`}
            />
          </div>
        </div>

        {/* ____________________________________________________________ */}
        {/* Column */}
        <div
          className={`${IntroSectionClassName}__col ${IntroSectionClassName}__col--content`}
        >
          <div className={`${IntroSectionClassName}__content`}>
            <div className={`${IntroSectionClassName}__content__media`}>
              <HeronIllustration />
            </div>
            <p
              className={`${IntroSectionClassName}__content__item ${IntroSectionClassName}__content__item--intro`}
            >
              <strong>Brooklyn, NYC</strong> — Peter Laxalt is a
              multidisciplinary director, strategist, designer, educator,
              artist, and creative technologist.
            </p>
            <p className={`${IntroSectionClassName}__content__item`}>
              He works with leading brands, sustainable businesses, impactful
              companies, passionate agencies, driven startups, and loving people
              all over the world. Somehow, he also finds time to pursue his
              various personal ventures, experiments, and lettering. Like what
              you're viewing now.
            </p>
            <p className={`${IntroSectionClassName}__content__item`}>
              Simply put, he believes good design doesn't involve one skill,
              vision, or experience, but rather a holistic understanding of many
              — possibly unrelated — disciplines, experiences, & visions.
            </p>
          </div>
        </div>
      </div>
    </IntroSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
