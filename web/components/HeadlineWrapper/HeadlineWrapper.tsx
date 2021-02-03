// Core
import React, { useEffect, useState } from "react";

// Constants
import { __DEBUG__ } from "../../constants/site/Settings";

// Components

// Styles
import { HeadlineWrapperClassName, HeadlineWrapperStyle } from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_HeadlineWrapper = {
  addClass?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

// Begin Data
// __________________________________________________________________________________________

export const HeadlineTransitionThreshold = 200;

export const HeadlineWrapper: React.FunctionComponent<LXLT_HeadlineWrapper> = ({
  addClass,
  children,
  style,
}) => {
  const [isScrolled, toggleScroll] = useState(false);

  let scrollModifier = `${HeadlineWrapperClassName}--${
    isScrolled ? `is-scrolled` : `is-not-scrolled`
  }`;

  const listenToScroll = () => {
    if (window.scrollY > HeadlineTransitionThreshold) {
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
    }
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  return (
    <HeadlineWrapperStyle
      className={`${HeadlineWrapperClassName} ${scrollModifier} ${
        addClass && addClass
      } `}
      style={{ ...style }}
    >
      {children}
    </HeadlineWrapperStyle>
  );
};

export const AfterHeadlineWrapper: React.FunctionComponent<LXLT_HeadlineWrapper> = ({
  addClass,
  children,
  style,
}) => {
  const [isScrolled, toggleScroll] = useState(false);

  let scrollModifier = `${HeadlineWrapperClassName}__after--${
    isScrolled ? `is-scrolled` : `is-not-scrolled`
  }`;

  const listenToScroll = () => {
    if (window.scrollY > HeadlineTransitionThreshold) {
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
    }
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  return (
    <HeadlineWrapperStyle
      className={`${HeadlineWrapperClassName}__after ${scrollModifier} ${
        addClass && addClass
      } `}
      style={{ ...style }}
    >
      {children}
    </HeadlineWrapperStyle>
  );
};

// End Component
// ______________________________________________________________________________
