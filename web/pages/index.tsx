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
import { HomePage } from "../components/Templates/HomePage";

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
const FrontPage: NextPage<LMNTS_LocationsFrontPage> = () => {
  return (
    <div className={`${HomePageClassName}`}>
      <HomePage />
    </div>
  );
};

export default FrontPage;
