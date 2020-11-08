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
import { InnerGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const InnerGrid = ({ children }: any) => (
  <InnerGridStyle>{children}</InnerGridStyle>
);

// End Component
//////////////////////////////////////////////////////////////////////
