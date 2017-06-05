// ==UserScript==
// @name        Prettify FiMfiction
// @namespace   fimfiction-prettify
// @version     1.0
// @description Pretty, pretty rainbows!
// @author      Kristen "Crystal" Trzonkowski
// @include     http://www.fimfiction.net/*
// @include     https://www.fimfiction.net/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

var head, style;

head = document.getElementsByTagName('head')[0];

if (!head) { return; }

style = document.createElement('style');
style.type = 'text/css';

 style.innerHTML = ".user_toolbar { ";
style.innerHTML +=  "background: #b2cefe;"; /* For browsers that do not support gradients */
style.innerHTML +=  "background: -webkit-linear-gradient(left, #fea3aa, #f8b88b, #faf884, #baed91, #b2cefe, #f2a2e8);"; /* For Safari 5.1 to 6.0 */
style.innerHTML +=  "background: -o-linear-gradient(right, #fea3aa, #f8b88b, #faf884, #baed91, #b2cefe, #f2a2e8);"; /* For Opera 11.1 to 12.0 */
style.innerHTML +=  "background: -moz-linear-gradient(right, #fea3aa, #f8b88b, #faf884, #baed91, #b2cefe, #f2a2e8);"; /* For Firefox 3.6 to 15 */
style.innerHTML +=  "background: linear-gradient(to right, #fea3aa, #f8b88b, #faf884, #baed91, #b2cefe, #f2a2e8);"; /* Standard syntax (must be last) */
style.innerHTML += "}";

style.innerHTML += ".user_toolbar>ul>li {";
style.innerHTML +=  "text-shadow: 0px 0px 5px #355e9e;";
style.innerHTML +=  "color: #FFFFFF;";
style.innerHTML += "}";

style.innerHTML += ".user_toolbar>ul>li:hover {";
style.innerHTML +=  "background: #292b2f;";
style.innerHTML +=  "text-shadow: 0px 0px 5px #355e9e;";
style.innerHTML += "}";

head.appendChild(style);
