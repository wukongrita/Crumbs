import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {
    path: '/'
  });

  this.route('m', function() {
    this.route('dashboard');

    this.route('biscuit', function() {
      this.route('tenants');
      this.route('profiles');
      this.route('users');
    });
  });
});

export default Router;
