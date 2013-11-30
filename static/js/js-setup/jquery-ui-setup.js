define(['jquery', 'jquery-ui'], function($) {
  $(function() {
    $("input[type=submit], a, button")
      .button()
      .click(function(event) {
        event.preventDefault();
      });
  });
});
