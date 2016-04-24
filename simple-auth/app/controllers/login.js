import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      this.getProperties('identification', 'password');

      this.get('session').authenticate('autenticator:oauth2', 
      	identification, password).catch((reason) => {
      		this.set('errorMessage', reason.error);
      	}
      )
    }
  }
});