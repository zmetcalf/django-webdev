requirejs.config({
  paths: {
    'jquery': '../lib/jquery',
    'underscore': '../lib/underscore',
  },

  shim: {
    'underscore': {
      exports: '_'
    },
  },

  waitSeconds: 200
});

define(['underscore'], function(_) {
  console.log(_.random(1, 10));
});
