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
import { MellowFrameHeader } from "../MellowFrameHeader";

// Utils
import { NextRouter, useRouter } from "next/router";
import { Footer } from "../Footer";
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

  return (
    <>
      <GlobalStyle />
      <SiteHead title="LAXALT" />
      <GrainCover />
      <MellowFrameHeader router={router} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
