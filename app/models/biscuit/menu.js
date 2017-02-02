import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  id: validator('presence', true),
  name: validator('presence', true),
  title: validator('presence', true),
  description: validator('presence', true),
  sequence: validator('presence', true),
  uri: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes
  parent_id: attr('string'),
  name: attr('string'),
  title: attr('string'),
  description: attr('string'),
  sequence: attr('number'),
  uri: attr('string'),

  // Associations
  module: belongsTo('biscuit/module'),
  parent: belongsTo('biscuit/menu'),
  visibility: belongsTo('biscuit/constant'),

  children: hasMany('biscuit/menu', {
    inverse: 'parent'
  }),
  users: hasMany('biscuit/user')
});
