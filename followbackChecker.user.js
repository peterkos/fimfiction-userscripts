// ==UserScript==
// @name         FollowBack Checker
// @namespace    fimfiction-followback
// @version      1.0
// @description  Check to see if who you're following follows you back.
// @author       Kristen "Crystal" Trzonkowski
// @match        http://www.fimfiction.net/user/*/following*
// @match        https://www.fimfiction.net/user/*/following*
// @grant        none
// ==/UserScript==

(function () {
  // only run if this is YOUR following list
  // need to find a more elegant way to do this.
  if ($('h1 > a').text() == $('.user_toolbar > ul > li > a.button > span').last().text().slice(0, -2)) {
    checkUsers();
  }
})();

function checkUsers () {
  var followers = $('.button_user_block'),
      userId = $('a', '.tab-stories').attr('href').split('=').pop();

  for (var i = 0, len = followers.length; i < len; i++) {
    // delay to avoid miniature spam attacks
    setTimeout(function (follower) {
      $.ajax({
        url: '//www.fimfiction.net/ajax/users/' + follower.getAttribute('data-user') + '/following',
        dataType: 'json',
        success: function (response) {
          if (response.content.includes("-" + userId + "-32'")) {
            $(follower).closest('.user-card').css('boxShadow', '0 0 10px 5px #669900');
          }
          else {
            $(follower).closest('.user-card').css('boxShadow', '0 0 10px 5px #DD4A68');
          }
        }
      });
    }, 1500 * i, followers[i]);
  }
}
