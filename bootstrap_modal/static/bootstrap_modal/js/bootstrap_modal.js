requirejs.config({
  paths: {
    'jquery': '../../js/lib/jquery',
    'bootstrap': '../../js/lib/bootstrap',
  },

  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
  }
});

define(['jquery', 'bootstrap'], function($) {

});
