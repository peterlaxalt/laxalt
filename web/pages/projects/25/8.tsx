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
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Safe from "react-safe";

// Components

import { FrameEight } from "../../../components/25/8";

// Begin Component
//////////////////////////////////////////////////////////////////////

const currentSketch = 8;
const theme = {
  textColor: "#0d132a",
  bgColor: "#d5fdd2"
};

const HideNav = createGlobalStyle`
  .nav {
    display: none;
  }
`;

// @ts-ignore
const loadCanvas = () => {
  return (
    <>
      <canvas id="canvas"></canvas>

      <Head>
        <Safe.script src="/lib/perlin.js" />
        <Safe.script src="/lib/2008.js" />
      </Head>
    </>
  );
};

class s8 extends Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      domLoaded: true
    });
  }

  render() {
    return (
      <>
        <HideNav />
        <FrameEight theme={theme} currentSketch={currentSketch} />

        {this.state.domLoaded === true ? (
          <>
            <Head>
              <script src="/lib/perlin.js" />
              <script src="/lib/2008.js" />
            </Head>

            <canvas id="canvas"></canvas>
          </>
        ) : (
          "NOT LOADED"
        )}
      </>
    );
  }
}

export default s8;
