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
        Decision.data = "";
        console.log("You clicked");
        new FileLoader().loadData('./data/instructions.csv', this.setData);
        Decision.updateDOM();
    }

    static updateDOM() {
        if (this.time == 'first' && this.choice == 'left') {
            document.getElementById('instructions').innerHTML = 'some other bullshit';
        }
    };

    setData(data) {
        Decision.data = data;
    }
}