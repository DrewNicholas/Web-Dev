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

	var _ScreenChanger = __webpack_require__(1);

	var _ScreenChanger2 = _interopRequireDefault(_ScreenChanger);

	var _LoadDataClass = __webpack_require__(3);

	var _LoadDataClass2 = _interopRequireDefault(_LoadDataClass);

	var _HoldDataClass = __webpack_require__(2);

	var _HoldDataClass2 = _interopRequireDefault(_HoldDataClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        //let heldData = new HoldDataClass();
	        //this.data = [[]];
	        new _LoadDataClass2.default().loadData('./data/customers.csv', _HoldDataClass2.default.setData);
	        main.button = [];
	        main.setButtons();
	        main.button[3].addEventListener('click', function () {
	            new _ScreenChanger2.default().validate('cardNum');
	            console.log('button 4 clicked');
	        });
	    }

	    _createClass(main, [{
	        key: 'setData',
	        value: function setData(inputData) {
	            //const COLUMNS = 6;
	            //for (let i = 0; i < inputData.length; i++) {
	            //    for (let j = 0; j < COLUMNS; j++) {
	            //        main.data[i][j] = inputData[i][j];
	            //    }
	            //}
	            main.data = inputData;
	        }
	    }], [{
	        key: 'setButtons',
	        value: function setButtons() {
	            //main.button0 = document.getElementById('button0');
	            //main.button1 = document.getElementById('button1');
	            //main.button2 = document.getElementById('button2');
	            //main.button3 = document.getElementById('button3');
	            //main.button4 = document.getElementById('button4');
	            //main.button5 = document.getElementById('button5');
	            for (var i = 0; i < 6; i++) {
	                main.button[i] = document.getElementById('button' + i);
	            }
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            return this.data;
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* AUTHOR: dmnicholas@me.com
	 * VERSION: 1.0.0
	 * CREATED: 3.13.2016
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HoldDataClass = __webpack_require__(2);

	var _HoldDataClass2 = _interopRequireDefault(_HoldDataClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScreenChanger = function () {
	    function ScreenChanger() {
	        _classCallCheck(this, ScreenChanger);

	        this.screen = document.getElementById('screen');
	    }

	    _createClass(ScreenChanger, [{
	        key: 'updateScreen',
	        value: function updateScreen(valid) {
	            if (valid == true) {
	                console.log('card number valid');
	            } else {
	                console.log('card invalid');
	            }
	        }
	    }, {
	        key: 'validate',
	        value: function validate(elementId) {
	            var data = _HoldDataClass2.default.getData();
	            var checkNum = document.getElementById(elementId).value;
	            var isValid = false;
	            if (elementId == 'cardNum') {
	                for (var i = 0; i < data.length && isValid == false; i++) {
	                    if (data[i][0] == checkNum) {
	                        isValid = true;
	                    }
	                }
	                this.updateScreen(isValid);
	            }
	        }
	    }]);

	    return ScreenChanger;
	}();

	exports.default = ScreenChanger;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* AUTHOR: dmnicholas@me.com
	 * VERSION: 1.0.0
	 * CREATED: 3.13.2016
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HoldDataClass = function () {
	    function HoldDataClass() {
	        _classCallCheck(this, HoldDataClass);

	        this.data = [[]];
	    }

	    _createClass(HoldDataClass, null, [{
	        key: "setData",
	        value: function setData(importData) {
	            HoldDataClass.data = importData;
	        }
	    }, {
	        key: "getData",
	        value: function getData() {
	            return this.data;
	        }
	    }]);

	    return HoldDataClass;
	}();

	exports.default = HoldDataClass;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* AUTHOR: dmnicholas@me.com
	* VERSION: 1.0.0
	* CREATED: 3.13.2016
	*/

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadData = function () {
	    function LoadData() {
	        _classCallCheck(this, LoadData);
	    }

	    _createClass(LoadData, [{
	        key: "loadData",
	        value: function loadData(filePath, callback) {
	            var request = new XMLHttpRequest();
	            request.open("GET", filePath, true);
	            request.send();
	            request.onload = function () {
	                var COLUMNS = 6;
	                var data = void 0,
	                    middleData = void 0,
	                    finalData = [];
	                if (request.readyState === 4 && request.status === 200) {
	                    data = request.responseText.split(/\n/);
	                }
	                for (var i = 0; i < data.length; i++) {
	                    middleData = data[i].split(/,/);
	                    finalData[i] = []; //makes it an MD array
	                    for (var j = 0; j < COLUMNS; j++) {
	                        finalData[i][j] = middleData[j];
	                    }
	                }
	                callback(finalData);
	            };
	        }
	    }]);

	    return LoadData;
	}();

	exports.default = LoadData;

/***/ }
/******/ ]);