/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 */

"use strict";

import HoldDataClass from './HoldDataClass';

export default class ScreenChanger {
    constructor() {
        this.screen = document.getElementById('screen');
    }

    updateScreen(whatNext) {
        const NUM_OF_BUTTONS = 6;
        if (whatNext == 'PIN') {
            this.screen.innerHTML = 'Welcome' + ' ' + HoldDataClass.data[HoldDataClass.customer][3] + HoldDataClass.data[HoldDataClass.customer][2] + '. Please enter your one digit PIN'
                + '<input type="password" id="PIN" placeholder="PIN">';
            //HoldDataClass.button[3].addEventListener('click', function func() {main.validate('PIN')});
            //callback(3, 'remove', main.func);
        } else if (whatNext == 'mainscreen') {
            this.screen.innerHTML = 'What would you like to do?';
            HoldDataClass.button[4].value = 'Withdrawal';
            HoldDataClass.button[5].value = 'Account Inquiry';
            HoldDataClass.button[1].value = 'Deposit';
            HoldDataClass.button[2].value = 'Transfer';
            HoldDataClass.button[0].value = '...';
            HoldDataClass.button[3].value = '...';
        } else if (whatNext == 'withdraw') {
            this.screen.innerHTML = 'Which account would you like to withdraw from?';
            HoldDataClass.button[0].value = 'Back';
            HoldDataClass.button[4].value = 'Checking';
            HoldDataClass.button[5].value = 'Savings';
        } else if (whatNext == 'withdraw checking') {
            this.screen.innerHTML = 'How much would you like to withdraw? Must be in multiples of $20.00'
                + '?<input type="number" id="withdrawAmount" placeholder="Amount">';
            HoldDataClass.button[3].value = 'Enter';
            for (let i = 0; i < NUM_OF_BUTTONS; i++) {
                if (i != 3) {
                    HoldDataClass.button[i].value = "...";
                }
            }
        } else if (whatNext == 'withdraw savings') {
            this.screen.innerHTML = 'How much would you like to withdraw? Must be in multiples of $20.00'
                + '$<input type="number" id="withdrawAmount" placeholder="Amount">';
            HoldDataClass.button[3].value = 'Enter';
            for (let i = 0; i < NUM_OF_BUTTONS; i++) {
                if (i != 3) {
                    HoldDataClass.button[i].value = "...";
                }
            }
        } else if (whatNext == 'account inquiry') {
            this.screen.innerHTML = 'Which account would you like to see?';
            HoldDataClass.button[0].value = 'Back';
            HoldDataClass.button[4].value = 'Savings';
            HoldDataClass.button[5].value = 'Checking';
            for (let i = 0; i < NUM_OF_BUTTONS; i++) {
                if (i != 0 || i != 4 || i != 5) {
                    HoldDataClass.button[i].value = '...';
                }
            }
        } else if (whatNext == 'savings inquiry') {
            let savingsAmt = HoldDataClass.getAccountAmount('savings');
            let savingsNum = HoldDataClass.getAccountNum('savings');
            this.screen.innerHTML = 'In savings account #' + savingsNum + ' there is $' + savingsAmt;
            for (let i = 1; i < NUM_OF_BUTTONS; i++) {
                HoldDataClass.button[i].value = '...'; //Keeps back button as button0, but listener will need to be changed
            }
        } else if (whatNext == 'checking inquiry') {
            let checkingAmt = HoldDataClass.getAccountAmount('checking');
            let checkingNum = HoldDataClass.getAccountNum('checking');
            this.screen.innerHTML = 'In checking account #' + checkingNum + ' there is $' + checkingAmt;
            for (let i = 1; i < NUM_OF_BUTTONS; i++) {
                HoldDataClass.button[i].value = '...'; //Keeps back button as button0, but listener will need to be changed
            }
        } else if (whatNext == 'deposit') {
            this.screen.innerHTML = 'Which account would you like to deposit to?';
            HoldDataClass.button[0].value = 'Back';
            HoldDataClass.button[4].value = 'Checking';
            HoldDataClass.button[5].value = 'Savings';
        } else if (whatNext == 'deposit checking') {
            this.screen.innerHTML = 'How much would you like to deposit in your checking account?'
                + '$<input type="number" id="depositChecking" placeholder="Amount">';
            HoldDataClass.button[3].value = 'Enter';
            for (let i = 0; i < NUM_OF_BUTTONS; i++) {
                if (i != 3) {
                    HoldDataClass.button[i].value = "...";
                }
            }
        } else if (whatNext == 'deposit savings') {
            this.screen.innerHTML = 'How much would you like to deposit in your savings account?'
                + '$<input type="number" id="depositSavings" placeholder="Amount">';
            HoldDataClass.button[3].value = 'Enter';
            for (let i = 0; i < NUM_OF_BUTTONS; i++) {
                if (i != 3) {
                    HoldDataClass.button[i].value = "...";
                }
            }
        } else if (whatNext == 'transfer') {
            this.screen.innerHTML = 'Which account do you wish to transfer money out of?'
            HoldDataClass.button[0].value = 'Back';
            HoldDataClass.button[4].value = 'Checking';
            HoldDataClass.button[5].value = 'Savings';
        } else if (whatNext == 'transfer from savings') {
            this.screen.innerHTML = 'How much would you like to transfer out of savings and into checking?'
                + '$<input type="number" id="transferToChecking" placeholder="Amount">';
            HoldDataClass.button[3].value = 'Enter';
            HoldDataClass.button[4].value = '...';
            HoldDataClass.button[5].value = '...';
        } else if (whatNext == 'transfer from checking') {
            this.screen.innerHTML = 'How much would you like to transfer out of checking and into savings?'
                + '$<input type="number" id="transferToSavingings" placeholder="Amount">';
            HoldDataClass.button[3].value = 'Enter';
            HoldDataClass.button[4].value = '...';
            HoldDataClass.button[5].value = '...';
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
}