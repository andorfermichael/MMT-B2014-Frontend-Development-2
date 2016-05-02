import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.clustar.net',
  namespace: 'v2'
})
