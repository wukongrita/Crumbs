import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  id: validator('presence', true),
  name: validator('presence', true)
  // description: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes
  name: attr('string'),
  description: attr('string'),
  parent_id: attr('string'),
  reference_id: attr('string'),

  // Associations
  parent: belongsTo('biscuit/dynamic'),

  children: hasMany('biscuit/dynamic', {
    inverse: 'parent'
  })
});
