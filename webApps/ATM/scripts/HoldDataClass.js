/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 */

"use strict";

export default class HoldDataClass {
    constructor() {
        this.data = [[]];
        HoldDataClass.customer = '';
        //HoldDataClass.button = [];
    }

    static setData(importData) {
        HoldDataClass.data = importData;
    }

    static getData() {
        return this.data;
    }

    static setCustomer(dataRowNum) {
        HoldDataClass.customer = dataRowNum;
    }

    static getCustomer() {
        return HoldDataClass.customer;
    }

    static setButtons() {
        const NUM_OF_BUTTONS = 6;
        for (let i = 0; i < NUM_OF_BUTTONS; i++) {
            HoldDataClass.button[i] = document.getElementById('button' + i);
        }
    }

    static getbuttons() {
        return HoldDataClass.button;
    }
}