/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */

import p5, { Shader } from "p5";

// Begin Component
// __________________________________________________________________________

export type LXLT_GLSL_Canvas = (
  W: number,
  H: number,
  ID: number,
  BG: string
) => (p: p5) => void;

const GLSL_Canvas: LXLT_GLSL_Canvas = (W, H, ID, BG) => (p: p5) => {
  // _________________________________________________
  // Config
  let theShader: Shader;

  // _________________________________________________
  // Preload
  p.preload = () => {
    theShader = p.loadShader(
      `/shaders/ex_${ID}/shader.vert`,
      `/shaders/ex_${ID}/shader.frag`
    );
  };

  // _________________________________________________
  // Setup
  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H, p.WEBGL);
    p.noStroke();
  };

  // _________________________________________________
  // Draw
  p.draw = () => {
    // shader() sets the active shader with our shader
    p.shader(theShader);

    theShader.setUniform("u_resolution", [W, H]);
    theShader.setUniform("u_time", p.millis() / 1000.0);
    theShader.setUniform("u_mouse", [p.mouseX, p.map(p.mouseY, 0, H, H, 0)]);

    // rect gives us some geometry on the screen
    p.rect(0, 0, W, H);
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

export default GLSL_Canvas;
