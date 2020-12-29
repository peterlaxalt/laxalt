// Core
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  LXLT_Category,
  LXLT_Project,
  SiteProjects,
} from "../../../constants/site/Settings";
import { Theme } from "../../../constants/Theme";

// Components

// Styles
import {
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

// Begin Component
// __________________________________________________________________________________________

let lastTranslateX: number = 0;

export const ScrollCard: React.FunctionComponent<LXLT_ScrollCard> = ({
  item,
  count,
  total,
}) => {
  let { cover } = item;

  return (
    <ScrollCardStyle className={`${ScrollCardClassName}`}>
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
            No {count} / {total}
          </div>

          {/* ____________________________________________________________________ */}
          {/* Card top right col */}
          <div
            className={`${ScrollCardClassName}__col ${ScrollCardClassName}__col--top-right`}
          >
            {item.duration && item.duration}
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
};

export const ProjectScrollSection: React.FunctionComponent<LXLT_ProjectScrollSection> = ({
  addClass = "",
}) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = React.useRef<HTMLDivElement>();
  const objectRef = React.useRef<HTMLDivElement>();

  const calcDynamicHeight = (objectWidth: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 300;
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
    ref: React.RefObject<HTMLDivElement>,
    setTranslateX: (translateX: number) => void
  ) => {
    window.addEventListener("scroll", () => {
      const offsetTop: number = ref && ref.current ? -ref.current.offsetTop : 0;

      setTranslateX(offsetTop);
    });
  };

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);


  return (
    <>
      <ProjectScrollSectionGlobalStyles isScrolled={translateX < -10} />
      <ProjectScrollSectionStyle
        className={`${ProjectScrollSectionClassName} ${ProjectScrollSectionClassName}--${
          translateX < -10 ? `is-scrolled` : `is-not-scrolled`
        } ${ProjectScrollSectionClassName}--${
          translateX > lastTranslateX ? `is-at-end` : `is-not-at-end`
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
              style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
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
};

// End Component
// ______________________________________________________________________________
