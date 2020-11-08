/**
 *
 * Sin Wave Cone
 * @author Peter Laxalt
 * @description Simple Sin Wave Cone in p5.js
 *
 */

// Begin Component
//////////////////////////////////////////////////////////////////////

export default (W: any, H: any) => (p: any) => {
  let x = 0;
  // @ts-ignore
  let scale = 0;

  let color = {
    primary: "black",
    primaryAlpha: "black",
    secondary: "#000000",
    bg: "cyan",
    white: "#ffffff"
  };

  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H, p.WEBGL);
    p.angleMode(p.RADIANS);
  };

  p.draw = () => {
    scale += 1;
    x = x * 1.1 + 2;

    p.noFill();
    p.stroke(color.primary);
    p.background(color.bg);

    for (let i = 0; i < 20; i++) {
      p.cone(300, 400);
      p.stroke(color.primaryAlpha);
      p.strokeWeight(1);
      p.translate(
        // @ts-ignore
        parseInt(Math.sin(p.mouseX * 0.001) * 50),
        // @ts-ignore
        parseInt(Math.sin(p.mouseY * 0.001) * 50),
        // @ts-ignore
        parseInt(Math.sin(p.mouseX * 0.001) * 50)
      );
      p.smooth();
      p.rotateX(p.frameCount * 0.01);
      p.rotateY(p.frameCount * 0.01);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
    p.background("yellow");
  };
};
