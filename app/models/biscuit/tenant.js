import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  id: validator('presence', true),
  description: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes
  description: attr('string'),

  // Associations
  users: hasMany('biscuit/user')
});
