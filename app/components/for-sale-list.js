import Ember from 'ember';

export default Ember.Component.extend({
  showListings: false,
  actions: {
    showListings(){
      this.toggleProperty('showListings');
    }
  }
});
