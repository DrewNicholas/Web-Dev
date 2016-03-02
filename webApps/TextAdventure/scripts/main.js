/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 2.24.2016
 * PURPOSE: Text adventure game
 */

"use strict";

import Decision from "./Decision";

class main {
    constructor() {
        this.counter = 0;
        document.getElementById("left").addEventListener("click", function() {new Decision('first', 'left')}, false);
        document.getElementById("right").addEventListener("click", function() {new Decision('first', 'right')}, false);
        console.log("Hi Drew!");
    }
}

window.onload = function() {
    new main();
};