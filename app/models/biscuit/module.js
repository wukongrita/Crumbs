import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  id: validator('presence', true),
  name: validator('presence', true),
  title: validator('presence', true),
  aliasUse: validator('presence', true),
  sequence: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes
  name: attr('string'),
  title: attr('string'),
  alias_use: attr('boolean'),
  sequence: attr('number'),

  // Associations
  activation: belongsTo('biscuit/detail'),
  menus: hasMany('biscuit/menu')
});
