/**
 *
 * HoverGrid.js
 * @author Peter Laxalt
 * @description The website HoverGrid.
 *
 */

// Core
import React, { Component, createRef } from "react";
import { createGlobalStyle } from "styled-components";

// Styles
import { HoverGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

// HoverGrid
export class HoverGrid extends Component<{}, any> {
  quadrant: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.state = {
      // mouseX: undefined,
      // mouseY: undefined,
      // xPos: undefined,
      // yPos: undefined,
      // dx: undefined,
      // dy: undefined,
      // mouseSize: 20,
      // scale: 1,
      // opacity: 0,
      // active: false,
    };

    this.quadrant = React.createRef();

    // this.setHoverGridPosition = this.setHoverGridPosition.bind(this);
    // // this.toggleHoverGridState = this.toggleHoverGridState.bind(this);
  }

  componentDidMount() {
    this.setState({
      xPos: window.innerWidth / 2,
      yPos: window.innerHeight / 2,
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,
      opacity: 0,
    });

    // document.addEventListener("mousemove", this.setHoverGridPosition, false);
    // document.addEventListener("mousedown", this.toggleHoverGridState, false);
    // document.addEventListener("mouseup", this.toggleHoverGridState, false);
  }

  // /**
  //  *
  //  * @name Set HoverGrid Position
  //  * @param e : Event from "mousemove" event listener.
  //  * @description This positions the HoverGrid throughout the page.
  //  *
  //  */
  // setHoverGridPosition = (e: any) => {
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
  //   // console.log("x: " + this.state.mouseX, "y: " + this.state.mouseY);
  // };

  render() {
    let items = [1, 2, 3, 4, 5, 6];
    let columns = 4;

    return (
      <>
        <HoverGridStyle
          style={{
            [`--c` as any]: 3,
          }}
        >
          <div className="q --root" ref={this.quadrant}>
            {items.map((i, idx) => {
              return <div className={`i i--${i}`}>{i}</div>;
            })}
          </div>
        </HoverGridStyle>
      </>
    );
  }
}
