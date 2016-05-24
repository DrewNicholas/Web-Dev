/*  AUTHOR: dmnicholas@me.com
 *  VERSION: 1.0.0
 *  CREATED: 5.7.2016
 *  PURPOSE: Library class for handling file I/O
*/

"use strict";

class DataHandler {
    constructor(columns) {
        this.columns = columns;
        this.finalData = [];
    }

    setFinalData(dataPath) {
        const FS = require('fs');
        let fileHandle = FS.readFileSync(dataPath, 'utf8');
        let tempArray = fileHandle.split(/\r?\n/); //remove newlines
        for (let i = 0; i < tempArray.length; i++) {
            this.finalData[i] = tempArray[i].split(/,/).slice(0, this.columns);
        }
    }

    getFinalData() {
        return this.finalData;
    }

    writeDataFile_MD(dataPath, data, COLUMNS) {
        const FS = require('fs');
        for (let i = 0; i < data.length; i++) {
            let line = "";
            for (let j = 0; j < COLUMNS; j++) {
                if (j < COLUMNS - 1) {
                    line = line + data[i][j] + ',';
                } else {
                    line = line + data[i][j] + '\n';
                }
            }
            let fileHandle = FS.appendFileSync(dataPath, line, 'utf8');
        }
    }

    writeDataFile_SD(dataPath, data) {
        const FS = require('fs');
        for (let i = 0; i < data.length; i++) {
            if (eval(i) + 1 == data.length) {
                let fileHandle = FS.appendFileSync(dataPath, data[i] + '\n', 'utf8');
            } else {
                let fileHandle = FS.appendFileSync(dataPath, data[i] + ',', 'utf8');
            }
        }
    }
}

module.exports = DataHandler;

/*
Stuff from Mr. Bates on how to pass string in AJAX

let myarray = [];
let myJSON = "";
for (let i = 0; i < 10; i++) {

    let item = {
        "value": i,
        "label": i
    };

    myarray.push(item);
}

myJSON = JSON.stringify({myarray: myarray});
*/
