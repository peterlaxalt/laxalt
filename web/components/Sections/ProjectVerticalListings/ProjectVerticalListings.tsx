// Core
import React, { useEffect, useRef, useState } from "react";

// Types
import { LXLT_Project, SiteProjects } from "../../../constants/site/Settings";

// Vendor
import gsap from "gsap";

// Components
import { ProjectCard } from "../../ProjectCard";

// Styles
import {
  ProjectVerticalListingsClassName,
  ProjectVerticalListingsStyle,
} from "./styles.scss";

// Begin Types
// __________________________________________________________________________________________

export type LXLT_ProjectVerticalListings = {
  addClass?: string;
};

// Begin Component
// __________________________________________________________________________________________


export const ProjectVerticalListings: React.FunctionComponent<LXLT_ProjectVerticalListings> = React.memo(
  ({ addClass = "" }) => {
    return (
      <>
        {/* <ProjectVerticalListingsGlobalStyles isScrolled={isBreakPoint} /> */}
        <ProjectVerticalListingsStyle
          className={`${ProjectVerticalListingsClassName} ${
            addClass && addClass
          }`}
        >
          <div className={`${ProjectVerticalListingsClassName}__inner`}>
            {SiteProjects.map((item: LXLT_Project, idx: number) => {
              return (
                <ProjectCard
                  key={idx}
                  count={idx + 1}
                  total={SiteProjects.length}
                  item={item}
                />
              );
            })}
          </div>
        </ProjectVerticalListingsStyle>
      </>
    );
  }
);

// End Component
// ______________________________________________________________________________
