import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assets/b-crud-table-sort', 'Integration | Component | assets/b crud table sort', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assets/b-crud-table-sort}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assets/b-crud-table-sort}}
      template block text
    {{/assets/b-crud-table-sort}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
