// Core
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  LXLT_Category,
  LXLT_Project,
  SiteProjects,
} from "../../../constants/site/Settings";
import { Theme } from "../../../constants/Theme";
import { isVisible, percentIsVisible } from "../../../utils/isVisible";

// Components

// Styles
import {
  ProjectScrollBlurOverlayStyles,
  ProjectScrollSectionClassName,
  ProjectScrollSectionGlobalStyles,
  ProjectScrollSectionStyle,
  ScrollCardClassName,
  ScrollCardStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectScrollSection = {
  addClass?: string;
};

export type LXLT_ScrollCard = {
  item: LXLT_Project;
  count?: number;
  total?: number;
};

declare global {
  interface Window {
    dharmaPaused: boolean;
  }
}

// Begin Component
// __________________________________________________________________________________________

let lastTranslateX: number = 0;

export const ScrollCard: React.FunctionComponent<LXLT_ScrollCard> = React.memo(
  ({ item, count, total }) => {
    let { cover } = item;
    const ScrollCardRef = useRef<HTMLDivElement>();
    const isCurrentlyVisible = isVisible(ScrollCardRef);

    return (
      <ScrollCardStyle
        ref={ScrollCardRef}
        className={`${ScrollCardClassName} ${ScrollCardClassName}--${
          isCurrentlyVisible ? `is-visible` : `is-not-visible`
        }`}
      >
        <span className={`${ScrollCardClassName}__bg`} />
        <span className={`${ScrollCardClassName}__dot ${ScrollCardClassName}__dot--right`} />
        <div className={`${ScrollCardClassName}__inner`}>
          {/* ____________________________________________________________________ */}
          {/* Card top */}
          <div
            className={`${ScrollCardClassName}__row ${ScrollCardClassName}__row--top`}
          >

            {/* ____________________________________________________________________ */}
            {/* Card top left col */}
            <div
              className={`${ScrollCardClassName}__col ${ScrollCardClassName}__col--top-left`}
            >
              <span className={`${ScrollCardClassName}__col__content-row`}>
                No {count} / {total}
              </span>
            </div>

            {/* ____________________________________________________________________ */}
            {/* Card top right col */}
            <div
              className={`${ScrollCardClassName}__col ${ScrollCardClassName}__col--top-right`}
            >
              <span className={`${ScrollCardClassName}__col__content-row`}>
                {item.duration && item.duration}
              </span>
            </div>
          </div>

          {/* ____________________________________________________________________ */}
          {/* Card center */}
          <div
            className={`${ScrollCardClassName}__row ${ScrollCardClassName}__row--center`}
          >
            <div className={`${ScrollCardClassName}__image-wrapper`}>
              <img
                className={`${ScrollCardClassName}__image ${ScrollCardClassName}__image--filtered`}
                src={cover}
              />
              <img
                className={`${ScrollCardClassName}__image ${ScrollCardClassName}__image--normal`}
                src={cover}
              />
            </div>
          </div>

          {/* ____________________________________________________________________ */}
          {/* Card bottom */}
          <div
            className={`${ScrollCardClassName}__row ${ScrollCardClassName}__row--bottom`}
          >
            {/* ____________________________________________________________________ */}
            {/* Card bottom left col */}
            <div
              className={`${ScrollCardClassName}__col ${ScrollCardClassName}__col--bottom-left`}
            >
              <strong
                className={`${ScrollCardClassName}__col__content-row ${ScrollCardClassName}__col__content-row--content-major`}
              >
                {item.name}
              </strong>
              <span
                className={`${ScrollCardClassName}__col__content-row ${ScrollCardClassName}__col__content-row--content-minor ${ScrollCardClassName}__col__content-row--tag-list`}
              >
                {item.categories.map((category: LXLT_Category, idx: number) => {
                  return (
                    <span key={idx}>
                      {category.name}{" "}
                      {idx + 1 !== item.categories.length ? "/" + " " : ""}
                    </span>
                  );
                })}
              </span>
            </div>

            {/* ____________________________________________________________________ */}
            {/* Card bottom right col */}
            <div
              className={`${ScrollCardClassName}__col ${ScrollCardClassName}__col--bottom-right`}
            >
              <span
                className={`${ScrollCardClassName}__col__content-row ${ScrollCardClassName}__col__content-row--content-major`}
              >
                {item.type}
              </span>
              <span
                className={`${ScrollCardClassName}__col__content-row ${ScrollCardClassName}__col__content-row--content-minor`}
              >
                {item.location}
              </span>
            </div>
          </div>
        </div>
      </ScrollCardStyle>
    );
  }
);

export const ProjectScrollSection: React.FunctionComponent<LXLT_ProjectScrollSection> = React.memo(
  ({ addClass = "" }) => {
    const [dynamicHeight, setDynamicHeight] = useState(null);
    // const [translateX, setTranslateX] = useState(0);
    // const [windowSize, setWindowSize] = useState(0);
    const [isBreakPoint, setBreakPoint] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const containerRef = useRef<HTMLDivElement>();
    const objectRef = useRef<HTMLDivElement>();

    let currentTranslation = 0;
    let boundingClientX = 0;

    const calcDynamicHeight = (objectWidth: number) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      return objectWidth - vw + vh;
    };

    const handleDynamicHeight = (
      ref: React.RefObject<HTMLDivElement>,
      setDynamicHeight: (dynamicHeight: number) => void
    ) => {
      const objectWidth: number = ref.current.scrollWidth;
      const dynamicHeight: number = calcDynamicHeight(objectWidth);
      setDynamicHeight(dynamicHeight);
    };

    const applyScrollListener = (
      ref: React.RefObject<HTMLDivElement>
      // setTranslateX: (translateX: number) => void
    ) => {
      window.addEventListener("scroll", () => {
        const offsetTop: number =
          ref && ref.current ? -ref.current.offsetTop : 0;

        // setDharmaPaused(offsetTop < windowSize / -2);
        // setTranslateX(offsetTop);

        gsap.to(objectRef.current, {
          x: offsetTop,
          transition: 0.1,
          // duration: 0.02,
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

        window.dharmaPaused = offsetTop < window.innerWidth / -2;
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

    return (
      <>
        {/* <ProjectScrollSectionGlobalStyles isScrolled={isBreakPoint} /> */}
        <ProjectScrollBlurOverlayStyles isBreakpoint={isBreakPoint} />
        <ProjectScrollSectionStyle
          className={`${ProjectScrollSectionClassName} ${ProjectScrollSectionClassName}--${
            isScrolled ? `is-scrolled` : `is-not-scrolled`
          } ${ProjectScrollSectionClassName}--${
            isBreakPoint ? `is-at-breakpoint` : `is-not-at-breakpoint`
          } ${ProjectScrollSectionClassName}--${
            boundingClientX > lastTranslateX ? `is-at-end` : `is-not-at-end`
          } ${addClass && addClass}`}
        >
          {/* ____________________________________________________________________ */}
          {/* Outer Container with Dynamic Height */}
          <div
            className={`${ProjectScrollSectionClassName}__outer`}
            style={{ height: `${dynamicHeight}px` }}
          >
            {/* ____________________________________________________________________ */}
            {/* Sticky Wrapper */}
            <div
              className={`${ProjectScrollSectionClassName}__sticky-wrapper`}
              ref={containerRef}
            >
              {/* ____________________________________________________________________ */}
              {/* Translation Wrapper */}
              <div
                className={`${ProjectScrollSectionClassName}__x-translate-wrapper`}
                // style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
                ref={objectRef}
              >
                {/* ____________________________________________________________________ */}
                {/* Horizontal Wrapper */}
                <div
                  className={`${ProjectScrollSectionClassName}__horizontal-wrapper`}
                >
                  {/* ____________________________________________________________________ */}
                  {/* Content Wrapper */}
                  <div
                    className={`${ProjectScrollSectionClassName}__content-wrapper`}
                  >
                    {SiteProjects.map((item: LXLT_Project, idx: number) => {
                      return (
                        <ScrollCard
                          key={idx}
                          count={idx + 1}
                          total={SiteProjects.length}
                          item={item}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProjectScrollSectionStyle>
      </>
    );
  }
);

// End Component
// ______________________________________________________________________________
