// Core
import React, { useEffect, useRef, useState } from "react";

// Types
import { LXLT_Project, SiteProjects } from "../../../constants/site/Settings";

// Vendor
import gsap from "gsap";

// Components
import { ProjectCard } from "../../ProjectCard";

// Styles
import {
  ProjectScrollBlurOverlayStyles,
  ProjectScrollSectionClassName,
  ProjectScrollSectionStyle,
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
                        <ProjectCard
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
