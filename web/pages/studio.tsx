/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */

// Core
import { NextPage } from "next";
import React from "react";
import { LXLT_SidebarPane } from "../components/LayeredSidebar";
import { CssFrameSizeWithBorderString } from "../components/MellowFrameHeader/styles.scss";
import { MarqueeRow } from "../components/Sections/MarqueeRow";
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";

// Components
import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const StudioPageClassName = "route__studio";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const StudioPage: NextPage<LMNTS_LocationsFrontPage> = () => {
  return (
    <SimpleContentTemplate addClass={`${StudioPageClassName}`}>
      <MarqueeRow
        hasSidebar={false}
        style={{ marginTop: CssFrameSizeWithBorderString }}
        strings={["STUDIO LAXALT"]}
      />

      <p
        style={{
          maxWidth: 650,
          fontFamily: `${Theme.Font.Code}`,
          fontSize: "1.5rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        <strong>BROOKLYN, NYC — </strong>Studio Laxalt is the personal studio of
        Peter Francis Laxalt. It serves as the private archives & knowledge-base
        of Peter Francis Laxalt. Peter is a multidisciplinary director,
        strategist, designer, artist, and creative technologist based in
        Brooklyn, NY. He works with leading brands, companies, businesses,
        agencies, startups, and people all over the world and also finds time to
        pursue his various personal ventures and experiments.
      </p>

    </SimpleContentTemplate>
  );
};

export default StudioPage;
