// ==UserScript==
// @name        Prettify FiMfiction
// @namespace   fimfiction-prettify
// @version     1.3
// @description Isn't she lovely...  isn't she wonderful...
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

/* Set to true if you want it, false if you don't */
var options = {
  oldBar: false,  /* Change the blue bar BACK! */
  rainbow: false,  /* Change the blue bar to RAINBOW!  Legibility not guaranteed.  Because Milk wanted rainbows. */
  avatarSquared: false, /* It's hip to be SQUARE!  Currently only changes comment avatars to squares. */
  spoilerTags: false, /* CLASSIFIED!  Hide those spoilers like the criminal scum they are! */
  coloredTags: false, /* Return colored TAAAGS!  Bring back the different colors for different tags! */
  characterTags: false  /* Return character TAAAGS!  Because a picture is worth a thousand words. */
};

style.innerHTML = "";

if (options.oldBar) {
  style.innerHTML += ".user_toolbar { ";
  style.innerHTML +=  "background: #7f8e54;";
  style.innerHTML +=  "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #7f8e54), color-stop(100%, #73804c));";
  style.innerHTML +=  "background: -webkit-linear-gradient(top, #7f8e54 0%, #73804c 100%);";
  style.innerHTML +=  "background: linear-gradient(to bottom, #7f8e54 0%, #73804c 100%);";
  style.innerHTML +=  "border-bottom: 1px solid #616c40;";
  style.innerHTML +=  "text-align: center;";
  style.innerHTML +=  "border-color: rgba(0,0,0,0.2);";
  style.innerHTML +=  "box-shadow: 0 0 transparent;";
  style.innerHTML += "}";

  style.innerHTML += ".user_toolbar>ul>li, .user_toolbar>ul>li:last-of-type {";
  style.innerHTML +=  "display: inline-block;";
  style.innerHTML +=  "vertical-align: middle;";
  style.innerHTML +=  "background: #8b9b5c;";
  style.innerHTML +=  "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #8b9b5c), color-stop(100%, #7f8e54));";
  style.innerHTML +=  "background: -webkit-linear-gradient(top, #8b9b5c 0%, #7f8e54 100%);";
  style.innerHTML +=  "background: linear-gradient(to bottom, #8b9b5c 0%, #7f8e54 100%);";
  style.innerHTML +=  "text-shadow: 1px 1px #91a260;";
  style.innerHTML +=  "font-size: 13px;";
  style.innerHTML +=  "font-weight: bold;";
  style.innerHTML +=  "color: #181b10;";
  style.innerHTML +=  "line-height: 38px;";
  style.innerHTML +=  "box-shadow: 0px 0px 8px transparent inset;";
  style.innerHTML +=  "border-right: 1px solid #677344;";
  style.innerHTML +=  "margin: 0px;";
  style.innerHTML +=  "position: relative;";
  style.innerHTML +=  "z-index: 5";
  style.innerHTML +=  "box-shadow: 0 0 transparent;";
  style.innerHTML += "}";

  style.innerHTML += ".user_toolbar>ul>li:before, .user_toolbar>ul>li:after {";
  style.innerHTML +=  "display: none;";
  style.innerHTML += "}";

  style.innerHTML += ".user_toolbar>ul>li:first-of-type {";
  style.innerHTML +=  "border-left: 1px solid #677344;";
  style.innerHTML += "}";

  style.innerHTML += ".user_toolbar>ul>li>a:hover {";
  style.innerHTML +=  "background: #97a964;";
  style.innerHTML +=  "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #97a964), color-stop(100%, #8b9b5c));";
  style.innerHTML +=  "background: -webkit-linear-gradient(top, #97a964 0%, #8b9b5c 100%);";
  style.innerHTML +=  "background: linear-gradient(to bottom, #97a964 0%, #8b9b5c 100%);";
  style.innerHTML +=  "text-shadow: 1px 1px #9db068;";
  style.innerHTML += "}";
}

if (options.rainbow) {
  style.innerHTML += ".user_toolbar { ";
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
}

if (options.avatarSquared) {
  style.innerHTML += ".user_toolbar>ul>li:hover {";
  style.innerHTML +=  "background: #292b2f;";
  style.innerHTML +=  "text-shadow: 0px 0px 5px #355e9e;";
  style.innerHTML += "}";

  style.innerHTML += ".comment .author .name {";
  style.innerHTML +=  "border-radius: 3px 3px 0 0;";
  style.innerHTML += "}";

  style.innerHTML += ".comment .author .avatar {";
  style.innerHTML +=  "border-radius: 0 0 3px 3px;";
  style.innerHTML +=  "margin: 0;";
  style.innerHTML +=  "width: 130px;";
  style.innerHTML += "}";
}

if (options.spoilerTags) {
  style.innerHTML += ".bbcode .spoiler, .article .spoiler {";
  style.innerHTML +=   "background: #000000;";
  style.innerHTML +=   "color: #000000;";
  style.innerHTML +=   "filter: none;";
  style.innerHTML +=   "transition: none;";
  style.innerHTML += "}";
}

if (options.coloredTags) {
  style.innerHTML += ".story-tags>li a.tag-genre[title=Adventure], .story-tags>li a.tag-genre[data-tag=adventure] {";
  style.innerHTML +=  "background-color: #45C950 !important;";
  style.innerHTML +=  "border-color: #27B830 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title='Alternate Universe'], .story-tags>li a.tag-genre[data-tag=alternate_universe] {";
  style.innerHTML +=  "background-color: #888888 !important;";
  style.innerHTML +=  "border-color: #585858 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Anthro], .story-tags>li a.tag-genre[data-tag=anthro] {";
  style.innerHTML +=  "background-color: #B5695A !important;";
  style.innerHTML +=  "border-color: #944838 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Comedy], .story-tags>li a.tag-genre[data-tag=comedy] {";
  style.innerHTML +=  "background-color: #F5A900 !important;";
  style.innerHTML +=  "border-color: #C18500 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Crossover], .story-tags>li a.tag-genre[data-tag=crossover] {";
  style.innerHTML +=  "background-color: #47B8A0 !important;";
  style.innerHTML +=  "border-color: #2AA186 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Dark], .story-tags>li a.tag-genre[data-tag=dark] {";
  style.innerHTML +=  "background-color: #B93737 !important;";
  style.innerHTML +=  "border-color: #961A1A !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Drama], .story-tags>li a.tag-genre[data-tag=drama] {";
  style.innerHTML +=  "background-color: #EC50CA !important;";
  style.innerHTML +=  "border-color: #E22CBA !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title='Equestria Girls'], .story-tags>li a.tag-genre[data-tag=equestria_girls] {";
  style.innerHTML +=  "background-color: #4D3281 !important;";
  style.innerHTML +=  "border-color: #381E6B !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Human], .story-tags>li a.tag-genre[data-tag=human] {";
  style.innerHTML +=  "background-color: #B5835A !important;";
  style.innerHTML +=  "border-color: #946238 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Horror], .story-tags>li a.tag-genre[data-tag=horror] {";
  style.innerHTML +=  "background-color: #6D232F !important;";
  style.innerHTML +=  "border-color: #4F0F19 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Mystery], .story-tags>li a.tag-genre[data-tag=mystery] {";
  style.innerHTML +=  "background-color: #444444 !important;";
  style.innerHTML +=  "border-color: #000000 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Random], .story-tags>li a.tag-genre[data-tag=random] {";
  style.innerHTML +=  "background-color: #3f74CE !important;";
  style.innerHTML +=  "border-color: #1E5BC2 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Romance], .story-tags>li a.tag-genre[data-tag=romance] {";
  style.innerHTML +=  "background-color: #974BFF !important;";
  style.innerHTML +=  "border-color: #7D20FF !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Sad], .story-tags>li a.tag-genre[data-tag=sad] {";
  style.innerHTML +=  "background-color: #BD42A7 !important;";
  style.innerHTML +=  "border-color: #AC2693 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title='Sci-Fi'], .story-tags>li a.tag-genre[data-tag=scifi] {";
  style.innerHTML +=  "background-color: #5D62A5 !important;";
  style.innerHTML +=  "border-color: #3E448B !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title='Second Person'], .story-tags>li a.tag-genre[data-tag=second_person] {";
  style.innerHTML +=  "background-color: #02A1DB !important;";
  style.innerHTML +=  "border-color: #016E98 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title='Slice of Life'], .story-tags>li a.tag-genre[data-tag=slice_of_life] {";
  style.innerHTML +=  "background-color: #4B86FF !important;";
  style.innerHTML +=  "border-color: #2067FF !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Thriller], .story-tags>li a.tag-genre[data-tag=thriller] {";
  style.innerHTML +=  "background-color: #D62B2B !important;";
  style.innerHTML +=  "border-color: #AD1414 !important;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-genre[title=Tragedy], .story-tags>li a.tag-genre[data-tag=tragedy] {";
  style.innerHTML +=  "background-color: #FFB54B !important;";
  style.innerHTML +=  "border-color: #EF9A21 !important;";
  style.innerHTML += "}";
}

if (options.characterTags) {
  style.innerHTML += ".story-tags>li a.tag-character, .story-tags>li a.tag-character:hover {";
  style.innerHTML +=  "background-color: #FFFFFF !important;";
  style.innerHTML +=  "border: 1px solid #bebab5;";
  style.innerHTML +=  "border-left-color: #d6d2cb;";
  style.innerHTML +=  "border-top-color: #d6d2cb;";
  style.innerHTML +=  "display: inline-block;";
  style.innerHTML +=  "padding: 3px;";
  style.innerHTML +=  "margin: 3px;";
  style.innerHTML +=  "border-radius: 4px;";
  style.innerHTML += "}";

  style.innerHTML += ".story-tags>li a.tag-character img {";
  style.innerHTML +=  "background-color: #FFFFFF;";
  style.innerHTML +=  "border-radius: 4px;";
  style.innerHTML +=  "vertical-align: middle;";
  style.innerHTML += "}";
}

head.appendChild(style);

var prettifyTimeout = setInterval(prettify, 50);

document.onreadystatechange = function () {
  prettify();
  clearInterval(prettifyTimeout);
};

function prettify () {
  if (options.characterTags) {
    imagifyElements(getByXPath('//ul[@class="story-tags"]/li/a[@class="tag-character"]'));
    imagifyElements(getByXPath('//ul[@class="story-tags"]/li/a[@class="tag-character"]'));
  }
}

function imagifyElements (elements) {
  // naming scheme is not consistent
  var imageNames = {
    'apple-bloom' : 'apple_bloom',
    'applejack-eqg' : 'applejack-eg',
    'berry-punch' : 'berry_punch',
    'big-macintosh' : 'big_mac',
    'cake-twins' : 'cake_twins',
    'crystal-ponies' : 'crystal_ponies',
    'cutie-mark-crusaders' : 'cmc',
    'daring-do' : 'daring_do',
    'derpy-hooves' : 'derpy_hooves',
    'diamond-dogs' : 'diamond_dogs',
    'diamond-tiara' : 'diamond_tiara',
    'dinky-hooves' : 'dinky',
    'dj-p0n3' : 'dj_pon3',
    'doctor-whooves' : 'doctor_whooves',
    'flash-sentry' : 'flash_sentry',
    'fleur-de-lis' : 'fleur_de_lis',
    'flim-and-flam' : 'flimflam',
    'flitter-and-cloudchaser' : 'flitter_and_cloudchaser',
    'fluttershy-eqg' : 'fluttershy-eg',
    'granny-smith' : 'granny_smith',
    'king-sombra'        : 'king_sombra',
    'lightning-dust' : 'lightning_dust',
    'main-6' : 'main_6',
    'main-7-eqg' : 'main-7-eg',
    'mare-do-well' : 'mare_do_well',
    'mr-cake' : 'mr_cake',
    'mrs-cake' : 'mrs_cake',
    'night-light' : 'twily daddy head',
    'nightmare-moon' : 'nightmare_moon',
    'original-character' : 'oc',
    'pie-sisters' : 'pie_sisters',
    'pinkie-pie' : 'pinkie_pie',
    'pinkie-pie-eqg' : 'pinkie-pie-eg',
    'prince-blueblood' : 'prince_blueblood',
    'princess-cadance' : 'cadance',
    'princess-celestia' : 'celestia',
    'princess-luna' : 'princess_luna',
    'queen-chrysalis' : 'queen_chrysalis',
    'rainbow-dash' : 'rainbow_dash',
    'rainbow-dash-eqg' : 'rainbow-dash-eg',
    'rarity-eqg' : 'rarity-eg',
    'shadowbolts-eqg' : 'shadowbolts-eg',
    'shining-armor' : 'shining_armor',
    'silver-spoon' : 'silver_spoon',
    'spike-eqg' : 'spike-eg',
    'sunset-shimmer' : 'sunset_shimmer',
    'sweetie-belle' : 'sweetie_belle',
    'twilight-sparkle' : 'twilight_sparkle',
    'twilight-sparkle-eqg' : 'twilight-sparkle-eg',
    'twilight-velvet' : 'twily mommy head',
    'twinkleshine' : 'twinkle-shine'
  };

  if (elements.length && elements.length > 0) {
    for (var i = 0, len = elements.length; i < len; i++) {
      try {
        var character = elements[i].getAttribute('data-tag');

        character = imageNames[character] ? imageNames[character] : character;

        elements[i].innerHTML = "<img src='//static.fimfiction.net/images/characters/" + character + ".png' alt='" + element.getAttribute('title') + "'>";
      } catch (e) { }
    }
  }
  else if (elements.iterateNext) {
    try {
      for (var i = 0; i < elements.snapshotLength; i++) {
        var element = elements.snapshotItem(i),
            character = element.getAttribute('data-tag');

        character = imageNames[character] ? imageNames[character] : character;

        element.innerHTML = "<img src='//static.fimfiction.net/images/characters/" + character + ".png' alt='" + element.getAttribute('title') + "'>";
      }
    } catch (e) { }
  }
}

function getByXPath (element) {
    try {
      var elements = document.evaluate(element, document, null, 7, null);

      return elements === null ? [] : elements;
    }
    catch (e) {
      return [];
    }
}
