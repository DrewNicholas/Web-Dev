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

	var _Decision = __webpack_require__(1);

	var _Decision2 = _interopRequireDefault(_Decision);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function main() {
	    _classCallCheck(this, main);

	    this.counter = 0;
	    document.getElementById("left").addEventListener("click", function () {
	        new _Decision2.default('first', 'left');
	    }, false);
	    document.getElementById("right").addEventListener("click", function () {
	        new _Decision2.default('first', 'right');
	    }, false);
	    console.log("Hi Drew!");
	};

	window.onload = function () {
	    new main();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* AUTHOR: dmnicholas@me.com
	 * Version: 1.0.0
	 * CREATED: 2.24.2016
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _FileLoader = __webpack_require__(2);

	var _FileLoader2 = _interopRequireDefault(_FileLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Decision = function () {
	    function Decision(time, choice) {
	        _classCallCheck(this, Decision);

	        this.time = time;
	        this.choice = choice;
	        Decision.data = "";
	        console.log("You clicked");
	        new _FileLoader2.default().loadData('./data/instructions.csv', this.setData);
	        Decision.updateDOM();
	    }

	    _createClass(Decision, [{
	        key: "setData",
	        value: function setData(data) {
	            Decision.data = data;
	        }
	    }], [{
	        key: "updateDOM",
	        value: function updateDOM() {
	            if (this.time == 'first' && this.choice == 'left') {
	                document.getElementById('instructions').innerHTML = 'some other bullshit';
	            }
	        }
	    }]);

	    return Decision;
	}();

	exports.default = Decision;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* AUTHOR: dmnicholas@me.com
	 * Version: 1.0.0
	 * CREATED: 2.24.2016
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FileLoader = function () {
	    function FileLoader() {
	        _classCallCheck(this, FileLoader);
	    }

	    _createClass(FileLoader, [{
	        key: "loadData",
	        value: function loadData(filePath, callback) {
	            var request = new XMLHttpRequest();
	            request.open("GET", filePath, true);
	            request.send();
	            request.onload = function () {
	                var data = [];
	                if (request.readyState === 4 && request.status === 200) {
	                    data = request.responseText.split(/\n/);
	                }
	                /*for (let i = 0; i < data.length; i++) {
	                    middleData = data[i].split(/,/);
	                    finalData[i] = []; //makes it an MD array
	                    for (let j = 0; j < COLUMNS; j++) {
	                        finalData[i][j] = middleData[j];
	                    }
	                }*/
	                callback(data);
	            };
	        }
	    }]);

	    return FileLoader;
	}();

	exports.default = FileLoader;

/***/ }
/******/ ]);