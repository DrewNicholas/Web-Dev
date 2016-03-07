/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 2.24.2016
 * PURPOSE: Text adventure game
 */

"use strict";

import Decision from "./Decision";

class main {
    constructor() {
        let game = new Decision();
        document.getElementById("left").addEventListener("click", function() {game.updateDOM('left')}, false);
        document.getElementById("right").addEventListener("click", function() {game.updateDOM('right')}, false);
        document.getElementById("knife").addEventListener("click", function() {game.updateDOM('knife')}, false);
        document.getElementById("cake").addEventListener("click", function() {game.updateDOM('cake')}, false);
        document.getElementById("dog").addEventListener("click", function() {game.updateDOM('dog')}, false);
        document.getElementById("cat").addEventListener("click", function() {game.updateDOM('cat')}, false);
        console.log("Hi Drew!");
    }
}

window.onload = function() {
    new main();
};