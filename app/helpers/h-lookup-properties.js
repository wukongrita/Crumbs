import Ember from 'ember';

export function hLookupProperties(params/*, hash*/) {
  return Ember.get(params[0], params[1]);
}

export default Ember.Helper.helper(hLookupProperties);
