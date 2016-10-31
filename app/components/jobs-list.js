import Ember from 'ember';

export default Ember.Component.extend({
  showListings: false,

  sortBy: ['author:desc'],
  sortedListings: Ember.computed.sort('listing.author', 'sortBy'),

  actions: {
    showListings() {
      this.toggleProperty('showListings');
    }
  }
});
