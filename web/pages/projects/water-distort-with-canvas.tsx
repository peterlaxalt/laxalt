import React, { Component } from "react";

import { createGlobalStyle } from "styled-components";
import { FadeIn } from "../../constants/styles/Animation";

import { InteractiveFrameHeader } from "../../components/_interactive/InteractiveFrameHeader";

// import { ThreeCanvas } from "../../sketches/three/with-canvas-as-texture";

import { NextPage } from "next";
import {
  Color,
  ColorContext,
  LXLT_ColorTheme,
} from "../../constants/styles/Color";
import { LXLT_GLSL_Canvas } from "../../sketches/p5/glsl";
import { LXLT_P5Wrapper } from "./_scaffold-p5";
import dynamic from "next/dynamic";
import { __DEBUG__ } from "../../constants/site/Settings";

// ______________________________________________________________

type LXLT_ThreePage = {
  colorThemeContext: LXLT_ColorTheme;
};

type LXLT_CanvasRootElement = HTMLDivElement;

type LXLT_ThreePage_State = {
  domLoaded: boolean;
  windowWidth: number;
  windowHeight: number;

  canvasElement: HTMLCanvasElement;
  canvasTheme: LXLT_ColorTheme;
  canvasParent: HTMLDivElement;
};

declare global {
  interface Window {
    laxaltUniversalTheme: LXLT_ColorTheme;
  }
}

// _________________________________________________________________________________

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
 * @name ThreePageWithContext
 *
 */
class ThreePageWithContext extends Component<
  LXLT_ThreePage,
  LXLT_ThreePage_State
> {
  constructor(props: LXLT_ThreePage) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,

      canvasElement: undefined,
      canvasTheme: undefined,
      canvasParent: undefined,
    };
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

        canvasElement: undefined,
        canvasTheme: this.props.colorThemeContext,
        canvasParent: this.canvasParentRef,
      });

      window.laxaltUniversalTheme = this.props.colorThemeContext;
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: LXLT_ThreePage) {
    if (nextProps.colorThemeContext != this.state.canvasTheme) {
      this.setState({
        canvasTheme: this.props.colorThemeContext,
        canvasParent: this.canvasParentRef,
      });
    }
  }

  /**
   *
   * @name renderP5()
   * @description Fire up p5.js canvas through a dynamic import
   *
   */
  renderP5 = (filename: string) => {
    __DEBUG__ &&
      console.log(`🕓 Initializing p5 file ../../sketches/p5/${filename}`);

    __DEBUG__ && console.log(`👨‍👦 Parent container ref: `, this.canvasParentRef);

    const sketch: LXLT_GLSL_Canvas = require(`../../sketches/p5/${filename}`).default(
      this.state.windowWidth,
      this.state.windowHeight,
      1,
      this.state.canvasTheme,
      this.state.canvasParent
    );

    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    const ThreePageGlobalStyles = createGlobalStyle`
      /* body, html {
        overflow: hidden;
      } */

      .three-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        #p5_loading {
          display: none !important;
        }
      }

      #drawing-canvas {
				position: absolute;
				background-color: #000000;
				top: 0px;
				right: 0px;
				z-index: 3000;
				cursor: crosshair;
				touch-action: none;

        display: none;
			}

      canvas {
        animation: ${FadeIn} 1s ease 1;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
      }

      .canvas-container {
        #defaultCanvas0 {
          display: none;
        }
      }

      .dharma-container {
        opacity: 1;
      }
    `;

    return (
      <>
        <ThreePageGlobalStyles />
        <InteractiveFrameHeader />

        <div
          ref={(element: HTMLDivElement) => (this.canvasParentRef = element)}
          className="canvas-container"
        >
          {this.renderP5("dharma-water-distort.canvas")}
        </div>
      </>
    );
  }
}

export const ThreeCanvasPage: NextPage = () => {
  const themeContext = React.useContext(ColorContext);

  return <ThreePageWithContext colorThemeContext={themeContext} />;
};

export default ThreeCanvasPage;
