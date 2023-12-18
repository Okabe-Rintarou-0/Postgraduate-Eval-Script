// ==UserScript==
// @name         SJTU Postgraduate Evaluate
// @namespace    http://tampermonkey.net/
// @version      2023-12-18
// @description  评教
// @author       Okabe
// @match        http://yjs.sjtu.edu.cn/gsapp/sys/wspjapp/*
// @grant        none
// @license      MIT
// ==/UserScript==
setInterval((function() {
    'use strict';
    var targetValue = 5;
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        if (parseInt(radioButton.value) === targetValue) {
            radioButton.checked = true;
        }
    });
}), 1000);
