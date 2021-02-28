// Core
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Constants
import {
  LXLT_Category,
  LXLT_Project,
  __DEBUG__,
} from "../../../constants/site/Settings";

// Styles
import {
  ProjectHeroAlphaClassName,
  ProjectHeroAlphaGlobalStyles,
  ProjectHeroAlphaStyle,
} from "./styles.scss";
import { OvalButton } from "../../OvalButton";
import LazyImage from "../../../utils/lazyImage";
import { hexToRGBString } from "../../../utils/hexToRGB";
import { DuotoneImage } from "../../DuotoneImage";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectSection = {
  name: string;
  anchor: string;
};

export type LXLT_ProjectHeroAlpha = {
  addClass?: string;
  project: LXLT_Project;
  style?: React.CSSProperties;
  sections: LXLT_ProjectSection[];
};

// Begin Data
// __________________________________________________________________________________________

export const HeadlineTransitionThreshold = 200;

export const ProjectHeroAlpha: React.FunctionComponent<LXLT_ProjectHeroAlpha> = React.memo(
  ({ addClass, project, sections, style }) => {
    const [mobileDescriptionOpen, setMobileDescriptionOpen] = useState(false);

    return (
      <>
        <ProjectHeroAlphaGlobalStyles />
        <ProjectHeroAlphaStyle
          className={`${ProjectHeroAlphaClassName} ${addClass ? addClass : ""} `}
        >
          {/* _________________________________________ */}
          {/* Background */}
          {/* <div className={`${ProjectHeroAlphaClassName}__bg`}>
            <LazyImage
              addClass={`${ProjectHeroAlphaClassName}__bg__image ${ProjectHeroAlphaClassName}__bg__image--filtered`}
              src={project.cover}
              alt={project.name}
            />
            <LazyImage
              addClass={`${ProjectHeroAlphaClassName}__bg__image ${ProjectHeroAlphaClassName}__bg__image--normal`}
              src={project.cover}
              alt={project.name}
            />
          </div> */}

          {/* _________________________________________ */}
          {/* Headline */}
          <div className={`${ProjectHeroAlphaClassName}__title`}>
            <p className={`${ProjectHeroAlphaClassName}__title__date`}>
              <span className={`${ProjectHeroAlphaClassName}__title__date__highlight`}>
                <span>
                  <Link href={`/${project.parentSlug}`}>
                    <a>Laxalt</a>
                  </Link>
                  {" "}/{" "}
                  <Link href={`/${project.parentSlug}`}>
                    <a>{project.parentSlug}</a>
                  </Link>
                </span>
              </span>

              <span className={`${ProjectHeroAlphaClassName}__title__date__year`}>
                {project.duration.toLowerCase()}
              </span>

              <span>
                {project.location.toLowerCase()}
              </span>
            </p>
            <h1 className={`${ProjectHeroAlphaClassName}__title__el`}>
              {project.name.toLowerCase()}
            </h1>
            <p className={`${ProjectHeroAlphaClassName}__title__details`}>
              A collaboration with {project.partner.toLowerCase()}{project.agency && ` and agency partner ${project.agency.toLowerCase()}`}.
            </p>
          </div>

          {/* _________________________________________ */}
          {/* Cover */}
          <div className={`${ProjectHeroAlphaClassName}__cover`}>
            <DuotoneImage
              addClass={`${ProjectHeroAlphaClassName}__cover__image`}
              src={project.cover}
              alt={project.name}
              aspectRatio={1}
            />
          </div>

          {/* _________________________________________ */}
          {/* Detail Line */}
          <div className={`${ProjectHeroAlphaClassName}__detail-top`}>
            <ul className={`${ProjectHeroAlphaClassName}__detail-top__list`}>
              {project.categories.map(
                (category: LXLT_Category, idx: number) => {
                  return (
                    <li
                      className={`${ProjectHeroAlphaClassName}__detail-top__list__item`}
                      key={idx}
                    >
                      <Link href={`/${project.parentSlug}/${category.slug}`}>
                        <a>{category.name}</a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* _________________________________________ */}
          {/* Section Navigation */}
          <div className={`${ProjectHeroAlphaClassName}__section-nav`}>
            <ul className={`${ProjectHeroAlphaClassName}__section-nav__list`}>
              {/* ________________________________________________ */}
              {/* Mobile Description */}
              {project.intro && project.intro.blurb && (
                <li
                  className={`${ProjectHeroAlphaClassName}__section-nav__list__item ${ProjectHeroAlphaClassName}__section-nav__list__item--${
                    mobileDescriptionOpen ? "is-expanded" : "is-not-expanded"
                  } ${ProjectHeroAlphaClassName}__section-nav__list__item--mobile-description`}
                >
                  {/* ____________________________ */}
                  {/* Toggle */}
                  <span
                    className={`${ProjectHeroAlphaClassName}__section-nav__list__item__inner`}
                    onClick={() =>
                      mobileDescriptionOpen
                        ? setMobileDescriptionOpen(false)
                        : setMobileDescriptionOpen(true)
                    }
                    role="button"
                    aria-expanded={mobileDescriptionOpen ? true : false}
                  >
                    <span
                      className={`${ProjectHeroAlphaClassName}__section-nav__list__item__count`}
                    >
                      {mobileDescriptionOpen ? (
                        <span className="__visually-hidden">Close</span>
                      ) : (
                        <span className="__visually-hidden">Open</span>
                      )}
                    </span>
                    <span
                      className={`${ProjectHeroAlphaClassName}__section-nav__list__item__label`}
                    >
                      Description
                    </span>
                  </span>

                  {/* ____________________________ */}
                  {/* Content */}
                  {mobileDescriptionOpen && (
                    <span
                      className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content`}
                    >
                      {/* ___________________________ */}
                      {/* Top */}
                      <span
                        className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__top`}
                      >
                        {project.intro.blurb.headline && (
                          <span
                            className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__headline`}
                          >
                            <span>
                              {project.intro.blurb.headline}
                            </span>
                          </span>
                        )}

                        {project.intro.blurb.largeBody && (
                          <span
                            className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__large-body`}
                          >
                            {project.intro.blurb.largeBody}
                          </span>
                        )}

                        {project.intro.blurb.body && (
                          <span
                            className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__body`}
                          >
                            {project.intro.blurb.body}
                          </span>
                        )}

                        {project.intro.blurb.cta && (
                          <span
                            className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__cta`}
                          >
                            <OvalButton
                              label={project.intro.blurb.cta.label}
                              href={project.intro.blurb.cta.href}
                              external={true}
                            />
                          </span>
                        )}
                      </span>

                      {/* ____________________________________________ */}
                      {/* Bottom Section */}
                      {project.meta && project.meta.team && (
                        <span
                          className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__bottom`}
                        >
                          {/* ____________________________________ */}
                          {/* Title */}
                          <span
                            className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__bottom__header`}
                          >
                            Team
                          </span>

                          {/* ____________________________________ */}
                          {/* List Items */}
                          <span
                            className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__bottom__list`}
                          >
                            {project.meta.team.core &&
                              project.meta.team.core.map(
                                (person, idx: number) => {
                                  return (
                                    <span
                                      className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__bottom__list__item`}
                                      key={idx}
                                    >
                                      <span
                                        className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__bottom__list__item__label`}
                                      >
                                        {person.name}
                                      </span>
                                      <span
                                        className={`${ProjectHeroAlphaClassName}__section-nav__list__item__content__bottom__list__item__subtext`}
                                      >
                                        {person.role}
                                      </span>
                                    </span>
                                  );
                                }
                              )}
                          </span>
                        </span>
                      )}
                    </span>
                  )}
                </li>
              )}

              {/* _______________________________________ */}
              {/* Section Navigation */}
              {sections &&
                sections.map((section: LXLT_ProjectSection, idx: number) => {
                  return (
                    <li
                      className={`${ProjectHeroAlphaClassName}__section-nav__list__item`}
                      key={idx}
                    >
                      <span
                        className={`${ProjectHeroAlphaClassName}__section-nav__list__item__inner`}
                      >
                        <span
                          className={`${ProjectHeroAlphaClassName}__section-nav__list__item__count`}
                        >
                          {idx + 1 < 10 ? 0 : null}
                          {idx + 1}
                        </span>
                        <span
                          className={`${ProjectHeroAlphaClassName}__section-nav__list__item__label`}
                        >
                          {section.name}
                        </span>
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </ProjectHeroAlphaStyle>
      </>
    );
  }
);
