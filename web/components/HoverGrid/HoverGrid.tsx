/**
 *
 * HoverGrid.js
 * @author Peter Laxalt
 * @description The website HoverGrid.
 *
 */

// Core
import React, { Component, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { LockBodyScroll } from "../../constants/styles/CssUtils";
import shuffle from "../../utils/shuffle";

// Styles
import {
  HoverGridDesktopStyle,
  HoverGridTouchCapableStyle,
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

type LXLT_HoverGrid = {
  items: any[];
};

// HoverGrid
class HoverGridDesktop extends Component<LXLT_HoverGrid, any> {
  rootQuadrant: React.RefObject<HTMLDivElement>;
  view: React.RefObject<HTMLDivElement>;
  deadItem: React.RefObject<HTMLDivElement>;
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

      items: shuffle(this.props.items),
    };

    this.rootQuadrant = React.createRef();
    this.view = React.createRef();
    this.deadItem = React.createRef();
    this.bottomRenderThreshold = 0;

    this.killActive = this.killActive.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      winW: window.innerWidth,
      winH: window.innerHeight,

      isActive: true,

      items: this.state.items,
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
  };

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
      count++;

      if (count === imgs.length) {
        console.log("Images loaded");

        this.setState({
          imagesLoaded: true,
          imageCounter: count,
        });

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
    let { rootQuadrant, view } = this;
    let v = view.current;
    let q = rootQuadrant.current;

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
    let { rootQuadrant, view } = this;
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
    let bottomVisible = gY < rootGridY * 2 + (winH + winH);

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

  // createQuadrantClones = () => {
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
    let { rootQuadrant } = this;

    let q = rootQuadrant.current;

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

    let strength = winW > 1600 ? 15 : 5;

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
          this.resetGridCoords(true, false, false, true);
        }
      }

      if (posX == "left" && gX + inc(cxRatio) <= 0) {
        this.setState({
          gX: gX + inc(cxRatio),
        });
      } else {
        if (posX == "left") {
          this.resetGridCoords(true, false, false, false);
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

    window.requestAnimationFrame(this.updateQuadrants);
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
    let cyRatio = cY;

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
    return (
      <>
        <HoverGridDesktopStyle
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
            <div className="q" id={rootQuadrantId} ref={this.rootQuadrant}>
              <div className={`i --dead`} ref={this.deadItem} />
              {this.state.items.map((i, idx) => {
                return (
                  <div key={idx} className={`i`}>
                    <div className="i-i">
                      <div className="i-t">
                        <img src={i.src} alt={i.alt} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </HoverGridDesktopStyle>

        <div className={`_dbg`} style={{ display: "none" }}>
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
        </div>
      </>
    );
  }
}

// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// Touch capable only
class HoverGridTouchCapable extends Component<LXLT_HoverGrid, any> {
  rootQuadrant: React.RefObject<HTMLDivElement>;
  view: React.RefObject<HTMLDivElement>;
  scrollContainer: React.RefObject<HTMLDivElement>;
  deadItem: React.RefObject<HTMLDivElement>;
  bottomRenderThreshold: number;
  quadrantObserver: IntersectionObserver;

  constructor(props: any) {
    super(props);

    this.state = {
      scrollX: 0,
      scrollY: 0,

      prevScrollX: 0,
      prevScrollY: 0,

      scrollW: 0,
      scrollH: 0,

      scrollDir: {
        x: null, // 'left', 'right'
        y: null // 'up', 'down'
      },

      col: 0,
      totalCol: 3,
      row: 0,
      totalRow: 3,

      matrix: {
        [topLeftQuadrantId]: this.createQuadrantMatrix(1, 1, true, null, null),
        [middleLeftQuadrantId]: this.createQuadrantMatrix(1, 2, false, null, null),
        [bottomLeftQuadrantId]: this.createQuadrantMatrix(1, 3, false, null, null),

        [topCenterQuadrantId]: this.createQuadrantMatrix(2, 1, true, null, null),
        [rootQuadrantId]: this.createQuadrantMatrix(2, 2, true, null, null),
        [bottomCenterQuadrantId]: this.createQuadrantMatrix(2, 3, false, null, null),

        [topRightQuadrantId]: this.createQuadrantMatrix(3, 1, false, null, null),
        [middleRightQuadrantId]: this.createQuadrantMatrix(3, 2, false, null, null),
        [bottomRightQuadrantId]: this.createQuadrantMatrix(3, 3, false, null, null),
      },

      activeQuadrants: [rootQuadrantId],
      inactiveQuadrants: [
        topLeftQuadrantId, 
        middleLeftQuadrantId, 
        bottomLeftQuadrantId, 
        topCenterQuadrantId, 
        bottomCenterQuadrantId,
        topRightQuadrantId,
        middleRightQuadrantId,
        bottomRightQuadrantId
      ],

      isActive: false,
      quadrantCalculated: false,
      observerInitialized: false,
      imagesLoaded: false,
      totalImages: 0,
      imageCounter: 0,

      winW: 0,
      winH: 0,

      rootGridX: 0,
      rootGridY: 0,

      quadW: 0,
      quadH: 0,

      quadrantObserver: null,

      items: shuffle(this.props.items),
    };

    this.rootQuadrant = React.createRef();
    this.view = React.createRef();
    this.deadItem = React.createRef();
    this.scrollContainer = React.createRef();
    this.bottomRenderThreshold = 0;

    this.killActive = this.killActive.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(): void {
    this.setState(
      {
        winW: window.innerWidth,
        winH: window.innerHeight,

        isActive: true,

        items: this.state.items,
      },
      this.loadImagesAndInitialize
    );
  }

  componentWillUnmount(): void {
    this.killScrollEventListeners();
  }

  // _________________________________
  // Initialize

  init = () => {
    this.initializeScrollEventListenersAndObservers();
  };

  // _________________________________
  // Scroll managers & listeners
  initializeScrollEventListenersAndObservers = () => {
    if (this.scrollContainer && this.scrollContainer.current) {
      let _sc = this.scrollContainer.current;

      _sc.addEventListener("scroll", this.handleScroll);

      this.setState(
        {
          scrollW: _sc.scrollWidth,
          scrollH: _sc.scrollHeight,
          observerInitialized: true,
        },
        () => this.initializeQuadrantCalcs(this.setInitialScrollPosition)
      );
    }
  };

  killScrollEventListeners = () => {
    if (this.scrollContainer && this.scrollContainer.current) {
      let _sc = this.scrollContainer.current;

      _sc.removeEventListener("scroll", this.handleScroll);
    }
  };

  handleScroll = () => {
    this.updateScrollPosition();
  };

  updateScrollPosition = () => {
    let _sc = this.scrollContainer.current;
    let _scrollX = _sc.scrollLeft;
    let _scrollY = _sc.scrollTop;
    let _prevScrollX = this.state.scrollX;
    let _prevScrollY = this.state.scrollY;

    let _dir = {
      x: _prevScrollX >= _scrollX ? 'left' : 'right',
      y: _prevScrollY >= _scrollY ? 'up' : 'down'
    }

    // console.log(`x: ${_sc.scrollLeft}, y: ${_sc.scrollTop}`, _sc);

    this.setState(
      {
        scrollX: _scrollX,
        scrollY: _scrollY,

        scrollDir: _dir,

        prevScrollX: _prevScrollX,
        prevScrollY: _prevScrollY,
      }, this.updateGrid
    );
  };

  setInitialScrollPosition = () => {
    let { quadW, quadH, winW, winH } = this.state;

    let _sc = this.scrollContainer.current;
    let _q = this.rootQuadrant.current;

    let scrollLeft = quadW;
    let scrollTop = quadH;

    _sc.scrollLeft = scrollLeft;
    _sc.scrollTop = scrollTop;

    this.setState(
      {
        scrollX: scrollLeft,
        scrollY: scrollTop,
      },
      this.createQuadrantClones
    );
  };

  updateGrid = () => {
    let { quadW, quadH, totalCol, totalRow, winW, winH, scrollX, scrollY } = this.state;
    let _sc = this.scrollContainer.current;
    let _q = this.rootQuadrant.current;

    let xThreshold = winW / 2;
    let yThreshold = winH / 2;

    let xOffset = quadW * totalCol - winW - xThreshold;
    let yOffset = quadH * totalRow - winH - xThreshold;

    let currentCol = (scrollX / quadW) + 1;
    let currentRow = (scrollY / quadH) + 1;

    const _updateTotals = (r, c) => {      
      let totalColUpdate = scrollX >= xOffset ? c + 1 : c;
      let totalRowUpdate = scrollY >= yOffset ? r + 1 : r;

      this.setState(
        {
          totalCol: totalColUpdate,
          totalRow: totalRowUpdate
        }
      );
    }

    this.setState({
      row: currentRow,
      col: currentCol
    }, () => _updateTotals(totalRow, totalCol))

    
  };

  // _________________________________
  // Intersection Observers

  createObserver = (id) => {
    return new IntersectionObserver(
      (entries, observer) => this.handleObserver(id, entries, observer),
      this.observerOptions()
    );
  };

  observerOptions = () => {
    let { scrollContainer } = this;
    let { winW, winH } = this.state;

    let sc = scrollContainer.current;

    let options = {
      root: sc,
      rootMargin: `0px`,
      // threshold: [0, 0.25, 0.5, 0.75, 1],
      threshold: this.buildThresholdList(100),
    };

    return options;
  };

  buildThresholdList = (s) => {
    let thresholds = [];
    let numSteps = s;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);

    return thresholds;
  };

  handleObserver = (id, entries, observer) => {
    console.log(
      `handleObserver(${id}) ratio`,
      entries[0].intersectionRatio
    );
    console.log(`handleObserver(${id}) entries`, entries);
    console.log(`handleObserver(${id}) observer`, observer);

    let prevMatrix = this.state.matrix;

    this.updateQuadrantCoordinates(entries, id, prevMatrix);
  };
  
  generateObserverMatrix = (e, id, prevMatrix) => {
    let isActive = e.intersectionRatio > 0 ? true : false;

    return this.createQuadrantMatrix(prevMatrix[id].x, prevMatrix[id].y, isActive, e.intersectionRatio, prevMatrix[id].r)
  }

  addObservers = (store) => {
    let { rootQuadrant, quadrantObserver } = this;

    let q = rootQuadrant.current;
    let _observer = this.createObserver(rootQuadrantId);

    if (store && q) {
      if (_observer) {
        _observer.observe(rootQuadrant.current);
      }

      store.map((clone) => {
        let _cloneObserver = this.createObserver(clone.id);
        _cloneObserver.observe(clone);
      });
    }
  };

  // _________________________________
  // Check when all images are loaded
  loadImagesAndInitialize = () => {
    let imgs = document.images;
    let count = 0;

    this.setState({
      totalImages: imgs.length,
    });

    const incrementCount = () => {
      count++;

      if (count === imgs.length) {
        console.log("Images loaded");

        this.setState(
          {
            imagesLoaded: true,
            imageCounter: count,
          },
          this.init
        );
      }
    };

    Array.from(imgs).forEach((img: HTMLImageElement) => {
      console.log("loading image", count);

      if (img.complete) incrementCount();
      else img.addEventListener("load", incrementCount, false);
    });
  };

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
  // Quadrant management
  updateQuadrantCoordinates = (entries, id, prevMatrix) => {
  
    entries.map((e) => {
      let newQuadrantMatrix = this.generateObserverMatrix(e, id, prevMatrix);
      
      let isActive = newQuadrantMatrix.a;
      let prevActiveQuadrants = this.state.activeQuadrants;
      let prevInactiveQuadrants = this.state.inactiveQuadrants;

      let _activeQuadrants = prevActiveQuadrants;
      let _inactiveQuadrants = prevInactiveQuadrants;

      let alreadyActiveQuadrant = _activeQuadrants.includes(id);
      let alreadyInactiveQuadrant = _inactiveQuadrants.includes(id);

      if (isActive) {
        if (!alreadyActiveQuadrant) {
          _activeQuadrants.push(id);
          _inactiveQuadrants = _inactiveQuadrants.filter((i) => i != id);
        }
      } else {
        if (!alreadyInactiveQuadrant) {
          _inactiveQuadrants.push(id);
          _activeQuadrants = _activeQuadrants.filter((i) => i != id);
        }
      }
      
      this.updateQuadrantAttr(id, newQuadrantMatrix);

      let newMatrix = {
        ... prevMatrix,
        [id]: newQuadrantMatrix 
      }

      this.setState({
        matrix: newMatrix,
        activeQuadrants: _activeQuadrants,
        inactiveQuadrants: _inactiveQuadrants,
      }, () => console.log(`updateQuadrantCoordinates(${id}) updated matrix`, this.state.matrix))
    })
  }
  
  updateGridPositioning = () => {

  }

  createQuadrantMatrix = (x, y, active, ratio, prevRatio) => {
    return {
      x: x,
      y: y,
      a: active,
      r: ratio,
      pR: prevRatio,
    };
  };


  initializeQuadrantCalcs = (callback) => {
    if (this.rootQuadrant && this.rootQuadrant.current) {
      let _q = this.rootQuadrant.current;

      this.setState(
        {
          quadW: _q.clientWidth,
          quadH: _q.clientHeight,
          quadrantCalculated: true,
        },
        callback
      );
    }
  };

  quadrantStyleAttr = (matrix) => {
    return `--x: ${matrix.x}; --y: ${matrix.y};`;
  };

  updateQuadrantAttr = (id, matrix) => {
    let q = document.getElementById(id);

    if (q) {
      q.setAttribute("style", this.quadrantStyleAttr(matrix));
      q.setAttribute("aria-hidden", matrix.a ? 'false' : 'true')
    }
  }

  createQuadrantClones = () => {
    let { rootQuadrant, view, quadrantStyleAttr, quadrantObserver } = this;

    let q = rootQuadrant.current;
    let v = view.current;
    let qCloneStore = [];

    const cloneAndAddNode = (id: string) => {
      let qClone = q.cloneNode(true) as HTMLDivElement;

      qClone.id = id;
      qClone.setAttribute("style", quadrantStyleAttr(this.state.matrix[id]));

      if (quadrantObserver) {
        quadrantObserver.observe(qClone);
      }

      v.appendChild(qClone);
      qCloneStore.push(qClone);
    };

    cloneAndAddNode(topLeftQuadrantId);
    cloneAndAddNode(middleLeftQuadrantId);
    cloneAndAddNode(bottomLeftQuadrantId);

    cloneAndAddNode(topCenterQuadrantId);
    // Root exists
    cloneAndAddNode(bottomCenterQuadrantId);

    cloneAndAddNode(topRightQuadrantId);
    cloneAndAddNode(middleRightQuadrantId);
    cloneAndAddNode(bottomRightQuadrantId);

    this.addObservers(qCloneStore);
  };

  render() {
    return (
      <>
        <HoverGridTouchCapableStyle ref={this.scrollContainer}>
          <div
            className={`v ${this.state.quadrantCalculated ? "--i" : ""}`}
            ref={this.view}
            style={{
              [`--c` as any]: this.state.totalCol,
              [`--r` as any]: this.state.totalRow,
              [`--qh` as any]: `${this.state.quadH}px`,
              [`--qw` as any]: `${this.state.quadW}px`,
            }}
          >
            <div
              className="q"
              id={rootQuadrantId}
              ref={this.rootQuadrant}
              style={{
                [`--x` as any]: this.state.matrix[rootQuadrantId].x,
                [`--y` as any]: this.state.matrix[rootQuadrantId].y,
              }}
            >
              {/* <div className={`i --dead`} ref={this.deadItem} /> */}
              {this.state.items.map((i, idx) => {
                return (
                  <div key={idx} className={`i`}>
                    <div className="i-i">
                      <div className="i-t">
                        <img src={i.src} alt={i.alt} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </HoverGridTouchCapableStyle>

        <div className={`_dbg`}>
          imagesLoaded:{" "}
          <strong>{this.state.imagesLoaded ? "true" : "false"}</strong>
          <br />
          observerInitialized:{" "}
          <strong>{this.state.observerInitialized ? "true" : "false"}</strong>
          <br />
          scrollX: <strong>{this.state.scrollX} </strong>
          <br />
          scrollY: <strong>{this.state.scrollY} </strong>
          <br />
          scrollDir: <strong>{this.state.scrollDir.x} / {this.state.scrollDir.y}</strong>
          <br />
          scrollW: <strong>{this.state.scrollW} </strong>
          <br />
          scrollH: <strong>{this.state.scrollH} </strong>
          <br />
          row: <strong>{this.state.row} </strong>
          <br />
          col: <strong>{this.state.col} </strong>
          <br />
          totalCol: <strong>{this.state.totalCol} </strong>
          <br />
          totalRow: <strong>{this.state.totalRow} </strong>
          <br />
          activeQuadrants: <strong>{this.state.activeQuadrants.length}</strong>
          <br />
          inactiveQuadrants: <strong>{this.state.inactiveQuadrants.length}</strong>
          <br />
          winW: <strong>{this.state.winW} </strong>
          <br />
          winH: <strong>{this.state.winH} </strong>
          <br />
          quadW: <strong>{this.state.quadW} </strong>
          <br />
          quadH: <strong>{this.state.quadH} </strong>
        </div>
      </>
    );
  }
}

export const HoverGrid = () => {
  const [isTouchCapable, setTouchCapable] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setTouchCapable(true);
      setLoading(false);
    } else {
      setTouchCapable(false);
      setLoading(false);
    }
  });

  const items = [
    {
      src: "/projects/flash/esmerelda-sm.jpg",
      alt: "Esmerelda",
    },
    {
      src: "/projects/flash/rr-sm.jpg",
      alt: "Road Runner",
    },
    {
      src: "/projects/flash/coyote-sm.jpg",
      alt: "Coyote",
    },
    {
      src: "/projects/flash/vvinemulca-sm.jpg",
      alt: "Winnemucca",
    },
    {
      src: "/projects/flash/rooster-sm.jpg",
      alt: "Rooster",
    },
    {
      src: "/projects/flash/ormsby-sm.jpg",
      alt: "Ormsby",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/5917586/deso-full-sheet_4x.jpg?compress=1&resize=1000x750",
      alt: "Deso",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/6247770/drib-snakepin-dribbbb_4x.jpg?compress=1&resize=1000x750",
      alt: "Dribbble",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/5917614/csf-containers_4x.jpg?compress=1&resize=1000x750",
      alt: "Communion",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/6860552/nv-9_4x.jpg?compress=1&resize=1000x750",
      alt: "Nonvector",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/6860546/nv-4_4x.jpg?compress=1&resize=1600x1200&vertical=top",
      alt: "Nonvector",
    },
    {
      src: "/projects/allships/crazy-gif.gif",
      alt: "Allships",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/14085110/media/8a7b13906dc241f63f4d21dcf8988f24.png?compress=1&resize=1000x750",
      alt: "Full Spectrum Hemp",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/5058990/localyyz-anim-render-loop.gif",
      alt: "Localyyz",
    },
    {
      src: "https://cdn.dribbble.com/users/221507/screenshots/4179206/alarm-interact-drib.gif",
      alt: "Eight Sleep",
    },
  ];

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : isTouchCapable ? (
        <HoverGridTouchCapable items={items} />
      ) : (
        <HoverGridDesktop items={items} />
      )}
    </>
  );
};
