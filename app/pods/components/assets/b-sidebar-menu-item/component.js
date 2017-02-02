import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  sessionManager: service('session-manager'),

  tagName: 'li',

  actions: {
    actSelectedMenu(id) {
      this.set('sessionManager.currentUser.selectedMenuId', id);
    }
  }
});
