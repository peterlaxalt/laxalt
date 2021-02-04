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
import { LXLT_SidebarPane } from "../../components/LayeredSidebar";
import { LayeredSidebarWidth } from "../../components/LayeredSidebar/styles.scss";
import { CssFrameSizeWithBorderString } from "../../components/MellowFrameHeader/styles.scss";
import { HorizontalScrollSection } from "../../components/Sections/HorizontalScrollSection";
import { MarqueeRow } from "../../components/Sections/MarqueeRow";
import { SimpleContentTemplate } from "../../components/SimpleContentTemplate";
import { DesignBadge } from "../../components/_svg/Headers/DesignBadge";
import { Root } from "../../constants/Root";
import {
  getProjectData,
  LXLT_Category,
  SiteAwardHeaders,
  SiteAwards,
  SiteClients,
  SiteCollaborators,
  SiteDesignGraph,
  SiteIndustries,
} from "../../constants/site/Settings";
import { Theme } from "../../constants/Theme";

import Image from "next/image";
import { ProjectHero } from "../../components/Sections/ProjectHero";
import { ProjectIntroSection } from "../../components/Sections/ProjectIntroSection";
import { AccordionListingRow } from "../../components/Sections/AccordionListingRow";
import { HideFooter } from "../../constants/styles/CssUtils";
import { TableColumnListing } from "../../components/Sections/TableListings";
import {
  LXLT_Section_TableRowField,
  TableRowListing,
} from "../../components/Sections/TableListings/TableRowListings";
import { TableRowListingClassName } from "../../components/Sections/TableListings/styles.scss";
import ProjectMetaSection from "../../components/Sections/ProjectMetaSection/ProjectMetaSection";
import { RelatedBadge } from "../../components/_svg/Headers/RelatedBadge";
import { ProjectNextSection } from "../../components/Sections/ProjectNextSection";

// Components

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const SamplePageClassName = "route__home-page";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const SamplePage: NextPage<LMNTS_LocationsFrontPage> = () => {
  // __________________________________
  // Project data
  let currentProject = getProjectData("allships");

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
      items: currentProject.categories.map((category: LXLT_Category) => {
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

  // ______________________________
  // Misc

  var arr = [
    "https://cdn.dribbble.com/users/221507/screenshots/6860552/nv-9_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/6764380/artboard_1_copy_2_3x_4x.png?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/6247770/drib-snakepin-dribbbb_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5917586/deso-full-sheet_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5917614/csf-containers_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5917571/mountain-lion-dribibibibibb_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5840854/craftlogogogo-dribbb_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5810284/love-pain-shame-dribbble_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5544831/dribibiibibibib_4x.jpg?compress=1&resize=1000x750",
    "https://cdn.dribbble.com/users/221507/screenshots/5023879/localyyz-home-dribble_4x.png?compress=1&resize=1000x750",
  ];

  return (
    <>
      <HideFooter />
      <SimpleContentTemplate
        globalSidebarPanes={sidebarPanes}
        addClass={`${SamplePageClassName}`}
        showGridlines={true}
      >
        <ProjectHero
          project={currentProject}
          sections={[
            {
              name: "Something",
              anchor: "something",
            },
            {
              name: "Something",
              anchor: "something",
            },
            {
              name: "Something",
              anchor: "something",
            },
          ]}
        />

        <ProjectIntroSection project={currentProject} hasSidebar={true} />

        {/* ________________________________________________________________________________ */}
        {/* START CONTENT */}

        <p
          style={{
            maxWidth: 650,
            fontFamily: `${Theme.Font.Code}`,
            fontSize: "1.5rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          <strong>APRIL 20 — </strong>Nunc fringilla leo vel ligula porttitor
          posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus,
          libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus
          lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut
          maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim
          sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit
          ullamcorper, elit ante tempus turpis, non consectetur orci diam eu
          lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam
          fermentum libero, a ullamcorper massa velit non dolor. Maecenas eget
          pellentesque lacus. Sed ac lectus quis tellus euismod pharetra.
          Vivamus pretium gravida urna a posuere.
        </p>

        <p
          style={{
            maxWidth: 650,
            fontSize: "1.05rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam
          vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus,
          quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit
          amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu
          nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia
          neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante
          tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo
          tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper
          massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus
          quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.
        </p>

        <HorizontalScrollSection hasSidebar={true}>
          <div className="spacer" style={{ width: LayeredSidebarWidth }} />
          {arr.map((i: any, idx: number) => {
            return (
              <div
                key={idx}
                style={{
                  width: "50vw",
                  flexShrink: 0,
                  marginRight: "50px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={i}
                    draggable={false}
                    style={{
                      border: `2px solid ${Theme.Color.varBackground}`,
                      maxWidth: "100%",
                      width: "100%",
                      pointerEvents: "none",
                    }}
                  />
                </span>
              </div>
            );
          })}
        </HorizontalScrollSection>

        <p
          style={{
            maxWidth: 650,
            fontSize: "1.05rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam
          vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus,
          quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit
          amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu
          nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia
          neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante
          tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo
          tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper
          massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus
          quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.
        </p>

        <p
          style={{
            maxWidth: 650,
            fontSize: "1.05rem",
            margin: "20px 0px 20px 0px",
          }}
        >
          Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam
          vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus,
          quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit
          amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu
          nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia
          neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante
          tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo
          tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper
          massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus
          quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.
        </p>

        {/* END CONTENT */}
        {/* ________________________________________________________________________________ */}
        <ProjectMetaSection project={currentProject} />
        <ProjectNextSection project={currentProject} />
      </SimpleContentTemplate>
    </>
  );
};

export default SamplePage;
