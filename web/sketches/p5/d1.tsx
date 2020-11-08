/**
 *
 * Sin Wave Circles
 * @author Peter Laxalt
 * @description Simple Sin Wave circles in p5.js
 *
 */

// Begin Component
//////////////////////////////////////////////////////////////////////

export default (W: any, H: any) => (p: any) => {
  let x = 0;
  let scale = 50;
  let initialScale = 0;

  let color = {
    primary: "rgba(208, 112, 166, .3)",
    primaryAlpha: "rgba(208, 112, 166, 1)",
    secondary: "#FFF4F7",
    bg: "#1C170C",
    white: "#ffffff"
  };

  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
    p.angleMode(p.RADIANS);
    p.background("yellow")
  };

  p.draw = () => {
    scale += 1;
    initialScale = 400;
    x = x * 1.1 + 2;

    p.noFill();
    p.stroke(color.primary);

    if (p.mouseX > 0 || p.mouseY > 0) {
      p.ellipse(
        p.mouseX,
        p.mouseY,
        Math.sin(scale) * (Math.sin(scale) * initialScale),
        Math.sin(scale) * (Math.sin(scale) * initialScale)
      );
      p.smooth();
    } else {
      p.ellipse(
        p.windowWidth / 2,
        p.windowHeight / 2,
        Math.sin(scale) * (Math.sin(scale) * initialScale),
        Math.sin(scale) * (Math.sin(scale) * initialScale)
      );
      p.smooth();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
    p.background("yellow")
  };
};
