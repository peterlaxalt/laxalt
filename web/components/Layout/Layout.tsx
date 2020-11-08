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

// Components
import { SiteHead } from "../SiteHead";

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
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);
