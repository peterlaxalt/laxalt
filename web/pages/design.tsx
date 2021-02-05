// Core
import { NextPage } from "next";
import React from "react";

// Components
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";

// Types
import { LXLT_SidebarPane } from "../components/LayeredSidebar";
import { LXLT_Category } from "../constants/site/Settings";

// Constants
import { SiteDesignGraph } from "../constants/site/Settings";
import { DesignHeader } from "../components/_svg/Headers/DesignHeader";
import { ProjectVerticalListings } from "../components/Sections/ProjectVerticalListings";
import { DesignBadge } from "../components/_svg/Headers/DesignBadge";
import {
  AfterHeadlineWrapper,
  HeadlineWrapper,
} from "../components/HeadlineWrapper";
import { SvgHeadlineDisplay } from "../components/SvgHeadlineDisplay";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_DesignFrontPage = {};

export const DesignPageClassName = "route__design";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const DesignPage: NextPage<LMNTS_DesignFrontPage> = () => {
  let sidebarPanes: LXLT_SidebarPane[] = [
    {
      header: "Design",
      headerBadge: DesignBadge,
      items: SiteDesignGraph.categories.map((category: LXLT_Category) => {
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
      addClass={`${DesignPageClassName}`}
      showGridlines={true}
    >
      <HeadlineWrapper>
        <SvgHeadlineDisplay svgElement={DesignHeader} />
      </HeadlineWrapper>

      <AfterHeadlineWrapper>
        <ProjectVerticalListings />
      </AfterHeadlineWrapper>
    </SimpleContentTemplate>
  );
};

export default DesignPage;
