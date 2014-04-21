requirejs.config({
  paths: {
    'jquery': '../../js/lib/jquery',
    'underscore': '../../js/lib/underscore',
    'backbone': '../../js/lib/backbone',
  },

  shim: {
    'backbone': {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
  }
});

define(['backbone'], function(Backbone) {

});
