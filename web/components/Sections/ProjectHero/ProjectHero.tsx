// Core
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";

// Constants
import {
  LXLT_Category,
  LXLT_Project,
  __DEBUG__,
} from "../../../constants/site/Settings";

// Types
import { MarqueeRow } from "../MarqueeRow";

// Components
import { HeadlineWrapper } from "../../HeadlineWrapper";

// Styles
import { ProjectHeroClassName, ProjectHeroStyle } from "./styles.scss";

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

export const ProjectHero: React.FunctionComponent<LXLT_ProjectHero> = ({
  addClass,
  project,
  sections,
  style,
}) => {
  return (
    <HeadlineWrapper>
      <ProjectHeroStyle
        className={`${ProjectHeroClassName} ${addClass && addClass} `}
        style={{ ...style }}
      >
        {/* _________________________________________ */}
        {/* Headline */}
        <MarqueeRow hasSidebar={true} strings={[project.name]} />

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

            {project.categories.map((category: LXLT_Category, idx: number) => {
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
            })}
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
                  Location
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
                  Duration
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
    </HeadlineWrapper>
  );
};
