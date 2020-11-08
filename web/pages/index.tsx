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
import { InteractiveFrameHeader } from "../components/_interactive/InteractiveFrameHeader";

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
    <InteractiveFrameHeader />
  </div>
);

export default HomePage;
