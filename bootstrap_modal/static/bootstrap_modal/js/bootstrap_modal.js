requirejs.config({
  paths: {
    'bootstrap': '../../js/lib/bootstrap',
  },

  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
  }
});

define(['jquery', 'bootstrap'], function($) {
  $('#myModal').modal('show');
});
