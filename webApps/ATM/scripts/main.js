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
        //let heldData = new HoldDataClass();
        //this.data = [[]];
        new LoadDataClass().loadData('./data/customers.csv', HoldDataClass.setData);
        HoldDataClass.button = [];
        HoldDataClass.setButtons();
        HoldDataClass.button[3].addEventListener('click', function func() {
            main.validate('cardNum');
        });
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
            new ScreenChanger().updateScreen(isValid, 'PIN');
        }

    }
}

window.onload = function() {
    new main();
};