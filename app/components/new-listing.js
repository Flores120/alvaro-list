import Ember from 'ember';

export default Ember.Component.extend({
  listingFormShow: false,
  actions: {
    listingFormShow() {
      this.set('listingFormShow', true);
    },

    saveListing() {
      var params = {
        type: this.get('selected'),
        author: this.get('author'),
        title: this.get('title'),
        date: this.get('date'),
        location: this.get('location'),
        details: this.get('details')
      };
      this.set('listingFormShow', false);
      this.sendAction('saveListing', params);
    }
  }
});
