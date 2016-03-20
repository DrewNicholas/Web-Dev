/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 */

"use strict";

export default class HoldDataClass {
    constructor() {
        this.data = [[]];
    }

    static setData(importData) {
        HoldDataClass.data = importData;
    }

    static getData() {
        return this.data;
    }
}