/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */

import p5 from "p5";
import { LXLT_ColorTheme } from "../../constants/styles/Color";

// Begin Component
// __________________________________________________________________________

export type LXLT_P5Canvas = {
  W: number;
  H: number;
  ID: number;
  CanvasTheme: LXLT_ColorTheme;
};

export type LXLT_P5CanvasDisplay = (
  W: number,
  H: number,
  ID: number,
  CanvasTheme: LXLT_ColorTheme
) => (p: p5) => void;

const P5CanvasDisplay: LXLT_P5CanvasDisplay = (
  W,
  H,
  ID,
  CanvasTheme
) => (p: p5) => {
  // _________________________________________________
  // Config

  // _________________________________________________
  // Setup
  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
  };

  // _________________________________________________
  // Draw
  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(window.laxaltUniversalTheme.foreground);
      p.stroke(window.laxaltUniversalTheme.background);
      p.strokeWeight(1.5);
      p.ellipse(p.mouseX, p.mouseY, W / 6, W / 6);
    } else if (p.mouseX !== 0 || p.mouseY !== 0) {
      p.fill(window.laxaltUniversalTheme.background);
      p.stroke(window.laxaltUniversalTheme.foreground);
      p.strokeWeight(1.5);
      p.ellipse(p.mouseX, p.mouseY, W / 6, W / 6);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

export default P5CanvasDisplay;
