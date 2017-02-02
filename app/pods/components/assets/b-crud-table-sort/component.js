import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['li'],

  classNames: ['search-item'],

  types: [
    Ember.Object.create({
      key: 'asc',
      name: 'Ascending'
    }),
    Ember.Object.create({
      key: 'desc',
      name: 'Descending'
    }),
  ],


  actions: {
    actFieldChange(item) {
      let value = this.get('key');

      this.sendAction('actSearchChange', 'sort', item, 'key', value.key);
    },

    actTypeChange(item) {
      let value = this.get('type');

      this.sendAction('actSearchChange', 'sort', item, 'type', value.key);
    }
  }
});
