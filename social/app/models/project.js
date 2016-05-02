import Model from 'ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  current: DS.belongsTo('campaign')
})
