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
import styled from "styled-components";
import { HorizontalScrollSection } from "../components/Sections/HorizontalScrollSection";
import { Theme } from "../constants/Theme";
import NoWaterDistortCanvas from "./projects/no-distort-with-canvas";

// Components
// import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_LocationsFrontPage = {};

export const HomePageClassName = "route__home-page";

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */
const HomePage: NextPage<LMNTS_LocationsFrontPage> = () => {
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
    <div className={`${HomePageClassName}`}>
      <div>
        <div style={{ position: "sticky", top: "0", height: 0 }}>
          <div style={{ position: "absolute", top: "0", left: "0" }}>
            <NoWaterDistortCanvas />
          </div>
        </div>

        <HorizontalScrollSection>
          <div style={{ width: "100vw" }} />
          {arr.map((i: any, idx: number) => {
            return (
              <div
                key={idx}
                style={{
                  width: "50vw",
                  flexShrink: 0,
                  marginRight: "50px",
                  position: "relative",
                  mixBlendMode: "multiply",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    mixBlendMode: "multiply",
                    placeItems: "center",
                  }}
                >
                  <img
                    src={i}
                    style={{
                      border: `2px solid ${Theme.Color.varBackground}`,
                      maxWidth: "100%",
                      width: "100%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
              </div>
            );
          })}
        </HorizontalScrollSection>
      </div>
    </div>
  );
};

export default HomePage;
