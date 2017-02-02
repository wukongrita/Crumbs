export function initialize(application) {
  const types = ['model', 'controller', 'route', 'component', 'view'];

  types.forEach((type) => {
    application.inject(type, 'i18n', 'service:i18n');
  });
}

export default {
  name: 'i18n',
  // after: 'ember-i18n',
  initialize
};
