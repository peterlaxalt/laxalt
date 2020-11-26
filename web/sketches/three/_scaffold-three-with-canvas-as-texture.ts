import * as THREE from "three";
import { __DEBUG__ } from "../../constants/site/Settings";
import { LXLT_ColorTheme } from "../../constants/styles/Color";

// Begin Component
// __________________________________________________________________________

export type LXLT_ThreeCanvasDisplay = (
  container: HTMLDivElement,
  CanvasElement: HTMLCanvasElement,
  CanvasTheme: LXLT_ColorTheme
) => void;

export const ThreeCanvas: LXLT_ThreeCanvasDisplay = (
  container,
  CanvasElement,
  CanvasTheme
) => {
  __DEBUG__ && console.log("🤙 Three.js Canvas received:", CanvasElement);

  let camera, scene, renderer, mesh, material, sketch;

  init();
  setupCanvasDrawing();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      6000
    );
    camera.position.z = 500;

    sketch = container;

    scene = new THREE.Scene();

    material = new THREE.MeshBasicMaterial();

    mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(350, 350, 350), material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    sketch.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x000000);

    window.addEventListener("resize", onWindowResize, false);
  }

  function setupCanvasDrawing() {
    material.map = new THREE.CanvasTexture(CanvasElement);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    material.map.needsUpdate = true;

    renderer.render(scene, camera);
  }
};
