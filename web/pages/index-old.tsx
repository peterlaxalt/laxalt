/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */

// Core
import React from "react";

// Components
import { InnerGrid } from "../components/InnerGrid/";
import { Listings } from "../components/Listings/";

// Begin Component
//////////////////////////////////////////////////////////////////////

export default () => (
  <InnerGrid>
    <Listings />
  </InnerGrid>
);
