import React, { Component } from "react";
import dynamic from "next/dynamic";

// @ts-ignore
const P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

class P5Page extends Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0
    };
  }

  static async getInitialProps(ctx: any) {
    const sketchId = ctx.query.sketchId;
    return {
      sketchId
    };
  }

  componentDidMount() {
    // @ts-ignore
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  renderP5 = (id: string) => {
    const num = parseInt(id);

    // @ts-ignore
    const sketch = require(`../../sketches/p5/d${num}`).default(
      this.state.windowWidth,
      this.state.windowHeight
    );
    // @ts-ignore
    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    return <div className="container">{this.renderP5("2")}</div>;
  }
}

export default P5Page;
