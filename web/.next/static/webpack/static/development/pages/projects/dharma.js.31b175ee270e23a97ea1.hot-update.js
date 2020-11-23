webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./constants/Root.tsx":
/*!****************************!*\
  !*** ./constants/Root.tsx ***!
  \****************************/
/*! exports provided: Root, RootVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootVariables", function() { return RootVariables; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/Theme */ "./constants/Theme.tsx");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  :root {\n    /* ----------------------------------- Large Width Viewports */\n\n    /* --------------- Palette*/\n    --BgColor: ", "\n    --TextColor: ", "\n    --MbmColor: ", "\n\n    /* --------------- Base Measurements*/\n\n    /* -------- Base Measurement */\n    --Size: ", ";\n\n    /* -------- Font Sizes (Viewport) */\n    --ViewWidthFontSize: ", ";\n    --ViewHeightFontSize: ", ";\n    --IconSize: ", ";\n\n    /* -------- Root Element Measurement */\n    --REM: ", ";\n\n    /* -------- View Width (vw) Based Measurements */\n    --ViewWidthPadding: ", ";\n\n    /* --------- Site Grid */\n    --SiteWidth: ", ";\n    --NavSize: ", ";\n    --FooterSize: ", ";\n\n    /* --- Gutters */\n    --GutterTop: ", ";\n    --GutterRight: ", ";\n    --GutterBottom: ", ";\n    --GutterLeft: ", ";\n\n    /* --------- Buttons */\n    --ButtonSize: ", ";\n\n    /* --------- Inputs */\n    --InputSize: ", ";\n\n    /* --------- Geometry */\n    --Radius: ", ";\n\n    /* --------- Frame */\n    --FrameSize: ", ";\n\n    /* ----------------------------------- Medium Width Viewports */\n    @media (max-width: ", ") {\n      /* --------------- Base Measurements*/\n\n        /* --------- Frame */\n        --FrameSize: 2rem;\n\n        /* -------- Base Measurement */\n        --Size: ", ";\n\n        /* -------- Font Sizes (Viewport) */\n        --ViewWidthFontSize: ", ";\n        --ViewHeightFontSize: ", ";\n        --IconSize: ", ";\n\n        /* -------- Root Element Measurement */\n        --REM: ", ";\n\n        /* -------- View Width (vw) Based Measurements */\n        --ViewWidthPadding: ", ";\n\n        /* --------- Site Grid */\n        --SiteWidth: ", ";\n        --NavSize: ", ";\n        --FooterSize: ", ";\n\n        /* --- Gutters */\n        --GutterTop: ", ";\n        --GutterRight: ", ";\n        --GutterBottom: ", ";\n        --GutterLeft: ", ";\n\n        /* --------- Buttons */\n        --ButtonSize: ", ";\n\n        /* --------- Inputs */\n        --InputSize: ", ";\n\n        /* --------- Geometry */\n        --Radius: ", ";\n    }\n\n    /* ----------------------------------- Small Width Viewports */\n    @media (max-width: ", ") {\n      /* --------------- Base Measurements*/\n\n        /* -------- Base Measurement */\n        --Size: ", ";\n\n        /* -------- Font Sizes (Viewport) */\n        --ViewWidthFontSize: ", ";\n        --ViewHeightFontSize: ", ";\n        --IconSize: ", ";\n\n        /* -------- Root Element Measurement */\n        --Rem: ", ";\n\n        /* -------- View Width (vw) Based Measurements */\n        --ViewWidthPadding: ", ";\n\n        /* --------- Site Grid */\n        --SiteWidth: ", ";\n        --NavSize: ", ";\n        --FooterSize: ", ";\n\n        /* --- Gutters */\n        --GutterTop: ", ";\n        --GutterRight: ", ";\n        --GutterBottom: ", ";\n        --GutterLeft: ", ";\n\n        /* --------- Buttons */\n        --ButtonSize: ", ";\n\n        /* --------- Inputs */\n        --InputSize: ", ";\n\n        /* --------- Geometry */\n        --Radius: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Root.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.
// Usage:
// 1. First import the file.
// import { Root } from '../../../path/to/Root'
// 2. Use it in your SC: 'color: ${Root.Size}; or simply refer to the object and key when used in functions.'

 // Begin Component
//////////////////////////////////////////////////////////////////////
// Assign CSS Variables for automatic Media Queries.

var Root = {
  // Palette
  Color: {
    Bg: "var(--BgColor)",
    Text: "var(--TextColor)",
    Mbm: "var(--MbmColor)"
  },
  // Core Base Measurement
  Size: "var(--Size)",
  ViewWidthFontSize: "var(--ViewWidthFontSize)",
  ViewHeightFontSize: "var(--ViewHeightFontSize)",
  IconSize: "var(--IconSize)",
  // Root Element Measurement
  Rem: "var(--REM)",
  // View Width (vw) Based Measurements
  ViewWidthPadding: "var(--ViewWidthPadding)",
  // Site Grid
  Site: {
    Width: "var(--SiteWidth)"
  },
  Nav: {
    Size: "var(--NavSize)"
  },
  Footer: {
    Size: "var(--FooterSize)"
  },
  Grid: {
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Top: "var(--GutterTop)",
      Right: "var(--GutterRight)",
      Bottom: "var(--GutterBottom)",
      Left: "var(--GutterLeft)"
    },
    Indent: {
      X: "var(--IndentX)",
      Y: "var(--IndentY)"
    }
  },
  // Buttons
  Button: {
    Size: "var(--ButtonSize)"
  },
  // Inputs
  Input: "var(--InputSize)",
  // Geometry
  Radius: "var(--Radius)",
  // Frame
  FrameSize: "var(--FrameSize)"
}; // Responsive Measurements:
// We use these to avoid media queries all
// over the place where possible.

var RootVariables = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Color.Background, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Color.Primary, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Color.White, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Size.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Size.ViewWidth.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Size.ViewHeight.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Icon.Size.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Rem.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.ViewWidth.Padding.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.SiteWidth, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Nav.Size.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Footer.Size.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Lg.Top, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Lg.Right, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Lg.Bottom, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Lg.Left, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Button.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Input.Lg, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Geometry.Radius, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Size.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Size.ViewWidth.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Size.ViewHeight.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Icon.Size.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Rem.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.ViewWidth.Padding.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.SiteWidth, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Nav.Size.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Footer.Size.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Md.Top, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Md.Right, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Md.Bottom, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Md.Left, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Button.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Input.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Geometry.Radius, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Media.Width.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Size.ViewWidth.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Size.ViewHeight.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Font.Icon.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Rem.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.ViewWidth.Padding.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.SiteWidth, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Nav.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Footer.Size.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Sm.Top, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Sm.Right, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Sm.Bottom, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Grid.Gutter.Sm.Left, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Button.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Input.Sm, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].Base.Geometry.Radius); // End Component
//////////////////////////////////////////////////////////////////////

/***/ })

})
//# sourceMappingURL=dharma.js.31b175ee270e23a97ea1.hot-update.js.map