/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 *
 */

// Constants
import React, { useContext } from "react";
import { GlobalStyle } from "../../constants/styles/Global";
import { GrainCover } from "../GrainCover";

// Components
import { SiteHead } from "../SiteHead";
import { FilterFrameHeader } from "../FilterFrameHeader";
import { Footer } from "../Footer";
import { CanvasCursor } from "../CanvasCursor";

// Utils
import { NextRouter, useRouter } from "next/router";
import { ColorContext } from "../../constants/styles/Color";
import { createGlobalStyle } from "styled-components";
import { CssUtils } from "../../constants/styles/CssUtils";
import { ColorThemes } from "../ThemePicker";
import { Cursor } from "../Cursor";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Layout {
  children?: any;
  title?: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

// Layout

export const Layout = ({ children }: Layout) => {
  const router: NextRouter = useRouter();

  const contextualTheme = useContext(ColorContext);

  const SetGlobalTheme = createGlobalStyle`
      ${
        contextualTheme
          ? CssUtils.CreateTheme(
              contextualTheme.primary,
              contextualTheme.secondary,
              contextualTheme.background,
              contextualTheme.foreground
            )
          : ""
      }
    `;

  

  return (
    <>
      <GlobalStyle />
      <SetGlobalTheme />
      <SiteHead title="LAXALT" />
      <GrainCover />
      <FilterFrameHeader router={router} />
      <main>{children}</main>
      <Footer router={router} />
      {/* <CanvasCursor /> */}
      {/* <Cursor /> */}
    </>
  );
};
