/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 5.7.2016
 */

"use strict";

export default class HoldDataClass {
    constructor() {
        this.data = [[]];
        HoldDataClass.customer = '';
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
            account = 6;
        }
        return this.data[this.customer][account];
    }

    static getAccountAmount(whichAccount) {
        let account;
        if (whichAccount == 'savings') {
            account = 5;
        } else if (whichAccount == 'checking') {
            account = 7;
        }
        return this.data[this.customer][account];
    }

    static setAccountAmount(whichAccount, changeBy) {
        let account;
        if (whichAccount == 'savings') {
            account = 5;
        } else if (whichAccount == 'checking') {
            account = 7;
        }
        this.data[this.customer][account] = Number(this.data[this.customer][account]) + Number(changeBy);
    }

    static printData() {
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < 8; j++) {
                console.log(this.data[i][j]);
            }
        }
    }

    static restringData() {
        const COLUMNS = 8;
        this.stringData = "";
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < COLUMNS; j++) {
                if (j < COLUMNS - 1) {
                    this.stringData = this.stringData + this.data[i][j] + ",";
                } else {
                    if (i < this.data.length -1) {
                        this.stringData = this.stringData + this.data[i][j] + "\n";
                    } else {
                        this.stringData = this.stringData + this.data[i][j];
                    }
                }
            }
        }
        //console.log(this.stringData);
        return this.stringData;
    }
}