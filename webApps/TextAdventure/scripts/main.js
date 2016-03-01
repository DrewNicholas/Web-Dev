/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 2.24.2016
 * PURPOSE: Text adventure game
 */

"use strict";

import Decision from "./Decision";
//const FIRST = 1;
//const SECOND = 2;

class main {
    constructor() {
        this.counter = 0;
        document.getElementById("left").addEventListener("click", function() {new Decision('first', 'left')}, false);
        document.getElementById("right").addEventListener("click", function() {new Decision('first', 'right')}, false);
    }
}

window.onload = function() {
    new main();
};