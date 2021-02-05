// Core
import React, { useEffect, useState } from "react";

// Constants
import { __DEBUG__ } from "../../constants/site/Settings";

// Components

// Styles
import {
  SvgHeadlineDisplayClassName,
  SvgHeadlineDisplayStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_SvgHeadlineDisplay = {
  addClass?: string;
  svgElement: () => JSX.Element;
  style?: React.CSSProperties;
};

// Begin Data
// __________________________________________________________________________________________

export const SvgHeadlineDisplay: React.FunctionComponent<LXLT_SvgHeadlineDisplay> = ({
  addClass,
  svgElement,
  style,
}) => {

  const ElementToDisplay = svgElement;

  return (
    <SvgHeadlineDisplayStyle
      className={`${SvgHeadlineDisplayClassName} ${addClass && addClass} `}
      style={{ ...style }}
    >
      <ElementToDisplay />
    </SvgHeadlineDisplayStyle>
  );
};
