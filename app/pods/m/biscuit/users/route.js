import BaseRoute from '../../route';

export default BaseRoute.extend({
  model() {
    return this._getMenu(this.get('routeName'));
  },

  setupController(controller, model) {
    this._super(controller, model);

    this.controllerFor('m').set('model', model);
  }
});
