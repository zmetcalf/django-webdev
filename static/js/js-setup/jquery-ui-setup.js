requirejs.config({
  paths: {
    'jquery-ui': '../lib/jquery-ui',
    'jquery': '../lib/jquery',
  },
  waitSeconds: 200
});

define(['jquery', 'jquery-ui'], function($) {
  $(function() {
    $("input[type=submit], a, button")
      .button()
      .click(function(event) {
        event.preventDefault();
      });
  });
});
