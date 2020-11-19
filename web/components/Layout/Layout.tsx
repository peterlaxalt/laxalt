/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 *
 */

// Constants
import React from "react";
import { GlobalStyle } from "../../constants/styles/Global";
import { GrainCover } from "../GrainCover";

// Components
import { SiteHead } from "../SiteHead";
import { ThemePicker } from "../ThemePicker";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Layout {
  children?: any;
  title?: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

// Layout

export const Layout = ({ children }: Layout) => (
  <>
    <GlobalStyle />
    <SiteHead title="LAXALT" />
    <GrainCover />
    <ThemePicker />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);
