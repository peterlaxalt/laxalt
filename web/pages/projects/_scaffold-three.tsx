import React, { Component } from "react";

import { createGlobalStyle } from "styled-components";
import { FadeIn } from "../../constants/styles/Animation";

import { InteractiveFrameHeader } from "../../components/InteractiveFrameHeader";

import { ThreeCanvas } from "../../sketches/three/_scaffold-three-canvas";

import { NextPage } from "next";
import { ColorContext, LXLT_ColorTheme } from "../../constants/styles/Color";

// ______________________________________________________________

type LXLT_ThreePage = {
  colorThemeContext: LXLT_ColorTheme;
};

type LXLT_ThreeRootElement = {
  el: HTMLDivElement;
  theme: LXLT_ColorTheme;
};

type LXLT_ThreePage_State = {
  domLoaded: boolean;
  windowWidth: number;
  windowHeight: number;
  canvasTheme: LXLT_ColorTheme;
};

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
      canvasTheme: undefined,
    };
  }

  private threeRootElement: LXLT_ThreeRootElement;

  componentDidMount() {
    if (typeof window) {
      this.setState({
        windowWidth: window.innerWidth - 80,
        windowHeight: window.innerHeight - 80,
        domLoaded: true,
        canvasTheme: this.props.colorThemeContext,
      });

      ThreeCanvas(this.threeRootElement.el, this.props.colorThemeContext);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: LXLT_ThreePage) {
    if (nextProps.colorThemeContext != this.state.canvasTheme) {
      this.setState({
        canvasTheme: this.props.colorThemeContext,
      });
    }
  }

  render() {
    const ThreePageGlobalStyles = createGlobalStyle`
      body, html {
        overflow: hidden;
      }

      .three-container {
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
        <ThreePageGlobalStyles />
        <InteractiveFrameHeader />
        <div
          ref={(element: HTMLDivElement) =>
            (this.threeRootElement = {
              el: element,
              theme: this.state.canvasTheme,
            })
          }
          className="three-container"
        />
      </>
    );
  }
}

export const ThreeCanvasPage: NextPage = () => {
  const themeContext = React.useContext(ColorContext);

  return <ThreePageWithContext colorThemeContext={themeContext} />;
};

export default ThreeCanvasPage;
