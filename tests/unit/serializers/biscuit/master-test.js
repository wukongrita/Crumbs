import { moduleForModel, test } from 'ember-qunit';

moduleForModel('biscuit/master', 'Unit | Serializer | biscuit/master', {
  // Specify the other units that are required for this test.
  needs: ['serializer:biscuit/master']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
