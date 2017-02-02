import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assets/b-sidebar-menu', 'Integration | Component | assets/b sidebar menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assets/b-sidebar-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assets/b-sidebar-menu}}
      template block text
    {{/assets/b-sidebar-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
