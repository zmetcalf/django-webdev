requirejs.config({
  paths: {
    'jquery': '../lib/jquery',
  },

  waitSeconds: 200
});

define(['jquery'], function($) {
  $('.test-class').text(gettext('Text to translate'));
});
