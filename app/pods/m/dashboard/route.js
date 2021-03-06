import BaseRoute from '../route';

export default BaseRoute.extend({
  model() {
    return {
      title: 'Dashboard'
    };
  },

  setupController(controller, model) {
    this._super(controller, model);

    this.controllerFor('m').set('model', model);
  }
});
