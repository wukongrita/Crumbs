import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  notify: service('notify'),

  _getMenu(routeName) {
    let menu = this.store.peekAll('biscuit/menu').findBy('uri', routeName);

    if (menu) {
      return menu;
    } else {
      this.transitionTo('m.dashboard');
    }
  }
});
