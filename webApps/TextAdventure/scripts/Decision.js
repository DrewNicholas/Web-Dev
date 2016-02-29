/* AUTHOR: dmnicholas@me.com
 * Version: 1.0.0
 * CREATED: 2.24.2016
 */

"use strict";

export default class Decision {
    constructor(time, choice) {
        this.time = time;
        this.choice = choice;
    }
    updateDOM = function() {
        if (this.time == 'first' && this.choice == 'left') {
            document.getElementById('instructions').innerHTML = 'some other bullshit';
        }
    }

}