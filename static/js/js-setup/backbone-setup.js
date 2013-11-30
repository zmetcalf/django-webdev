define(['backbone'], function(Backbone) {
  var TestSetup = Backbone.Model.extend({
    defaults: {
      foo: 'bar'
    },
  });

  var ts = new TestSetup({foo: 'jar'});

  return ts.get('foo');
});
