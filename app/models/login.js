import Model from 'ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  // Validator
  username: validator('presence', true),
  password: validator('presence', true)
});

export default Model.extend(Validations, {
});
