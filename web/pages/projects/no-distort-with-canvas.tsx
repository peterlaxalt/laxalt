import React, { Component } from "react";

import { createGlobalStyle } from "styled-components";
import { FadeIn } from "../../constants/styles/Animation";

// import { ThreeCanvas } from "../../sketches/three/with-canvas-as-texture";

import { NextPage } from "next";
import { LXLT_ColorTheme } from "../../constants/styles/Color";
import { LXLT_GLSL_Canvas } from "../../sketches/p5/glsl";
import { LXLT_P5Wrapper } from "./_scaffold-p5";
import dynamic from "next/dynamic";
import { __DEBUG__ } from "../../constants/site/Settings";

// ______________________________________________________________

type LXLT_ThreePage = NextPage & {
  // colorThemeContext: LXLT_ColorTheme;
};

type LXLT_CanvasRootElement = HTMLDivElement;

type LXLT_ThreePage_State = {
  domLoaded: boolean;
  windowWidth: number;
  windowHeight: number;

  canvasElement: boolean;
  canvasTheme: LXLT_ColorTheme;
  canvasParent: HTMLDivElement;
};

declare global {
  interface Window {
    laxaltUniversalTheme: LXLT_ColorTheme;
  }
}

// _________________________________________________________________________________

export const NoDistortCanvasClassName = "no-distort-canvas";

/**
 *
 * @name __CANVAS_FILE__
 * @description The file you want to load
 *
 */
const __CANVAS_FILE__ = "no-water-distort.canvas";

/**
 *
 * @name P5Wrapper
 * @description Dynamic import of the P5 library
 *
 */
const P5Wrapper: LXLT_P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <></>,
  ssr: false,
});

/**
 *
 * @name NoWaterDistortCanvas
 *
 */
class NoWaterDistortCanvas extends Component<
  LXLT_ThreePage,
  LXLT_ThreePage_State
> {
  constructor(props: LXLT_ThreePage) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,

      canvasElement: false,
      canvasTheme: undefined,
      canvasParent: undefined,
    };

    this.renderP5 = this.renderP5.bind(this);
  }

  /**
   *
   * @name canvasParentRef
   * @description Our ref for our Three.js container
   *
   */
  private canvasParentRef: LXLT_CanvasRootElement;

  /**
   *
   * @name componentDidMount()
   * @description Lifecycle to start using the window & document
   *
   */
  componentDidMount() {
    if (typeof window) {
      this.setState({
        windowWidth: window.innerWidth - 80,
        windowHeight: window.innerHeight - 80,
        domLoaded: true,

        canvasElement: false,
        canvasTheme: window.laxaltUniversalTheme,
        canvasParent: this.canvasParentRef,
      });

      // window.laxaltUniversalTheme = this.props.colorThemeContext;
    }
  }

  /**
   *
   * @name renderP5()
   * @description Fire up p5.js canvas through a dynamic import
   *
   */
  renderP5 = (filename: string) => {
    if (
      this.state.canvasElement === true &&
      document.querySelector("#defaultCanvas1")
    ) {
      __DEBUG__ &&
        console.log(`😌 Canvas Element Exists`, this.state.canvasElement);

      return null;
    } else {
      __DEBUG__ &&
        console.log(`🕓 Initializing p5 file ../../sketches/p5/${filename}`);

      __DEBUG__ &&
        console.log(`👨‍👦 Parent container ref: `, this.canvasParentRef);

      const sketch: LXLT_GLSL_Canvas = require(`../../sketches/p5/${filename}`).default(
        this.state.windowWidth,
        this.state.windowHeight,
        1,
        // this.state.canvasTheme,
        this.state.canvasParent
      );

      return <P5Wrapper sketch={sketch} />;
    }
  };

  render() {
    __DEBUG__ && console.log("👀 this.state", this.state);

    const WaterDistortWithCanvasGlobalStyles = createGlobalStyle`
      /* body, html {
        overflow: hidden;
      } */


      canvas {
        animation: ${FadeIn} 1s ease 1;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
      }

      .${NoDistortCanvasClassName} {
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        canvas {
          transform: scale(.85) translate(0%, 2%);
          /* transform: scale(.9) translate(0%, 5%); */
          /* display: none; */
        }
      }

      .dharma-container {
        opacity: 1;
      }
    `;

    return (
      <>
        <WaterDistortWithCanvasGlobalStyles />

        <div
          ref={(element: HTMLDivElement) => (this.canvasParentRef = element)}
          className={`${NoDistortCanvasClassName}`}
        >
          {this.state.canvasParent ? this.renderP5(__CANVAS_FILE__) : null}
        </div>
      </>
    );
  }
}

export default NoWaterDistortCanvas;
