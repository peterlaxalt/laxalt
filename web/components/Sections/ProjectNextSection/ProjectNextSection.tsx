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
  ProjectNextSectionClassName,
  ProjectNextSectionStyle,
} from "./styles.scss";
import Link from "next/link";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectNextSection = {
  addClass?: string;
  project: LXLT_Project;
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

export const ProjectNextSection: React.FunctionComponent<LXLT_ProjectNextSection> = React.memo(
  ({ addClass = "", project }) => {
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
      if (ref && ref.current) {
        const objectWidth: number = ref.current.scrollWidth;
        const dynamicHeight: number = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
      }
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
        <ProjectNextSectionStyle
          className={`${ProjectNextSectionClassName} ${ProjectNextSectionClassName}--${
            isScrolled ? `is-scrolled` : `is-not-scrolled`
          } ${ProjectNextSectionClassName}--${
            isBreakPoint ? `is-at-breakpoint` : `is-not-at-breakpoint`
          } ${ProjectNextSectionClassName}--${
            boundingClientX > lastTranslateX ? `is-at-end` : `is-not-at-end`
          } ${addClass && addClass}`}
        >
          {/* ____________________________________________________________________ */}
          {/* Outer Container with Dynamic Height */}
          <div
            className={`${ProjectNextSectionClassName}__outer`}
            style={{ height: `${dynamicHeight}px` }}
          >
            {/* ____________________________________________________________________ */}
            {/* Sticky Wrapper */}
            <div
              className={`${ProjectNextSectionClassName}__sticky-wrapper`}
              ref={containerRef}
            >
              {/* ____________________________________________________________________ */}
              {/* Headline */}
              <div
                className={`${ProjectNextSectionClassName}__headline ${ProjectNextSectionClassName}__headline--next `}
              >
                Up Next
              </div>

              <div
                className={`${ProjectNextSectionClassName}__headline ${ProjectNextSectionClassName}__headline--keep-browsing `}
              >
                <span>IN</span>
                <Link href={`/${project.parentSlug}`}>
                  <a>{project.parentSlug}</a>
                </Link>
              </div>

              {/* ____________________________________________________________________ */}
              {/* Translation Wrapper */}
              <div
                className={`${ProjectNextSectionClassName}__x-translate-wrapper`}
                // style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
                ref={objectRef}
              >
                {/* ____________________________________________________________________ */}
                {/* Horizontal Wrapper */}
                <div
                  className={`${ProjectNextSectionClassName}__horizontal-wrapper`}
                >
                  {/* ____________________________________________________________________ */}
                  {/* Content Wrapper */}
                  <div
                    className={`${ProjectNextSectionClassName}__content-wrapper`}
                  >
                    {SiteProjects.map((item: LXLT_Project, idx: number) => {
                      if (item.slug !== project.slug) {
                        return (
                          <ProjectCard
                            key={idx}
                            count={idx + 1}
                            total={SiteProjects.length}
                            item={item}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProjectNextSectionStyle>
      </>
    );
  }
);

// End Component
// ______________________________________________________________________________
