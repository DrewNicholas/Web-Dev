/* AUTHOR: dmnicholas@me.com
* VERSION: 1.0.0
* CREATED: 5.7.2016
*/

"use strict";

export default class LoadDataClass {
    constructor() {

    }

    loadData(callback) {
        let bustCache = '?' + new Date().getTime();
        let XHR = new XMLHttpRequest();
        XHR.open("POST", document.url + bustCache, true);
        XHR.setRequestHeader('x-requested-load', 'XMLHttpRequest');
        console.log('sending request');
        XHR.send();
        XHR.onload = function() {
            //console.log(XHR.responseText);
            callback(LoadDataClass.unstring(XHR.responseText));
        };
    }

    static unstring(toInterpret) {
        const COLUMNS = 8;
        let data, middleData, finalData = [];
        data = toInterpret.split(/\n/);
        for (let i = 0; i < data.length; i++) {
            middleData = data[i].split(/,/);
            finalData[i] = [];
            for (let j = 0; j < COLUMNS; j++) {
                finalData[i][j] = middleData[j];
            }
        }
        return finalData;
    }
}