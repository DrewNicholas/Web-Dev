/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 5.7.2016
 * PURPOSE: ATM with server read/write
 */

"use strict";

import ScreenChanger from './ScreenChanger';
import LoadDataClass from './LoadDataClass';
import HoldDataClass from './HoldDataClass';

class main {
    constructor() {
        new LoadDataClass().loadData(HoldDataClass.setData);
        HoldDataClass.button = [];
        HoldDataClass.setButtons();
        main.currentScreen = "cardNum";
        HoldDataClass.button[0].addEventListener('click', main.listenButton0);
        HoldDataClass.button[1].addEventListener('click', main.listenButton1);
        HoldDataClass.button[2].addEventListener('click', main.listenButton2);
        HoldDataClass.button[3].addEventListener('click', main.listenButton3);
        HoldDataClass.button[4].addEventListener('click', main.listenButton4);
        HoldDataClass.button[5].addEventListener('click', main.listenButton5);
    }

    static validate(elementId) {
        console.log('running validation on ' + elementId);
        let data = HoldDataClass.getData();
        let checkNum = document.getElementById(elementId).value;
        if (elementId == 'cardNum') {
            let isValid = false;
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
            if (data[HoldDataClass.customer][PIN] == checkNum) {
                main.currentScreen = 'mainScreen';
                new ScreenChanger().updateScreen('mainScreen');
            } else {
                alert('Incorrect PIN, please try again');
            }
        } else if(elementId == 'transferToChecking') {
            let savingsAmt = Number(HoldDataClass.getAccountAmount('savings'));
            if (Number(checkNum) <= savingsAmt) {
                HoldDataClass.setAccountAmount('savings', -checkNum);
                HoldDataClass.setAccountAmount('checking', checkNum);
                new ScreenChanger().updateScreen('announce transfer');
                main.currentScreen = 'announce transfer';
            } else {
                alert('This would overdraw your savings, please enter a valid amount');
            }
        } else if (elementId == 'transferToSavings') {
            let checkingAmt = Number(HoldDataClass.getAccountAmount('checking'));
            if (Number(checkNum) <= checkingAmt) {
                HoldDataClass.setAccountAmount('checking', -checkNum);
                HoldDataClass.setAccountAmount('savings', checkNum);
                new ScreenChanger().updateScreen('announce transfer');
                main.currentScreen = 'announce transfer';
            }
        } else if (elementId == 'withdrawCheckingAmount') {
            let checkingAmt = Number(HoldDataClass.getAccountAmount('checking'));
            if (Number(checkNum) <= checkingAmt) {
                HoldDataClass.setAccountAmount('checking', -checkNum);
                new ScreenChanger().updateScreen('announce withdrawn checking');
                main.currentScreen = 'announce withdrawn checking';
            } else {
                alert('This would overdraw your account, please enter a valid amount');
            }
        } else if (elementId == 'withdrawSavingsAmount') {
            let savingsAmt = Number(HoldDataClass.getAccountAmount('savings'));
            if (Number(checkNum) <= savingsAmt) {
                HoldDataClass.setAccountAmount('savings', -checkNum);
                new ScreenChanger().updateScreen('announce withdrawn savings');
                main.currentScreen = 'announce withdrawn savings';
            } else {
                alert('This would overdraw your account, please enter a valid amount');
            }
        }
    }

    static listenButton0() {
        if (main.currentScreen == 'PIN') {
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
        } else if(main.currentScreen == 'announce withdrawn checking' || main.currentScreen == 'announce withdrawn savings' || main.currentScreen == 'announce deposit checking' || main.currentScreen == 'announce deposit savings' || main.currentScreen == 'announce transfer') {
            new ScreenChanger().updateScreen('mainScreen');
            main.currentScreen = 'mainScreen';
        } else if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('cardNum');
            main.currentScreen = 'cardNum';
            main.writeData();
        }
    }

    static listenButton1() {
        if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('deposit');
            main.currentScreen = 'deposit';
        }
    }

    static listenButton2() {
        if (main.currentScreen == 'mainScreen') {
            new ScreenChanger().updateScreen('transfer');
            main.currentScreen = 'transfer';
        }
    }

    static listenButton3() {
        if (main.currentScreen == 'cardNum') {
            main.validate('cardNum');
        } else if (main.currentScreen == 'PIN') {
            main.validate('PIN');
        } else if (main.currentScreen == 'withdraw checking') {
            main.validate('withdrawCheckingAmount');
        } else if (main.currentScreen == 'withdraw savings') {
            main.validate('withdrawSavingsAmount');
        } else if (main.currentScreen == 'deposit checking') {
            HoldDataClass.setAccountAmount('checking', document.getElementById('depositChecking').value);
            new ScreenChanger().updateScreen('announce deposit checking');
            main.currentScreen = 'announce deposit checking';
        } else if (main.currentScreen == 'deposit savings') {
            HoldDataClass.setAccountAmount('savings', document.getElementById('depositSavings').value);
            new ScreenChanger().updateScreen('announce deposit savings');
            main.currentScreen = 'announce deposit savings';
        } else if (main.currentScreen == 'transfer from savings') {
            main.validate('transferToChecking');
        } else if (main.currentScreen == 'transfer from checking') {
            main.validate('transferToSavings');
        }
    }

    static listenButton4() {
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

    static listenButton5() {
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

    static writeData() {
        let bustCache = '?' + new Date().getTime();
        let XHR = new XMLHttpRequest();
        XHR.open("POST", document.url + bustCache, true);
        XHR.setRequestHeader('x-requested-write', 'XMLHttpRequest');
        XHR.send(HoldDataClass.restringData());
    }
}

window.addEventListener('load', function() {
    new main();
});