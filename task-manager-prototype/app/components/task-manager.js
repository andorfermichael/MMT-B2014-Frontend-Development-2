import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // Send sortBy to controller
    sortBy: function(property){
      this.sendAction("sortBy", property);
    }
  }
});
