import React, { Component } from "react";
import { canvas } from "../../sketches/three/t2";

class p3 extends Component<{}, any> {
  componentDidMount() {
    if (typeof window) {
      // @ts-ignore
      canvas(this.threeRootElement);
    }
  }
  render() {
    return (
      <div
        // @ts-ignore
        ref={element => (this.threeRootElement = element)}
        style={{ width: "100vw", height: "100vh" }}
      />
    );
  }
}

export default p3;
