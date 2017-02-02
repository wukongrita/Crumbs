import Ember from 'ember';

export default Ember.Component.extend({
  buttonOffset: 'col-md-4',

  actions: {
    submit(model) {
      this.sendAction('submit', model);
    }
  }
});
