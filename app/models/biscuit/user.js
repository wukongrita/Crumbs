import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  name: validator('presence', true),
  locale: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes
  user_id: attr('string'),
  name: attr('string'),
  locale: attr('string'),

  // Associations
  activation: belongsTo('biscuit/constant'),

  menus: hasMany('biscuit/menu')
});
