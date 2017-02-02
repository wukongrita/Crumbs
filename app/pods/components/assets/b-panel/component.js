import Ember from 'ember';
import TypeClass from 'ember-bootstrap/mixins/type-class';

export default Ember.Component.extend(TypeClass, {
  tagName: 'section',

  classNames: [ 'panel' ],

  classTypePrefix: 'panel',

  icon: '',

  collapsible: true,

  collapsed: false,

  actions: {
    panelToggle() {
      this.toggleProperty('collapsed');
    }
  }
});
