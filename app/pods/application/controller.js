import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  isSidebarCollapsed: false,

  actions: {
    sidebarToggle() {
      this.toggleProperty('isSidebarCollapsed');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
