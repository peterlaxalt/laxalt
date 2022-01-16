// Core
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

// Types
import { LXLT_SidebarPane } from "../components/LayeredSidebar";
import { LXLT_Category, SiteArtworkGraph } from "../constants/site/Settings";

// Constants
import { SiteDesignGraph } from "../constants/site/Settings";

// Components
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";
import { ProjectVerticalListings } from "../components/Sections/ProjectVerticalListings";
import { ArtworkHeader } from "../components/_svg/Headers/ArtworkHeader";
import { ArtworkBadge } from "../components/_svg/Headers/ArtworkBadge";
import {
  AfterHeadlineWrapper,
  HeadlineWrapper,
} from "../components/HeadlineWrapper";
import { SvgHeadlineDisplay } from "../components/SvgHeadlineDisplay";
import { HoverGrid } from "../components/HoverGrid";
import NoWaterDistortCanvas from "./projects/no-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_ArtworkFrontPage = {};

export const ArtworkPageClassName = "route__artwork";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const ArtworkPage: NextPage<LMNTS_ArtworkFrontPage> = () => {
  const [isTouchCapable, setTouchCapable] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setTouchCapable(true);
      setLoading(false);
    } else {
      setTouchCapable(false);
      setLoading(false);
    }
  });

  return (
    <SimpleContentTemplate
      addClass={`${ArtworkPageClassName}`}
      showGridlines={true}
    >
      {isLoading ? "Loading" : isTouchCapable ? "" : <NoWaterDistortCanvas />}

      <HoverGrid />
    </SimpleContentTemplate>
  );
};

export default ArtworkPage;
