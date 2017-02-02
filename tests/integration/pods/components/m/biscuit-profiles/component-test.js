import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m/biscuit-profiles', 'Integration | Component | m/biscuit profiles', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{m/biscuit-profiles}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#m/biscuit-profiles}}
      template block text
    {{/m/biscuit-profiles}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
