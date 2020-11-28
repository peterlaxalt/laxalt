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
import { Root } from "../constants/Root";

// Components
import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const SamplePageClassName = "route__home-page";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const SamplePage: NextPage<LMNTS_LocationsFrontPage> = () => {



  return (
    <div className={`${SamplePageClassName}`} style={{ minHeight: "200vh" }}>
      <div
        style={{
          paddingBottom: "30vh",
          paddingLeft: 450,
          marginTop: Root.FrameSize,
          position: "relative",
          zIndex: 500,
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "10vw",
            marginTop: 0,
            paddingTop: 0,
            lineHeight: 1,
            fontFamily: "hobo std",
          }}
        >
          SOMETHING
        </h1>
        <h1
          style={{
            fontSize: "10vw",
            marginTop: 0,
            paddingTop: 0,
            lineHeight: 1,
            fontFamily: "hobo std",
          }}
        >
          SOMEWHERE
        </h1>

        <p
          style={{
            maxWidth: 650,
            fontFamily: "monospace",
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
          lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam
          fermentum libero, a ullamcorper massa velit non dolor. Maecenas eget
          pellentesque lacus. Sed ac lectus quis tellus euismod pharetra.
          Vivamus pretium gravida urna a posuere.
        </p>

        <p
          style={{
            maxWidth: 650,
            fontSize: "1.05rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam
          vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus,
          quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit
          amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu
          nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia
          neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante
          tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo
          tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper
          massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus
          quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.
        </p>

        <p
          style={{
            maxWidth: 650,
            fontSize: "1.05rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam
          vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus,
          quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit
          amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu
          nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia
          neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante
          tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo
          tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper
          massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus
          quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.
        </p>

        <p
          style={{
            maxWidth: 650,
            fontSize: "1.05rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam
          vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus,
          quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit
          amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu
          nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia
          neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante
          tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo
          tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper
          massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus
          quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.
        </p>
      </div>
    </div>
  );
};

export default SamplePage;
