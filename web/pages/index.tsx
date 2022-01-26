// Core
import { GetStaticProps, NextPage } from "next";
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
import { QueryUtils } from "../constants/Queries";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_ArtworkFrontPage = {
  allContent: any;
  allCategories: any;
};

export const ArtworkPageClassName = "route__artwork";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const ArtworkPage: NextPage<LMNTS_ArtworkFrontPage> = ({allContent, allCategories}) => {
  const [isTouchCapable, setTouchCapable] = useState(null);
  const [isLoading, setLoading] = useState(true);

  console.log('content loaded:', allContent);
  console.log('categories loaded:', allCategories);

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

      <HoverGrid allContent={allContent} />
    </SimpleContentTemplate>
  );
};

export default ArtworkPage;

/**
 *
 * @name Server Rendered Data
 * @author Peter Francis Laxalt
 * @description Try to do as many data-specific tasks here as possible.
 *
 */
 export const getStaticProps: GetStaticProps = async () => {
  return await QueryUtils.initAppData(false);
};
