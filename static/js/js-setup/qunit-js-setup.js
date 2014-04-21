requirejs.config({
  paths: {
    'qunit': '../lib/qunit',
  },

  shim: {
    'qunit': {
      exports: 'QUnit',
      init: function() {
        QUnit.config.autoload = false;
        QUnit.config.autostart = false;
      }
    }
  }
});

define(['qunit'], function(QUnit) {
  QUnit.load();
  QUnit.start();

  test("hello test", function() {
    ok(1 == "1", "Passed!");
  });
});
