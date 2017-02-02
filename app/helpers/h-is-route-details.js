import Ember from 'ember';

export function hIsRouteDetails(params/*, hash*/) {
  if (Ember.typeOf(params[0]) === 'string') {
    let detailRoute = params[0].split('?');

    if (detailRoute[0].slice(-8) === '.details') {
      if (params[1] === 'id') {
        return detailRoute[1];
      } else {
        return detailRoute[0];
      }
    }
  }

  return false;
}

export default Ember.Helper.helper(hIsRouteDetails);
