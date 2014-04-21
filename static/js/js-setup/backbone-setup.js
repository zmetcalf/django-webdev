requirejs.config({
  paths: {
    'jquery': '../lib/jquery',
    'underscore': '../lib/underscore',
    'backbone': '../lib/backbone',
  },

  shim: {
    'backbone': {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
  },
  waitSeconds: 200
});

define(['backbone'], function(Backbone) {
  var TestSetup = Backbone.Model.extend({
    defaults: {
      foo: 'bar'
    },
  });

  var ts = new TestSetup({foo: 'jar'});

  console.log(ts.get('foo'));
});
