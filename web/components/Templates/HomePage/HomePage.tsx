// Core
import { NextPage } from "next";
import React from "react";

// Styles
import { HomePageClassName, HomePageStyle } from "./styles.scss";

// Components
import NoWaterDistortCanvas from "../../../pages/projects/no-distort-with-canvas";
import { ProjectScrollSection } from "../../Sections/ProjectScrollSection";
import { HeadlineWrapper } from "../../HeadlineWrapper";
import { ProjectVerticalListings } from "../../Sections/ProjectVerticalListings";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_HomePage = {};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
export const HomePage: NextPage<LMNTS_HomePage> = ({}) => {
  return (
    <HomePageStyle className={`${HomePageClassName}`}>
      <div className={`${HomePageClassName}__canvas-wrapper`}>
        <div className={`${HomePageClassName}__canvas`}>
          <HeadlineWrapper>
            <NoWaterDistortCanvas />
          </HeadlineWrapper>
        </div>
      </div>

      <div className={`${HomePageClassName}__horizontal-listings`}>
        <ProjectScrollSection
          addClass={`${HomePageClassName}__project-scroll`}
        />
      </div>

      <div className={`${HomePageClassName}__vertical-listings`}>
        <ProjectVerticalListings />
      </div>
    </HomePageStyle>
  );
};
