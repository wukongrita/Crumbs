import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: service('store'),

  notify: service('notify'),

  sessionManager: service('session-manager'),

  // selected: {
  //   activation: null
  // },

  _edit() {
    let userID = this.get('sessionManager.currentUser.id');

    Ember.RSVP.hash({
      user: this.get('store').findRecord('biscuit/user', userID),
      locales: [
        {
          id: 'en',
          name: 'English'
        },
        {
          id: 'id',
          name: 'Indonesia'
        },
      ],

      // activations: this.get('store').findRecord('biscuit/master', '80457927-3274-49f7-96e5-1a229cdcbbb1', {
      //   include: 'details'
      // }),

    }).then((result) => {
      this.set('modelForm', result);

      // this.setProperties({
      //   selected: {
      //     activation: this.get('modelForm.user.activation.id')
      //   }
      // });
    });
  },

  initialLoad: function() {
    this._edit();
  }.on('init'),

  actions: {
    actChooseLocales(locale) {
      this.set('modelForm.user.locale', locale);
    },

    // actChooseActivations(activation) {
    //   console.log(activation);
    //   this.set('selected.activation', activation);
    //   this.set('modelForm.user.activation.id', activation);
    // },

    submit(model) {
      let translation = this.i18n;

      // save the data
      model.user.save().then(() => {
        this.get('notify').success(translation.t('message.success.save').string);

      }).catch(() => {
        this.get('notify').error(translation.t('message.error.save').string);
      });
    }
  }
});
