// Core
import { NextPage } from "next";
import React from "react";

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
import { AfterHeadlineWrapper, HeadlineWrapper } from "../components/HeadlineWrapper";
import { SvgHeadlineDisplay } from "../components/SvgHeadlineDisplay";
import { HoverGrid } from "../components/HoverGrid";

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
  return (
    <SimpleContentTemplate
      addClass={`${ArtworkPageClassName}`}
    >
      <HoverGrid />
    </SimpleContentTemplate>
  );
};

export default ArtworkPage;
