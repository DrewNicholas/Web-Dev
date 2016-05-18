/* AUTHOR: dmnicholas@me.com
* VERSION: 1.0.0
* CREATED: 5.7.2016
*/

"use strict";

export default class LoadDataClass {
    constructor() {

    }

    /*loadData(filePath, callback) {
        let request = new XMLHttpRequest();
        request.open("GET", filePath, true);
        request.send();
        request.onload = function() {
            const COLUMNS = 8;
            let data, middleData, finalData = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
            }
            for (let i = 0; i < data.length; i++) {
                middleData = data[i].split(/,/);
                finalData[i] = []; //makes it an MD array
                for (let j = 0; j < COLUMNS; j++) {
                    finalData[i][j] = middleData[j];
                }
            }
            callback(finalData);
        };
    }*/

    loadData(filePath, callback) {
        let request = new XMLHttpRequest();
        request.open("POST", filePath, true);
        request.onload = function() {
            const COLUMNS = 8;
            let data, middleData, finalData = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
            }
            for (let i = 0; i < data.length; i++) {
                middleData = data[i].split(/,/);
                finalData[i] = []; //makes it an MD array
                for (let j = 0; j < COLUMNS; j++) {
                    finalData[i][j] = middleData[j];
                }
            }
            callback(finalData);
        };
        request.setRequestHeader('x-requested-with', 'loadData');
        request.send();
    }
}