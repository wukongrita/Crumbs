export function initialize(appInstance) {
  const applicationRoute = appInstance.lookup('route:application');
  const session = appInstance.lookup('service:session');

  session.on('authenticationSucceeded', function () {
    applicationRoute.refresh();
  });
}

export default {
  name: 'session-events',
  after: 'ember-simple-auth',
  initialize
};
