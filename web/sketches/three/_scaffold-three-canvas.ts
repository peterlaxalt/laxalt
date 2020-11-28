import * as THREE from "three";
import { LXLT_ColorTheme } from "../../constants/styles/Color";
import { OrbitControls } from "./jsm/controls/OrbitControls.js";

// Begin Component
// __________________________________________________________________________

export type LXLT_ThreeCanvasDisplay = (
  container: HTMLDivElement,
  CanvasTheme: LXLT_ColorTheme
) => void;

export const ThreeCanvas: LXLT_ThreeCanvasDisplay = (
  container,
  CanvasTheme
) => {
  /**
   * Setup
   */

  var mesh, renderer, scene, camera, controls, sketch;

  // var gui;

  var API = {
    offsetX: 0,
    offsetY: 0,
    repeatX: 0.25,
    repeatY: 0.25,
    rotation: Math.PI / 4, // positive is counter-clockwise
    centerX: 0.5,
    centerY: 0.5,
  };

  init();

  function init() {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    sketch = container;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    sketch.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 25);

    // scene.background = new THREE.Color(
    //   `${hexToRGB(CanvasTheme.background, 0)}`
    // );
    scene.add(camera);

    /**
     * Camera controls
     */
    controls = new OrbitControls(camera, renderer.domElement);
    controls.movementSpeed = 10000;
    controls.domElement = renderer.domElement;
    controls.rollSpeed = Math.PI / 24;
    controls.autoForward = true;
    controls.dragToLook = true;
    controls.enableZoom = false;

    var geometry = new THREE.TorusKnotBufferGeometry(10, 3, 200, 200);

    new THREE.TextureLoader().load(
      "/projects/three/stripe-tile.png",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.anisotropy = 1;

        //texture.matrixAutoUpdate = false; // default true; set to false to update texture.matrix manually

        var material = new THREE.MeshBasicMaterial({ map: texture });

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        updateUvTransform();

        animate();
      }
    );

    window.addEventListener("resize", onWindowResize, false);
  }

  // our scale of the pattern
  var repeatX = 0;
  var repeatY = 0;
  // var frameCount = 0;

  function animate() {
    // call animate recursively
    requestAnimationFrame(animate);

    // texture manipulation
    var texture = mesh.material.map;
    // frameCount += 1;

    repeatX += 0.01;
    repeatY += 0.01;

    texture.rotation += 0.0001;
    texture.repeat = { x: repeatX, y: repeatY };

    // increase the mesh's rotation each frame
    mesh.rotation.z += 0.0008;
    mesh.rotation.x += 0.0008;
    mesh.rotation.y += 0.0008;

    // render, or 'create a still image', of the scene
    // this will create one still image / frame each time the animate
    // function calls itself
    renderer.render(scene, camera);
  }

  function render() {
    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
  }

  function updateUvTransform() {
    var texture = mesh.material.map;

    if (texture.matrixAutoUpdate === true) {
      texture.offset.set(API.offsetX, API.offsetY);
      // texture.repeat.set(API.repeatX, API.repeatY);
      texture.center.set(API.centerX, API.centerY);
      // texture.rotation = API.rotation; // rotation is around [ 0.5, 0.5 ]
    } else {
      // one way...
      //texture.matrix.setUvTransform( API.offsetX, API.offsetY, API.repeatX, API.repeatY, API.rotation, API.centerX, API.centerY );

      // another way...
      texture.matrix
        .identity()
        .translate(-API.centerX, -API.centerY)
        .translate(API.centerX, API.centerY)
        .translate(API.offsetX, API.offsetY);
    }

    render();
  }
};
