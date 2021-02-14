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
  ProjectHeroClassName,
  ProjectHeroGlobalStyles,
  ProjectHeroStyle,
} from "./styles.scss";
import { OvalButton } from "../../OvalButton";
import LazyImage from "../../../utils/lazyImage";
import { hexToRGBString } from "../../../utils/hexToRGB";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectSection = {
  name: string;
  anchor: string;
};

export type LXLT_ProjectHero = {
  addClass?: string;
  project: LXLT_Project;
  style?: React.CSSProperties;
  sections: LXLT_ProjectSection[];
};

// Begin Data
// __________________________________________________________________________________________

export const HeadlineTransitionThreshold = 200;

export const ProjectHero: React.FunctionComponent<LXLT_ProjectHero> = React.memo(
  ({ addClass, project, sections, style }) => {
    const [mobileDescriptionOpen, setMobileDescriptionOpen] = useState(false);
    const [isScrolled, toggleScroll] = useState(false);

    let heroRef = useRef<HTMLDivElement>();

    const listenToScroll = () => {
      if (window.scrollY > 10) {
        toggleScroll(true);

        return;
      } else {
        toggleScroll(false);

        return;
      }
    };

    useEffect(() => {
      if (typeof window) {
        window.addEventListener("scroll", listenToScroll);

        heroRef.current.setAttribute(
          "style",
          `--${ProjectHeroClassName}__bg--rgb: ${hexToRGBString(
            window.laxaltUniversalTheme.background
          )}`
        );
      }
      return () => {
        window.removeEventListener("scroll", listenToScroll);
      };
    }, []);

    return (
      <>
        <ProjectHeroGlobalStyles />
        <ProjectHeroStyle
          className={`${ProjectHeroClassName} ${ProjectHeroClassName}--is-${
            isScrolled ? "scrolled" : "not-scrolled"
          }  ${addClass ? addClass : ""} `}
          ref={heroRef}
        >
          {/* _________________________________________ */}
          {/* Background */}
          <div className={`${ProjectHeroClassName}__bg`}>
            <LazyImage
              addClass={`${ProjectHeroClassName}__bg__image ${ProjectHeroClassName}__bg__image--filtered`}
              src={project.cover}
              alt={project.name}
            />
            <LazyImage
              addClass={`${ProjectHeroClassName}__bg__image ${ProjectHeroClassName}__bg__image--normal`}
              src={project.cover}
              alt={project.name}
            />
          </div>

          {/* _________________________________________ */}
          {/* Headline */}
          <div className={`${ProjectHeroClassName}__title`}>
            <h1 className={`${ProjectHeroClassName}__title__el`}>
              {project.name}
            </h1>
          </div>

          {/* _________________________________________ */}
          {/* Top Detail Line */}
          <div className={`${ProjectHeroClassName}__detail-top`}>
            <ul className={`${ProjectHeroClassName}__detail-top__list`}>
              <li
                className={`${ProjectHeroClassName}__detail-top__list__item ${ProjectHeroClassName}__detail-top__list__item--label`}
              >
                <Link href={`/${project.parentSlug}`}>
                  <a>{project.parentSlug}</a>
                </Link>
              </li>

              {project.categories.map(
                (category: LXLT_Category, idx: number) => {
                  return (
                    <li
                      className={`${ProjectHeroClassName}__detail-top__list__item`}
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
          {/* Stacked Detail Line */}
          <div className={`${ProjectHeroClassName}__detail-stacked`}>
            <ul className={`${ProjectHeroClassName}__detail-stacked__list`}>
              {project.location && (
                <li
                  className={`${ProjectHeroClassName}__detail-stacked__list__item`}
                >
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__label`}
                  >
                    Where
                  </span>
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__value`}
                  >
                    {project.location}
                  </span>
                </li>
              )}
              {project.duration && (
                <li
                  className={`${ProjectHeroClassName}__detail-stacked__list__item`}
                >
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__label`}
                  >
                    Year
                  </span>
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__value`}
                  >
                    {project.duration}
                  </span>
                </li>
              )}
              {project.agency && (
                <li
                  className={`${ProjectHeroClassName}__detail-stacked__list__item`}
                >
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__label`}
                  >
                    Agency
                  </span>
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__value`}
                  >
                    {project.agency}
                  </span>
                </li>
              )}
              {project.partner && (
                <li
                  className={`${ProjectHeroClassName}__detail-stacked__list__item`}
                >
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__label`}
                  >
                    Partner
                  </span>
                  <span
                    className={`${ProjectHeroClassName}__detail-stacked__list__item__value`}
                  >
                    {project.partner}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* _________________________________________ */}
          {/* Section Navigation */}
          <div className={`${ProjectHeroClassName}__section-nav`}>
            <ul className={`${ProjectHeroClassName}__section-nav__list`}>
              {/* ________________________________________________ */}
              {/* Mobile Description */}
              {project.intro && project.intro.blurb && (
                <li
                  className={`${ProjectHeroClassName}__section-nav__list__item ${ProjectHeroClassName}__section-nav__list__item--${
                    mobileDescriptionOpen ? "is-expanded" : "is-not-expanded"
                  } ${ProjectHeroClassName}__section-nav__list__item--mobile-description`}
                >
                  {/* ____________________________ */}
                  {/* Toggle */}
                  <span
                    className={`${ProjectHeroClassName}__section-nav__list__item__inner`}
                    onClick={() =>
                      mobileDescriptionOpen
                        ? setMobileDescriptionOpen(false)
                        : setMobileDescriptionOpen(true)
                    }
                    role="button"
                    aria-expanded={mobileDescriptionOpen ? true : false}
                  >
                    <span
                      className={`${ProjectHeroClassName}__section-nav__list__item__count`}
                    >
                      {mobileDescriptionOpen ? (
                        <span className="__visually-hidden">Close</span>
                      ) : (
                        <span className="__visually-hidden">Open</span>
                      )}
                    </span>
                    <span
                      className={`${ProjectHeroClassName}__section-nav__list__item__label`}
                    >
                      Description
                    </span>
                  </span>

                  {/* ____________________________ */}
                  {/* Content */}
                  {mobileDescriptionOpen && (
                    <span
                      className={`${ProjectHeroClassName}__section-nav__list__item__content`}
                    >
                      {/* ___________________________ */}
                      {/* Top */}
                      <span
                        className={`${ProjectHeroClassName}__section-nav__list__item__content__top`}
                      >
                        {project.intro.blurb.headline && (
                          <span
                            className={`${ProjectHeroClassName}__section-nav__list__item__content__headline`}
                          >
                            {project.intro.blurb.headline}
                          </span>
                        )}

                        {project.intro.blurb.largeBody && (
                          <span
                            className={`${ProjectHeroClassName}__section-nav__list__item__content__large-body`}
                          >
                            {project.intro.blurb.largeBody}
                          </span>
                        )}

                        {project.intro.blurb.body && (
                          <span
                            className={`${ProjectHeroClassName}__section-nav__list__item__content__body`}
                          >
                            {project.intro.blurb.body}
                          </span>
                        )}

                        {project.intro.blurb.cta && (
                          <span
                            className={`${ProjectHeroClassName}__section-nav__list__item__content__cta`}
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
                          className={`${ProjectHeroClassName}__section-nav__list__item__content__bottom`}
                        >
                          {/* ____________________________________ */}
                          {/* Title */}
                          <span
                            className={`${ProjectHeroClassName}__section-nav__list__item__content__bottom__header`}
                          >
                            Team
                          </span>

                          {/* ____________________________________ */}
                          {/* List Items */}
                          <span
                            className={`${ProjectHeroClassName}__section-nav__list__item__content__bottom__list`}
                          >
                            {project.meta.team.core &&
                              project.meta.team.core.map(
                                (person, idx: number) => {
                                  return (
                                    <span
                                      className={`${ProjectHeroClassName}__section-nav__list__item__content__bottom__list__item`}
                                      key={idx}
                                    >
                                      <span
                                        className={`${ProjectHeroClassName}__section-nav__list__item__content__bottom__list__item__label`}
                                      >
                                        {person.name}
                                      </span>
                                      <span
                                        className={`${ProjectHeroClassName}__section-nav__list__item__content__bottom__list__item__subtext`}
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
                      className={`${ProjectHeroClassName}__section-nav__list__item`}
                      key={idx}
                    >
                      <span
                        className={`${ProjectHeroClassName}__section-nav__list__item__inner`}
                      >
                        <span
                          className={`${ProjectHeroClassName}__section-nav__list__item__count`}
                        >
                          {idx + 1 < 10 ? 0 : null}
                          {idx + 1}
                        </span>
                        <span
                          className={`${ProjectHeroClassName}__section-nav__list__item__label`}
                        >
                          {section.name}
                        </span>
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </ProjectHeroStyle>
      </>
    );
  }
);
