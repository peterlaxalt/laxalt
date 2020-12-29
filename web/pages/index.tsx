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

// Components
import { ProjectScrollSection } from "../components/Sections/ProjectScrollSection";
import NoWaterDistortCanvas from "./projects/no-distort-with-canvas";

// Components
// import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const HomePageClassName = "route__home-page";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const HomePage: NextPage<LMNTS_LocationsFrontPage> = () => {
  return (
    <div className={`${HomePageClassName}`}>
      <div>
        <div style={{ position: "sticky", top: "0", height: 0 }}>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
            }}
          >
            <NoWaterDistortCanvas />
          </div>
        </div>

        <ProjectScrollSection />
      </div>
    </div>
  );
};

export default HomePage;
