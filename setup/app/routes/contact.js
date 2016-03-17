import Ember from 'ember';

var teammembers = [{
  id: 1,
  name: 'Michael Andorfer',
  github: 'andorfermichael',
  email: 'mandorfer.mmtb-2014@fh-salzburg.ac.at',
  location: 'Salzburg, Austria'
}];

export default Ember.Route.extend({
  model() {
    return teammembers;
  }
});
