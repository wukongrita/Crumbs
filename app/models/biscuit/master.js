import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  id: validator('presence', true),
  name: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes
  name: attr('string'),
  description: attr('string'),

  // Associations
  // constants: hasMany('biscuit/constant'),
  // dynamics: hasMany('biscuit/dynamic'),
  details: hasMany('biscuit/detail')
});
