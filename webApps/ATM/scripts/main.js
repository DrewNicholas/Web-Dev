/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 * PURPOSE: ATM
 */

"use strict";

import ScreenChanger from './ScreenChanger';
import LoadDataClass from './LoadDataClass';
import HoldDataClass from './HoldDataClass';

//Thinking of how to properly dispatch all from main, I think I need a function that just sets or removes listeners that is called from validate alongside updateScreen if the number is valid. If invalid, just make an alert.

class main {
    constructor() {
        //let heldData = new HoldDataClass();
        //this.data = [[]];
        new LoadDataClass().loadData('./data/customers.csv', HoldDataClass.setData);
        HoldDataClass.button = [];
        HoldDataClass.setButtons();
        //HoldDataClass.button[3].addEventListener('click', function func() {
        //    main.validate('cardNum');
        //});

    }

    static validate(elementId) {
        let data = HoldDataClass.getData();
        let checkNum = document.getElementById(elementId).value;
        let isValid = false;
        if (elementId == 'cardNum') {
            for (let i = 0; i< data.length && isValid == false; i++) {
                if (data[i][0] == checkNum) {
                    isValid = true;
                    HoldDataClass.setCustomer(i);
                    HoldDataClass.button[3].removeEventListener('click', main.func);
                }
            }
            if (isValid == true) {
                new ScreenChanger().updateScreen('PIN')
            }
            new ScreenChanger().updateScreen(isValid, 'PIN');
        }
    }

    addListener(buttonNumber, addRemove, doWhat) {
        if (addRemove == 'add') {
            HoldDataClass.button[buttonNumber].addEventListener('click', doWhat);
        } else {
            HoldDataClass.button[buttonNumber].removeEventListener('click', doWhat);
        }
    }
}

window.onload = function() {
    new main();
};