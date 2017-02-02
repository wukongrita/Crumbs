import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  sessionManager: service('session-manager'),

  actions: {
    submit() {
      const flashMessages = Ember.get(this, 'flashMessages');

      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password).catch((reason) => {
        flashMessages.danger(reason.errors.message);
      });
    }
  }
});
