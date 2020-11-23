// Core
import React, { Component } from "react";

// Utils
import dynamic from "next/dynamic";

// Theme
import { Theme } from "../../constants/Theme";

// Types
import { LXLT_GLSL_Canvas } from "../../sketches/p5/glsl";

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
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
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
    return <div className="container">{this.renderP5("glsl")}</div>;
  }
}

export default P5Page;
