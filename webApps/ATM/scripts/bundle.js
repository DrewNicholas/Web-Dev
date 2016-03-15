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
	 * CREATED: 3.13.2016
	 * PURPOSE: ATM
	 */

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ScreenChanger = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ScreenChanger\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _ScreenChanger2 = _interopRequireDefault(_ScreenChanger);

	var _LoadData = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"LoadData\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _LoadData2 = _interopRequireDefault(_LoadData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        new _LoadData2.default().loadData('./data/customers.csv', main.setData());
	        main.button0 = "";
	        main.button1 = "";
	        main.button2 = "";
	        main.button3 = "";
	        main.button4 = "";
	        main.button5 = "";
	        main.data = [];
	        this.setButtons();
	        button4.addEventListener('click', function () {});
	    }

	    _createClass(main, null, [{
	        key: 'setButtons',
	        value: function setButtons() {
	            main.button0 = document.getElementById('button0');
	            main.button1 = document.getElementById('button1');
	            main.button2 = document.getElementById('button2');
	            main.button3 = document.getElementById('button3');
	            main.button4 = document.getElementById('button4');
	            main.button5 = document.getElementById('button5');
	        }
	    }, {
	        key: 'setData',
	        value: function setData(inputData) {
	            var COLUMNS = 6;
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ }
/******/ ]);