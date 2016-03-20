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
        main.button = [];
        main.setButtons();
        main.button[3].addEventListener('click', function() {
            main.validate('cardNum');
            console.log('button3 clicked');
        });
    }

    static setButtons() {
        for (let i = 0; i < 6; i++) {
            main.button[i] = document.getElementById('button' + i);
        }
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
                }
            }

        }
        new ScreenChanger().updateScreen(isValid);
    }
}

window.onload = function() {
    new main();
};