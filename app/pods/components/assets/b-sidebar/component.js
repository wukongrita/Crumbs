import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  sessionManager: service('session-manager'),

  tagName: 'section',

  classNames: ['sidebar'],

  didInsertElement() {
    this.$().metisMenu();
  }
});
