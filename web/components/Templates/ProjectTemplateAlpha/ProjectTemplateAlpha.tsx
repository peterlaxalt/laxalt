// Core
import { NextPage } from "next";
import React from "react";

// Types & Constants
import { LXLT_SidebarPane } from "../../LayeredSidebar";
import {
  getProjectData,
  LXLT_Category,
  LXLT_Project,
  SiteDesignGraph,
} from "../../../constants/site/Settings";

// Components
import Image from "next/image";
import { ProjectHero } from "../../Sections/ProjectHero";
import { ProjectIntroSection } from "../../Sections/ProjectIntroSection";
import { HideFooter } from "../../../constants/styles/CssUtils";
import ProjectMetaSection from "../../Sections/ProjectMetaSection/ProjectMetaSection";
import { RelatedBadge } from "../../_svg/Headers/RelatedBadge";
import { ProjectNextSection } from "../../Sections/ProjectNextSection";
import { SimpleContentTemplate } from "../../SimpleContentTemplate";
import { DesignBadge } from "../../_svg/Headers/DesignBadge";
import { ProjectTemplateAlphaClassName, ProjectTemplateAlphaStyle } from "./styles.scss";
import { ProjectHeroAlpha } from "../../Sections/ProjectHeroAlpha";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_ProjectTemplateAlpha = {
  projectSlug: string;
  sections: {
    name: string;
    anchor: string;
  }[];
};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
export const ProjectTemplateAlpha: NextPage<LMNTS_ProjectTemplateAlpha> = ({
  projectSlug,
  sections,
  children,
}) => {
  // __________________________________
  // Project data
  let projectData = getProjectData(projectSlug);

  // __________________________________
  // Sidebar
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

    {
      header: "Related",
      headerBadge: RelatedBadge,
      items: projectData.categories.map((category: LXLT_Category) => {
        return {
          label: category.name,
          href: `/${category.parent}/${category.slug}`,
          isMajor: false,
          isActive: false,
        };
      }),
    },

    {
      items: [],
    },
  ];

  return (
    <>
      <HideFooter />
      <ProjectTemplateAlphaStyle className={`${ProjectTemplateAlphaClassName}`}>
        <SimpleContentTemplate
          globalSidebarPanes={sidebarPanes}
          addClass={`${ProjectTemplateAlphaClassName}__wrapper`}
          showGridlines={true}
        >
          {/* ________________________________________________________________________________ */}
          {/* Hero */}
          <ProjectHeroAlpha project={projectData} sections={sections} />

          {/* ________________________________________________________________________________ */}
          {/* Intro */}
          {projectData.intro && (
            <ProjectIntroSection project={projectData} hasSidebar={true} />
          )}

          {/* ________________________________________________________________________________ */}
          {/* Content */}

          <div className={`${ProjectTemplateAlphaClassName}__content`}>
            {children}
          </div>

          {/* ________________________________________________________________________________ */}
          {/* Meta */}
          <ProjectMetaSection project={projectData} />

          {/* ________________________________________________________________________________ */}
          {/* Next */}
          <ProjectNextSection project={projectData} />
        </SimpleContentTemplate>
      </ProjectTemplateAlphaStyle>
    </>
  );
};
