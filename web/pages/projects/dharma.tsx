// Core
import React, { Component } from "react";

// Utils
import dynamic from "next/dynamic";

// Theme
// import { Theme } from "../../constants/Theme";

// Types
import { LXLT_GLSL_Canvas } from "../../sketches/p5/glsl";
import { createGlobalStyle } from "styled-components";
import { InteractiveFrameHeader } from "../../components/_interactive/InteractiveFrameHeader";
import { ColorContext, LXLT_ColorTheme } from "../../constants/styles/Color";
import { NextPage } from "next";
import { FadeIn } from "../../constants/styles/Animation";

// Begin Component
// __________________________________________________________________________

type LXLT_P5Wrapper = any;

type LXLT_P5Page = {
  colorThemeContext: LXLT_ColorTheme;
};

type LXLT_P5Page_State = {
  domLoaded: boolean;
  windowWidth: number;
  windowHeight: number;
};

const P5Wrapper: LXLT_P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <></>,
  ssr: false,
});

class P5PageWithContext extends Component<LXLT_P5Page, LXLT_P5Page_State> {
  constructor(props) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,
    };
  }

  componentDidMount() {
    if (typeof window) {
      this.setState({
        windowWidth: window.innerWidth - 80,
        windowHeight: window.innerHeight - 80,
        domLoaded: true,
      });
    }
  }

  renderP5 = (filename: string) => {
    const sketch: LXLT_GLSL_Canvas = require(`../../sketches/p5/${filename}`).default(
      this.state.windowWidth,
      this.state.windowHeight,
      1,
      this.props.colorThemeContext
    );

    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    const DharmaGlobalStyles = createGlobalStyle`
      body, html {
        overflow: hidden;
      }

      .dharma-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        canvas {
          animation: ${FadeIn} 1s ease 1;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
        }

        #p5_loading {
          display: none !important;
        }
      }
    `;

    return (
      <>
        <DharmaGlobalStyles />
        <InteractiveFrameHeader />
        {this.state.domLoaded &&
        this.state.windowHeight > 10 &&
        this.state.windowWidth > 10 ? (
          <div className="dharma-container">{this.renderP5("dharma")}</div>
        ) : null}
      </>
    );
  }
}

export const DharmaCanvasPage: NextPage = () => {
  const themeContext = React.useContext(ColorContext);

  return <P5PageWithContext colorThemeContext={themeContext} />;
};

export default DharmaCanvasPage;
