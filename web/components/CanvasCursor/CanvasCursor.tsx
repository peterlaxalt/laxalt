/**
 *
 * Cursor.js
 * @author Peter Laxalt
 * @description The website Cursor.
 *
 */

// Core
import React, { createRef, PureComponent } from "react";

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

    this.ctx;
    this.calculateSize = this.calculateSize.bind(this);
    this.renderMouse = this.renderMouse.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    // _____________________
    // Setup our sizes
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

    // _____________________
    // Update initial coordinates
    this.updateMouseCoords();

    window.addEventListener("mousemove", (e) => {
      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      });
    });
    window.addEventListener("resize", this.calculateSize, false);
  }

  // ______________________________
  // Calculate Sizes
  calculateSize() {
    this.setState({
      vw: window.innerWidth,
      vh: window.innerHeight,
    });

    if (this.canvasRef.current) {
      this.canvasRef.current.width = window.innerWidth;
      this.canvasRef.current.height = window.innerHeight;
    }
  }

  // ______________________________
  // Canvas Reference
  canvasRef: React.RefObject<HTMLCanvasElement> = createRef<HTMLCanvasElement>();

  // ______________________________
  // Update Mouse Coordinates
  updateMouseCoords() {
    requestAnimationFrame(this.renderMouse);
  }

  // ______________________________
  // Render to canvas
  renderMouse() {
    if (this.canvasRef.current) {
      let ctx = this.canvasRef.current.getContext("2d");

      this.setState({
        mouseCursor: {
          radius: 10,
          lastX: this.lerp(
            this.state.mouseCursor.lastX,
            this.state.mouseX,
            0.25
          ),
          lastY: this.lerp(
            this.state.mouseCursor.lastY,
            this.state.mouseY,
            0.25
          ),
        },
      });

      ctx.clearRect(0, 0, this.state.vw, this.state.vh);
      ctx.beginPath();
      ctx.arc(
        this.state.mouseCursor.lastX,
        this.state.mouseCursor.lastY,
        this.state.mouseCursor.radius,
        0,
        Math.PI * 2,
        false
      );
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(this.renderMouse);
    } else {
      return;
    }
  }

  // ______________________________
  // LERP Helper Function
  lerp(a: number, b: number, n: number) {
    return (1 - n) * a + n * b;
  }

  render() {
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
