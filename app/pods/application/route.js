import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionManager: service('session-manager'),

  beforeModel: Ember.observer('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated') && !this.get('sessionManager.currentUser')) {
      return this._setCurrentUser();
    }
  }),

  afterModel: function() {
    if (this.get('sessionManager.currentUser')) {
      this.set('i18n.locale', this.get('sessionManager.currentUser.locale'));
    }
  },

  _setCurrentUser() {
    return this.get('sessionManager').setCurrentUser();
  }
});
