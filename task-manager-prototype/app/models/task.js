import DS from 'ember-data'

export default DS.Model.extend({
  internalNumber: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string', {
    defaultValue() { return "open" }
  }),
  priority: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  modifiedAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  // TODO: Replace with real creator when login handling is implemented
  creator : DS.attr('string', {
    defaultValue() { return "John Doe"; }
  }),
  // TODO: Replace with real editor/relationship when editor selection is implemented
  editor : DS.attr('string', {
    defaultValue() { return "Michael Andorfer"; }
  }),
  user: DS.belongsTo('user')
});
