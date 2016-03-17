import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  github: DS.attr(),
  email: DS.attr()
});
