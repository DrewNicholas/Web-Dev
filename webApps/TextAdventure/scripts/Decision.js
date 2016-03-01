/* AUTHOR: dmnicholas@me.com
 * Version: 1.0.0
 * CREATED: 2.24.2016
 */

"use strict";

import FileLoader from "./FileLoader";

export default class Decision {
    constructor(time, choice) {
        this.time = time;
        this.choice = choice;
        new FileLoader().loadData('./data/instructions.csv', this.updateDOM());
    }
    updateDOM = function() {
        if (this.time == 'first' && this.choice == 'left') {
            document.getElementById('instructions').innerHTML = 'some other bullshit';
        }
    }

}