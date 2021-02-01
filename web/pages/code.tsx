// Core
import { NextPage } from "next";
import React from "react";

// Types
import { LXLT_SidebarPane } from "../components/LayeredSidebar";
import { LXLT_Category, SiteCodeGraph } from "../constants/site/Settings";

// Constants
import { SiteDesignGraph } from "../constants/site/Settings";

// Components
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";
import { ProjectVerticalListings } from "../components/Sections/ProjectVerticalListings";
import { CodeBadge } from "../components/_svg/Headers/CodeBadge";
import { CodeHeader } from "../components/_svg/Headers/CodeHeader";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_CodeFrontPage = {};

export const CodePageClassName = "route__code";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const CodePage: NextPage<LMNTS_CodeFrontPage> = () => {
  let sidebarPanes: LXLT_SidebarPane[] = [
    {
      header: "Code",
      headerBadge: CodeBadge,
      items: SiteCodeGraph.categories.map((category: LXLT_Category) => {
        return {
          label: category.name,
          href: category.slug === 'everything' ? `/${SiteDesignGraph.rootSlug}` : `/${SiteDesignGraph.rootSlug}/${category.slug}`,
          isActive: category.slug === 'everything' ? true : false,
          isMajor: category.isMajor ? category.isMajor : false,
        };
      }),
    },
  ];

  return (
    <SimpleContentTemplate
      globalSidebarPanes={sidebarPanes}
      addClass={`${CodePageClassName}`}
    >
      <CodeHeader />

      <ProjectVerticalListings />
    </SimpleContentTemplate>
  );
};

export default CodePage;
