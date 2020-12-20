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
import { Root } from "../constants/Root";
import { Theme } from "../constants/Theme";

// Components
import WaterDistortWithCanvasTexturePage from "./projects/water-distort-with-canvas";

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
    "https://previews.dropbox.com/p/thumb/ABCIRDEjEIDUCUwEnDg-hBlmMb6EPW5Hqq5mhh3iGyyS5U16kYekQJ4F9zmVX7Q1OcDbHLAjHGzlIrXYAhnhL5DEl8e63cdQkMro1zPAuKNntiGH102GdGf2PyF-Q_3Uvzi3o1v3Zj4im499dkOGKeM9i_pKlB7ogUZahYnp26rdb2tv46jq8ialoJ2P1XYFVex3jyEmfYP8vhw-vXncrIGUqjCMBQYdgmtW1HpyZjZcxEOFy8hBJvPj7lucwNgXtndj4SAVAIqu3BVSHVBwQZspIh2VNdtmQapIy7kTLTQk2IxMZHNT_D5a3sBr6sUweGJW3b3hjQ7Ctk9MTX_DsqwZlwg3XVJQAd9noVLRBwNM8g/p.png?fv_content=true&size_mode=5",
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
    <div className={`${HomePageClassName}`} style={{ minHeight: "200vh" }}>
      {/* <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <h1 style={{ fontFamily: "Hobo STD" }}>HOME PAGE</h1>
      </div> */}

      <div>
        <div style={{ position: "sticky", top: "0", minHeight: "100vh" }}>
          <WaterDistortWithCanvasTexturePage />
        </div>

        <ul
          style={{
            display: "flex",
            // flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {arr.map((i: any, idx: number) => {
            return (
              <li
                key={idx}
                style={{
                  width: "60%",
                  position: "relative",
                  marginBottom: "50px",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center"
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
