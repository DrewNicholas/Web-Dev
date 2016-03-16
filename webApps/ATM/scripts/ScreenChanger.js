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

        } else {

        }
    }

    validate(elementId) {
        let checkNum = document.getElementById(elementId).value;
        let isValid = false;
        if (elementId == 'cardNum') {
            for (let i = 0; i< main.data.length && isValid == false; i++) {
                if (main.data[i][0] == checkNum) {
                    isValid = true;
                }
            }
            this.updateScreen(isValid)
        }
    }
}