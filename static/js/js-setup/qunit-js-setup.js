define(['qunit'], function(QUnit) {
  QUnit.load();
  QUnit.start();

  test("hello test", function() {
    ok(1 == "1", "Passed!");
  });
});
