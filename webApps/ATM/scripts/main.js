/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 * PURPOSE: ATM
 */

"use strict";

import ScreenChanger from 'ScreenChanger';
import LoadData from 'LoadData';

class main {
    constructor() {
        new LoadData().loadData('./data/customers.csv', main.setData);
        main.button0 = "";
        main.button1 = "";
        main.button2 = "";
        main.button3 = "";
        main.button4 = "";
        main.button5 = "";
        main.data = [[]];
        this.setButtons();
        button4.addEventListener('click', function() {new ScreenChanger().validate('cardNum')});
    }

    static setButtons() {
        main.button0 = document.getElementById('button0');
        main.button1 = document.getElementById('button1');
        main.button2 = document.getElementById('button2');
        main.button3 = document.getElementById('button3');
        main.button4 = document.getElementById('button4');
        main.button5 = document.getElementById('button5');
    }

    static setData(inputData) {
        const COLUMNS = 6;
        for (let i = 0; i < inputData.length; i++) {
            for (let j = 0; j < COLUMNS; j++) {
                main.data[i][j] = inputData[i][j];
            }
        }
    }
}

window.onload = function() {
    new main();
};