requirejs.config({
  paths: {
    'jquery': 'lib/jquery',
    'jquery-ui': 'lib/jquery-ui',
    'qunit': 'lib/qunit',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
  },

  shim: {
    'backbone': {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'qunit': {
      exports: 'QUnit',
      init: function() {
        QUnit.config.autoload = false;
        QUnit.config.autostart = false;
      }
    }
  }
});
