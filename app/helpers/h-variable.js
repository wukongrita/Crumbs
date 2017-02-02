import Ember from 'ember';

export function hVariable(params/*, hash*/) {
  if (params[2]) {
    // set the variable
    this[params[0]] = params[1];
  } else {
    // return the variable value
    return this[params[0]];
  }
}

export default Ember.Helper.helper(hVariable);
