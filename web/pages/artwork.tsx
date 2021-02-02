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
  let sidebarPanes: LXLT_SidebarPane[] = [
    {
      header: "Artwork",
      headerBadge: ArtworkBadge,
      items: SiteArtworkGraph.categories.map((category: LXLT_Category) => {
        return {
          label: category.name,
          href:
            category.slug === "everything"
              ? `/${SiteDesignGraph.rootSlug}`
              : `/${SiteDesignGraph.rootSlug}/${category.slug}`,
          isActive: category.slug === "everything" ? true : false,
          isMajor: category.isMajor ? category.isMajor : false,
        };
      }),
    },
  ];

  return (
    <SimpleContentTemplate
      globalSidebarPanes={sidebarPanes}
      addClass={`${ArtworkPageClassName}`}
    >
      <HeadlineWrapper>
        <ArtworkHeader />
      </HeadlineWrapper>

      <AfterHeadlineWrapper>
        <ProjectVerticalListings />
      </AfterHeadlineWrapper>
    </SimpleContentTemplate>
  );
};

export default ArtworkPage;
