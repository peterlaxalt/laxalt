// Core
import React, { Component } from "react";

// Utils
import dynamic from "next/dynamic";

// Theme
import { Theme } from "../../constants/Theme";

// Types
import { LXLT_GLSL_Canvas } from "../../sketches/p5/glsl";
import { createGlobalStyle } from "styled-components";
import { InteractiveFrameHeader } from "../../components/_interactive/InteractiveFrameHeader";

// Begin Component
// __________________________________________________________________________

type LXLT_P5Wrapper = any;

type LXLT_P5Page = {};
type LXLT_P5Page_State = {
  domLoaded: boolean;
  windowWidth: number;
  windowHeight: number;
  backgroundColor: string;
};

const P5Wrapper: LXLT_P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

class P5Page extends Component<LXLT_P5Page, LXLT_P5Page_State> {
  constructor(props) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,
      backgroundColor: Theme.Color.Background,
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
      this.state.backgroundColor
    );

    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    const GlobalScrollLock = createGlobalStyle`
      body, html {
        overflow: hidden;
      }
    `;

    return (
      <>
        <GlobalScrollLock />
        <InteractiveFrameHeader />
        {this.state.domLoaded &&
        this.state.windowHeight > 10 &&
        this.state.windowWidth > 10 ? (
          <div
            className="dharma-container"
            style={{
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.renderP5("dharma")}
          </div>
        ) : null}
      </>
    );
  }
}

export default P5Page;
