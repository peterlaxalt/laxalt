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
import { DuotoneImage } from "../components/DuotoneImage";
import {
  AfterHeadlineWrapper,
  HeadlineWrapper,
} from "../components/HeadlineWrapper";
import { InnerGrid } from "../components/InnerGrid";
import { AccordionListingRow } from "../components/Sections/AccordionListingRow";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { IntroSection } from "../components/Sections/IntroSection";
import { MasonryGallery } from "../components/Sections/MasonryGallery";
import { ProjectVerticalListings } from "../components/Sections/ProjectVerticalListings";
import { SplitTextHero } from "../components/Sections/SplitTextHero";
import { StaggeredBlocksSection } from "../components/Sections/StaggeredBlocksSection";
import { StretchIntroSection } from "../components/Sections/StretchIntroSection";
import { TableColumnListing } from "../components/Sections/TableListings";
import { TableRowListingClassName } from "../components/Sections/TableListings/styles.scss";
import { TableRowListing } from "../components/Sections/TableListings/TableRowListings";
import { TakeoutMenu } from "../components/Sections/TakeoutMenu";
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";
import {
  SiteAwardHeaders,
  SiteAwards,
  SiteClients,
  SiteCollaborators,
  SiteIndustries,
} from "../constants/site/Settings";
import { Theme } from "../constants/Theme";

// Components
import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const StudioPageClassName = "route__studio";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const StudioPage: NextPage<LMNTS_LocationsFrontPage> = () => {
  var projectsArr = [
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
    <SimpleContentTemplate addClass={`${StudioPageClassName}`}>
      <InnerGrid>
        <HeadlineWrapper>
          <SplitTextHero />
        </HeadlineWrapper>

        <AfterHeadlineWrapper>
          <IntroSection />
        </AfterHeadlineWrapper>

        <StretchIntroSection />

        <AccordionListingRow labelLeft={`Profile`} labelRight={`Story`}>
          <StaggeredBlocksSection />
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Disciplines`} labelRight={`Skills`}>
          <TakeoutMenu />
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Photos`} labelRight={`Life`}>
          <MasonryGallery />
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Clients`} labelRight={`Peeps`}>
          <TableColumnListing data={SiteIndustries} tableName={`Industries`} />
          <TableColumnListing data={SiteClients} tableName={`Clients`} />
          <TableColumnListing
            data={SiteCollaborators}
            tableName={`Collaborators`}
          />
        </AccordionListingRow>

        <AccordionListingRow
          labelLeft={`Awards`}
          labelRight={`Stuff`}
        >
          <TableRowListing
            data={SiteAwards}
            tableName={`Awards`}
            addClass={`${TableRowListingClassName}--awards-table`}
            tableHeaders={SiteAwardHeaders}
          />
        </AccordionListingRow>

        <AccordionListingRow
          labelLeft={`Selected`}
          labelRight={`Work`}
          isInitiallyExpanded
        >
          <ProjectVerticalListings />
        </AccordionListingRow>
      </InnerGrid>
    </SimpleContentTemplate>
  );
};

export default StudioPage;
