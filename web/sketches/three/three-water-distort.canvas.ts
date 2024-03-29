// Core
import * as THREE from "three";

// Settings
import { __DEBUG__ } from "../../constants/site/Settings";

// Types
import { LXLT_ColorTheme } from "../../constants/styles/Color";

// Textures
import { EffectComposer, RenderPass, EffectPass } from "postprocessing";

// Textures
import {
  LXLT_TouchTexturePoint,
  TouchTexture,
} from "./water-distort/TouchTexture";
import WaterEffect from "./water-distort/WaterEffect";
import { hexToRGB } from "../../utils/hexToRGB";

// Begin Component
// __________________________________________________________________________

export type LXLT_ThreeWaterCanvas = {
  canvasContainer: HTMLDivElement;
  canvasElement: HTMLCanvasElement;
};

export class ThreeWaterCanvasClass {
  // ______________________________
  // Types
  touchTexture: TouchTexture;
  waterEffect: WaterEffect;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  composer: any;
  fov: number;
  clock: THREE.Clock;
  material: THREE.MeshBasicMaterial;
  mesh: THREE.Mesh;
  canvasElement: HTMLCanvasElement;
  geometry: THREE.PlaneBufferGeometry;

  // ______________________________
  // Constructor
  constructor(options: LXLT_ThreeWaterCanvas) {
    this.touchTexture = new TouchTexture({ debug: false });

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.domElement.id = "three_canvas";

    options.canvasContainer.append(this.renderer.domElement);

    // Scene
    this.fov = 45;

    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.z = 50;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(
      `${hexToRGB(window.laxaltUniversalTheme.background, 1)}`
    );

    this.canvasElement = options.canvasElement;

    this.geometry = new THREE.PlaneBufferGeometry(window.innerWidth / (this.fov / 1.75), window.innerHeight / (this.fov / 1.75), 1, 1);
    this.material = new THREE.MeshBasicMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.material.map = new THREE.CanvasTexture(this.canvasElement);

    this.tick = this.tick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    // Post Processing
    this.composer = new EffectComposer(this.renderer);
    this.clock = new THREE.Clock();

    this.init();
  }

  initComposer() {
    const renderPass = new RenderPass(this.scene, this.camera);

    this.waterEffect = new WaterEffect({ texture: this.touchTexture.texture });

    const waterPass = new EffectPass(this.camera, this.waterEffect);

    renderPass.renderToScreen = false;
    waterPass.renderToScreen = true;
    this.composer.addPass(renderPass);
    this.composer.addPass(waterPass);
  }

  watchPlane() {
    window.addEventListener("mousemove", this.onMouseMove);
    this.scene.add(this.mesh);
  }

  init() {
    this.initComposer();
    this.watchPlane();
    this.tick();
  }

  onMouseMove(ev: MouseEvent) {
    const point: LXLT_TouchTexturePoint = {
      x: ev.clientX / window.innerWidth,
      y: ev.clientY / window.innerHeight,
    };
    this.touchTexture.addPoint(point);
  }

  render() {
    this.material.map.needsUpdate = true;

    this.scene.background = new THREE.Color(
      `${hexToRGB(window.laxaltUniversalTheme.background, 1)}`
    );

    this.composer.render(this.clock.getDelta());
  }

  tick() {
    if (document.querySelector("#three_canvas")) {
      this.render();
      this.touchTexture.update();

      requestAnimationFrame(this.tick);
    } else {
      this.renderer = null;
      this.composer = null;
      this.scene = null;

      return;
    }
  }
}

export const ThreeWaterCanvas = (
  canvasContainer: HTMLDivElement,
  canvasElement: HTMLCanvasElement
): ThreeWaterCanvasClass => {
  if (!document.querySelector("#three_canvas")) {
    const myWaterCanvas = new ThreeWaterCanvasClass({
      canvasContainer,
      canvasElement,
    });

    return myWaterCanvas;
  } else {
    document.querySelector("#three_canvas").remove();

    const myWaterCanvas = new ThreeWaterCanvasClass({
      canvasContainer,
      canvasElement,
    });

    return myWaterCanvas;
  }
};
