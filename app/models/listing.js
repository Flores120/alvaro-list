import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  title: DS.attr(),
  details: DS.attr()
});
