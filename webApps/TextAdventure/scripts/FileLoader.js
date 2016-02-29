/* AUTHOR: dmnicholas@me.com
 * Version: 1.0.0
 * CREATED: 2.24.2016
 */

"use strict";

export default class FileLoader {
    constructor() {

    }

    loadData(filePath, callback) {
        let request = new XMLHttpRequest();
        request.open("GET", filePath, true);
        request.send();
        request.onload = function() {
            let data = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
            }
            /*for (let i = 0; i < data.length; i++) {
                middleData = data[i].split(/,/);
                finalData[i] = []; //makes it an MD array
                for (let j = 0; j < COLUMNS; j++) {
                    finalData[i][j] = middleData[j];
                }
            }*/
            callback(data);
        };
    }
}