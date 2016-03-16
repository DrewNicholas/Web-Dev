/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 */

"use strict";

export default class ScreenChanger {
    constructor() {
        this.screen = document.getElementById('screen');
    }

    updateScreen(valid) {
        if (valid == true) {
            console.log('card number valid');
        } else {
            console.log('card invalid');
        }
    }

    validate(elementId) {
        let data = main.getData();
        let checkNum = document.getElementById(elementId).value;
        let isValid = false;
        if (elementId == 'cardNum') {
            for (let i = 0; i< data.length && isValid == false; i++) {
                if (data[i][0] == checkNum) {
                    isValid = true;
                }
            }
            this.updateScreen(isValid)
        }
    }
}