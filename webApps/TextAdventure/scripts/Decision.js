/* AUTHOR: dmnicholas@me.com
 * Version: 1.0.0
 * CREATED: 2.24.2016
 */

"use strict";

import FileLoader from "./FileLoader";

export default class Decision {
    constructor() {
        Decision.data = "";
        new FileLoader().loadData('./data/instructions.csv', Decision.setData);
    }

    updateDOM(choice) {
        if (choice == 'left') {
            document.getElementById('instructions').innerHTML = Decision.data[0];
            document.getElementById('left').style.visibility = "hidden";
            document.getElementById('right').style.visibility = "hidden";
            document.getElementById('knife').style.visibility = "visible";
            document.getElementById('cake').style.visibility = "visible";
        } else if (choice == 'right') {
            document.getElementById('instructions').innerHTML = Decision.data[1];
            document.getElementById('left').style.visibility = "hidden";
            document.getElementById('right').style.visibility = "hidden";
            document.getElementById('dog').style.visibility = "visible";
            document.getElementById('cat').style.visibility = "visible";
        } else if (choice == 'knife') {
            document.getElementById('instructions').innerHTML = Decision.data[2];
            document.getElementById('knife').style.visibility = "hidden";
            document.getElementById('cake').style.visibility = "hidden";
        } else if (choice == "cake") {
            document.getElementById('instructions').innerHTML = Decision.data[3];
            document.getElementById('knife').style.visibility = "hidden";
            document.getElementById('cake').style.visibility = "hidden";
        } else if (choice == 'dog') {
            document.getElementById('instructions').innerHTML = Decision.data[4];
            document.getElementById('dog').style.visibility = "hidden";
            document.getElementById('cat').style.visibility = "hidden";
        } else if (choice == 'cat') {
            document.getElementById('instructions').innerHTML = Decision.data[5];
            document.getElementById('dog').style.visibility = "hidden";
            document.getElementById('cat').style.visibility = "hidden";
        }
    };

    static setData(data) {
        Decision.data = data;
    }
}