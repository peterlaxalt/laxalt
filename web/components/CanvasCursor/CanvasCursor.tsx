/**
 *
 * Cursor.js
 * @author Peter Laxalt
 * @description The website Cursor.
 *
 */

// Core
import React, { Component, createRef, PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

// Styles
import { CanvasCursorStyle, CanvasCursorClassName } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LXLT_CanvasCursor = {};

export type LXLT_CanvasCursor_State = {
  mouseX: number;
  mouseY: number;
  mouseCursor: {
    radius: number;
    lastX: number;
    lastY: number;
  };

  vw: number;
  vh: number;
};

// Cursor
export class CanvasCursor extends PureComponent<
  LXLT_CanvasCursor,
  LXLT_CanvasCursor_State
> {
  ctx: CanvasRenderingContext2D;

  constructor(props: LXLT_CanvasCursor) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,

      mouseCursor: {
        radius: 10,
        lastX: 0,
        lastY: 0,
      },

      vw: 0,
      vh: 0,
    };

    // this.setCursorPosition = this.setCursorPosition.bind(this);
    this.ctx;
    this.calculateSize = this.calculateSize.bind(this);
  }

  componentDidMount() {
    this.calculateSize();

    this.setState({
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,

      mouseCursor: {
        radius: 10,
        lastX: window.innerWidth / 2,
        lastY: window.innerHeight / 2,
      },
    });

    this.ctx = this.canvasRef.current.getContext('2d');

    window.addEventListener("mousemove", this.updateMouseCoords);
    window.addEventListener("resize", this.calculateSize, false);
  }

  calculateSize() {
    this.setState({
      vw: window.innerWidth,
      vh: window.innerHeight,
    });

    if (this.canvasRef) {
      this.canvasRef.current.width = window.innerWidth;
      this.canvasRef.current.height = window.innerHeight;
    }
  }

  updateMouseCoords() {}

  /**
   *
   * @name Set Cursor Position
   * @param e : Event from "mousemove" event listener.
   * @description This positions the Cursor throughout the page.
   *
   */
  // setCursorPosition = (e: any) => {
  //   let xPos = this.state.mouseX - this.state.mouseSize / 2;
  //   let yPos = this.state.mouseY - this.state.mouseSize / 2;

  //   let dX = this.state.mouseX - this.state.xPos;
  //   let dY = this.state.mouseY - this.state.yPos;

  //   this.setState({
  //     xPos: xPos + dX / 10,
  //     yPos: yPos + dY / 10,
  //     mouseX: e.clientX,
  //     mouseY: e.clientY,
  //     opacity: 1,
  //   });
  // };

  canvasRef: React.RefObject<HTMLCanvasElement> = createRef<HTMLCanvasElement>();

  render() {
    // const UniversallyHideCursor = createGlobalStyle`
    //   body, html {
    //     cursor: none !important;

    //     a {
    //       cursor: none !important;
    //     }

    //     * {
    //       cursor: none !important;
    //     }
    //   }
    // `;

    return (
      <>
        {/* <UniversallyHideCursor /> */}
        <CanvasCursorStyle
          ref={this.canvasRef}
          className={`${CanvasCursorClassName}`}
        />
      </>
    );
  }
}
