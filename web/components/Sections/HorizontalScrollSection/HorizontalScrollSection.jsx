// Core
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Components

// Styles
import {
  HorizontalScrollSectionClassName,
  HorizontalScrollSectionStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  transition: transform 0.5s ease-out;
  will-change: transform;
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;
    setTranslateX(offsetTop);
  });
};

export const HorizontalScrollSection = ({
  addClass = "",
  children,
  hasSidebar = false,
  forceFullWidth = false,
  style = {},
}) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <HorizontalScrollSectionStyle
      style={style}
      forceFullWidth={forceFullWidth}
      className={`${HorizontalScrollSectionClassName} ${HorizontalScrollSectionClassName}--${
        hasSidebar ? "has-sidebar" : ""
      } ${addClass && addClass}`}
    >
      <TallOuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <HorizontalSection>
              <ContentWrapper
                className={`${HorizontalScrollSectionClassName}__content-wrapper`}
              >
                {children}
              </ContentWrapper>
            </HorizontalSection>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </TallOuterContainer>
    </HorizontalScrollSectionStyle>
  );
};

// End Component
// ______________________________________________________________________________
