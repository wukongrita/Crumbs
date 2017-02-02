import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  classNames: ['nav'],

  classNameBindings: ['gLevel'],

  gLevel: Ember.computed('level', function() {
    let level;

    level = this.get('level');
    level++;
    this.set('level', level);

    switch (level) {
      case 2:
        return 'nav-second-level';

      case 3:
        return 'nav-third-level';

      case 4:
        return 'nav-fourth-level';

      case 5:
        return 'nav-fifth-level';
    }
  })
});
