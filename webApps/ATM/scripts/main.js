/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 * PURPOSE: ATM
 */

"use strict";

import ScreenChanger from 'ScreenChanger';

class main {
    constructor() {
        main.button0 = "";
        main.button1 = "";
        main.button2 = "";
        main.button3 = "";
        main.button4 = "";
        main.button5 = "";
        this.setButtons();
        button4.addEventListener('click', function() {});
    }

    static setButtons() {
        main.button0 = document.getElementById('button0');
        main.button1 = document.getElementById('button1');
        main.button2 = document.getElementById('button2');
        main.button3 = document.getElementById('button3');
        main.button4 = document.getElementById('button4');
        main.button5 = document.getElementById('button5');
    }
}

window.onload = function() {
    new main();
};