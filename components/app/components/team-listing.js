import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['teammember'],
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  }
});
