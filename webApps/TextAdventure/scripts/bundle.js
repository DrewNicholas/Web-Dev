/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* AUTHOR: dmnicholas@me.com
	 * VERSION: 1.0.0
	 * CREATED: 2.24.2016
	 * PURPOSE: Text adventure game
	 */

	"use strict";

	var _Decision = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Decision\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Decision2 = _interopRequireDefault(_Decision);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//const FIRST = 1;
	//const SECOND = 2;

	var main = function main() {
	    _classCallCheck(this, main);

	    this.counter = 0;
	    document.getElementById("left").addEventListener("click", function () {
	        new _Decision2.default('first', 'left');
	    }, false);
	    document.getElementById("right").addEventListener("click", function () {
	        new _Decision2.default('first', 'right');
	    }, false);
	};

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);