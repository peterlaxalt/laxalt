/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Navigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { Component } from "react";
import { canvas } from "../../../sketches/three/t13";
import { createGlobalStyle } from "styled-components";

// Components

import { FrameThirteen } from "../../../components/25/13";

// Begin Component
//////////////////////////////////////////////////////////////////////

const currentSketch = 13;
const theme = {
  textColor: "#0d132a",
  bgColor: "#9cacc9"
};

const HideNav = createGlobalStyle`
  .nav {
    display: none;
  }
`;

class p3 extends Component<{}, any> {
  componentDidMount() {
    if (typeof window) {
      // @ts-ignore
      canvas(this.threeRootElement);
    }
  }
  render() {
    return (
      <>
        <HideNav />
        <FrameThirteen theme={theme} currentSketch={currentSketch} />
        <div
          // @ts-ignore
          ref={element => (this.threeRootElement = element)}
          style={{ width: "100vw", height: "100vh" }}
        />
      </>
    );
  }
}

export default p3;
