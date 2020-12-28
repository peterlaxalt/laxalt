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

export const ThoughtsPageClassName = "route__thoughts";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const ThoughtsPage: NextPage<LMNTS_LocationsFrontPage> = () => {
  return (
    <SimpleContentTemplate addClass={`${ThoughtsPageClassName}`}>
      <MarqueeRow
        hasSidebar={false}
        style={{ marginTop: CssFrameSizeWithBorderString }}
        strings={["THIS", "THAT", "THOSE"]}
      />

      <p
        style={{
          maxWidth: 650,
          fontFamily: `${Theme.Font.Code}`,
          fontSize: "1.5rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        <strong>APRIL 20 — </strong>Nunc fringilla leo vel ligula porttitor
        posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus,
        libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus
        lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut
        maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim
        sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit
        ullamcorper, elit ante tempus turpis, non consectetur orci diam eu
        lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam fermentum
        libero, a ullamcorper massa velit non dolor. Maecenas eget pellentesque
        lacus. Sed ac lectus quis tellus euismod pharetra. Vivamus pretium
        gravida urna a posuere.
      </p>

      <p
        style={{
          maxWidth: 650,
          fontSize: "1.05rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae
        bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam
        euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam.
        Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean
        nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris
        dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non
        consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis
        pharetra, quam diam fermentum libero, a ullamcorper massa velit non
        dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus
        euismod pharetra. Vivamus pretium gravida urna a posuere.
      </p>

      <p
        style={{
          maxWidth: 650,
          fontSize: "1.05rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae
        bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam
        euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam.
        Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean
        nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris
        dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non
        consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis
        pharetra, quam diam fermentum libero, a ullamcorper massa velit non
        dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus
        euismod pharetra. Vivamus pretium gravida urna a posuere.
      </p>

      <p
        style={{
          maxWidth: 650,
          fontSize: "1.05rem",
          margin: "20px 0px 20px 0px",
        }}
      >
        Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae
        bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam
        euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam.
        Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean
        nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris
        dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non
        consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis
        pharetra, quam diam fermentum libero, a ullamcorper massa velit non
        dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus
        euismod pharetra. Vivamus pretium gravida urna a posuere.
      </p>
    </SimpleContentTemplate>
  );
};

export default ThoughtsPage;
