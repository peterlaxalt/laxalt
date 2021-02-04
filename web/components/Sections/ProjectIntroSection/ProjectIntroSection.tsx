// Core
import React, { useEffect, useRef, useState } from "react";

// Types
import { LXLT_Project } from "../../../constants/site/Settings";

// Vendor
import gsap from "gsap";

// Styles
import {
  ProjectIntroSectionClassName,
  ProjectIntroSectionColumnHeight,
  ProjectIntroSectionStyle,
} from "./styles.scss";
import { AfterHeadlineWrapper } from "../../HeadlineWrapper";
import Link from "next/link";
import Image from "next/image";
import { OvalButton } from "../../OvalButton";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectIntroSection = {
  addClass?: string;
  hasSidebar?: boolean;
  project: LXLT_Project;
};

// Begin Component
// __________________________________________________________________________________________

let lastTranslateX: number = 0;

export const ProjectIntroSection: React.FunctionComponent<LXLT_ProjectIntroSection> = React.memo(
  ({ addClass = "", hasSidebar = false, project }) => {
    // _____________________________
    // State
    const [dynamicHeight, setDynamicHeight] = useState(null);
    const [isBreakPoint, setBreakPoint] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    // _____________________________
    // Refs
    const containerRef = useRef<HTMLDivElement>();
    const objectRef = useRef<HTMLDivElement>();

    // _____________________________
    // Memory
    let boundingClientX = 0;

    // _____________________________
    // Functions
    const calcDynamicHeight = (objectWidth: number) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      return objectWidth - vw + vh;
    };

    const handleDynamicHeight = (
      ref: React.RefObject<HTMLDivElement>,
      setDynamicHeight: (dynamicHeight: number) => void
    ) => {
      if (ref && ref.current) {
        const objectWidth: number = ref.current.scrollWidth;
        const dynamicHeight: number = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
      }
    };

    const applyScrollListener = (ref: React.RefObject<HTMLDivElement>) => {
      window.addEventListener("scroll", () => {
        const offsetTop: number =
          ref && ref.current ? -ref.current.offsetTop : 0;

        gsap.to(objectRef.current, {
          x: offsetTop,
          transition: 0.1,
          ease: "sine.out",
        });

        if (offsetTop < window.innerWidth / -2) {
          setBreakPoint(true);
        } else {
          setBreakPoint(false);
        }

        if (offsetTop < -100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    };

    const resizeHandler = () => {
      handleDynamicHeight(objectRef, setDynamicHeight);
      // setWindowSize(window.innerWidth);
    };

    useEffect(() => {
      handleDynamicHeight(objectRef, setDynamicHeight);
      window.addEventListener("resize", resizeHandler);
      applyScrollListener(containerRef);
    }, []);

    // _____________________________
    // Let 'er rip
    return (
      <AfterHeadlineWrapper>
        <ProjectIntroSectionStyle
          className={`${ProjectIntroSectionClassName} ${ProjectIntroSectionClassName}--${
            isScrolled ? `is-scrolled` : `is-not-scrolled`
          } ${ProjectIntroSectionClassName}--${
            isBreakPoint ? `is-at-breakpoint` : `is-not-at-breakpoint`
          } ${ProjectIntroSectionClassName}--${
            boundingClientX > lastTranslateX ? `is-at-end` : `is-not-at-end`
          } ${ProjectIntroSectionClassName}--${
            hasSidebar ? "has-sidebar" : "has-no-sidebar"
          } ${addClass && addClass}`}
        >
          {/* ____________________________________________________________________ */}
          {/* Outer Container with Dynamic Height */}
          <div
            className={`${ProjectIntroSectionClassName}__outer`}
            style={{ height: `${dynamicHeight}px` }}
          >
            {/* ____________________________________________________________________ */}
            {/* Sticky Wrapper */}
            <div
              className={`${ProjectIntroSectionClassName}__sticky-wrapper`}
              ref={containerRef}
            >
              {/* ____________________________________________________________________ */}
              {/* Translation Wrapper */}
              <div
                className={`${ProjectIntroSectionClassName}__x-translate-wrapper`}
                // style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
                ref={objectRef}
              >
                {/* ____________________________________________________________________ */}
                {/* Horizontal Wrapper */}
                <div
                  className={`${ProjectIntroSectionClassName}__horizontal-wrapper`}
                >
                  {/* ____________________________________________________________________ */}
                  {/* Content Wrapper */}
                  <div
                    className={`${ProjectIntroSectionClassName}__content-wrapper`}
                  >
                    {/* ____________________________________________________________________ */}
                    {/* Intro Column */}
                    <div
                      className={`${ProjectIntroSectionClassName}__col ${ProjectIntroSectionClassName}__col--intro ${ProjectIntroSectionClassName}__intro-section`}
                    >
                      <div
                        className={`${ProjectIntroSectionClassName}__col__inner ${ProjectIntroSectionClassName}__intro-section__inner`}
                      >
                        {/* ____________________________________________ */}
                        {/* Top Section */}
                        <div
                          className={`${ProjectIntroSectionClassName}__intro-section__top`}
                        >
                          {/* ____________________________ */}
                          {/* Badge */}
                          {project.intro &&
                            project.intro.blurb &&
                            project.intro.blurb.badge && (
                              <div
                                className={`${ProjectIntroSectionClassName}__intro-section__top__badge`}
                              >
                                <project.intro.blurb.badge />
                              </div>
                            )}

                          {/* ____________________________ */}
                          {/* Headline */}
                          {project.intro &&
                            project.intro.blurb &&
                            project.intro.blurb.headline && (
                              <h2
                                className={`${ProjectIntroSectionClassName}__intro-section__top__headline`}
                              >
                                {project.intro.blurb.headline}
                              </h2>
                            )}

                          {/* ____________________________ */}
                          {/* Large Body */}
                          {project.intro &&
                            project.intro.blurb &&
                            project.intro.blurb.largeBody && (
                              <p
                                className={`${ProjectIntroSectionClassName}__intro-section__top__large-body`}
                              >
                                {project.intro.blurb.largeBody}
                              </p>
                            )}

                          {/* ____________________________ */}
                          {/* Body */}
                          {project.intro &&
                            project.intro.blurb &&
                            project.intro.blurb.body && (
                              <p
                                className={`${ProjectIntroSectionClassName}__intro-section__top__body`}
                              >
                                {project.intro.blurb.body}
                              </p>
                            )}

                          {/* ____________________________ */}
                          {/* CTA */}
                          {project.intro &&
                            project.intro.blurb &&
                            project.intro.blurb.cta && (
                              <div
                                className={`${ProjectIntroSectionClassName}__intro-section__top__cta`}
                              >
                                <OvalButton
                                  external={true}
                                  href={project.intro.blurb.cta.href}
                                  label={project.intro.blurb.cta.label}
                                />
                              </div>
                            )}
                        </div>

                        {/* ____________________________________________ */}
                        {/* Bottom Section */}
                        {project.meta && project.meta.team && (
                          <div
                            className={`${ProjectIntroSectionClassName}__intro-section__bottom`}
                          >
                            {/* ____________________________________ */}
                            {/* Title */}
                            <div
                              className={`${ProjectIntroSectionClassName}__intro-section__bottom__header`}
                            >
                              Team
                            </div>

                            {/* ____________________________________ */}
                            {/* List Items */}
                            <ul
                              className={`${ProjectIntroSectionClassName}__intro-section__bottom__list`}
                            >
                              {project.meta.team.core &&
                                project.meta.team.core.map(
                                  (person, idx: number) => {
                                    return (
                                      <li
                                        className={`${ProjectIntroSectionClassName}__intro-section__bottom__list__item`}
                                        key={idx}
                                      >
                                        <span
                                          className={`${ProjectIntroSectionClassName}__intro-section__bottom__list__item__label`}
                                        >
                                          {person.name}
                                        </span>
                                        <span
                                          className={`${ProjectIntroSectionClassName}__intro-section__bottom__list__item__subtext`}
                                        >
                                          {person.role}
                                        </span>
                                      </li>
                                    );
                                  }
                                )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ____________________________________________ */}
                    {/* Featured Images */}
                    {project.intro.featuredImages &&
                      project.intro.featuredImages.map((image, idx: number) => {
                        return (
                          <div
                            className={`${ProjectIntroSectionClassName}__col ${ProjectIntroSectionClassName}__col--image`}
                            key={idx}
                          >
                            <div
                              className={`${ProjectIntroSectionClassName}__col__inner`}
                              style={{
                                height: `${ProjectIntroSectionColumnHeight}`,
                                width: `calc(${ProjectIntroSectionColumnHeight} * ${
                                  image.dimensions.width /
                                  image.dimensions.height
                                })`,
                              }}
                            >
                              <Image
                                layout={`responsive`}
                                src={image.src}
                                width={image.dimensions.width}
                                height={image.dimensions.height}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProjectIntroSectionStyle>
      </AfterHeadlineWrapper>
    );
  }
);

// End Component
// ______________________________________________________________________________
