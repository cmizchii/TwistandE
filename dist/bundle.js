/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Instrument+Sans:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* immporting fonts */\n\n/* global styles */\nbody {\n    margin: 0;\n    font-family: 'Instrument Sans', sans-serif; \n     font-weight: 700 ; \n    background-color: #F5F2F2;\n    color: #2B2A2A; \n}\n\n/* NAV BAR */\nnav {\n    display: flex;\n    justify-content: space-between; /* space logo, buttons div, GitHub icon equally */\n    align-items: flex-start;        \n    padding: 0 50px 0 50px;                /* 50px left and right margin */\n    background-color: #F5F2F2;\n    font-family: 'Instrument Sans', sans-serif;\n}\n\n/* LOGO */\n#logo {\n    width: 44px;\n    height: 54px;\n    margin-top: 2vb;  \n    margin-right: 18vb;\n}\n\n/* BUTTONS CONTAINER */\n.nav-buttons {\n    display: flex;\n    gap: 170px;     /* space between Home, Menu, About Us */\n    margin-top: 0;  \n}\n\n/* BUTTONS */\n button {\n    font-size: 20px;\n    font-weight: 700;\n    font-family: 'Instrument Sans', sans-serif;\n    color: #2B2A2A;\n    background: none;\n    border: none;\n    cursor: pointer;\n    margin-top: 4.5vb;\n    transition: color 0.3s ease;\n}\n\nbutton:hover {\n    color: #FEB05D;\n}\n\n/* GITHUB ICON */\n#source-icon {\n    width: 120px;\n    height: 32px;\n    margin-top: 4vb; \n    margin-left: 6vb;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://twistande/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://twistande/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://twistande/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://twistande/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://twistande/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://twistande/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://twistande/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://twistande/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://twistande/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\n\n\nfunction createAbout() {\n  const content = document.getElementById('content');\n\n\n//main heading\n\n    const mainHeading = document.createElement('h1');\n\n    //inline styles\n        mainHeading.textContent = 'about ë';\n        mainHeading.style.fontFamily = \"'Dela Gothic One', sans-serif\";\n        mainHeading.style.fontSize = '70px';\n        mainHeading.style.fontWeight = '400';\n        mainHeading.style.position = 'absolute';\n        mainHeading.style.left = '50px';\n        mainHeading.style.top = '95px';\n\n  \n//mini text\n\n    const miniText = document.createElement('p');\n\n    //inline styles\n        miniText.innerHTML = 'founded on a focus for precision and restraint, ë is a modern noodle kitchen.<br>we refine familiar dishes through careful technique, balanced flavors, and intentional simplicity.';\n        miniText.style.fontSize = '20px';\n        miniText.style.position = 'absolute';\n        miniText.style.left = '91px';\n        miniText.style.top = '270px';\n        miniText.style.margin = '0';\n\n\n//line\n\n    const line = document.createElement('div');\n\n    //inline styles\n        line.style.position = 'absolute';\n        line.style.left = '60px';    \n        line.style.top = '275px';    \n        line.style.width = '3px';      \n        line.style.height = '40px';     \n        line.style.backgroundColor = '#2B2A2A'; \n\n\n//image container\n\n    const imgRow = document.createElement('div');\n\n    //inline styles\n      imgRow.style.display = 'flex'\n      imgRow.style.justifyContent = 'space-between';\n      imgRow.style.width = '1340px';\n      imgRow.style.margin = '290px auto 38px auto'; \n      \n\n\n//images\n\n    const images = [\n        '/images/page3num1.png',\n        '/images/page3num2.jpg',\n        '/images/page3num3.png'\n    ];\n\n    images.forEach(src => {\n        const imgContainer = document.createElement('div');\n        imgContainer.style.width = '440px';\n        imgContainer.style.height = '230px';\n        imgContainer.style.overflow = 'hidden';\n\n        const img = document.createElement('img');\n        img.src = src;\n        img.style.width = '100%';\n        img.style.height = '100%';\n        img.style.objectFit = 'cover';\n        img.style.top = '50px';\n        \n        \n\n        imgContainer.appendChild(img);\n        imgRow.appendChild(imgContainer);\n    });\n\n\n\n    //footer\n\n    \n      const locationText = document.createElement('p');\n\n          //inline styles\n          locationText.textContent = 'Tiong Bahru, Singapore';\n          locationText.style.fontFamily = \"'Dela Gothic One', sans-serif\";\n          locationText.style.fontWeight = '400';\n          locationText.style.fontSize = '22px';\n          locationText.style.position = 'absolute';\n          locationText.style.right = '50px';\n          locationText.style.top = '610px'; \n          content.appendChild(locationText);\n\n      const contactText = document.createElement('p');\n          //inline styles\n          contactText.innerHTML = '<span style=\"display:block; margin-bottom:8px;\">✉️ Info@twistande.com</span><span>📞 +65 9123 4567</span>';\n          contactText.style.fontSize = '16px';\n          contactText.style.position = 'absolute';\n          contactText.style.right = '50px';\n          contactText.style.top = '667px';\n          contactText.style.paddingBottom = '30px';\n          contactText.style.textAlign = 'right';\n          content.appendChild(contactText);\n\n\n\n      \n  \n\n  \n\n  \n\n  \n  content.appendChild(miniText);\n  content.appendChild(mainHeading);\n  content.appendChild(imgRow);\n  content.appendChild(line);\n}\n\n//# sourceURL=webpack://twistande/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n\n// export a function that our home page inside the div\nfunction createHome() {\n    const content = document.getElementById('content');\n    const homeDiv = document.createElement('div');\n    homeDiv.id = 'home-page';\n    \n\n    // main text \n        const mainText = document.createElement('h1');\n        mainText.textContent = 'NOODLES';\n\n            // inline styles\n            mainText.style.fontFamily = \"'Dela Gothic One', sans-serif\";\n            mainText.style.fontSize = '128px';\n            mainText.style.position = 'absolute';\n            mainText.style.textAlign = 'center';\n            mainText.style.width = '100%';\n            mainText.style.top = '3px';\n\n    // h2 text \n        const subText = document.createElement('h2');\n        subText.textContent = 'Precision in Every Strand';\n\n            // Inline styles\n            subText.style.fontFamily = \"'Dela Gothic One', sans-serif\";\n            subText.style.fontSize = '37px';\n            subText.style.position = 'absolute';\n            subText.style.top = '218px';\n            subText.style.left = '50%';                \n            subText.style.transform = 'translateX(-50%)'; \n\n    // desc text\n        const descText = document.createElement('p');\n        descText.innerHTML = 'From classic broths to modern twists, every bowl of noodles at ë is crafted with intention<br>Simple flavors, refined technique, unforgettable taste.';\n            \n            // Inline styles\n            descText.style.position = 'absolute';\n            descText.style.top = '303px';  \n            descText.style.width = '100%';\n            descText.style.textAlign = 'center';\n            descText.style.fontSize = '19px';\n\n\n    //container\n        const imgContainer = document.createElement('div');\n            \n            // Inline styles\n            imgContainer.style.position = 'absolute';\n            imgContainer.style.left = '50%';        \n            imgContainer.style.top = '387px';       \n            imgContainer.style.width = '1340px';\n            imgContainer.style.height = '374px';\n            imgContainer.style.overflow = 'hidden';\n            imgContainer.style.transform = 'translateX(-50%)'; \n            \n\n\n    // image\n        const img = document.createElement('img');\n        img.src = '/images/page1num1.png'; \n        img.alt = 'Noodles bowl';\n\n\n            // Inline styles\n            img.style.width = '100%';    \n            img.style.height = 'auto';   \n            img.style.objectFit = 'cover';\n                img.style.position = 'relative';\n                img.style.top = '-320px';  \n                \n\n\n    homeDiv.appendChild(mainText);\n    homeDiv.appendChild(subText);\n    homeDiv.appendChild(descText);\n    imgContainer.appendChild(img);\n    homeDiv.appendChild(imgContainer);\n\n    content.appendChild(homeDiv);\n    \n}\n\n\n\n//# sourceURL=webpack://twistande/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst content = document.getElementById('content');\n\n// Render Home once when the website loads \n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();\n\n//clear\nfunction clearContent() {\n  content.innerHTML = '';\n}\n\n// buttons\ndocument.getElementById('home').addEventListener('click', () => {\n  clearContent();\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();\n});\n\ndocument.getElementById('menu').addEventListener('click', () => {\n  clearContent();\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)();\n});\n\ndocument.getElementById('aboutus').addEventListener('click', () => {\n  clearContent();\n  (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.createAbout)();\n});\n\n//# sourceURL=webpack://twistande/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n//Cards class \n\n  class Card{\n      constructor(imgsrc, name, text) {\n         // card container\n            this.card = document.createElement('div');\n            this.card.style.width = '295px';\n            this.card.style.height = '480px';\n            this.card.style.display = 'flex';\n            this.card.style.flexDirection = 'column';\n            this.card.style.marginLeft = '25px';\n            \n          \n          // image\n            const img = document.createElement('img');\n            img.src = imgsrc;\n            img.alt = name;\n            img.style.width = '100%';\n            img.style.height = '342px';\n            img.style.objectFit = 'cover';\n            this.card.appendChild(img);\n          \n          // name\n            const h3 = document.createElement('h3');\n            h3.textContent = name;\n            h3.style.marginTop = '10px';\n            h3.style.marginBottom = '0px';\n            h3.style.fontFamily = \"'Dela Gothic One', sans-serif\";\n            h3.style.fontWeight = '400';\n            h3.style.fontSize = '25px';\n            this.card.appendChild(h3);\n          \n          // description\n            const p = document.createElement('p');\n            p.textContent = text;\n            p.style.marginTop = '15px';\n            p.style.fontFamily = \"'Instrument Sans', sans-serif\";\n            p.style.fontSize = '16px';\n            this.card.appendChild(p);\n          \n          // hover effect\n            this.card.addEventListener('mouseenter', () => {\n                this.card.style.transform = 'scale(1.05)';\n                this.card.style.transition = '0.3s';\n                });\n\n            this.card.addEventListener('mouseleave', () => {\n                this.card.style.transform = 'scale(1)';\n                });\n\n      }\n\n\n      render() {\n          return this.card;\n      }\n\n  }\n\n\n\n//Menu function\n\nfunction createMenu() {\n\n  const content = document.getElementById('content');\n\n\n  \n  //main text\n\n          const mainText = document.createElement('h1');\n          mainText.textContent = 'our bowls +';\n\n          // inline styles\n                mainText.style.fontFamily = \"'Dela Gothic One', sans-serif\";\n                mainText.style.fontSize = '64px';\n                mainText.style.fontWeight ='400';\n                mainText.style.marginTop = '75px';\n                mainText.style.marginBottom = '0px';\n                mainText.style.marginLeft = '50px';\n                mainText.style.display = 'inline-block';\n\n\n\n\n\n\n  //second text\n\n      const secText = document.createElement('h1');\n      secText.innerHTML = 'tag us @twistande <br> show your noodles!';\n\n      // inline styles\n            secText.style.fontFamily = \"'Instrument Sans', sans-serif\";\n            secText.style.fontSize = '19px';\n            secText.style.marginTop = '110px';\n            secText.style.marginBottom = '17px';\n            secText.style.marginRight = '50px';\n            secText.style.display = 'inline-block';\n            secText.style.float = 'right';\n\n\n\n\n\n\n  //line\n\n      const line = document.createElement('hr');\n\n      // inline styles\n          line.style.left = '50px';\n          line.style.width = 'calc(100% - 100px)'; \n          line.style.border = 'none';\n          line.style.height = '2px';      \n          line.style.backgroundColor = '#2B2A2A'; \n          line.style.marginTop = '20px ';\n\n\n\n\n  //card container \n\n     \n      const cardsContainer = document.createElement('div');\n      // inline styles\n          cardsContainer.style.display = 'flex';\n          cardsContainer.style.gap = '30px'; \n          cardsContainer.style.marginTop = '35px'; \n          cardsContainer.style.flexWrap = 'wrap';\n          cardsContainer.style.marginLeft = '50px';\n      \n\n\n  //cards\n\n          //card1\n          const card1 = new Card(\"/images/page2num1.png\" , \"Biangbiang noodles\" , \"Wide hand-pulled noodles with savory soy sauce and chili oil\");\n          cardsContainer.appendChild(card1.render());\n\n          //card2\n          const card2 = new Card(\"/images/page2num2.png\" , \"Ramen Carbonara\" , \"Creamy sauce, tender noodles, and a hint of smoky bacon\");\n          cardsContainer.appendChild(card2.render());\n\n          //card3\n          const card3 = new Card(\"/images/page2num3.png\" , \"Curry noodles\" , \"Quick, flavorful noodles in a rich, spicy curry broth\");\n          cardsContainer.appendChild(card3.render());\n\n\n\n\n    //block\n    \n        const moreBlock = document.createElement('div');\n        const moreText = document.createElement('p');\n        \n            //inline styles\n            moreBlock.style.width = '136px';\n            moreBlock.style.height = '489px';\n            moreBlock.style.backgroundColor = '#2B2A2A'; // off black\n            moreBlock.style.position = 'absolute';\n            moreBlock.style.right = '50px';\n            moreBlock.style.top = '290px'; // tweak to align with cards\n            moreBlock.style.display = 'flex';\n            moreBlock.style.alignItems = 'center';\n            moreBlock.style.justifyContent = 'center';\n            //text\n            moreText.textContent = 'more incoming';\n            moreText.style.color = '#F5F2F2';\n            moreText.style.fontFamily = \"'Instrument Sans', sans-serif\";\n            moreText.style.fontSize = '40px';\n            moreText.style.writingMode = 'vertical-rl';\n            moreText.style.transform = 'rotate(180deg)';\n            moreText.style.textOrientation = 'mixed';\n              \n      \n\n      content.appendChild(mainText);\n      content.appendChild(secText);\n      content.appendChild(line); \n      content.appendChild(cardsContainer);\n      moreBlock.appendChild(moreText);\n      content.appendChild(moreBlock);\n\n\n\n}\n\n//# sourceURL=webpack://twistande/./src/menu.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://twistande/./src/style.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;