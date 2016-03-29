/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 * PURPOSE: ATM
 */

"use strict";

import ScreenChanger from './ScreenChanger';
import LoadDataClass from './LoadDataClass';
import HoldDataClass from './HoldDataClass';

class main {
    constructor() {
        new LoadDataClass().loadData('./data/customers.csv', HoldDataClass.setData);
        HoldDataClass.button = [];
        HoldDataClass.setButtons();
        main.currentScreen = "cardNum";
        HoldDataClass.button[0].addEventListener('click', this.listenButton0);
        HoldDataClass.button[1].addEventListener('click', this.listenButton1);
        HoldDataClass.button[2].addEventListener('click', this.listenButton2);
        HoldDataClass.button[3].addEventListener('click', this.listenButton3);
        HoldDataClass.button[4].addEventListener('click', this.listenButton4);
        HoldDataClass.button[5].addEventListener('click', this.listenButton5);
        /*this.listenButton0();
        this.listenButton1();
        this.listenButton2();
        this.listenButton3();
        this.listenButton4();
        this.listenButton5();*/
        //this.editListener(3, 'add', 'cardNum');

    }

    static validate(elementId) {
        //Need to add validation on withdraw and transfer to ensure an account doesn't drop below $0
        console.log('running validation on ' + elementId);
        let data = HoldDataClass.getData();
        let checkNum = document.getElementById(elementId).value;
        console.log('checkNum is ' + checkNum);
        let isValid = false;
        if (elementId == 'cardNum') {
            for (let i = 0; i < data.length && isValid == false; i++) {
                if (data[i][0] == checkNum) {
                    isValid = true;
                    HoldDataClass.setCustomer(i);
                }
            }
            if (isValid == true) {
                main.currentScreen = 'PIN';
                new ScreenChanger().updateScreen('PIN');

            } else {
                alert('Invalid card number, please try again');
            }
        } else if (elementId == 'PIN'){
            const PIN = 1;
            console.log('The PIN for ' + data[HoldDataClass.customer][3] + ' ' + data[HoldDataClass.customer][2] + ' is ' + data[HoldDataClass.customer][PIN])
            if (data[HoldDataClass.customer][PIN] == checkNum) {
                isValid = true; //maybe unnecessary
                //do something with a listener
                main.currentScreen = 'mainScreen';
                new ScreenChanger().updateScreen('mainScreen');
            } else {
                alert('Incorrect PIN, please try again');
            }
        }
    }

    listenButton0() {
        if (main.currentScreen == 'PIN' || main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('cardNum');
            main.currentScreen = 'cardNum';
        } else if (main.currentScreen == 'withdraw' || main.currentScreen == 'account inquiry' || main.currentScreen == 'deposit' || main.currentScreen == 'transfer') {
            new ScreenChanger().updateScreen('mainScreen');
            main.currentScreen = 'mainScreen';
        } else if (main.currentScreen == 'withdraw checking' || main.currentScreen == 'withdraw savings') {
            new ScreenChanger().updateScreen('withdraw');
            main.currentScreen = 'withdraw';
        } else if (main.currentScreen == 'checking inquiry' || main.currentScreen == 'savings inquiry') {
            new ScreenChanger().updateScreen('account inquiry');
            main.currentScreen = 'account inquiry';
        } else if (main.currentScreen == 'deposit checking' || main.currentScreen == 'deposit savings') {
            new ScreenChanger().updateScreen('deposit');
            main.currentScreen = 'deposit';
        } else if (main.currentScreen == 'transfer from checking' || main.currentScreen == 'transfer from savings') {
            new ScreenChanger().updateScreen('transfer');
            main.currentScreen = 'transfer';
        }
    }

    listenButton1() {
        if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('deposit');
            main.currentScreen = 'deposit';
        }
    }

    listenButton2() {
        if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('transfer');
            main.currentScreen = 'transfer';
        }
    }

    listenButton3() {
        if (main.currentScreen == 'cardNum') {
            main.validate('cardNum');
        } else if (main.currentScreen == 'PIN') {
            main.validate('PIN');
        } else if (main.currentScreen == 'withdraw checking') {
            main.validate('withdrawCheckingAmount'); //Remember to use HoldDataClass.setAccountAmount after confirming valid
        } else if (main.currentScreen == 'withdraw savings') {
            main.validate('withdrawSavingAmount'); //Remember to use HoldDataClass.setAccountAmount after confirming valid
        } else if (main.currentScreen == 'deposit checking') {
            main.validate('depositChecking'); //needed?
            HoldDataClass.setAccountAmount('checking', document.getElementById('depositChecking').value);
        } else if (main.currentScreen == 'deposit savings') {
            main.validate('depositSavings'); //needed?
            HoldDataClass.setAccountAmount('savings', document.getElementById('depositSavings').value);
        } else if (main.currentScreen == 'transfer from savings') {
            main.validate('transferToChecking');
        } else if (main.currentScreen == 'transfer from checking') {
            main.validate('transferToSavings');
        }
    }

    listenButton4() {
        if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('withdraw');
            main.currentScreen = 'withdraw';
        } else if (main.currentScreen == 'withdraw') {
            new ScreenChanger().updateScreen('withdraw checking');
            main.currentScreen = 'withdraw checking';
        } else if (main.currentScreen == 'account inquiry') {
            new ScreenChanger().updateScreen('checking inquiry');
            main.currentScreen = 'checking inquiry';
        } else if (main.currentScreen == 'deposit') {
            new ScreenChanger().updateScreen('deposit checking');
            main.currentScreen = 'deposit checking';
        } else if (main.currentScreen == 'transfer') {
            new ScreenChanger().updateScreen('transfer from checking');
            main.currentScreen = 'transfer from checking';
        }
    }

    listenButton5() {
        if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('account inquiry');
            main.currentScreen = 'account inquiry';
        } else if (main.currentScreen == 'withdraw') {
            new ScreenChanger().updateScreen('withdraw savings');
            main.currentScreen = 'withdraw savings';
        } else if (main.currentScreen == 'account inquiry') {
            new ScreenChanger().updateScreen('savings inquiry');
            main.currentScreen = 'savings inquiry';
        } else if (main.currentScreen == 'deposit') {
            new ScreenChanger().updateScreen('deposit savings');
            main.currentScreen = 'deposit savings';
        } else if (main.currentScreen == 'transfer') {
            new ScreenChanger().updateScreen('transfer from savings');
            main.currentScreen = 'transfer from savings';
        }
    }

    /*listenButton0() {
        if (main.currentScreen == 'cardNum') {
            //HoldDataClass.button[3].addEventListener('click', function() {main.validate('cardNum')});
        } else if (main.currentScreen == 'PIN') {
            //HoldDataClass.button[3].addEventListener('click', function() {main.validate('PIN')});
            HoldDataClass.button[0].addEventListener('click', function() {new ScreenChanger().updateScreen('cardNum')});
        } else if (main.currentScreen == 'mainScreen') {
            HoldDataClass.button[0].addEventListener('click', function() {new ScreenChanger().updateScreen('cardNum')});
            //HoldDataClass.button[1].addEventListener('click', function() {new ScreenChanger().updateScreen('deposit')});
            //HoldDataClass.button[2].addEventListener('click', function() {new ScreenChanger().updateScreen('transfer')});
            //HoldDataClass.button[4].addEventListener('click', function() {new ScreenChanger().updateScreen('withdraw')});
            //HoldDataClass.button[5].addEventListener('click', function() {new ScreenChanger().updateScreen('account inquiry')});
        }
    }

    listenButton1() {
        if (main.currentScreen == 'mainScreen') {
            HoldDataClass.button[1].addEventListener('click', function() {new ScreenChanger().updateScreen('deposit')});
        }
    }

    listenButton2() {
        if (main.currentScreen == 'mainScreen') {
            HoldDataClass.button[2].addEventListener('click', function() {new ScreenChanger().updateScreen('transfer')});
        }
    }

    listenButton3() {
        if (main.currentScreen == 'cardNum') {
            HoldDataClass.button[3].addEventListener('click', function () {
                main.validate('cardNum')
            });
        } else if (main.currentScreen == 'PIN') {
            HoldDataClass.button[3].addEventListener('click', function () {
                main.validate('PIN')
            });
        }
    }

    listenButton4() {
        if (main.currentScreen == 'mainScreen') {
            HoldDataClass.button[4].addEventListener('click', function() {new ScreenChanger().updateScreen('withdraw')});
        }
    }

    listenButton5() {
        if (main.currentScreen == 'mainScreen') {
            HoldDataClass.button[5].addEventListener('click', function() {new ScreenChanger().updateScreen('account inquiry')});
        }
    }*/

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
}

window.onload = function() {
    new main();
};