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
import {
  CanvasCursorStyle,
  CanvasCursorClassName,
  CanvasCursorGlobalStyles,
} from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LXLT_CanvasCursor = {};

export type LXLT_CanvasDrawing_Coords = {
  startX: number;
  startY: number;

  endX: number;
  endY: number;
};

export type LXLT_CanvasCursor_State = {
  mouseX: number;
  mouseY: number;
  mouseIsPressed: boolean;

  mouseCursor: {
    radius: number;
    lastX: number;
    lastY: number;
  };

  helper: {
    text: string;
    lastOpacity: number;
    opacity: number;
  };

  drawing: {
    x: number;
    y: number;

    coordinates: LXLT_CanvasDrawing_Coords[];
  };

  vw: number;
  vh: number;
};

// Cursor
export class CanvasCursor extends PureComponent<
  LXLT_CanvasCursor,
  LXLT_CanvasCursor_State
> {

  constructor(props: LXLT_CanvasCursor) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      mouseIsPressed: false,

      mouseCursor: {
        radius: 10,
        lastX: 0,
        lastY: 0,
      },

      drawing: {
        x: 0,
        y: 0,

        coordinates: [],
      },

      helper: {
        text: "",
        lastOpacity: 0,
        opacity: 0,
      },

      vw: 0,
      vh: 0,
    };

    this.calculateSize = this.calculateSize.bind(this);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.startDrawing = this.startDrawing.bind(this);
    this.drawLines = this.drawLines.bind(this);
    this.stopDrawing = this.stopDrawing.bind(this);
    this.storeLineCoordinates = this.storeLineCoordinates.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
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

    // _____________________
    // Add event listeners
    window.addEventListener("mousemove", (e) => {
      this.storeLineCoordinates(e);

      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      });
    });
    window.addEventListener("resize", this.calculateSize, false);
    window.addEventListener("mousedown", this.startDrawing);
    window.addEventListener("mouseup", this.stopDrawing);
    window.addEventListener("keydown", this.clearCanvas);
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
    requestAnimationFrame(this.renderCanvas);
  }

  // ______________________________
  // Render to canvas
  renderCanvas() {
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

      // _____________________________
      // Cursor Helpers
      let ifNotOverNavigation =
        this.state.mouseY > 100 && this.state.mouseY < window.innerHeight - 100;

      if (this.state.drawing.coordinates.length > 5 && this.state.drawing.coordinates.length < 25 && ifNotOverNavigation) {
        this.setState({
          helper: {
            text: "Press 'C' to clear drawing",
            lastOpacity: this.lerp(this.state.helper.lastOpacity, 1, 0.15),
            opacity: 1,
          },
        });

        ctx.font = "18px Neue Haas Grotesk Text Pro";
        ctx.fillStyle = `rgba(255,255,255, ${this.state.helper.lastOpacity})`;
        ctx.fillText(
          this.state.helper.text,
          this.state.mouseCursor.lastX + 15,
          this.state.mouseCursor.lastY + -15
        );
      } else if (window.scrollY < 100 && ifNotOverNavigation) {
        this.setState({
          helper: {
            text: "Scroll down",
            lastOpacity: this.lerp(this.state.helper.lastOpacity, 1, 0.15),
            opacity: 1,
          },
        });

        ctx.font = "18px Neue Haas Grotesk Text Pro";
        ctx.fillStyle = `rgba(255,255,255, ${this.state.helper.lastOpacity})`;
        ctx.fillText(
          this.state.helper.text,
          this.state.mouseCursor.lastX + 15,
          this.state.mouseCursor.lastY + -15
        );
      } else {
        if (window.scrollY < 300 && ifNotOverNavigation) {
          this.setState({
            helper: {
              text: "Click and drag to draw anywhere",
              lastOpacity: this.lerp(
                this.state.helper.lastOpacity,
                this.state.helper.opacity,
                0.15
              ),
              opacity: 1,
            },
          });

          ctx.font = "18px Neue Haas Grotesk Text Pro";
          ctx.fillStyle = `rgba(255,255,255, ${this.state.helper.lastOpacity})`;
          ctx.fillText(
            this.state.helper.text,
            this.state.mouseCursor.lastX + 15,
            this.state.mouseCursor.lastY + -15
          );
        } else {
          this.setState({
            helper: {
              text: this.state.helper.text,
              lastOpacity: this.lerp(
                this.state.helper.lastOpacity,
                this.state.helper.opacity,
                0.15
              ),
              opacity: 0,
            },
          });

          ctx.font = "18px Neue Haas Grotesk Text Pro";
          ctx.fillStyle = `rgba(255,255,255, ${this.state.helper.lastOpacity})`;
          ctx.fillText(
            this.state.helper.text,
            this.state.mouseCursor.lastX + 15,
            this.state.mouseCursor.lastY + -15
          );
        }
      }

      // ____________________________
      // Check for drawing
      this.drawLines();

      // ____________________________
      // Recursively animate

      requestAnimationFrame(this.renderCanvas);
    }
  }

  // ______________________________
  // LERP Helper Function
  lerp(a: number, b: number, n: number) {
    return (1 - n) * a + n * b;
  }

  // ____________________________
  // Drawing Functions
  startDrawing(e: MouseEvent) {
    this.setState({
      mouseIsPressed: true,
    });

    // console.log("START DRAWING", this.state.mouseIsPressed);
  }

  storeLineCoordinates(e: MouseEvent) {
    if (this.state.mouseIsPressed) {
      let updatedCoordinates = this.state.drawing.coordinates;
      let newCoordinates: LXLT_CanvasDrawing_Coords = {
        // startX: this.state.mouseCursor.lastX,
        // startY: this.state.mouseCursor.lastY,
        startX: this.state.mouseX,
        startY: this.state.mouseY,
        endX: e.clientX,
        endY: e.clientY,
      };

      updatedCoordinates.push(newCoordinates);

      this.setState({
        drawing: {
          ...this.state.drawing,
          coordinates: updatedCoordinates,
        },
      });
    }
  }

  drawLines() {
    let ctx = this.canvasRef.current.getContext("2d");

    this.state.drawing.coordinates.map((coord: LXLT_CanvasDrawing_Coords) => {
      ctx.beginPath(); // begin
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#ffffff";
      ctx.moveTo(coord.startX, coord.startY); // from
      ctx.lineTo(coord.endX, coord.endY); // to
      ctx.stroke(); // draw it!

      // console.log("LINE DRAWN", coord);
    });
  }

  stopDrawing() {
    this.setState({
      mouseIsPressed: false,
    });

    // console.log("STOP DRAWING", this.state.mouseIsPressed);
  }

  clearCanvas(e: KeyboardEvent) {
    console.log(e);

    if (e.key === "c" || e.key === "C") {
      let previousDrawingState = this.state.drawing;

      this.setState({
        drawing: {
          ...previousDrawingState,
          coordinates: [],
        },
      });
    }
  }

  render() {
    return (
      <>
        {/* <UniversallyHideCursor /> */}
        <CanvasCursorGlobalStyles />
        <CanvasCursorStyle
          ref={this.canvasRef}
          className={`${CanvasCursorClassName}`}
        />
      </>
    );
  }
}
