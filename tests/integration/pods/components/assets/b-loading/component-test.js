import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assets/b-loading', 'Integration | Component | assets/b loading', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assets/b-loading}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assets/b-loading}}
      template block text
    {{/assets/b-loading}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
