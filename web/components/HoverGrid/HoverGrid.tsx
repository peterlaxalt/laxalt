/**
 *
 * HoverGrid.js
 * @author Peter Laxalt
 * @description The website HoverGrid.
 *
 */

// Core
import { timeStamp } from "console";
import React, { Component, createRef } from "react";
import { createGlobalStyle } from "styled-components";

// Styles
import { HoverGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

// HoverGrid
export class HoverGrid extends Component<{}, any> {
  quadrant: React.RefObject<HTMLDivElement>;
  view: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,

      isActive: false,

      winW: 0,
      winH: 0,

      posX: "center",
      posY: "center",

      cxRatio: 0, // Ratio from the center, 0 is center
      cyRatio: 0, // Ratio from the center, 0 is center

      gX: 0,
      gY: 0,

      quadW: 0,
      quadH: 0,
    };

    this.quadrant = React.createRef();
    this.view = React.createRef();

    this.killActive = this.killActive.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      winW: window.innerWidth,
      winH: window.innerHeight,
      isActive: true,
    });

    this.setQuadrantCoords();
    this.createQuadrants();

    document.addEventListener("mousemove", this.setMouseCoords);

    window.requestAnimationFrame(this.updateGridCoords);

    // document.addEventListener("mousedown", this.toggleHoverGridState, false);
    // document.addEventListener("mouseup", this.toggleHoverGridState, false);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousemove", this.setMouseCoords, false);
  }

  killActive = () => {
    let { isActive } = this.state;

    if (isActive) {
      this.setState({
        isActive: false,
      });
    } else {
      return;
    }
  };

  setActive = () => {
    let { isActive } = this.state;

    if (isActive) {
      return;
    } else {
      this.setState({
        isActive: true,
      });
    }
  };

  createQuadrants = () => {
    let { quadrant, view } = this;

    let v = view.current;
    let q = quadrant.current;

    function cloneAndAddNode(
      n: HTMLDivElement,
      view: HTMLDivElement,
      c: string
    ) {
      let nClone = n.cloneNode(true) as HTMLDivElement;

      nClone.classList.remove("--root");
      nClone.classList.add(c);

      view.appendChild(nClone);
    }

    cloneAndAddNode(q, v, "--1a");
    cloneAndAddNode(q, v, "--2a");
    cloneAndAddNode(q, v, "--3a");
    cloneAndAddNode(q, v, "--1b");
    cloneAndAddNode(q, v, "--3b");
    cloneAndAddNode(q, v, "--1c");
    cloneAndAddNode(q, v, "--2c");
    cloneAndAddNode(q, v, "--3c");
  };

  setQuadrantCoords = () => {
    let { mouseX, mouseY, winH, winW } = this.state;
    let { quadrant } = this;

    let q = quadrant.current;

    if (q) {
      console.log("quadrant:", q);

      this.setGridCoords(q);

      return;
    } else {
      console.log("quadrant not found");
    }
  };

  setGridCoords = (q: HTMLDivElement) => {
    let qW = q.clientWidth;
    let qH = q.clientHeight;

    this.setState({
      quadW: qW,
      quadH: qH,

      gX: qW * -1,
      gY: qH * -1,
    });
  };

  updateGridCoords = () => {
    let {
      mouseX,
      mouseY,
      winH,
      winW,
      cxRatio,
      cyRatio,
      posX,
      posY,
      quadW,
      quadH,
      gX,
      gY,
      isActive,
    } = this.state;

    if (!isActive) {
      window.requestAnimationFrame(this.updateGridCoords);

      return;
    }

    let prevMouseX = mouseX;
    let prevMouseY = mouseY;

    // if (prevMouseX == mouseX && prevMouseY == mouseY) return;

    let strength = 20;

    let xSensitivity = 0.995;
    let ySensitivity = 0.995;

    let inc = (r: number) => {
      return strength * (1 - r);
    };

    if (cxRatio <= xSensitivity) {
      if (posX == "right" && gX - inc(cxRatio) >= quadW * -2) {
        this.setState({
          gX: gX - inc(cxRatio),
        });
      }

      if (posX == "left" && gX + inc(cxRatio) <= 0) {
        this.setState({
          gX: gX + inc(cxRatio),
        });
      }
    }

    if (cyRatio <= ySensitivity) {
      if (posY == "top" && gY + inc(cyRatio) <= 0) {
        this.setState({
          gY: gY + inc(cyRatio),
        });
      }

      if (posY == "bottom" && gY - inc(cyRatio) >= quadH * -2) {
        this.setState({
          gY: gY - inc(cyRatio),
        });
      }
    }

    window.requestAnimationFrame(this.updateGridCoords);
  };

  setMouseCoords = (e: MouseEvent) => {

    if (!this.state.isActive) {
      this.setActive();
    }

    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });

    this.setMousePosition();
  };

  setMousePosition = () => {
    let { mouseX, mouseY, winH, winW } = this.state;

    let cY = winH / 2;
    let cX = winW / 2;

    let cxRatio = cX;
    let cyRatio = 0;

    let l = false;
    let r = false;
    let t = false;
    let b = false;

    let pos = "initial";

    let x = "initial";
    let y = "initial";

    // Center ratio
    if (mouseX <= cX) {
      cxRatio = mouseX / cX;
    }

    if (mouseX > cX) {
      cxRatio = (winW - mouseX) / cX;
    }

    if (mouseY <= cY) {
      cyRatio = mouseY / cY;
    }

    if (mouseY > cY) {
      cyRatio = (winH - mouseY) / cY;
    }

    // Positions
    if (mouseX < cX) {
      l = true;
      r = false;

      x = "left";
    }

    if (mouseX > cX) {
      l = false;
      r = true;

      x = "right";
    }

    if (mouseX == cX) {
      l = false;
      r = false;

      x = "center";
    }

    if (mouseY > cY) {
      b = true;
      t = false;

      y = "bottom";
    }

    if (mouseY < cY) {
      b = false;
      t = true;

      y = "top";
    }

    if (mouseY == cY) {
      b = false;
      t = false;

      y = "center";
    }

    this.setState({
      posY: y,
      posX: x,

      cxRatio: cxRatio,
      cyRatio: cyRatio,
    });
  };

  render() {
    let items = [1, 2, 3, 4, 5, 6];

    return (
      <>
        <HoverGridStyle
          style={{
            [`--c` as any]: 3,
          }}
          onMouseEnter={() => this.setActive()}
          onMouseLeave={() => this.killActive()}
        >
          <div
            className="v"
            style={{
              transform: `translate(${this.state.gX}px, ${this.state.gY}px)`,
            }}
            ref={this.view}
          >
            <div className="q --root" ref={this.quadrant}>
              {items.map((i, idx) => {
                return (
                  <div className={`i i--${i}`}>
                    <div data-i={i} className="i-i" />
                  </div>
                );
              })}
            </div>
          </div>
        </HoverGridStyle>

        {/* <div className={`_dbg ${this.state.mouseX}`}>
          mouseX: <strong>{this.state.mouseX} </strong>
          <br />
          mouseY: <strong>{this.state.mouseY} </strong>
          <br />
          winW: <strong>{this.state.winW} </strong>
          <br />
          winH: <strong>{this.state.winH} </strong>
          <br />
          posY: <strong>{this.state.posY}</strong>
          <br />
          posX: <strong>{this.state.posX}</strong>
          <br />
          cxRatio: <strong>{this.state.cxRatio}</strong>
          <br />
          cyRatio: <strong>{this.state.cyRatio}</strong>
          <br />
          gX: <strong>{this.state.gX}</strong>
          <br />
          gY: <strong>{this.state.gY}</strong>
          <br />
          quadW: <strong>{this.state.quadW}</strong>
          <br />
          quadH: <strong>{this.state.quadH}</strong>
          <br />
        </div> */}
      </>
    );
  }
}
