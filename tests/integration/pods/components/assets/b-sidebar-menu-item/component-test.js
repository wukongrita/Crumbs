import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assets/b-sidebar-menu-item', 'Integration | Component | assets/b sidebar menu item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assets/b-sidebar-menu-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assets/b-sidebar-menu-item}}
      template block text
    {{/assets/b-sidebar-menu-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
