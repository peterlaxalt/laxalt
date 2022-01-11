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
import LazyImage from "../../utils/lazyImage";
import { DuotoneImage } from "../DuotoneImage";

// Styles
import {
  HoverGridStyle,
  bottomCenterQuadrantId,
  bottomLeftQuadrantId,
  bottomRightQuadrantId,
  middleLeftQuadrantId,
  middleRightQuadrantId,
  topCenterQuadrantId,
  topLeftQuadrantId,
  topRightQuadrantId,
  rootQuadrantId,
} from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

// HoverGrid
export class HoverGrid extends Component<{}, any> {
  quadrant: React.RefObject<HTMLDivElement>;
  view: React.RefObject<HTMLDivElement>;
  bottomRenderThreshold: number;

  constructor(props: any) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,

      isActive: false,
      quadrantCalculated: false,

      imagesLoaded: false,
      totalImages: 0,
      imageCounter: 0,

      winW: 0,
      winH: 0,

      posX: "center",
      posY: "center",

      cxRatio: 0, // Ratio from the center, 0 is center
      cyRatio: 0, // Ratio from the center, 0 is center

      gX: 0,
      gY: 0,

      rootGridX: 0,
      rootGridY: 0,

      quadW: 0,
      quadH: 0,
    };

    this.quadrant = React.createRef();
    this.view = React.createRef();
    this.bottomRenderThreshold = 0;

    this.killActive = this.killActive.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      winW: window.innerWidth,
      winH: window.innerHeight,

      isActive: true,
    });

    this.loadImages();

    // document.addEventListener("mousedown", this.toggleHoverGridState, false);
    // document.addEventListener("mouseup", this.toggleHoverGridState, false);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousemove", this.setMouseCoords, false);
  }

  // _________________________________
  // Initialize

  init = () => {
    this.findRootQuadrantAndInitializeCoordinates();

    document.addEventListener("mousemove", this.setMouseCoords);

    window.requestAnimationFrame(this.updateGridCoords);
  }

  // _________________________________
  // Active / inactive renderer
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

  // _________________________________
  // Check when all images are loaded
  loadImages = () => {
    let imgs = document.images;
    let count = 0;
    
    this.setState({
      totalImages: imgs.length,
    });

    const incrementCount = () => { 
      count++

      if (count === imgs.length) {
        console.log('Images loaded');

        this.setState({
          imagesLoaded: true,
          imageCounter: count
        })

        this.init();
      }
    };

    Array.from(imgs).forEach((img: HTMLImageElement) => {
      console.log("loading image", count);
      
      if (img.complete) incrementCount();

      else img.addEventListener("load", incrementCount, false);
    });
  };

  // _________________________________
  // Quadrant management
  createQuadrant = (id: string) => {
    let { quadW, quadH } = this.state;
    let { quadrant, view } = this;
    let v = view.current;
    let q = quadrant.current;

    if (v && q && id) {
      if (v.querySelector(`#${id}`)) return;

      let qClone = q.cloneNode(true) as HTMLDivElement;

      qClone.id = id;
      qClone.style.height = `${q.clientHeight}px`;
      qClone.style.width = `${q.clientWidth}px`;

      v.appendChild(qClone);
    } else {
      return;
    }
  };

  destroyQuadrant = (id: string) => {
    let { quadW, quadH } = this.state;
    let { quadrant, view } = this;
    let v = view.current;

    if (!v) return;
    if (!v.querySelector(`#${id}`)) return;

    let el = v.querySelector(`#${id}`);

    v.removeChild(el);
  };

  updateQuadrants = () => {
    let { gX, gY, rootGridX, rootGridY, quadH, quadW, winH, winW } = this.state;

    let leftVisible = gX > rootGridX;
    let topVisible = gY > rootGridY;
    let rightVisible = gX < rootGridX * 2 + winW;
    let bottomVisible = gY < rootGridY * 2 + (winH + (winH * this.bottomRenderThreshold));

    if (leftVisible) {
      this.createQuadrant(middleLeftQuadrantId);
    } else {
      this.destroyQuadrant(middleLeftQuadrantId);
    }

    if (topVisible) {
      this.createQuadrant(topCenterQuadrantId);
    } else {
      this.destroyQuadrant(topCenterQuadrantId);
    }

    if (rightVisible) {
      this.createQuadrant(middleRightQuadrantId);
    } else {
      this.destroyQuadrant(middleRightQuadrantId);
    }

    if (bottomVisible) {
      this.createQuadrant(bottomCenterQuadrantId);
    } else {
      this.destroyQuadrant(bottomCenterQuadrantId);
    }

    // Corners
    if (topVisible && leftVisible) {
      this.createQuadrant(topLeftQuadrantId);
    } else {
      this.destroyQuadrant(topLeftQuadrantId);
    }

    if (topVisible && rightVisible) {
      this.createQuadrant(topRightQuadrantId);
    } else {
      this.destroyQuadrant(topRightQuadrantId);
    }

    if (bottomVisible && rightVisible) {
      this.createQuadrant(bottomRightQuadrantId);
    } else {
      this.destroyQuadrant(bottomRightQuadrantId);
    }

    if (bottomVisible && leftVisible) {
      this.createQuadrant(bottomLeftQuadrantId);
    } else {
      this.destroyQuadrant(bottomLeftQuadrantId);
    }
  };

  // __temporary__createPhantomQuadrants = () => {
  //   let { quadW, quadH } = this.state;
  //   let { quadrant, view } = this;

  //   let v = view.current;
  //   let q = quadrant.current;
  //   let phantom = document.createElement("div");

  //   phantom.style.height = `${q.clientHeight}px`;
  //   phantom.style.width = `${q.clientWidth}px`;

  //   function cloneAndAddNode(
  //     n: HTMLDivElement,
  //     view: HTMLDivElement,
  //     c: string
  //   ) {
  //     let nClone = n.cloneNode(true) as HTMLDivElement;

  //     nClone.id = c;

  //     view.appendChild(nClone);
  //   }

  //   cloneAndAddNode(phantom, v, topLeftQuadrantId);
  //   cloneAndAddNode(phantom, v, middleLeftQuadrantId);
  //   cloneAndAddNode(phantom, v, bottomLeftQuadrantId);

  //   cloneAndAddNode(phantom, v, topCenterQuadrantId);
  //   // Root exists
  //   cloneAndAddNode(phantom, v, bottomCenterQuadrantId);

  //   cloneAndAddNode(phantom, v, topRightQuadrantId);
  //   cloneAndAddNode(phantom, v, middleRightQuadrantId);
  //   cloneAndAddNode(phantom, v, bottomRightQuadrantId);
  // };

  // __temporary__CreateQuadrants = () => {
  //   let { quadW, quadH } = this.state;
  //   let { quadrant, view } = this;

  //   let v = view.current;
  //   let q = quadrant.current;

  //   function cloneAndAddNode(
  //     n: HTMLDivElement,
  //     view: HTMLDivElement,
  //     c: string
  //   ) {
  //     let nClone = n.cloneNode(true) as HTMLDivElement;

  //     nClone.id = c;

  //     view.appendChild(nClone);
  //   }

  //   cloneAndAddNode(q, v, topLeftQuadrantId);
  //   cloneAndAddNode(q, v, middleLeftQuadrantId);
  //   cloneAndAddNode(q, v, bottomLeftQuadrantId);

  //   cloneAndAddNode(q, v, topCenterQuadrantId);
  //   // Root exists
  //   cloneAndAddNode(q, v, bottomCenterQuadrantId);

  //   cloneAndAddNode(q, v, topRightQuadrantId);
  //   cloneAndAddNode(q, v, middleRightQuadrantId);
  //   cloneAndAddNode(q, v, bottomRightQuadrantId);
  // };

  // _________________________________
  // Coordinates
  findRootQuadrantAndInitializeCoordinates = () => {
    let { quadrant } = this;

    let q = quadrant.current;

    q.style.height = `${q.clientHeight}px`;
    q.style.width = `${q.clientWidth}px`;

    if (q) {
      console.log("quadrant:", q);

      this.setInitialGridCoords(q);

      return;
    } else {
      console.log("quadrant not found");
    }
  };

  setInitialGridCoords = (q: HTMLDivElement) => {
    let { innerWidth, innerHeight } = window;
    let winW = innerWidth;
    let winH = innerHeight;

    let qW = q.clientWidth;
    let qH = q.clientHeight;

    let offsetX = qW * -1;
    let offsetY = qH * -1;

    this.setState({
      quadW: qW,
      quadH: qH,

      gX: offsetX,
      gY: offsetY,

      rootGridX: offsetX,
      rootGridY: offsetY,

      quadrantCalculated: true,
    });
  };

  resetGridCoords = (
    x: boolean,
    y: boolean,
    fromBottom: boolean = false,
    fromRight: boolean = true, // not used until > 100vw
    xRemainder: number = 0,
    yRemainder: number = 0
  ) => {
    if (!y && !x) return;

    let { rootGridX, rootGridY, winH, winW } = this.state;

    let yReset = rootGridY;
    let xReset = rootGridX;

    if (fromBottom) {
      yReset = rootGridY * 2 + winH;
    }

    if (fromRight) {
      xReset = rootGridX * 2 + winW;
    }

    if (y && !x) {
      this.setState({
        gY: yReset,
      });
    }

    if (!y && x) {
      this.setState({
        gX: xReset,
      });
    }

    if (y && x) {
      this.setState({
        gX: xReset,
        gY: yReset,
      });
    }

    this.updateQuadrants();
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

    // let prevMouseX = mouseX;
    // let prevMouseY = mouseY;

    // if (prevMouseX == mouseX && prevMouseY == mouseY) return;

    let strength = 13;

    let xSensitivity = 0.995;
    let ySensitivity = 0.995;

    let inc = (r: number) => {
      return strength * (1 - r);
    };

    if (cxRatio <= xSensitivity) {
      if (posX == "right" && gX - inc(cxRatio) >= quadW * -3 + winW) {
        this.setState({
          gX: gX - inc(cxRatio),
        });
      } else {
        if (posX == "right") {
          this.resetGridCoords(true, false);
        }
      }

      if (posX == "left" && gX + inc(cxRatio) <= 0) {
        this.setState({
          gX: gX + inc(cxRatio),
        });
      } else {
        if (posX == "left") {
          this.resetGridCoords(true, false);
        }
      }
    }

    if (cyRatio <= ySensitivity) {
      if (posY == "top" && gY + inc(cyRatio) <= 0) {
        this.setState({
          gY: gY + inc(cyRatio),
        });
      } else {
        if (posY == "top") {
          this.resetGridCoords(false, true);
        }
      }

      if (posY == "bottom" && gY - inc(cyRatio) >= quadH * -3 + winH) {
        this.setState({
          gY: gY - inc(cyRatio),
        });
      } else {
        if (posY == "bottom") {
          this.resetGridCoords(false, true, true);
        }
      }
    }

    this.updateQuadrants();

    window.requestAnimationFrame(this.updateGridCoords);
  };

  // _________________________________
  // Mouse events
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
    let items = [
      {
        src: "/projects/flash/esmerelda-sm.jpg",
        alt: "Esmerelda"
      },
      {
        src: "/projects/flash/rr-sm.jpg",
        alt: "Road Runner"
      },
      {
        src: "/projects/flash/coyote-sm.jpg",
        alt: "Coyote"
      },
      {
        src: "/projects/flash/vvinemulca-sm.jpg",
        alt: "Winnemucca"
      },
      {
        src: "/projects/flash/rooster-sm.jpg",
        alt: "Rooster"
      },
      {
        src: "/projects/flash/ormsby-sm.jpg",
        alt: "Ormsby"
      }
    ]

    return (
      <>
        <HoverGridStyle
          style={{
            [`--c` as any]: 3,
            [`--qh` as any]: `${this.state.quadH}px`,
          }}
          onMouseEnter={() => this.setActive()}
          onMouseLeave={() => this.killActive()}
        >
          <div
            className={`v ${this.state.quadrantCalculated ? "--i" : ""}`}
            style={{
              transform: `translate3d(${this.state.gX}px, ${this.state.gY}px, 0px)`,
            }}
            ref={this.view}
          >
            <div className="q" id={rootQuadrantId} ref={this.quadrant}>
              {items.map((i, idx) => {
                return (
                  <div key={idx} className={`i`}>
                    <div className="i-i">
                      <div className="i-t">
                        <img
                          src={i.src}
                          alt={i.alt}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </HoverGridStyle>

        {/* <div className={`_dbg`}>
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
          totalImages: <strong>{this.state.totalImages}</strong>
          <br />
          imageCounter: <strong>{this.state.imageCounter}</strong>
          <br />
          imagesLoaded:{" "}
          <strong>{this.state.imagesLoaded ? "true" : "false"}</strong>
        </div> */}
      </>
    );
  }
}
