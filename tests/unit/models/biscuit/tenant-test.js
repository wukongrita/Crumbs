import { moduleForModel, test } from 'ember-qunit';

moduleForModel('biscuit/tenant', 'Unit | Model | biscuit/tenant', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
