import DS from 'ember-data'

export default DS.Model.extend({
  // TODO: Split up in first name and last name
  name: DS.attr('string'),
  tasks: DS.hasMany('task')
});
