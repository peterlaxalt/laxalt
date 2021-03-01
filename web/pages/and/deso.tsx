// Core
import { NextPage } from "next";
import React from "react";

// Types & Constants
import { Theme } from "../../constants/Theme";

// Components
import Image from "next/image";
import { Root } from "../../constants/Root";
import { ProjectTemplate } from "../../components/Templates/ProjectTemplate";
import { ProjectTemplateAlpha } from "../../components/Templates/ProjectTemplateAlpha";

// __________________________________________________________________________________________
// Define Project Slug

const __PROJECT_SLUG__ = "deso";

// Begin Component
// __________________________________________________________________________________________


type LMNTS_ProjectPage = {};

export const ProjectPageClassName = `route__project-page--${__PROJECT_SLUG__} route__project-page`;

/**
 *
 * @author Peter Laxalt
 *
 */
const ProjectPage: NextPage<LMNTS_ProjectPage> = () => {
  // ______________________________
  // Misc

  var sampleImageArray = [
    { src: "/projects/allships/01.png", w: 2812, h: 1548 },
    { src: "/projects/allships/02.gif", w: 1600, h: 880 },
    { src: "/projects/allships/03.png", w: 2000, h: 1165 },
    { src: "/projects/allships/04.png", w: 2000, h: 1165 },
    { src: "/projects/allships/05.gif", w: 2642, h: 1538 },
    { src: "/projects/allships/06.png", w: 2670, h: 1502 },
    { src: "/projects/allships/07.gif", w: 1748, h: 790 },
    { src: "/projects/allships/08.gif", w: 2752, h: 1602 },
    { src: "/projects/allships/09.gif", w: 1856, h: 904 },
    { src: "/projects/allships/10.png", w: 3266, h: 1898 },
    { src: "/projects/allships/11.png", w: 3304, h: 1882 },
    { src: "/projects/allships/12.png", w: 3314, h: 1708 },
    { src: "/projects/allships/13.gif", w: 2926, h: 1399 },
    { src: "/projects/allships/14.png", w: 3304, h: 1576 },
  ];

  return (
    <>
      <ProjectTemplateAlpha
        projectSlug={__PROJECT_SLUG__}
        sections={[
          {
            name: "Concepts",
            anchor: "concepts",
          },
          {
            name: "Shoutouts & Credits",
            anchor: "credits",
          },
          {
            name: "Approach & Tools Used",
            anchor: "tools",
          },
          {
            name: "Awards & Wins",
            anchor: "wins",
          },
        ]}
      >
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

        <div>
          {sampleImageArray.map((img, idx: number) => {
            return (
              <div
                style={{
                  paddingBottom: 20,
                  pointerEvents: "none",
                  paddingRight: Root.Grid.Gutter.Right,
                }}
              >
                <Image
                  draggable={false}
                  src={img.src}
                  width={img.w}
                  height={img.h}
                  key={idx}
                />
              </div>
            );
          })}
        </div>
        {/* <HorizontalScrollSection hasSidebar={true}>
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
        </HorizontalScrollSection> */}

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
      </ProjectTemplateAlpha>
    </>
  );
};

export default ProjectPage;
