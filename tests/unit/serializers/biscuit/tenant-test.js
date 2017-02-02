import { moduleForModel, test } from 'ember-qunit';

moduleForModel('biscuit/tenant', 'Unit | Serializer | biscuit/tenant', {
  // Specify the other units that are required for this test.
  needs: ['serializer:biscuit/tenant']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
