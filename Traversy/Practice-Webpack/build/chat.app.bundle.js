(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat"],{

/***/ "./src/scripts/chat.js":
/*!*****************************!*\
  !*** ./src/scripts/chat.js ***!
  \*****************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people */ \"./src/scripts/people.js\");\n\nfunction init() {\n  var chat_test = document.createElement(\"div\");\n  chat_test.innerHTML = \"<p>There are \".concat(_people__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length, \" people in the room</p>\");\n  document.body.appendChild(chat_test);\n}\n\n//# sourceURL=webpack:///./src/scripts/chat.js?");

/***/ })

}]);