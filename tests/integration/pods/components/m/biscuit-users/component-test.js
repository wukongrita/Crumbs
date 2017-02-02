import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m/biscuit-users', 'Integration | Component | m/biscuit users', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{m/biscuit-users}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#m/biscuit-users}}
      template block text
    {{/m/biscuit-users}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
