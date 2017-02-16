// ==UserScript==
// @name         Sticky FiMfiction Comment Box
// @namespace    fimfiction-sticky-commment-box
// @version      1.0
// @description  Makes the comment box sticky on FiMFiction.
// @author       Kristen "Crystal" Trzonkowski
// @include      http://www.fimfiction.net/*
// @include      https://www.fimfiction.net/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var head, style;
head = document.getElementsByTagName('head')[0];
if (!head) { return; }
style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '#add_comment_box { position: fixed; bottom: 0; right: 0; margin-bottom: 0; z-index: 99999; }';
head.appendChild(style);
