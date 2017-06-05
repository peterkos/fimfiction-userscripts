// ==UserScript==
// @name        Positivize FiMfiction
// @namespace   fimfiction-positivize
// @version     1.1
// @description Hides dislikes and downvotes for the psychological effect of a more positive experience on FiMFiction.
// @author      Kristen "Crystal" Trzonkowski
// @include     http://www.fimfiction.net/*
// @include     https://www.fimfiction.net/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

var hideTimeout = setInterval(hideNegativity, 50);

document.onreadystatechange = function () {
  hideNegativity();
  clearInterval(hideTimeout);
};

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

/** Insert CSS to avoid FOUC **/
/* Hide the downvotes from a story's rating bar */
addGlobalStyle('.rating_container .bars_container, .rating_container .dislike_button { display: none !important; }');
/* Hide dislikes on comments */
addGlobalStyle('.comment_dislike_text, .comment_like .fa-thumbs-down { display: none !important; }');

function hideNegativity() {
  /* Hide all thumbs down icons */
    hideElements(document.getElementsByClassName("fa fa-thumbs-down"));
    hideElements(document.getElementsByClassName("dislike fa fa-thumbs-down"));
    hideElements(document.getElementsByClassName("fa fa-thumbs-o-down"));

  /* Hide story rating bars */
    hideElements(document.getElementsByClassName("bars_container"));

  /* Hide dislikes text -- here things get tricky because they're not all wrapped in elements! */
    hideElements(document.getElementsByClassName("dislikes"));
    hideElements(document.getElementsByClassName("comment_dislike_text"));

  /* Hide the number of dislikes on [User] -> Stories page */
    hideElements(getByXPath('//table[@class="post_table"]/tbody/tr/td[1]/span/i[@class="fa fa-thumbs-down"]/following-sibling::text()[1]'));

  /* Clean up the [User] -> Stories page */
    hideElements(getByXPath('//table[@class="post_table"]/tbody/tr/td[1]/span/i[@class="fa fa-thumbs-down"]/preceding-sibling::text()[1]'));
    hideElements(getByXPath('//table[@class="post_table"]/tbody/tr/td[1]/span/i[@class="fa fa-thumbs-down"]/preceding-sibling::b[1]'));

  /* Hide the number of dislikes on Featured Stories box */
    hideElements(getByXPath('//div[@class="featured_story"]/div[@class="info"]/i[@class="fa fa-thumbs-down"]'));
    hideElements(getByXPath('//div[@class="featured_story"]/div[@class="info"]/i[@class="fa fa-thumbs-down"]/following-sibling::text()[1]'));

  /* Clean up the Featured Story box */
    hideElements(getByXPath('//div[@class="featured_story"]/div[@class="info"]/i[@class="fa fa-thumbs-down"]/preceding-sibling::b[1]'));

  /* Hide the number of dislikes on Story Cards */
    hideElements(getByXPath('//div[@class="story-card"]/span[@class="story-card__info"]/i[@class="fa fa-thumbs-down"]/following-sibling::text()[1]'));

  /* Clean up the Story Cards */
    hideElements(getByXPath('//div[@class="story-card"]/span[@class="story-card__info"]/i[@class="fa fa-thumbs-down"]/preceding-sibling::b[1]'));

  /* Hide the number of dislikes on Favorite galleries */
    hideElements(getByXPath('//ul[@class="list story_list story_gallery"]/li/span[@class="info"]/text()[contains(., "dislike")]'));

  /* Clean up the Favorite galleries */
    hideElements(getByXPath('//ul[@class="list story_list story_gallery"]/li/span[@class="info"]/b[last()]'));

  /* Clean up Comments */
    hideElements(getByXPath('//div[@class="comment"]/div/div/div[@class="comment_information"]/div/b[last()]'));

  /* TEMPORARY FIX for site update 4.0 */
    hideElements(getByXPath('//div[@class="featured_story"]/div[@class="info"]/i[@class="fa fa-thumbs-up"][last()]'));
    hideElements(getByXPath('//div[@class="featured_story"]/div[@class="info"]/i[@class="fa fa-thumbs-up"][last()]/following-sibling::text()[1]'));
    hideElements(getByXPath('//div[@class="featured_story"]/div[@class="info"]/i[@class="fa fa-thumbs-up"][last()]/preceding-sibling::b[1]'));
}

function hideElements (elements) {
  if (elements.length && elements.length > 0) {
    for (var i = 0, len = elements.length; i < len; i++) {
      try {
        elements[i].style.display = "none";
      } catch (e) { }
    }
  }
  else if (elements.iterateNext) {
    try {
      for (var i = 0; i < elements.snapshotLength; i++) {
        var element = elements.snapshotItem(i);

        if (element.style) {
          element.style.display = "none";
        }
        else {
          element.nodeValue = "";
        }
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
