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
import { InnerGrid } from "../components/InnerGrid";
import { AccordionListingRow } from "../components/Sections/AccordionListingRow";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { IntroSection } from "../components/Sections/IntroSection";
import { SplitTextHero } from "../components/Sections/SplitTextHero";
import { StaggeredBlocksSection } from "../components/Sections/StaggeredBlocksSection";
import { StretchIntroSection } from "../components/Sections/StretchIntroSection";
import { SimpleContentTemplate } from "../components/SimpleContentTemplate";
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
        <SplitTextHero />
        <IntroSection />
        <StretchIntroSection />
        <AccordionListingRow labelLeft={`Profile`} labelRight={`Story`}>
          <StaggeredBlocksSection />
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Disciplines`} labelRight={`Skills`}>
          Content!
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Photos`} labelRight={`Life`}>
          Content!
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Clients`} labelRight={`Peeps`}>
          Content!
        </AccordionListingRow>

        <AccordionListingRow labelLeft={`Awards`} labelRight={`Stuff`}>
          Content!
        </AccordionListingRow>

        <AccordionListingRow
          labelLeft={`Selected`}
          labelRight={`Work`}
          isInitiallyExpanded
        >
          <HorizontalScrollSection forceFullWidth={true}>
            {projectsArr.map((i: any, idx: number) => {
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
                      style={{
                        border: `2px solid ${Theme.Color.varBackground}`,
                        maxWidth: "100%",
                        width: "100%",
                      }}
                    />
                  </span>
                </div>
              );
            })}
          </HorizontalScrollSection>
        </AccordionListingRow>
      </InnerGrid>
    </SimpleContentTemplate>
  );
};

export default StudioPage;
