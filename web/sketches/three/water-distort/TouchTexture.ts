/**
 *
 * * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */

// ____________________________________________________________________________________

import * as THREE from "three";

export type LXLT_TouchTextureOptions = {
  debug?: boolean;
};

export type LXLT_TouchTexturePoint = {
  x: number;
  y: number;
  age?: number;
  force?: number;
  vx?: number;
  vy?: number;
};

/**
 *
 * @name Easings
 * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */
const easeOutSine = (t: number, b: number, c: number, d: number) => {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
};

const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d;
  return -c * t * (t - 2) + b;
};

/**
 *
 * @name TouchTexture
 * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */

export class TouchTexture {
  // _________________________________
  // Types
  size: number;
  radius: number;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  debug?: boolean;
  points: LXLT_TouchTexturePoint[];
  maxAge: number;
  last: LXLT_TouchTexturePoint;
  texture: THREE.Texture;

  // _________________________________
  // Constructor
  constructor(options: LXLT_TouchTextureOptions) {
    this.size = 64;
    this.radius = this.size * 0.1;
    this.width = this.height = this.size;

    this.size = 64;
    this.radius = this.size * 0.1;

    this.points = [];
    this.maxAge = 64;

    this.last = null;

    if (options.debug) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.radius = this.width * 0.05;
    }

    this.initTexture();
    if (options.debug) document.body.append(this.canvas);
  }

  /**
   *
   * @description Initialize our canvas
   *
   */
  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "TouchTexture";
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.clear();

    this.texture = new THREE.Texture(this.canvas);
  }

  /**
   *
   * @description Note that addPoint() receives normalized values, from 0 to 1.
   * If the canvas happens to resize, we can use the normalized points to draw using the correct size.
   *
   */

  addPoint(point: LXLT_TouchTexturePoint) {
    let force = 0;
    let vx = 0;
    let vy = 0;
    const last = this.last;

    if (last) {
      const relativeX = point.x - last.x;
      const relativeY = point.y - last.y;
      // Distance formula
      const distanceSquared = relativeX * relativeX + relativeY * relativeY;
      const distance = Math.sqrt(distanceSquared);
      // Calculate Unit Vector
      vx = relativeX / distance;
      vy = relativeY / distance;

      force = Math.min(distanceSquared * 10000, 1);
    }

    this.last = {
      x: point.x,
      y: point.y,
    };
    this.points.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  /**
   *
   * @description Let’s create drawPoint(point) to start drawing the ripples:
   * Convert the normalized point coordinates into canvas coordinates. Then, draw a happy little circle.
   *
   */
  drawPoint(point: LXLT_TouchTexturePoint) {
    // Convert normalized position into canvas coordinates
    let pos = {
      x: point.x * this.width,
      y: point.y * this.height,
    };
    const radius = this.radius;

    this.ctx.beginPath();
    this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    this.ctx.fill();

    const ctx = this.ctx;
    // Lower the opacity as it gets older
    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = easeOutSine(point.age / (this.maxAge * 0.3), 0, 1, 1);
    } else {
      intensity = easeOutQuad(
        1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7),
        0,
        1,
        1
      );
    }
    intensity *= point.force;

    // Insert data to color channels
    // RG = Unit vector
    let red = ((point.vx + 1) / 2) * 255;
    let green = ((point.vy + 1) / 2) * 255;

    // B = Unit vector
    let blue = intensity * 255;
    let color = `${red}, ${green}, ${blue}`;

    let offset = this.size * 5;
    ctx.shadowOffsetX = offset;
    ctx.shadowOffsetY = offset;
    ctx.shadowBlur = radius * 1;
    ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.clear();

    let agePart = 1 / this.maxAge;

    this.points.forEach((point, i) => {
      let slowAsOlder = 1 - point.age / this.maxAge;
      let force = point.force * agePart * slowAsOlder;

      point.x += point.vx * force;
      point.y += point.vy * force;

      point.age += 1;

      if (point.age > this.maxAge) {
        this.points.splice(i, 1);
      }
    });

    this.points.forEach((point) => {
      this.drawPoint(point);
    });

    this.texture.needsUpdate = true;
  }
}
