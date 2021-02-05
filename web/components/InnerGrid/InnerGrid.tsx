/**
 *
 * Navigation.js
 * @author Peter Laxalt
 * @description The website Navigation.
 *
 */

// Core
import React from "react";

// Styles
import { InnerGridClassName, InnerGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const InnerGrid = ({ children }: any) => (
  <InnerGridStyle className={InnerGridClassName}>{children}</InnerGridStyle>
);

// End Component
//////////////////////////////////////////////////////////////////////
