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
            new ScreenChanger().validate('cardNum');
            console.log('button 4 clicked');
        });
    }

    static setButtons() {
        //main.button0 = document.getElementById('button0');
        //main.button1 = document.getElementById('button1');
        //main.button2 = document.getElementById('button2');
        //main.button3 = document.getElementById('button3');
        //main.button4 = document.getElementById('button4');
        //main.button5 = document.getElementById('button5');
        for (let i = 0; i < 6; i++) {
            main.button[i] = document.getElementById('button' + i);
        }
    }

    setData(inputData) {
        //const COLUMNS = 6;
        //for (let i = 0; i < inputData.length; i++) {
        //    for (let j = 0; j < COLUMNS; j++) {
        //        main.data[i][j] = inputData[i][j];
        //    }
        //}
        main.data = inputData;
    }

    static getData() {
        return this.data;
    }
}

window.onload = function() {
    new main();
};