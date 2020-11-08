
/**
 *
 * Gradient Torus Knot
 * @author Peter Laxalt
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

import * as THREE from "three";
// import { GUI } from "./jsm/libs/dat.gui.module.js";
import { OrbitControls } from "./jsm/controls/OrbitControls.js";

// Begin Sketch
//////////////////////////////////////////////////////////////////////


export const canvas = container => {
  /**
   * Setup
   */

  var mesh, renderer, scene, camera, controls, sketch;

  var gui;

  var API = {
    offsetX: 0,
    offsetY: 0,
    repeatX: 0.25,
    repeatY: 0.25,
    rotation: Math.PI / 4, // positive is counter-clockwise
    centerX: 0.5,
    centerY: 0.5
  };

  init();

  function init() {
    renderer = new THREE.WebGLRenderer();
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

    scene.background = new THREE.Color(0xffffff);
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
    controls.enableZoom = true;

    var geometry = new THREE.TorusKnotBufferGeometry(10, 3, 200, 200);

    new THREE.TextureLoader().load(
      "/projects/three/gradient-tile.png",
      function(texture) {
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
  var frameCount = 0;

  function animate() {
    // call animate recursively
    requestAnimationFrame(animate);

    // texture manipulation
    var texture = mesh.material.map;
    frameCount += 1;

    repeatX += 0.01;
    repeatY += 0.01;

    // if (repeatX < 13) {
    //   repeatX += 0.01;
    //   repeatY += 0.01;
    // } else {
    //   repeatX += 0.001;
    //   repeatY += 0.001;
    // }
    // else {
    //   if (repeatY < 60) {
    //     repeatY += 0.05;
    //   } else {
    //     repeatX += 0.05;
    //   }
    // }

    // console.log(
    //   "repeatX: " +
    //     repeatX +
    //     ", repeatY: " +
    //     repeatY +
    //     ", frameCount: " +
    //     frameCount
    // );

    // console.log(texture);
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
        // .rotate(API.rotation) // I don't understand how rotation can preceed scale, but it seems to be required...
        // .scale(API.repeatX, API.repeatY)
        .translate(API.centerX, API.centerY)
        .translate(API.offsetX, API.offsetY);
    }

    render();
  }

  // function initGui() {
  //   gui = new GUI();

  //   gui
  //     .add(API, "offsetX", 0.0, 1.0)
  //     .name("offset.x")
  //     .onChange(updateUvTransform);
  //   gui
  //     .add(API, "offsetY", 0.0, 1.0)
  //     .name("offset.y")
  //     .onChange(updateUvTransform);
  //   // gui
  //   //   .add(API, "repeatX", 0.25, 2.0)
  //   //   .name("repeat.x")
  //   //   .onChange(updateUvTransform);
  //   // gui
  //   //   .add(API, "repeatY", 0.25, 2.0)
  //   //   .name("repeat.y")
  //   //   .onChange(updateUvTransform);
  //   // gui
  //   //   .add(API, "rotation", -2.0, 2.0)
  //   //   .name("rotation")
  //   //   .onChange(updateUvTransform);
  //   gui
  //     .add(API, "centerX", 0.0, 1.0)
  //     .name("center.x")
  //     .onChange(updateUvTransform);
  //   gui
  //     .add(API, "centerY", 0.0, 1.0)
  //     .name("center.y")
  //     .onChange(updateUvTransform);
  // }
};

// export const canvas = container => {
//   // these need to be accessed inside more than one function so we'll declare them first
//   let camera;
//   let renderer;
//   let scene;
//   let mesh;

//   function init() {
//     // create a Scene
//     scene = new THREE.Scene();

//     scene.background = new THREE.Color(0x8fbcd4);

//     // set up the options for a perspective camera
//     const fov = 35; // fov = Field Of View
//     const aspect = container.clientWidth / container.clientHeight;
//     const near = 0.1;
//     const far = 100;

//     camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

//     // every object is initially created at ( 0, 0, 0 )
//     // we'll move the camera back a bit so that we can view the scene
//     camera.position.set(0, 0, 10);

//     // create a geometry
//     const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

//     // create a purple Standard material
//     const material = new THREE.MeshStandardMaterial({ color: 0x800080 });

//     // create a Mesh containing the geometry and material
//     mesh = new THREE.Mesh(geometry, material);

//     // add the mesh to the scene object
//     scene.add(mesh);

//     // Create a directional light
//     const light = new THREE.DirectionalLight(0xffffff, 5.0);

//     // move the light back and up a bit
//     light.position.set(10, 10, 10);

//     // remember to add the light to the scene
//     scene.add(light);

//     // create a WebGLRenderer and set its width and height
//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(container.clientWidth, container.clientHeight);

//     renderer.setPixelRatio(window.devicePixelRatio);

//     // add the automatically created <canvas> element to the page
//     container.appendChild(renderer.domElement);
//   }

//   function animate() {
//     // call animate recursively
//     requestAnimationFrame(animate);

//     // increase the mesh's rotation each frame
//     mesh.rotation.z += 0.01;
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01;

//     // render, or 'create a still image', of the scene
//     // this will create one still image / frame each time the animate
//     // function calls itself
//     renderer.render(scene, camera);
//   }

//   // call the init function to set everything up
//   init();

//   // then call the animate function to render the scene
//   animate();
// };
