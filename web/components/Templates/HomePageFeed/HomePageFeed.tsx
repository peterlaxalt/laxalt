// Core
import { NextPage } from "next";
import React from "react";

// Styles
import { HomePageFeedClassName, HomePageFeedStyle } from "./styles.scss";

// Components
import NoWaterDistortCanvas from "../../../pages/projects/no-distort-with-canvas";
import { ProjectScrollSection } from "../../Sections/ProjectScrollSection";
import { HeadlineWrapper } from "../../HeadlineWrapper";
import { ProjectVerticalListings } from "../../Sections/ProjectVerticalListings";
import { SimpleContentTemplate } from "../../SimpleContentTemplate";
import { SiteNavigation } from "../../../constants/site/Settings";
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_HomePageFeed = {};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
export const HomePageFeed: NextPage<LMNTS_HomePageFeed> = ({}) => {
  return (
    <HomePageFeedStyle className={`${HomePageFeedClassName}`}>
      <SimpleContentTemplate
        addClass={`${HomePageFeedClassName}__content-wrapper`}
        showGridlines={true}
      >
        <div className={`${HomePageFeedClassName}__canvas-wrapper`}>
          <div className={`${HomePageFeedClassName}__canvas`}>
            <HeadlineWrapper>
              <Link href="/does">
                <a>
                  <NoWaterDistortCanvas />
                </a>
              </Link>
            </HeadlineWrapper>
          </div>
        </div>
      </SimpleContentTemplate>
    </HomePageFeedStyle>
  );
};
