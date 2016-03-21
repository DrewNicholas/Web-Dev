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

    updateScreen(valid, whatNext) {
        if (valid == true) {
            console.log('card number valid');
            this.screen.innerHTML = 'Welcome' + ' ' + HoldDataClass.data[HoldDataClass.customer][3] + HoldDataClass.data[HoldDataClass.customer][2] + '. Please enter your one digit PIN'
                + '<input type="password" id="PIN" placeholder="PIN">';
            HoldDataClass.button[3].addEventListener('click', function func() {main.validate('PIN')});
        } else {
            console.log('card invalid');
            this.screen.innerHTML = 'Invalid card number, please try again'
                                    + '<input type="text" id="cardNum" placeholder="Card Number">';
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