module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__("X9qW");

// EXTERNAL MODULE: ./sketches/three/jsm/controls/OrbitControls.js
var OrbitControls = __webpack_require__("D/OE");

// CONCATENATED MODULE: ./sketches/three/t2.js
 // import { GUI } from "./jsm/libs/dat.gui.module.js";


const canvas = container => {
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
    rotation: Math.PI / 4,
    // positive is counter-clockwise
    centerX: 0.5,
    centerY: 0.5
  };
  init();

  function init() {
    renderer = new external_three_["WebGLRenderer"]();
    sketch = container;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    sketch.appendChild(renderer.domElement);
    scene = new external_three_["Scene"]();
    camera = new external_three_["PerspectiveCamera"](40, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 25);
    scene.background = new external_three_["Color"](0xffffff);
    scene.add(camera);
    /**
     * Camera controls
     */

    controls = new OrbitControls["a" /* OrbitControls */](camera, renderer.domElement);
    controls.movementSpeed = 10000;
    controls.domElement = renderer.domElement;
    controls.rollSpeed = Math.PI / 24;
    controls.autoForward = true;
    controls.dragToLook = true;
    controls.enableZoom = false;
    var geometry = new external_three_["TorusKnotBufferGeometry"](10, 3, 200, 200);
    new external_three_["TextureLoader"]().load("/projects/three/19of19-tile-white.png", function (texture) {
      texture.wrapS = texture.wrapT = external_three_["RepeatWrapping"]; // texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      texture.anisotropy = 1; //texture.matrixAutoUpdate = false; // default true; set to false to update texture.matrix manually

      var material = new external_three_["MeshBasicMaterial"]({
        map: texture
      });
      mesh = new external_three_["Mesh"](geometry, material);
      scene.add(mesh);
      updateUvTransform();
      animate();
    });
    window.addEventListener("resize", onWindowResize, false);
  } // our scale of the pattern


  var repeatX = 0;
  var repeatY = 0;
  var frameCount = 0;

  function animate() {
    // call animate recursively
    requestAnimationFrame(animate); // texture manipulation

    var texture = mesh.material.map;
    frameCount += 1;
    repeatX += 0.01;
    repeatY += 0.01; // if (repeatX < 13) {
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
    texture.repeat = {
      x: repeatX,
      y: repeatY
    }; // increase the mesh's rotation each frame

    mesh.rotation.z += 0.0008;
    mesh.rotation.x += 0.0008;
    mesh.rotation.y += 0.0008; // render, or 'create a still image', of the scene
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
      texture.offset.set(API.offsetX, API.offsetY); // texture.repeat.set(API.repeatX, API.repeatY);

      texture.center.set(API.centerX, API.centerY); // texture.rotation = API.rotation; // rotation is around [ 0.5, 0.5 ]
    } else {
      // one way...
      //texture.matrix.setUvTransform( API.offsetX, API.offsetY, API.repeatX, API.repeatY, API.rotation, API.centerX, API.centerY );
      // another way...
      texture.matrix.identity().translate(-API.centerX, -API.centerY) // .rotate(API.rotation) // I don't understand how rotation can preceed scale, but it seems to be required...
      // .scale(API.repeatX, API.repeatY)
      .translate(API.centerX, API.centerY).translate(API.offsetX, API.offsetY);
    }

    render();
  } // function initGui() {
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

}; // export const canvas = container => {
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
// CONCATENATED MODULE: ./pages/projects/p3.tsx
var __jsx = external_react_default.a.createElement;



class p3_p3 extends external_react_["Component"] {
  componentDidMount() {
    if ("undefined") {
      // @ts-ignore
      canvas(this.threeRootElement);
    }
  }

  render() {
    return __jsx("div", {
      // @ts-ignore
      ref: element => this.threeRootElement = element,
      style: {
        width: "100vw",
        height: "100vh"
      }
    });
  }

}

/* harmony default export */ var projects_p3 = __webpack_exports__["default"] = (p3_p3);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+xrx");


/***/ }),

/***/ "D/OE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrbitControls; });
/* unused harmony export MapControls */
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SqZg");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("X9qW");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author ScieCode / http://github.com/sciecode
 */
 // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

var OrbitControls = function (object, domElement) {
  if (domElement === undefined) console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.');
  if (domElement === document) console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
  this.object = object;
  this.domElement = domElement; // Set to false to disable this control

  this.enabled = true; // "target" sets the location of focus, where the object orbits around

  this.target = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](); // How far you can dolly in and out ( PerspectiveCamera only )

  this.minDistance = 0;
  this.maxDistance = Infinity; // How far you can zoom in and out ( OrthographicCamera only )

  this.minZoom = 0;
  this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.

  this.minPolarAngle = 0; // radians

  this.maxPolarAngle = Math.PI; // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].

  this.minAzimuthAngle = -Infinity; // radians

  this.maxAzimuthAngle = Infinity; // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop

  this.enableDamping = false;
  this.dampingFactor = 0.05; // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming

  this.enableZoom = true;
  this.zoomSpeed = 1.0; // Set to false to disable rotating

  this.enableRotate = true;
  this.rotateSpeed = 1.0; // Set to false to disable panning

  this.enablePan = true;
  this.panSpeed = 1.0;
  this.screenSpacePanning = false; // if true, pan in screen-space

  this.keyPanSpeed = 7.0; // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop

  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
  // Set to false to disable use of the keys

  this.enableKeys = true; // The four arrow keys

  this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }; // Mouse buttons

  this.mouseButtons = {
    LEFT: three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].ROTATE,
    MIDDLE: three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].DOLLY,
    RIGHT: three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].PAN
  }; // Touch fingers

  this.touches = {
    ONE: three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].ROTATE,
    TWO: three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].DOLLY_PAN
  }; // for reset

  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom; //
  // public methods
  //

  this.getPolarAngle = function () {
    return spherical.phi;
  };

  this.getAzimuthalAngle = function () {
    return spherical.theta;
  };

  this.saveState = function () {
    scope.target0.copy(scope.target);
    scope.position0.copy(scope.object.position);
    scope.zoom0 = scope.object.zoom;
  };

  this.reset = function () {
    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;
    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);
    scope.update();
    state = STATE.NONE;
  }; // this method is exposed, but perhaps it would be better if we can make it private...


  this.update = function () {
    var offset = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](); // so camera.up is the orbit axis

    var quat = new three__WEBPACK_IMPORTED_MODULE_1__["Quaternion"]().setFromUnitVectors(object.up, new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1, 0));
    var quatInverse = quat.clone().inverse();
    var lastPosition = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
    var lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_1__["Quaternion"]();
    return function update() {
      var position = scope.object.position;
      offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space

      offset.applyQuaternion(quat); // angle from z-axis around y-axis

      spherical.setFromVector3(offset);

      if (scope.autoRotate && state === STATE.NONE) {
        rotateLeft(getAutoRotationAngle());
      }

      if (scope.enableDamping) {
        spherical.theta += sphericalDelta.theta * scope.dampingFactor;
        spherical.phi += sphericalDelta.phi * scope.dampingFactor;
      } else {
        spherical.theta += sphericalDelta.theta;
        spherical.phi += sphericalDelta.phi;
      } // restrict theta to be between desired limits


      spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta)); // restrict phi to be between desired limits

      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
      spherical.makeSafe();
      spherical.radius *= scale; // restrict radius to be between desired limits

      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location

      if (scope.enableDamping === true) {
        scope.target.addScaledVector(panOffset, scope.dampingFactor);
      } else {
        scope.target.add(panOffset);
      }

      offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space

      offset.applyQuaternion(quatInverse);
      position.copy(scope.target).add(offset);
      scope.object.lookAt(scope.target);

      if (scope.enableDamping === true) {
        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;
        panOffset.multiplyScalar(1 - scope.dampingFactor);
      } else {
        sphericalDelta.set(0, 0, 0);
        panOffset.set(0, 0, 0);
      }

      scale = 1; // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
        scope.dispatchEvent(changeEvent);
        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;
        return true;
      }

      return false;
    };
  }();

  this.dispose = function () {
    scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
    scope.domElement.removeEventListener('mousedown', onMouseDown, false);
    scope.domElement.removeEventListener('wheel', onMouseWheel, false);
    scope.domElement.removeEventListener('touchstart', onTouchStart, false);
    scope.domElement.removeEventListener('touchend', onTouchEnd, false);
    scope.domElement.removeEventListener('touchmove', onTouchMove, false);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    scope.domElement.removeEventListener('keydown', onKeyDown, false); //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
  }; //
  // internals
  //


  var scope = this;
  var changeEvent = {
    type: 'change'
  };
  var startEvent = {
    type: 'start'
  };
  var endEvent = {
    type: 'end'
  };
  var STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  };
  var state = STATE.NONE;
  var EPS = 0.000001; // current position in spherical coordinates

  var spherical = new three__WEBPACK_IMPORTED_MODULE_1__["Spherical"]();
  var sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_1__["Spherical"]();
  var scale = 1;
  var panOffset = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
  var zoomChanged = false;
  var rotateStart = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var rotateEnd = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var rotateDelta = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var panStart = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var panEnd = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var panDelta = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var dollyStart = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var dollyEnd = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
  var dollyDelta = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();

  function getAutoRotationAngle() {
    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
  }

  function getZoomScale() {
    return Math.pow(0.95, scope.zoomSpeed);
  }

  function rotateLeft(angle) {
    sphericalDelta.theta -= angle;
  }

  function rotateUp(angle) {
    sphericalDelta.phi -= angle;
  }

  var panLeft = function () {
    var v = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
    return function panLeft(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix

      v.multiplyScalar(-distance);
      panOffset.add(v);
    };
  }();

  var panUp = function () {
    var v = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
    return function panUp(distance, objectMatrix) {
      if (scope.screenSpacePanning === true) {
        v.setFromMatrixColumn(objectMatrix, 1);
      } else {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.crossVectors(scope.object.up, v);
      }

      v.multiplyScalar(distance);
      panOffset.add(v);
    };
  }(); // deltaX and deltaY are in pixels; right and down are positive


  var pan = function () {
    var offset = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
    return function pan(deltaX, deltaY) {
      var element = scope.domElement;

      if (scope.object.isPerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen

        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we use only clientHeight here so aspect ratio does not distort speed

        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
      } else if (scope.object.isOrthographicCamera) {
        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
      } else {
        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;
      }
    };
  }();

  function dollyIn(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale /= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  }

  function dollyOut(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale *= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  } //
  // event callbacks - update the object state
  //


  function handleMouseDownRotate(event) {
    rotateStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownDolly(event) {
    dollyStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownPan(event) {
    panStart.set(event.clientX, event.clientY);
  }

  function handleMouseMoveRotate(event) {
    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
    var element = scope.domElement;
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
    rotateStart.copy(rotateEnd);
    scope.update();
  }

  function handleMouseMoveDolly(event) {
    dollyEnd.set(event.clientX, event.clientY);
    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {
      dollyIn(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyOut(getZoomScale());
    }

    dollyStart.copy(dollyEnd);
    scope.update();
  }

  function handleMouseMovePan(event) {
    panEnd.set(event.clientX, event.clientY);
    panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }

  function handleMouseUp()
  /*event*/
  {// no-op
  }

  function handleMouseWheel(event) {
    if (event.deltaY < 0) {
      dollyOut(getZoomScale());
    } else if (event.deltaY > 0) {
      dollyIn(getZoomScale());
    }

    scope.update();
  }

  function handleKeyDown(event) {
    var needsUpdate = false;

    switch (event.keyCode) {
      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        needsUpdate = true;
        break;

      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        needsUpdate = true;
        break;

      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        needsUpdate = true;
        break;

      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        needsUpdate = true;
        break;
    }

    if (needsUpdate) {
      // prevent the browser from scrolling on cursor keys
      event.preventDefault();
      scope.update();
    }
  }

  function handleTouchStartRotate(event) {
    if (event.touches.length == 1) {
      rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      rotateStart.set(x, y);
    }
  }

  function handleTouchStartPan(event) {
    if (event.touches.length == 1) {
      panStart.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      panStart.set(x, y);
    }
  }

  function handleTouchStartDolly(event) {
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyStart.set(0, distance);
  }

  function handleTouchStartDollyPan(event) {
    if (scope.enableZoom) handleTouchStartDolly(event);
    if (scope.enablePan) handleTouchStartPan(event);
  }

  function handleTouchStartDollyRotate(event) {
    if (scope.enableZoom) handleTouchStartDolly(event);
    if (scope.enableRotate) handleTouchStartRotate(event);
  }

  function handleTouchMoveRotate(event) {
    if (event.touches.length == 1) {
      rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      rotateEnd.set(x, y);
    }

    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
    var element = scope.domElement;
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
    rotateStart.copy(rotateEnd);
  }

  function handleTouchMovePan(event) {
    if (event.touches.length == 1) {
      panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      panEnd.set(x, y);
    }

    panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
  }

  function handleTouchMoveDolly(event) {
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyEnd.set(0, distance);
    dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
    dollyIn(dollyDelta.y);
    dollyStart.copy(dollyEnd);
  }

  function handleTouchMoveDollyPan(event) {
    if (scope.enableZoom) handleTouchMoveDolly(event);
    if (scope.enablePan) handleTouchMovePan(event);
  }

  function handleTouchMoveDollyRotate(event) {
    if (scope.enableZoom) handleTouchMoveDolly(event);
    if (scope.enableRotate) handleTouchMoveRotate(event);
  }

  function handleTouchEnd()
  /*event*/
  {} // no-op
  //
  // event handlers - FSM: listen for events and reset state
  //


  function onMouseDown(event) {
    if (scope.enabled === false) return; // Prevent the browser from scrolling.

    event.preventDefault(); // Manually set the focus since calling preventDefault above
    // prevents the browser from setting it automatically.

    scope.domElement.focus ? scope.domElement.focus() : window.focus();

    switch (event.button) {
      case 0:
        switch (scope.mouseButtons.LEFT) {
          case three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].ROTATE:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              if (scope.enablePan === false) return;
              handleMouseDownPan(event);
              state = STATE.PAN;
            } else {
              if (scope.enableRotate === false) return;
              handleMouseDownRotate(event);
              state = STATE.ROTATE;
            }

            break;

          case three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].PAN:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
              if (scope.enableRotate === false) return;
              handleMouseDownRotate(event);
              state = STATE.ROTATE;
            } else {
              if (scope.enablePan === false) return;
              handleMouseDownPan(event);
              state = STATE.PAN;
            }

            break;

          default:
            state = STATE.NONE;
        }

        break;

      case 1:
        switch (scope.mouseButtons.MIDDLE) {
          case three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].DOLLY:
            if (scope.enableZoom === false) return;
            handleMouseDownDolly(event);
            state = STATE.DOLLY;
            break;

          default:
            state = STATE.NONE;
        }

        break;

      case 2:
        switch (scope.mouseButtons.RIGHT) {
          case three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].ROTATE:
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
            break;

          case three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].PAN:
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
            break;

          default:
            state = STATE.NONE;
        }

        break;
    }

    if (state !== STATE.NONE) {
      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mouseup', onMouseUp, false);
      scope.dispatchEvent(startEvent);
    }
  }

  function onMouseMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (state) {
      case STATE.ROTATE:
        if (scope.enableRotate === false) return;
        handleMouseMoveRotate(event);
        break;

      case STATE.DOLLY:
        if (scope.enableZoom === false) return;
        handleMouseMoveDolly(event);
        break;

      case STATE.PAN:
        if (scope.enablePan === false) return;
        handleMouseMovePan(event);
        break;
    }
  }

  function onMouseUp(event) {
    if (scope.enabled === false) return;
    handleMouseUp(event);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onMouseWheel(event) {
    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
    event.preventDefault();
    event.stopPropagation();
    scope.dispatchEvent(startEvent);
    handleMouseWheel(event);
    scope.dispatchEvent(endEvent);
  }

  function onKeyDown(event) {
    if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
    handleKeyDown(event);
  }

  function onTouchStart(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (event.touches.length) {
      case 1:
        switch (scope.touches.ONE) {
          case three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].ROTATE:
            if (scope.enableRotate === false) return;
            handleTouchStartRotate(event);
            state = STATE.TOUCH_ROTATE;
            break;

          case three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].PAN:
            if (scope.enablePan === false) return;
            handleTouchStartPan(event);
            state = STATE.TOUCH_PAN;
            break;

          default:
            state = STATE.NONE;
        }

        break;

      case 2:
        switch (scope.touches.TWO) {
          case three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].DOLLY_PAN:
            if (scope.enableZoom === false && scope.enablePan === false) return;
            handleTouchStartDollyPan(event);
            state = STATE.TOUCH_DOLLY_PAN;
            break;

          case three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].DOLLY_ROTATE:
            if (scope.enableZoom === false && scope.enableRotate === false) return;
            handleTouchStartDollyRotate(event);
            state = STATE.TOUCH_DOLLY_ROTATE;
            break;

          default:
            state = STATE.NONE;
        }

        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      scope.dispatchEvent(startEvent);
    }
  }

  function onTouchMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
    event.stopPropagation();

    switch (state) {
      case STATE.TOUCH_ROTATE:
        if (scope.enableRotate === false) return;
        handleTouchMoveRotate(event);
        scope.update();
        break;

      case STATE.TOUCH_PAN:
        if (scope.enablePan === false) return;
        handleTouchMovePan(event);
        scope.update();
        break;

      case STATE.TOUCH_DOLLY_PAN:
        if (scope.enableZoom === false && scope.enablePan === false) return;
        handleTouchMoveDollyPan(event);
        scope.update();
        break;

      case STATE.TOUCH_DOLLY_ROTATE:
        if (scope.enableZoom === false && scope.enableRotate === false) return;
        handleTouchMoveDollyRotate(event);
        scope.update();
        break;

      default:
        state = STATE.NONE;
    }
  }

  function onTouchEnd(event) {
    if (scope.enabled === false) return;
    handleTouchEnd(event);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onContextMenu(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
  } //


  scope.domElement.addEventListener('contextmenu', onContextMenu, false);
  scope.domElement.addEventListener('mousedown', onMouseDown, false);
  scope.domElement.addEventListener('wheel', onMouseWheel, false);
  scope.domElement.addEventListener('touchstart', onTouchStart, false);
  scope.domElement.addEventListener('touchend', onTouchEnd, false);
  scope.domElement.addEventListener('touchmove', onTouchMove, false);
  scope.domElement.addEventListener('keydown', onKeyDown, false); // make sure element can receive keys.

  if (scope.domElement.tabIndex === -1) {
    scope.domElement.tabIndex = 0;
  } // force an update at start


  this.update();
};

OrbitControls.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(three__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"].prototype);
OrbitControls.prototype.constructor = OrbitControls; // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move

var MapControls = function (object, domElement) {
  OrbitControls.call(this, object, domElement);
  this.mouseButtons.LEFT = three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].PAN;
  this.mouseButtons.RIGHT = three__WEBPACK_IMPORTED_MODULE_1__["MOUSE"].ROTATE;
  this.touches.ONE = three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].PAN;
  this.touches.TWO = three__WEBPACK_IMPORTED_MODULE_1__["TOUCH"].DOLLY_ROTATE;
};

MapControls.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(three__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"].prototype);
MapControls.prototype.constructor = MapControls;


/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "X9qW":
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ })

/******/ });