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

	//Thinking of how to properly dispatch all from main, I think I need a function that just sets or removes listeners that is called from validate alongside updateScreen if the number is valid. If invalid, just make an alert.

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        //let heldData = new HoldDataClass();
	        //this.data = [[]];
	        new _LoadDataClass2.default().loadData('./data/customers.csv', _HoldDataClass2.default.setData);
	        _HoldDataClass2.default.button = [];
	        _HoldDataClass2.default.setButtons();
	        this.listenButton0();
	        this.listenButton1();
	        this.listenButton2();
	        this.listenButton3();
	        this.listenButton4();
	        this.listenButton5();
	        main.currentScreen = "";
	        //HoldDataClass.button[3].addEventListener('click', function func() {
	        //    main.validate('cardNum');
	        //});
	        this.editListener(3, 'add', 'cardNum');
	    }

	    _createClass(main, [{
	        key: 'listenButton0',
	        value: function listenButton0() {
	            if (main.currentScreen == 'cardNum') {
	                _HoldDataClass2.default.button[0].addEventListener('click', function () {
	                    main.validate('cardNum');
	                });
	            } else if (main.currentScreen == 'PIN') {
	                _HoldDataClass2.default.button[3].addEventListener('click', function () {
	                    main.validate('PIN');
	                });
	            }
	        }
	    }, {
	        key: 'listenButton1',
	        value: function listenButton1() {}
	    }, {
	        key: 'listenButton2',
	        value: function listenButton2() {}
	    }, {
	        key: 'listenButton3',
	        value: function listenButton3() {}
	    }, {
	        key: 'listenButton4',
	        value: function listenButton4() {}
	    }, {
	        key: 'listenButton5',
	        value: function listenButton5() {}

	        //Old way of changing listener that didn't seem to work
	        /*editListener(buttonNumber, addRemove, elementId) {
	            console.log('editing listener');
	            if (elementId == 'cardNum' || elementId == 'PIN') {
	                if (addRemove == 'add') {
	                    HoldDataClass.button[buttonNumber].addEventListener('click', function() {main.validate(elementId)});
	                } else {
	                    HoldDataClass.button[buttonNumber].removeEventListener('click', function() {main.validate(elementId)});
	                }
	            } else if (elementId == "something else I currently can't think of") {
	                if (addRemove == 'add') {
	                    HoldDataClass.button[buttonNumber].addEventListener('click', );
	                } else {
	                    HoldDataClass.button[buttonNumber].removeEventListener('click', );
	                }
	            }
	          }*/

	    }], [{
	        key: 'validate',
	        value: function validate(elementId) {
	            console.log('running validation');
	            var data = _HoldDataClass2.default.getData();
	            var checkNum = document.getElementById(elementId).value;
	            var isValid = false;
	            if (elementId == 'cardNum') {
	                for (var i = 0; i < data.length && isValid == false; i++) {
	                    if (data[i][0] == checkNum) {
	                        isValid = true;
	                        _HoldDataClass2.default.setCustomer(i);
	                        this.editListener(3, 'remove', _func);
	                        //HoldDataClass.button[3].removeEventListener('click', main.func);
	                    }
	                }
	                if (isValid == true) {
	                    new _ScreenChanger2.default().updateScreen('PIN');
	                    main.currentScreen = 'PIN';
	                } else {
	                    alert('Invalid card number, please try again');
	                }
	                //new ScreenChanger().updateScreen(isValid, 'PIN');
	            } else if (elementId == 'PIN') {
	                    var PIN = 1;
	                    if (data[_HoldDataClass2.default.customer][PIN] == checkNum) {
	                        isValid = true; //maybe unnecessary
	                        //do something with a listener
	                        main.currentScreen = 'mainScreen';
	                        new _ScreenChanger2.default().updateScreen('mainScreen');
	                    } else {
	                        alert('Incorrect PIN, please try again');
	                    }
	                }
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
	        value: function updateScreen(whatNext) {
	            var NUM_OF_BUTTONS = 6;
	            if (whatNext == 'PIN') {
	                this.screen.innerHTML = 'Welcome' + ' ' + _HoldDataClass2.default.data[_HoldDataClass2.default.customer][3] + _HoldDataClass2.default.data[_HoldDataClass2.default.customer][2] + '. Please enter your one digit PIN' + '<input type="password" id="PIN" placeholder="PIN">';
	                _HoldDataClass2.default.button[0].setAttribute('value', 'Exit');
	                //HoldDataClass.button[3].addEventListener('click', function func() {main.validate('PIN')});
	                //callback(3, 'remove', main.func);
	            } else if (whatNext == 'mainScreen') {
	                    this.screen.innerHTML = 'What would you like to do?';
	                    _HoldDataClass2.default.button[4].setAttribute('value', 'Withdrawal');
	                    _HoldDataClass2.default.button[5].setAttribute('value', 'Account Balance');
	                    _HoldDataClass2.default.button[1].setAttribute('value', 'Deposit');
	                    _HoldDataClass2.default.button[2].setAttribute('value', 'Transfer');
	                    _HoldDataClass2.default.button[0].setAttribute('value', 'Exit');
	                    _HoldDataClass2.default.button[3].setAttribute('value', '...');
	                } else if (whatNext == 'withdraw') {
	                    this.screen.innerHTML = 'Which account would you like to withdraw from?';
	                    _HoldDataClass2.default.button[0].setAttribute('value', 'Back');
	                    _HoldDataClass2.default.button[4].setAttribute('value', 'Checking');
	                    _HoldDataClass2.default.button[5].setAttribute('value', 'Savings');
	                } else if (whatNext == 'withdraw checking') {
	                    this.screen.innerHTML = 'How much would you like to withdraw? Must be in multiples of $20.00' + '?<input type="number" id="withdrawAmount" placeholder="Amount">';
	                    _HoldDataClass2.default.button[3].setAttribute('value', 'Enter');
	                    for (var i = 1; i < NUM_OF_BUTTONS; i++) {
	                        if (i != 3) {
	                            _HoldDataClass2.default.button[i].setAttribute('value', '...');
	                        }
	                    }
	                } else if (whatNext == 'withdraw savings') {
	                    this.screen.innerHTML = 'How much would you like to withdraw? Must be in multiples of $20.00' + '$<input type="number" id="withdrawAmount" placeholder="Amount">';
	                    _HoldDataClass2.default.button[3].setAttribute('value', 'Enter');
	                    for (var _i = 1; _i < NUM_OF_BUTTONS; _i++) {
	                        if (_i != 3) {
	                            _HoldDataClass2.default.button[_i].setAttribute('value', '...');
	                        }
	                    }
	                } else if (whatNext == 'account inquiry') {
	                    this.screen.innerHTML = 'Which account would you like to see?';
	                    _HoldDataClass2.default.button[0].setAttribute('value', 'Back');
	                    _HoldDataClass2.default.button[4].setAttribute('value', 'Checking');
	                    _HoldDataClass2.default.button[5].setAttribute('value', 'Savings');
	                    for (var _i2 = 0; _i2 < NUM_OF_BUTTONS; _i2++) {
	                        if (_i2 != 0 || _i2 != 4 || _i2 != 5) {
	                            _HoldDataClass2.default.button[_i2].value = '...';
	                        }
	                    }
	                } else if (whatNext == 'savings inquiry') {
	                    var savingsAmt = _HoldDataClass2.default.getAccountAmount('savings');
	                    var savingsNum = _HoldDataClass2.default.getAccountNum('savings');
	                    this.screen.innerHTML = 'In savings account #' + savingsNum + ' there is $' + savingsAmt;
	                    for (var _i3 = 1; _i3 < NUM_OF_BUTTONS; _i3++) {
	                        _HoldDataClass2.default.button[_i3].setAttribute('value', '...'); //Keeps back button as button0, but listener will need to be changed
	                    }
	                } else if (whatNext == 'checking inquiry') {
	                        var checkingAmt = _HoldDataClass2.default.getAccountAmount('checking');
	                        var checkingNum = _HoldDataClass2.default.getAccountNum('checking');
	                        this.screen.innerHTML = 'In checking account #' + checkingNum + ' there is $' + checkingAmt;
	                        for (var _i4 = 1; _i4 < NUM_OF_BUTTONS; _i4++) {
	                            _HoldDataClass2.default.button[_i4].setAttribute('value', '...'); //Keeps back button as button0, but listener will need to be changed
	                        }
	                    } else if (whatNext == 'deposit') {
	                            this.screen.innerHTML = 'Which account would you like to deposit to?';
	                            _HoldDataClass2.default.button[0].setAttribute('value', 'Back');
	                            _HoldDataClass2.default.button[4].setAttribute('value', 'Checking');
	                            _HoldDataClass2.default.button[5].setAttribute('value', 'Savings');
	                        } else if (whatNext == 'deposit checking') {
	                            this.screen.innerHTML = 'How much would you like to deposit in your checking account?' + '$<input type="number" id="depositChecking" placeholder="Amount">';
	                            _HoldDataClass2.default.button[3].setAttribute('value', 'Enter');
	                            for (var _i5 = 1; _i5 < NUM_OF_BUTTONS; _i5++) {
	                                if (_i5 != 3) {
	                                    _HoldDataClass2.default.button[_i5].setAttribute('value', '...');
	                                }
	                            }
	                        } else if (whatNext == 'deposit savings') {
	                            this.screen.innerHTML = 'How much would you like to deposit in your savings account?' + '$<input type="number" id="depositSavings" placeholder="Amount">';
	                            _HoldDataClass2.default.button[3].setAttribute('value', 'Enter');
	                            for (var _i6 = 1; _i6 < NUM_OF_BUTTONS; _i6++) {
	                                if (_i6 != 3) {
	                                    _HoldDataClass2.default.button[_i6].setAttribute('value', '...');
	                                }
	                            }
	                        } else if (whatNext == 'transfer') {
	                            this.screen.innerHTML = 'Which account do you wish to transfer money out of?';
	                            _HoldDataClass2.default.button[0].value = 'Back';
	                            _HoldDataClass2.default.button[4].value = 'Checking';
	                            _HoldDataClass2.default.button[5].value = 'Savings';
	                        } else if (whatNext == 'transfer from savings') {
	                            this.screen.innerHTML = 'How much would you like to transfer out of savings and into checking?' + '$<input type="number" id="transferToChecking" placeholder="Amount">';
	                            _HoldDataClass2.default.button[3].setAttribute('value', 'Enter');
	                            _HoldDataClass2.default.button[4].setAttribute('value', '...');
	                            _HoldDataClass2.default.button[5].setAttribute('value', '...');
	                        } else if (whatNext == 'transfer from checking') {
	                            this.screen.innerHTML = 'How much would you like to transfer out of checking and into savings?' + '$<input type="number" id="transferToSavingings" placeholder="Amount">';
	                            _HoldDataClass2.default.button[3].setAttribute('value', 'Enter');
	                            _HoldDataClass2.default.button[4].setAttribute('value', '...');
	                            _HoldDataClass2.default.button[5].setAttribute('value', '...');
	                        }
	        }

	        //validate(elementId) {
	        //    let data = HoldDataClass.getData();
	        //    let checkNum = document.getElementById(elementId).value;
	        //    let isValid = false;
	        //    if (elementId == 'cardNum') {
	        //        for (let i = 0; i< data.length && isValid == false; i++) {
	        //            if (data[i][0] == checkNum) {
	        //                isValid = true;
	        //            }
	        //        }
	        //        this.updateScreen(isValid)
	        //    }
	        //}

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
	        HoldDataClass.customer = '';
	        //HoldDataClass.button = [];
	    }

	    _createClass(HoldDataClass, null, [{
	        key: 'setData',
	        value: function setData(importData) {
	            HoldDataClass.data = importData;
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            return HoldDataClass.data;
	        }
	    }, {
	        key: 'setCustomer',
	        value: function setCustomer(dataRowNum) {
	            HoldDataClass.customer = dataRowNum;
	        }
	    }, {
	        key: 'getCustomer',
	        value: function getCustomer() {
	            return HoldDataClass.customer;
	        }
	    }, {
	        key: 'setButtons',
	        value: function setButtons() {
	            var NUM_OF_BUTTONS = 6;
	            for (var i = 0; i < NUM_OF_BUTTONS; i++) {
	                HoldDataClass.button[i] = document.getElementById('button' + i);
	            }
	        }
	    }, {
	        key: 'getbuttons',
	        value: function getbuttons() {
	            return HoldDataClass.button;
	        }
	    }, {
	        key: 'getAccountNum',
	        value: function getAccountNum(whichAccount) {
	            var account = void 0;
	            if (whichAccount == 'savings') {
	                account = 4;
	            } else {
	                account = 6;
	            }
	            return this.data[this.customer][account];
	        }
	    }, {
	        key: 'getAccountAmount',
	        value: function getAccountAmount(whichAccount) {
	            var account = void 0;
	            if (whichAccount == 'savings') {
	                account = 5;
	            } else {
	                account = 7;
	            }
	            return this.data[this.customer][account];
	        }
	    }, {
	        key: 'setAccountAmount',
	        value: function setAccountAmount(whichAccount, changeBy) {
	            var account = void 0;
	            if (whichAccount == 'savings') {
	                account = 5;
	            } else {
	                account = 7;
	            }
	            this.data[this.customer][account] = this.data[this.customer][account] + changeBy;
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