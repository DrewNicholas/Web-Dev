/* AUTHOR: dmnicholas@me.com
 * VERSION: 1.0.0
 * CREATED: 3.13.2016
 * PURPOSE: ATM
 */

"use strict";

import ScreenChanger from './ScreenChanger';
import LoadDataClass from './LoadDataClass';
import HoldDataClass from './HoldDataClass';

//Thinking of how to properly dispatch all from main, I think I need a function that just sets or removes listeners that is called from validate alongside updateScreen if the number is valid. If invalid, just make an alert.

class main {
    constructor() {
        //let heldData = new HoldDataClass();
        //this.data = [[]];
        new LoadDataClass().loadData('./data/customers.csv', HoldDataClass.setData);
        HoldDataClass.button = [];
        HoldDataClass.setButtons();
        this.listenButton0();
        this.listenButton1();
        this.listenButton2();
        this.listenButton3();
        this.listenButton4();
        this.listenButton5();
        main.currentScreen = "";
        //HoldDataClass.button[3].addEventListener('click', function func() {
        //    main.validate('cardNum');
        //});
        this.editListener(3, 'add', 'cardNum');
    }

    static validate(elementId) {
        console.log('running validation');
        let data = HoldDataClass.getData();
        let checkNum = document.getElementById(elementId).value;
        let isValid = false;
        if (elementId == 'cardNum') {
            for (let i = 0; i < data.length && isValid == false; i++) {
                if (data[i][0] == checkNum) {
                    isValid = true;
                    HoldDataClass.setCustomer(i);
                    this.editListener(3, 'remove', _func);
                    //HoldDataClass.button[3].removeEventListener('click', main.func);
                }
            }
            if (isValid == true) {
                new ScreenChanger().updateScreen('PIN');
                main.currentScreen = 'PIN';
            } else {
                alert('Invalid card number, please try again');
            }
            //new ScreenChanger().updateScreen(isValid, 'PIN');
        } else if (elementId == 'PIN'){
            const PIN = 1;
            if (data[HoldDataClass.customer][PIN] == checkNum) {
                isValid = true; //maybe unnecessary
                //do something with a listener
                main.currentScreen = 'mainScreen';
                new ScreenChanger().updateScreen('mainScreen')
            } else {
                alert('Incorrect PIN, please try again');
            }
        }
    }

    listenButton0() {
        if (main.currentScreen == 'cardNum') {
            HoldDataClass.button[0].addEventListener('click', function() {main.validate('cardNum')});
        } else if (main.currentScreen == 'PIN') {
            HoldDataClass.button[3].addEventListener('click', function() {main.validate('PIN')});
        }
    }

    listenButton1() {

    }

    listenButton2() {

    }

    listenButton3() {

    }

    listenButton4() {

    }

    listenButton5() {

    }

    //Old way of changing listener that didn't seem to work
    /*editListener(buttonNumber, addRemove, elementId) {
        console.log('editing listener');
        if (elementId == 'cardNum' || elementId == 'PIN') {
            if (addRemove == 'add') {
                HoldDataClass.button[buttonNumber].addEventListener('click', function() {main.validate(elementId)});
            } else {
                HoldDataClass.button[buttonNumber].removeEventListener('click', function() {main.validate(elementId)});
            }
        } else if (elementId == "something else I currently can't think of") {
            if (addRemove == 'add') {
                HoldDataClass.button[buttonNumber].addEventListener('click', );
            } else {
                HoldDataClass.button[buttonNumber].removeEventListener('click', );
            }
        }

    }*/
}

window.onload = function() {
    new main();
};