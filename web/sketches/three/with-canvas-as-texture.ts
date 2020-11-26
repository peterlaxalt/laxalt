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

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    sketch.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x000000);

    window.addEventListener("resize", onWindowResize, false);
  }

  // Sets up the drawing canvas and adds it as the material map

  function setupCanvasDrawing() {
    // get canvas and context

    // const drawingCanvas: HTMLCanvasElement = document.getElementById(
    //   "drawing-canvas"
    // ) as HTMLCanvasElement;
    // const drawingContext = drawingCanvas.getContext("2d");

    // // draw white background

    // drawingContext.fillStyle = "blue";
    // drawingContext.fillRect(0, 0, 128, 128);

    // // set canvas as material.map (this could be done to any map, bump, displacement etc.)

    material.map = new THREE.CanvasTexture(CanvasElement);

    // // set the variable to keep track of when to draw

    // let paint = false;

    // // add canvas event listeners
    // drawingCanvas.addEventListener("pointerdown", function (e) {
    //   paint = true;
    //   drawStartPos.set(e.offsetX, e.offsetY);
    // });

    // drawingCanvas.addEventListener("pointermove", function (e) {
    //   if (paint) draw(drawingContext, e.offsetX, e.offsetY);
    // });

    // drawingCanvas.addEventListener("pointerup", function () {
    //   paint = false;
    // });

    // drawingCanvas.addEventListener("pointerleave", function () {
    //   paint = false;
    // });
  }

  // function draw(drawContext, x, y) {
  //   drawContext.moveTo(drawStartPos.x, drawStartPos.y);
  //   drawContext.strokeStyle = "#000000";
  //   drawContext.lineTo(x, y);
  //   drawContext.stroke();
  //   // reset drawing start position to current position.
  //   drawStartPos.set(x, y);
  //   // need to flag the map as needing updating.
  //   material.map.needsUpdate = true;
  // }

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
