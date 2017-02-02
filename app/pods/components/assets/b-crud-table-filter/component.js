import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['li'],

  classNames: ['search-item'],

  operators: [
    {
      key: '=',
      name: 'Equal'
    },
    {
      key: '%',
      name: 'Like'
    },
    {
      key: '!=',
      name: 'Not Equal'
    },
    {
      key: '<',
      name: 'Lower'
    },
    {
      key: '<=',
      name: 'Lower/Equal'
    },
    {
      key: '>',
      name: 'Grather'
    },
    {
      key: '>=',
      name: 'Grather/Equal'
    }
  ],

  actions: {
    actFieldChange(item) {
      let value = this.get('key');

      this.sendAction('actSearchChange', 'filter', item, 'key', value.key);
    },

    actOperatorChange(item) {
      let value = this.get('operator');

      this.sendAction('actSearchChange', 'filter', item, 'operator', value.key);
    },

    actKeywordChange(item) {
      let value = this.get('keyword');

      this.sendAction('actSearchChange', 'filter', item, 'keyword', value);
    }
  }
});
