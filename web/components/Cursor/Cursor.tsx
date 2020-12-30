/**
 *
 * Cursor.js
 * @author Peter Laxalt
 * @description The website Cursor.
 *
 */

// Core
import React, { Component, createRef } from "react";
import { createGlobalStyle } from "styled-components";

// Styles
import { CursorStyle, CursorPoint } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

// Cursor
export class Cursor extends Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      mouseX: undefined,
      mouseY: undefined,
      xPos: undefined,
      yPos: undefined,
      dx: undefined,
      dy: undefined,
      mouseSize: 20,
      scale: 1,
      opacity: 0,
      active: false,
    };

    this.setCursorPosition = this.setCursorPosition.bind(this);
    this.toggleCursorState = this.toggleCursorState.bind(this);
  }

  componentDidMount() {
    this.setState({
      xPos: window.innerWidth / 2,
      yPos: window.innerHeight / 2,
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,
      opacity: 0,
    });

    document.addEventListener("mousemove", this.setCursorPosition, false);
    document.addEventListener("mousedown", this.toggleCursorState, false);
    document.addEventListener("mouseup", this.toggleCursorState, false);
  }

  /**
   *
   * @name Set Cursor Position
   * @param e : Event from "mousemove" event listener.
   * @description This positions the Cursor throughout the page.
   *
   */
  setCursorPosition = (e: any) => {
    let xPos = this.state.mouseX - this.state.mouseSize / 2;
    let yPos = this.state.mouseY - this.state.mouseSize / 2;

    let dX = this.state.mouseX - this.state.xPos;
    let dY = this.state.mouseY - this.state.yPos;

    this.setState({
      xPos: xPos + dX / 10,
      yPos: yPos + dY / 10,
      mouseX: e.clientX,
      mouseY: e.clientY,
      opacity: 1,
    });
    // console.log("x: " + this.state.mouseX, "y: " + this.state.mouseY);
  };

  /**
   *
   * @name Toggle Cursor Size
   * @param e : Event from "mousedown"/"mouseup" event listener.
   * @description This scales the cursor size up or down depending on the event.
   *
   */
  toggleCursorSize = () => {
    if (this.state.scale === 1) {
      this.setState({
        scale: 2,
      });
    } else {
      this.setState({
        scale: 1,
      });
    }

    return;
  };

  /**
   *
   * @name Toggle Cursor Class
   * @param e : Event from "mousedown"/"mouseup" event listener.
   * @description This updates the cursors state when clicked.
   *
   */
  toggleCursorState = () => {
    if (this.state.active === true) {
      this.setState({
        active: false,
      });

      this.toggleCursorSize();
    } else {
      this.setState({
        active: true,
      });

      this.toggleCursorSize();
    }

    return;
  };

  cursorRef = createRef<HTMLDivElement>();

  render() {
    const UniversallyHideCursor = createGlobalStyle`
      body, html {
        cursor: none !important;

        a {
          cursor: none !important;
        }

        * {
          cursor: none !important;
        }
      }
    `;

    return (
      <>
        <UniversallyHideCursor />
        <CursorStyle
          className={this.state.active ? "active" : undefined}
          style={{
            transform:
              "translate(" + this.state.xPos + "px," + this.state.yPos + "px)",
            width: this.state.mouseSize,
            height: this.state.mouseSize,
            opacity: this.state.opacity,
          }}
        >
          <div className="cursor-border" />
        </CursorStyle>

        <CursorPoint
          style={{
            transform:
              "translate(" + this.state.xPos + "px," + this.state.yPos + "px)",
          }}
          className={this.state.active ? "active" : undefined}
        >
          <div className="cursor-point" />
        </CursorPoint>
      </>
    );
  }
}
