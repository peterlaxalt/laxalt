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
import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

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
const HomePage: NextPage<LMNTS_LocationsFrontPage> = () => (
  <div className={`${HomePageClassName}`}>
    <WaterDistortWithCanvasTexturePage />
  </div>
);

export default HomePage;
