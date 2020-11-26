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

// Begin Component
// __________________________________________________________________________

export type LXLT_ThreeWaterCanvas = {
  canvasContainer: HTMLDivElement;
  canvasElement: HTMLCanvasElement;
  canvasTheme: LXLT_ColorTheme;
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

    options.canvasContainer.append(this.renderer.domElement);

    // Scene
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.z = 50;

    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0xffffff);

    this.canvasElement = options.canvasElement;

    this.geometry = new THREE.PlaneBufferGeometry(60, 35, 1, 1);
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

    this.composer.render(this.clock.getDelta());
  }

  tick() {
    this.render();
    this.touchTexture.update();

    requestAnimationFrame(this.tick);
  }
}

export const ThreeWaterCanvas = (
  canvasContainer: HTMLDivElement,
  canvasElement: HTMLCanvasElement,
  canvasTheme: LXLT_ColorTheme
): ThreeWaterCanvasClass => {
  const myWaterCanvas = new ThreeWaterCanvasClass({
    canvasContainer,
    canvasElement,
    canvasTheme,
  });

  return myWaterCanvas;
};
