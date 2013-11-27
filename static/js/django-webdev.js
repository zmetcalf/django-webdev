requirejs.config({
  baseURL: 'js',

  paths: {
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
  },

  shim: {
    'backbone': {
      deps: ['jquery', 'underscore'],
    }
  }
});


