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
import { HomePageFeed } from "../components/Templates/HomePageFeed";

// Components
// import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const HomePageFeedClassName = "route__home-page";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const FrontPage: NextPage<LMNTS_LocationsFrontPage> = () => {
  return (
    <div className={`${HomePageFeedClassName}`}>
      <HomePageFeed />
    </div>
  );
};

export default FrontPage;
