/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader/index.js!./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*RESET*/\n/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nvertical-align: baseline;\n-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n-moz-box-sizing: border-box;    /* Firefox, other Gecko */\nbox-sizing: border-box;         /* Opera/IE 8+ */\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n-moz-box-sizing: border-box;    /* Firefox, other Gecko */\nbox-sizing: border-box; \n}\nbody {\nline-height: 1;\n}\nol, ul {\nlist-style: none;\n}\nblockquote, q {\nquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/*END RESET*/\n\nbody {\n    overflow-x: hidden;\n    padding: 10px;\n    padding-left: 100px;\n    padding-right: 100px;\n    color: green;\n    /* font-size: 2vw; */\n    font-size: 5vw;\n    line-height: 1;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    /* font-family: 'Rubik', sans-serif; */\n}\nh1 {\n    font-size: 2em;\n}\n\n/*LAYOUT*/\n\n.wrapper-1 {\n    display: grid;\n    width: 100vw;\n    height: 100vh;\n    /* display: flex; */\n    grid-template-columns: 1fr;\n    grid-template-rows: 3em 2em 20em 5em 1fr;\n}\n\n/* .wrapper-2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50vw;\n    height: 50vh;\n    border: 4px solid yellowgreen;\n} */\n\nheader {\n    /* height:2rem; */\n    grid-area: 1 / 1 / 2 / 2;\n    outline: 2px solid green;\n}\n\n.game-area {\n    grid-area: 2 / 1 / 5 / 2;\n    /* min-width: 100vw;\n    min-height: 100vw; */\n    /* margin: 0 auto; */\n    outline: 2px solid purple;\n}\n\n#opponent {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n#board {\n    display: flex;\n    flex-wrap: wrap;\n    grid-area: 3 / 1 / 4 / 2;\n}\n\n.square {\n    height: 4em;\n    width: 4em;\n    outline: 2px solid black;\n}\n\n#avatar {\n    grid-area: 4 / 1 / 5 / 2;\n}\n\n#opponent, #avatar {\n    text-align: center;\n    background: gray;\n}\n#opponent>span, #avatar>span {\n    line-height: 1.5em;\n    color: white;\n}\n\n.my-turn {\n    border: 2px solid green;\n}\n\n.card-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.card {\n    color: white;\n    width: 5%;\n    margin: 1%;\n}\n\n.color1 {\n    background: orange;\n}\n.color2 {\n    background: magenta;\n}\n\n.chosen {\n    outline: 2px solid blue;\n}\n\n.nodisplay {\n    display: none;\n}\n\n.room-chat-area {\n    width: 25%;\n    left: 5%;\n}\n\n@media screen and (max-width:820px) {\n    body {\n        /* padding: 10px; */\n        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n    }\n} /* end media screen */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,QAAQ;AACR;;;CAGC;;AAED;;;;;;;;;;;;;AAaA,SAAS;AACT,UAAU;AACV,SAAS;AACT,wBAAwB;AACxB,8BAA8B,EAAE,gCAAgC;AAChE,2BAA2B,KAAK,yBAAyB;AACzD,sBAAsB,UAAU,gBAAgB;AAChD;AACA,gDAAgD;AAChD;;AAEA,cAAc;AACd,8BAA8B,EAAE,gCAAgC;AAChE,2BAA2B,KAAK,yBAAyB;AACzD,sBAAsB;AACtB;AACA;AACA,cAAc;AACd;AACA;AACA,gBAAgB;AAChB;AACA;AACA,YAAY;AACZ;AACA;;IAEI,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,cAAc;IACd,4CAA4C;IAC5C,sCAAsC;AAC1C;AACA;IACI,cAAc;AAClB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,wCAAwC;AAC5C;;AAEA;;;;;;;GAOG;;AAEH;IACI,iBAAiB;IACjB,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB;wBACoB;IACpB,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,QAAQ;AACZ;;AAEA;IACI;QACI,mBAAmB;QACnB,kHAAkH;IACtH;AACJ,EAAE,qBAAqB","sourcesContent":["/*RESET*/\n/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nvertical-align: baseline;\n-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n-moz-box-sizing: border-box;    /* Firefox, other Gecko */\nbox-sizing: border-box;         /* Opera/IE 8+ */\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n-moz-box-sizing: border-box;    /* Firefox, other Gecko */\nbox-sizing: border-box; \n}\nbody {\nline-height: 1;\n}\nol, ul {\nlist-style: none;\n}\nblockquote, q {\nquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/*END RESET*/\n\nbody {\n    overflow-x: hidden;\n    padding: 10px;\n    padding-left: 100px;\n    padding-right: 100px;\n    color: green;\n    /* font-size: 2vw; */\n    font-size: 5vw;\n    line-height: 1;\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n    /* font-family: 'Rubik', sans-serif; */\n}\nh1 {\n    font-size: 2em;\n}\n\n/*LAYOUT*/\n\n.wrapper-1 {\n    display: grid;\n    width: 100vw;\n    height: 100vh;\n    /* display: flex; */\n    grid-template-columns: 1fr;\n    grid-template-rows: 3em 2em 20em 5em 1fr;\n}\n\n/* .wrapper-2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50vw;\n    height: 50vh;\n    border: 4px solid yellowgreen;\n} */\n\nheader {\n    /* height:2rem; */\n    grid-area: 1 / 1 / 2 / 2;\n    outline: 2px solid green;\n}\n\n.game-area {\n    grid-area: 2 / 1 / 5 / 2;\n    /* min-width: 100vw;\n    min-height: 100vw; */\n    /* margin: 0 auto; */\n    outline: 2px solid purple;\n}\n\n#opponent {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n#board {\n    display: flex;\n    flex-wrap: wrap;\n    grid-area: 3 / 1 / 4 / 2;\n}\n\n.square {\n    height: 4em;\n    width: 4em;\n    outline: 2px solid black;\n}\n\n#avatar {\n    grid-area: 4 / 1 / 5 / 2;\n}\n\n#opponent, #avatar {\n    text-align: center;\n    background: gray;\n}\n#opponent>span, #avatar>span {\n    line-height: 1.5em;\n    color: white;\n}\n\n.my-turn {\n    border: 2px solid green;\n}\n\n.card-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.card {\n    color: white;\n    width: 5%;\n    margin: 1%;\n}\n\n.color1 {\n    background: orange;\n}\n.color2 {\n    background: magenta;\n}\n\n.chosen {\n    outline: 2px solid blue;\n}\n\n.nodisplay {\n    display: none;\n}\n\n.room-chat-area {\n    width: 25%;\n    left: 5%;\n}\n\n@media screen and (max-width:820px) {\n    body {\n        /* padding: 10px; */\n        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n    }\n} /* end media screen */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-hot-loader/index.js!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-hot-loader/index.js!./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_hot_loader_index_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_hot_loader_index_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_hot_loader_index_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_hot_loader_index_js_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let connection;
let clientId = 'anon';

// need exception handled
function connect () {
    return new Promise((resolve,reject)=> {
        const socket = new WebSocket("ws://ttt-hit-pow.herokuapp.com");
        socket.onopen = () => resolve(socket);
    });
}
connect().then((socket)=>{
    socket.onmessage = (event) => {
        handleMessages(event)
    }
    connection = socket;
});

// cache DOM
let room_list = document.getElementById('room-list');
let messages_list = document.getElementById('room-chat-messages');
let chat_form = document.getElementById('room-chat-form');
chat_form.addEventListener('submit', sendPubMessage);

// handle ws events
function handleMessages (e) {
    let message = JSON.parse(e.data);
    console.log(message);
    switch (message.tag) {
        case 'clients':
            updateClientList(message);
            break;
        case 'register':
            clientId = message.text;
            break;
        case 'public':
            updateMessagesList(message);
            break;
        case 'direct':
            updateMessagesList(message);
            if (message.sender === 'game') { handleGameMessages(message); }
            break;
        case 'game':
            handleGameMessages(message);
            break;
        default:
            break
    }

};

function updateMessagesList(message) {
    let new_message = document.createElement('li');
    new_message.innerHTML = `<span>${message.sender}: ${message.text}</span>`;
    messages_list.appendChild(new_message);
}

function updateClientList(message) {
    console.log(message);
    let new_list = message.list.map((clientHandle) => `<li>${clientHandle}</li>`).join('');
    room_list.innerHTML = new_list;
    if (message.players.length > 0) {
        message.text = 'late join';
        handleGameMessages(message);
    }
}

function sendPubMessage (event) {
    event.preventDefault();
    let text = event.target.elements[0].value;
    let tag = 'public';
    let m = {
        "tag": tag,
        "sender": clientId,
        "text": text
        }; 
    connection.send(JSON.stringify(m));
    event.target.elements[0].value = '';
}

///////////////////////// game stuff
let gameOn = false;
let myTurn = false;

let playerList = [];
let myNum = null;

//cache dom
let board = document.getElementById('board');
let oppData = document.getElementById('opponent');
let avtData = document.getElementById('avatar');
let cardContainer = document.getElementsByClassName('card-container')[0];
let cards = [];
let chosenC = null;
let colors = ['color1','color2'];
let cardColor = ()=>colors[myNum-1];
let bombPlaced = false;
let bombReady = false;

avtData.addEventListener('click', () => {
    if (!gameOn) {
        registerPlayer();
    }
    // updateAvtData();
 });

function registerPlayer() {
    let m = {
        "tag": "game",
        "sender": clientId,
        "receiver": "game",
        "text": "join"
        };
    connection.send(JSON.stringify(m));
    gameOn = true;
}

function handleGameMessages(message) {
    switch (message.text) {
        case 'join1':
            playerList.push(message.sender);
            if (message.sender == clientId) {
                myNum = 1;
                updateAvtData('join',message.sender,myNum);
                updateAvtData('my_turn');
            } else {
                updateOppData('join',message.sender,1);
            }
            break;
        case 'join2':
            playerList.push(message.sender);
            console.log(playerList);
            if (message.sender == clientId) {
                myNum = 2;
                updateAvtData('join',message.sender,myNum);
            } else {
                updateOppData('join',message.sender,2);
            }
            if (playerList[0] === clientId) {
                let m = {
                    "tag": "game",
                    "sender": clientId,
                    "receiver": "game",
                    "text":"ready"
                };
                connection.send(JSON.stringify(m));
            }
            break;
        case 'late join':
            playerList = message.players;
            if (playerList.length === 2) {
                console.log('plist2');
                updateAvtData('reject',playerList[0],1);
                updateOppData('reject',playerList[1],2);
                gameOn = true;
            }
            if (playerList.length === 1) {
                console.log('plist1');
                updateOppData('join',playerList[0],1);
            }
            break;
        case 'try later.':
            updateAvtData('reject',playerList[0],1);
            updateOppData('reject',playerList[1],2);
            break;
        case 'start':
            updateBoard();
            break;
        case 'board':
            updateBoard(message.data);
            updateAvtData('my_turn');
            break;
        case 'disable':
            bombPlaced = false;
            bombReady = false;
            console.log('disabled')
            updateBoard(message.data);
            updateAvtData('my_turn');
            break;
        case 'cards':
            cards = message.data;
            updateAvtData('cards');
            break;
        case 'win':
            message.text = message.data
            updateMessagesList(message);
        case 'reset':
            updateBoard();
            updateAvtData('reset');
            updateOppData('reset');
            playerList = [];
            gameOn = false;
            break;
        default:
            break;
    }
}

function updateAvtData(uType,player,playerNum) {
    switch (uType) {
        case 'join':
            avtData.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            updateCardContainer();
            break;
        case 'reject':
            avtData.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            break;
        case 'reset':
            avtData.innerHTML = `<span>click to play</span>`;
            break;
        case 'cards':
            updateCardContainer('cards');
            break;
        case 'my_turn':
            myTurn = myTurn ? false : true;
            myTurn ? avtData.classList.add('my-turn') : avtData.classList.remove('my-turn');
            break;
        default:
            console.log('unknown');
            break;
    }
}

function updateOppData(uType,player,playerNum) {
    switch (uType) {
        case 'join':
            oppData.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            break;
        case 'reject':
            oppData.innerHTML = `<span>${player} as Player${playerNum}</span>`;
            break;
        case 'reset':
            oppData.innerHTML = `<span>waiting for opponent...</span>`;
            break;
        default:
            console.log('unknown');
            break;
    }
}

function updateBoard(boardArr = 'blank') {
    if (boardArr === 'blank') {
        buildBoard();
    }
    else {
        boardArr.forEach((r,i)=> r.forEach((s,j)=>{
            let idx = 's-'+String(i)+String(j);
            let square = document.getElementById(`${idx}`);
            if (s !== '0') {
                square.className = 'square';
                square.classList.add('occupied', `color${s}`);
            } else {
                square.className = 'square';
            }
        }));
        if (bombReady) {
            autoBombExplode()
        }
        if (bombPlaced) {
            bombReady = true;
        }
    }
}

function returnCard(card) {
    let cardFromBoard = document.getElementById(card);
    cardFromBoard.classList.remove('nodisplay');
}

function buildBoard() {
    listenSquares();
    // let cols = ['0','1','2','3','4'];
    // let rows = ['0','1','2','3','4'];
    // let square = (r,c) => {
    //     let id = `s-${r}${c}`;
    //     return `<div class ="square" id="${id}"></div>`
    // }
    // let grid = rows.map( (r) => cols.map( (c) => square(`${r}${c}`) ) );
    // let squares = grid.map( (r) => r.join('') ).join('');
    // board.innerHTML = squares;
    console.log("board ready");
}

function updateCardContainer(change, idx) {
    if (!cardContainer) {
        cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        avtData.appendChild(cardContainer);
        // console.log(cardContainer);
    } else {
        switch(change) {
            case 'cards':
                cards.forEach((cVal,i) => {
                    let card = document.createElement('div');
                    card.classList.add('card',`c-${cVal}`,`${cardColor()}`);
                    card.innerHTML = `${cVal}`;
                    cardContainer.appendChild(card);
                    listenCard(card);
                });
                break;
            default:
                break
        }
    }
}

function listenSquares() {
    let ss = document.getElementsByClassName('square');
    [].forEach.call(ss, (s) => {
        s.addEventListener('click', chooseSquare);
    });
}

function listenCard(card) {
    card.addEventListener('click', chooseCard); 
}

function chooseCard(event) {
    let cards = document.getElementsByClassName('card');
    [].forEach.call(cards, (card) => {
        card.classList.remove('chosen');
    });
    event.target.classList.add('chosen');
    chosenC = event.target.classList[1];
}

function chooseSquare(event) {
    let square = event.target;
    let squareId = square.getAttribute('id');
    if (myTurn) {
        let card = document.getElementsByClassName(`${chosenC}`)[0];
        let cardVal = card.classList[1].split('-')[1];
        console.log('cardval=',cardVal);
        if (square.classList[1] !== 'occupied' && cardVal === '3') {
            sendMove(cardVal, squareId);
            card.parentNode.removeChild(card);
            bombPlaced = true;
        }
        else if ((square.classList[1] !== 'occupied' && cardVal === '1') || cardVal === '2' ) {
            sendMove(cardVal, squareId);
            card.parentNode.removeChild(card);
        }
    }
}

function autoBombExplode() {
    sendMove();
}

function sendMove(cardVal, square) {
    let m = {}
    if (!bombReady) {
        let s = square.split('-')[1];
        m = {
            "tag": "game",
            "sender": `${clientId}`,
            "receiver": "game",
            "text": "move",
            "data": [myNum,cardVal,s]
        }
    } else {
        m = {
            "tag": "game",
            "sender": `${clientId}`,
            "receiver": "game",
            "text": "move",
            "data": [myNum,'','','bomb']
        }
        bombPlaced = false;
        bombReady = false;
    }
    connection.send(JSON.stringify(m));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZSxJQUFJLGFBQWE7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZELGFBQWE7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRLFdBQVcsVUFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUSxXQUFXLFVBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVEsV0FBVyxVQUFVO0FBQ3RFO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUSxXQUFXLFVBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELElBQUk7QUFDeEQ7QUFDQTtBQUNBLHlEQUF5RCxFQUFFO0FBQzNELGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixFQUFFLEVBQUUsRUFBRTtBQUMvQiw4Q0FBOEMsR0FBRztBQUNqRDtBQUNBLDhEQUE4RCxFQUFFLEVBQUUsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSyxLQUFLLFlBQVk7QUFDekUsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxRQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dHQtaGl0LXBvdy1jbGllbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50Ly4vc3JjL3N0eWxlLmNzcz8xYTZhIiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90dHQtaGl0LXBvdy1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90dHQtaGl0LXBvdy1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90dHQtaGl0LXBvdy1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R0dC1oaXQtcG93LWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdHR0LWhpdC1wb3ctY2xpZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypSRVNFVCovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm9yZGVyOiAwO1xcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbi1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG5ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAgICAgIC8qIE9wZXJhL0lFIDgrICovXFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuZGlzcGxheTogYmxvY2s7XFxuLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4tbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcbmJvZHkge1xcbmxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcbmxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcbnF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypFTkQgUkVTRVQqL1xcblxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIC8qIGZvbnQtc2l6ZTogMnZ3OyAqL1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnTSBQTFVTIFJvdW5kZWQgMWMnLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLypMQVlPVVQqL1xcblxcbi53cmFwcGVyLTEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNlbSAyZW0gMjBlbSA1ZW0gMWZyO1xcbn1cXG5cXG4vKiAud3JhcHBlci0yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvd2dyZWVuO1xcbn0gKi9cXG5cXG5oZWFkZXIge1xcbiAgICAvKiBoZWlnaHQ6MnJlbTsgKi9cXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxufVxcblxcbi5nYW1lLWFyZWEge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gNSAvIDI7XFxuICAgIC8qIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZ3OyAqL1xcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuI29wcG9uZW50IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbn1cXG5cXG4jYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNhdmF0YXIge1xcbiAgICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDI7XFxufVxcblxcbiNvcHBvbmVudCwgI2F2YXRhciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuI29wcG9uZW50PnNwYW4sICNhdmF0YXI+c3BhbiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubXktdHVybiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLmNvbG9yMSB7XFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG59XFxuLmNvbG9yMiB7XFxuICAgIGJhY2tncm91bmQ6IG1hZ2VudGE7XFxufVxcblxcbi5jaG9zZW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmx1ZTtcXG59XFxuXFxuLm5vZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yb29tLWNoYXQtYXJlYSB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGxlZnQ6IDUlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgyMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgLyogcGFkZGluZzogMTBweDsgKi9cXG4gICAgICAgIHBhZGRpbmc6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcXG4gICAgfVxcbn0gLyogZW5kIG1lZGlhIHNjcmVlbiAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsUUFBUTtBQUNSOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVM7QUFDVCxVQUFVO0FBQ1YsU0FBUztBQUNULHdCQUF3QjtBQUN4Qiw4QkFBOEIsRUFBRSxnQ0FBZ0M7QUFDaEUsMkJBQTJCLEtBQUsseUJBQXlCO0FBQ3pELHNCQUFzQixVQUFVLGdCQUFnQjtBQUNoRDtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQSxjQUFjO0FBQ2QsOEJBQThCLEVBQUUsZ0NBQWdDO0FBQ2hFLDJCQUEyQixLQUFLLHlCQUF5QjtBQUN6RCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGNBQWM7SUFDZCw0Q0FBNEM7SUFDNUMsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdDQUF3QztBQUM1Qzs7QUFFQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7d0JBQ29CO0lBQ3BCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7QUFDWjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGtIQUFrSDtJQUN0SDtBQUNKLEVBQUUscUJBQXFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qUkVTRVQqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxudjIuMCB8IDIwMTEwMTI2XFxuTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4tbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgICAgICAvKiBPcGVyYS9JRSA4KyAqL1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbmRpc3BsYXk6IGJsb2NrO1xcbi13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbn1cXG5ib2R5IHtcXG5saW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5saXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5xdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qRU5EIFJFU0VUKi9cXG5cXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICAvKiBmb250LXNpemU6IDJ2dzsgKi9cXG4gICAgZm9udC1zaXplOiA1dnc7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LWZhbWlseTogJ00gUExVUyBSb3VuZGVkIDFjJywgc2Fucy1zZXJpZjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7ICovXFxufVxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi8qTEFZT1VUKi9cXG5cXG4ud3JhcHBlci0xIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZW0gMmVtIDIwZW0gNWVtIDFmcjtcXG59XFxuXFxuLyogLndyYXBwZXItMiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB5ZWxsb3dncmVlbjtcXG59ICovXFxuXFxuaGVhZGVyIHtcXG4gICAgLyogaGVpZ2h0OjJyZW07ICovXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uZ2FtZS1hcmVhIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDUgLyAyO1xcbiAgICAvKiBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2dzsgKi9cXG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbiNvcHBvbmVudCB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG59XFxuXFxuI2JvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBoZWlnaHQ6IDRlbTtcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jYXZhdGFyIHtcXG4gICAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAyO1xcbn1cXG5cXG4jb3Bwb25lbnQsICNhdmF0YXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcbiNvcHBvbmVudD5zcGFuLCAjYXZhdGFyPnNwYW4ge1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm15LXR1cm4ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIG1hcmdpbjogMSU7XFxufVxcblxcbi5jb2xvcjEge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVxcbi5jb2xvcjIge1xcbiAgICBiYWNrZ3JvdW5kOiBtYWdlbnRhO1xcbn1cXG5cXG4uY2hvc2VuIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5ub2Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucm9vbS1jaGF0LWFyZWEge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBsZWZ0OiA1JTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MjBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICAgICAgICBwYWRkaW5nOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XFxuICAgIH1cXG59IC8qIGVuZCBtZWRpYSBzY3JlZW4gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1MzE0MDA3NzI4MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcblxubGV0IGNvbm5lY3Rpb247XG5sZXQgY2xpZW50SWQgPSAnYW5vbic7XG5cbi8vIG5lZWQgZXhjZXB0aW9uIGhhbmRsZWRcbmZ1bmN0aW9uIGNvbm5lY3QgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly90dHQtaGl0LXBvdy5oZXJva3VhcHAuY29tXCIpO1xuICAgICAgICBzb2NrZXQub25vcGVuID0gKCkgPT4gcmVzb2x2ZShzb2NrZXQpO1xuICAgIH0pO1xufVxuY29ubmVjdCgpLnRoZW4oKHNvY2tldCk9PntcbiAgICBzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGhhbmRsZU1lc3NhZ2VzKGV2ZW50KVxuICAgIH1cbiAgICBjb25uZWN0aW9uID0gc29ja2V0O1xufSk7XG5cbi8vIGNhY2hlIERPTVxubGV0IHJvb21fbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLWxpc3QnKTtcbmxldCBtZXNzYWdlc19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tY2hhdC1tZXNzYWdlcycpO1xubGV0IGNoYXRfZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLWNoYXQtZm9ybScpO1xuY2hhdF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlbmRQdWJNZXNzYWdlKTtcblxuLy8gaGFuZGxlIHdzIGV2ZW50c1xuZnVuY3Rpb24gaGFuZGxlTWVzc2FnZXMgKGUpIHtcbiAgICBsZXQgbWVzc2FnZSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudGFnKSB7XG4gICAgICAgIGNhc2UgJ2NsaWVudHMnOlxuICAgICAgICAgICAgdXBkYXRlQ2xpZW50TGlzdChtZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgICAgICBjbGllbnRJZCA9IG1lc3NhZ2UudGV4dDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwdWJsaWMnOlxuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZXNMaXN0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RpcmVjdCc6XG4gICAgICAgICAgICB1cGRhdGVNZXNzYWdlc0xpc3QobWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5zZW5kZXIgPT09ICdnYW1lJykgeyBoYW5kbGVHYW1lTWVzc2FnZXMobWVzc2FnZSk7IH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnYW1lJzpcbiAgICAgICAgICAgIGhhbmRsZUdhbWVNZXNzYWdlcyhtZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWtcbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzTGlzdChtZXNzYWdlKSB7XG4gICAgbGV0IG5ld19tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdfbWVzc2FnZS5pbm5lckhUTUwgPSBgPHNwYW4+JHttZXNzYWdlLnNlbmRlcn06ICR7bWVzc2FnZS50ZXh0fTwvc3Bhbj5gO1xuICAgIG1lc3NhZ2VzX2xpc3QuYXBwZW5kQ2hpbGQobmV3X21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDbGllbnRMaXN0KG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICBsZXQgbmV3X2xpc3QgPSBtZXNzYWdlLmxpc3QubWFwKChjbGllbnRIYW5kbGUpID0+IGA8bGk+JHtjbGllbnRIYW5kbGV9PC9saT5gKS5qb2luKCcnKTtcbiAgICByb29tX2xpc3QuaW5uZXJIVE1MID0gbmV3X2xpc3Q7XG4gICAgaWYgKG1lc3NhZ2UucGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dCA9ICdsYXRlIGpvaW4nO1xuICAgICAgICBoYW5kbGVHYW1lTWVzc2FnZXMobWVzc2FnZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZW5kUHViTWVzc2FnZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0ZXh0ID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgIGxldCB0YWcgPSAncHVibGljJztcbiAgICBsZXQgbSA9IHtcbiAgICAgICAgXCJ0YWdcIjogdGFnLFxuICAgICAgICBcInNlbmRlclwiOiBjbGllbnRJZCxcbiAgICAgICAgXCJ0ZXh0XCI6IHRleHRcbiAgICAgICAgfTsgXG4gICAgY29ubmVjdGlvbi5zZW5kKEpTT04uc3RyaW5naWZ5KG0pKTtcbiAgICBldmVudC50YXJnZXQuZWxlbWVudHNbMF0udmFsdWUgPSAnJztcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBnYW1lIHN0dWZmXG5sZXQgZ2FtZU9uID0gZmFsc2U7XG5sZXQgbXlUdXJuID0gZmFsc2U7XG5cbmxldCBwbGF5ZXJMaXN0ID0gW107XG5sZXQgbXlOdW0gPSBudWxsO1xuXG4vL2NhY2hlIGRvbVxubGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5sZXQgb3BwRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHBvbmVudCcpO1xubGV0IGF2dERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyJyk7XG5sZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtY29udGFpbmVyJylbMF07XG5sZXQgY2FyZHMgPSBbXTtcbmxldCBjaG9zZW5DID0gbnVsbDtcbmxldCBjb2xvcnMgPSBbJ2NvbG9yMScsJ2NvbG9yMiddO1xubGV0IGNhcmRDb2xvciA9ICgpPT5jb2xvcnNbbXlOdW0tMV07XG5sZXQgYm9tYlBsYWNlZCA9IGZhbHNlO1xubGV0IGJvbWJSZWFkeSA9IGZhbHNlO1xuXG5hdnREYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghZ2FtZU9uKSB7XG4gICAgICAgIHJlZ2lzdGVyUGxheWVyKCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZUF2dERhdGEoKTtcbiB9KTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJQbGF5ZXIoKSB7XG4gICAgbGV0IG0gPSB7XG4gICAgICAgIFwidGFnXCI6IFwiZ2FtZVwiLFxuICAgICAgICBcInNlbmRlclwiOiBjbGllbnRJZCxcbiAgICAgICAgXCJyZWNlaXZlclwiOiBcImdhbWVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiam9pblwiXG4gICAgICAgIH07XG4gICAgY29ubmVjdGlvbi5zZW5kKEpTT04uc3RyaW5naWZ5KG0pKTtcbiAgICBnYW1lT24gPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVHYW1lTWVzc2FnZXMobWVzc2FnZSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS50ZXh0KSB7XG4gICAgICAgIGNhc2UgJ2pvaW4xJzpcbiAgICAgICAgICAgIHBsYXllckxpc3QucHVzaChtZXNzYWdlLnNlbmRlcik7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5zZW5kZXIgPT0gY2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICBteU51bSA9IDE7XG4gICAgICAgICAgICAgICAgdXBkYXRlQXZ0RGF0YSgnam9pbicsbWVzc2FnZS5zZW5kZXIsbXlOdW0pO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUF2dERhdGEoJ215X3R1cm4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlT3BwRGF0YSgnam9pbicsbWVzc2FnZS5zZW5kZXIsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnam9pbjInOlxuICAgICAgICAgICAgcGxheWVyTGlzdC5wdXNoKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllckxpc3QpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VuZGVyID09IGNsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgbXlOdW0gPSAyO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUF2dERhdGEoJ2pvaW4nLG1lc3NhZ2Uuc2VuZGVyLG15TnVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlT3BwRGF0YSgnam9pbicsbWVzc2FnZS5zZW5kZXIsMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyTGlzdFswXSA9PT0gY2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWdcIjogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2VuZGVyXCI6IGNsaWVudElkLFxuICAgICAgICAgICAgICAgICAgICBcInJlY2VpdmVyXCI6IFwiZ2FtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcInJlYWR5XCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uc2VuZChKU09OLnN0cmluZ2lmeShtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGF0ZSBqb2luJzpcbiAgICAgICAgICAgIHBsYXllckxpc3QgPSBtZXNzYWdlLnBsYXllcnM7XG4gICAgICAgICAgICBpZiAocGxheWVyTGlzdC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxpc3QyJyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQXZ0RGF0YSgncmVqZWN0JyxwbGF5ZXJMaXN0WzBdLDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9wcERhdGEoJ3JlamVjdCcscGxheWVyTGlzdFsxXSwyKTtcbiAgICAgICAgICAgICAgICBnYW1lT24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYXllckxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsaXN0MScpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9wcERhdGEoJ2pvaW4nLHBsYXllckxpc3RbMF0sMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndHJ5IGxhdGVyLic6XG4gICAgICAgICAgICB1cGRhdGVBdnREYXRhKCdyZWplY3QnLHBsYXllckxpc3RbMF0sMSk7XG4gICAgICAgICAgICB1cGRhdGVPcHBEYXRhKCdyZWplY3QnLHBsYXllckxpc3RbMV0sMik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib2FyZCc6XG4gICAgICAgICAgICB1cGRhdGVCb2FyZChtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgdXBkYXRlQXZ0RGF0YSgnbXlfdHVybicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rpc2FibGUnOlxuICAgICAgICAgICAgYm9tYlBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYm9tYlJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzYWJsZWQnKVxuICAgICAgICAgICAgdXBkYXRlQm9hcmQobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZUF2dERhdGEoJ215X3R1cm4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYXJkcyc6XG4gICAgICAgICAgICBjYXJkcyA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgICAgICAgIHVwZGF0ZUF2dERhdGEoJ2NhcmRzJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2luJzpcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dCA9IG1lc3NhZ2UuZGF0YVxuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZXNMaXN0KG1lc3NhZ2UpO1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICB1cGRhdGVCb2FyZCgpO1xuICAgICAgICAgICAgdXBkYXRlQXZ0RGF0YSgncmVzZXQnKTtcbiAgICAgICAgICAgIHVwZGF0ZU9wcERhdGEoJ3Jlc2V0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJMaXN0ID0gW107XG4gICAgICAgICAgICBnYW1lT24gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVBdnREYXRhKHVUeXBlLHBsYXllcixwbGF5ZXJOdW0pIHtcbiAgICBzd2l0Y2ggKHVUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICAgICAgYXZ0RGF0YS5pbm5lckhUTUwgPSBgPHNwYW4+JHtwbGF5ZXJ9IGFzIFBsYXllciR7cGxheWVyTnVtfTwvc3Bhbj5gO1xuICAgICAgICAgICAgdXBkYXRlQ2FyZENvbnRhaW5lcigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlamVjdCc6XG4gICAgICAgICAgICBhdnREYXRhLmlubmVySFRNTCA9IGA8c3Bhbj4ke3BsYXllcn0gYXMgUGxheWVyJHtwbGF5ZXJOdW19PC9zcGFuPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgYXZ0RGF0YS5pbm5lckhUTUwgPSBgPHNwYW4+Y2xpY2sgdG8gcGxheTwvc3Bhbj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhcmRzJzpcbiAgICAgICAgICAgIHVwZGF0ZUNhcmRDb250YWluZXIoJ2NhcmRzJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbXlfdHVybic6XG4gICAgICAgICAgICBteVR1cm4gPSBteVR1cm4gPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICBteVR1cm4gPyBhdnREYXRhLmNsYXNzTGlzdC5hZGQoJ215LXR1cm4nKSA6IGF2dERhdGEuY2xhc3NMaXN0LnJlbW92ZSgnbXktdHVybicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndW5rbm93bicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPcHBEYXRhKHVUeXBlLHBsYXllcixwbGF5ZXJOdW0pIHtcbiAgICBzd2l0Y2ggKHVUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICAgICAgb3BwRGF0YS5pbm5lckhUTUwgPSBgPHNwYW4+JHtwbGF5ZXJ9IGFzIFBsYXllciR7cGxheWVyTnVtfTwvc3Bhbj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlamVjdCc6XG4gICAgICAgICAgICBvcHBEYXRhLmlubmVySFRNTCA9IGA8c3Bhbj4ke3BsYXllcn0gYXMgUGxheWVyJHtwbGF5ZXJOdW19PC9zcGFuPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgb3BwRGF0YS5pbm5lckhUTUwgPSBgPHNwYW4+d2FpdGluZyBmb3Igb3Bwb25lbnQuLi48L3NwYW4+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Vua25vd24nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoYm9hcmRBcnIgPSAnYmxhbmsnKSB7XG4gICAgaWYgKGJvYXJkQXJyID09PSAnYmxhbmsnKSB7XG4gICAgICAgIGJ1aWxkQm9hcmQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJvYXJkQXJyLmZvckVhY2goKHIsaSk9PiByLmZvckVhY2goKHMsaik9PntcbiAgICAgICAgICAgIGxldCBpZHggPSAncy0nK1N0cmluZyhpKStTdHJpbmcoaik7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR4fWApO1xuICAgICAgICAgICAgaWYgKHMgIT09ICcwJykge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnLCBgY29sb3Ike3N9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoYm9tYlJlYWR5KSB7XG4gICAgICAgICAgICBhdXRvQm9tYkV4cGxvZGUoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChib21iUGxhY2VkKSB7XG4gICAgICAgICAgICBib21iUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5DYXJkKGNhcmQpIHtcbiAgICBsZXQgY2FyZEZyb21Cb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmQpO1xuICAgIGNhcmRGcm9tQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnbm9kaXNwbGF5Jyk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQm9hcmQoKSB7XG4gICAgbGlzdGVuU3F1YXJlcygpO1xuICAgIC8vIGxldCBjb2xzID0gWycwJywnMScsJzInLCczJywnNCddO1xuICAgIC8vIGxldCByb3dzID0gWycwJywnMScsJzInLCczJywnNCddO1xuICAgIC8vIGxldCBzcXVhcmUgPSAocixjKSA9PiB7XG4gICAgLy8gICAgIGxldCBpZCA9IGBzLSR7cn0ke2N9YDtcbiAgICAvLyAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzID1cInNxdWFyZVwiIGlkPVwiJHtpZH1cIj48L2Rpdj5gXG4gICAgLy8gfVxuICAgIC8vIGxldCBncmlkID0gcm93cy5tYXAoIChyKSA9PiBjb2xzLm1hcCggKGMpID0+IHNxdWFyZShgJHtyfSR7Y31gKSApICk7XG4gICAgLy8gbGV0IHNxdWFyZXMgPSBncmlkLm1hcCggKHIpID0+IHIuam9pbignJykgKS5qb2luKCcnKTtcbiAgICAvLyBib2FyZC5pbm5lckhUTUwgPSBzcXVhcmVzO1xuICAgIGNvbnNvbGUubG9nKFwiYm9hcmQgcmVhZHlcIik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmRDb250YWluZXIoY2hhbmdlLCBpZHgpIHtcbiAgICBpZiAoIWNhcmRDb250YWluZXIpIHtcbiAgICAgICAgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIGF2dERhdGEuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmRDb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaChjaGFuZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NhcmRzJzpcbiAgICAgICAgICAgICAgICBjYXJkcy5mb3JFYWNoKChjVmFsLGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyxgYy0ke2NWYWx9YCxgJHtjYXJkQ29sb3IoKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgJHtjVmFsfWA7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbkNhcmQoY2FyZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RlblNxdWFyZXMoKSB7XG4gICAgbGV0IHNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3F1YXJlJyk7XG4gICAgW10uZm9yRWFjaC5jYWxsKHNzLCAocykgPT4ge1xuICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlU3F1YXJlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuQ2FyZChjYXJkKSB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZUNhcmQpOyBcbn1cblxuZnVuY3Rpb24gY2hvb3NlQ2FyZChldmVudCkge1xuICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoY2FyZHMsIChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuJyk7XG4gICAgfSk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nob3NlbicpO1xuICAgIGNob3NlbkMgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdO1xufVxuXG5mdW5jdGlvbiBjaG9vc2VTcXVhcmUoZXZlbnQpIHtcbiAgICBsZXQgc3F1YXJlID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBzcXVhcmVJZCA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKG15VHVybikge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2hvc2VuQ31gKVswXTtcbiAgICAgICAgbGV0IGNhcmRWYWwgPSBjYXJkLmNsYXNzTGlzdFsxXS5zcGxpdCgnLScpWzFdO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FyZHZhbD0nLGNhcmRWYWwpO1xuICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdFsxXSAhPT0gJ29jY3VwaWVkJyAmJiBjYXJkVmFsID09PSAnMycpIHtcbiAgICAgICAgICAgIHNlbmRNb3ZlKGNhcmRWYWwsIHNxdWFyZUlkKTtcbiAgICAgICAgICAgIGNhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIGJvbWJQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChzcXVhcmUuY2xhc3NMaXN0WzFdICE9PSAnb2NjdXBpZWQnICYmIGNhcmRWYWwgPT09ICcxJykgfHwgY2FyZFZhbCA9PT0gJzInICkge1xuICAgICAgICAgICAgc2VuZE1vdmUoY2FyZFZhbCwgc3F1YXJlSWQpO1xuICAgICAgICAgICAgY2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhdXRvQm9tYkV4cGxvZGUoKSB7XG4gICAgc2VuZE1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc2VuZE1vdmUoY2FyZFZhbCwgc3F1YXJlKSB7XG4gICAgbGV0IG0gPSB7fVxuICAgIGlmICghYm9tYlJlYWR5KSB7XG4gICAgICAgIGxldCBzID0gc3F1YXJlLnNwbGl0KCctJylbMV07XG4gICAgICAgIG0gPSB7XG4gICAgICAgICAgICBcInRhZ1wiOiBcImdhbWVcIixcbiAgICAgICAgICAgIFwic2VuZGVyXCI6IGAke2NsaWVudElkfWAsXG4gICAgICAgICAgICBcInJlY2VpdmVyXCI6IFwiZ2FtZVwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFtteU51bSxjYXJkVmFsLHNdXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBtID0ge1xuICAgICAgICAgICAgXCJ0YWdcIjogXCJnYW1lXCIsXG4gICAgICAgICAgICBcInNlbmRlclwiOiBgJHtjbGllbnRJZH1gLFxuICAgICAgICAgICAgXCJyZWNlaXZlclwiOiBcImdhbWVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIm1vdmVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbbXlOdW0sJycsJycsJ2JvbWInXVxuICAgICAgICB9XG4gICAgICAgIGJvbWJQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgYm9tYlJlYWR5ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbm5lY3Rpb24uc2VuZChKU09OLnN0cmluZ2lmeShtKSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9