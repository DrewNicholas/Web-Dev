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
        console.log('data set in HoldDataClass');
        HoldDataClass.data = importData;
    }

    static getData() {
        return HoldDataClass.data;
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

    static getAccountNum(whichAccount) {
        let account;
        if (whichAccount == 'savings') {
            account = 4;
        } else if (whichAccount == 'checking') {
            console.log('returning checking account number');
            account = 6;
        }
        console.log(whichAccount + ' is account ' + this.data[this.customer][account]);
        return this.data[this.customer][account];
    }

    static getAccountAmount(whichAccount) {
        let account;
        if (whichAccount == 'savings') {
            account = 5;
        } else if (whichAccount == 'checking') {
            console.log('returning checking amount');
            account = 7;
        }
        console.log(whichAccount + ' has ' + this.data[this.customer][account] + ' dollars');
        return this.data[this.customer][account];
    }

    static setAccountAmount(whichAccount, changeBy) {
        let account;
        if (whichAccount == 'savings') {
            account = 5;
        } else {
            account = 7;
        }
        this.data[this.customer][account] = this.data[this.customer][account] + changeBy;
    }
}