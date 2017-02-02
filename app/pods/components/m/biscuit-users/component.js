import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: service('store'),

  notify: service('notify'),

  isEditing: false,

  pagination: {
    count: null,
    currentPage: null,
    perPage: 3
  },

  params: {
    page: null,
    filters: null,
    sorts: null
  },

  selected: {
    locale: null
  },

  _loadData(page, filters, sorts) {
    this.setProperties('params', {
      page: page,
      filters: filters,
      sorts: sorts
    });

    this.get('store').query('biscuit/user', {
      page: page,
      per_page: this.get('pagination.perPage'),
      filters: filters,
      sorts: sorts
    }).then((result) => {
      // set the items
      this.set('modelList', result);

      // set the pagination
      this.setProperties({
        pagination: {
          count: result.get('meta.pagination.total'),
          perPage: this.get('pagination.perPage'),
          currentPage: page
        }
      });
    }.bind(this));
  },

  _new() {
    // prepare for new record
    this.set('isEditing', false);

    // this.set('modelForm', this.get('store').createRecord('biscuit/user'));

    Ember.RSVP.hash({
      user: this.get('store').createRecord('biscuit/user'),
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
    }).then((result) => {
      this.set('modelForm', result);

      // this.setProperties({
      //   selected: {
      //     activation: this.get('modelForm.user.activation.id')
      //   }
      // });
    });
  },

  _edit(model) {
    // prepare for editing the record
    this.set('isEditing', true);

    Ember.RSVP.hash({
      user: this.get('store').findRecord('biscuit/user', model.id),
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
    }).then((result) => {
      this.set('modelForm', result);
    });
  },

  initialLoad: function() {
    let translation = this.i18n;

    // Define the Crud Table Properties
    this.set('crudTable', {
      columns: [
        {
          key: 'user_id',
          name: translation.t('biscuit.user.user_id.name'),
          width: '20%',
          editAble: {
            key: 'id',
            status: true,
          }
        },
        {
          key: 'name',
          name: translation.t('field.name.name')
        },
        {
          key: 'activation.name',
          name: translation.t('biscuit.detail.activation.name')
        }
      ]
    });

    switch (this.get('mode')) {
      case 'list':
        // Load the data
        this._loadData(1);
        break;

      default:
        this._new();
    }
  }.on('init'),

  actions: {
    actToolbarList() {
      this.set('mode', 'list');

      this._loadData(1);
    },

    actToolbarNew() {
      this.set('mode', 'form');

      this._new();
    },

    actRefresh(page, filters, sorts) {
      this._loadData(page, filters, sorts);
    },

    actEditSelected(model) {
      this.set('mode', 'form');

      this._edit(model);
    },

    actChooseLocales(locale) {
      this.set('modelForm.user.locale', locale);
    },

    submit(model) {
      let translation = this.i18n;
console.log(model);
      // save the data
      model.user.save().then(() => {
        this.get('notify').success(translation.t('message.success.save').string);

        // show the list
        this.set('mode', 'list');

      }).catch(() => {
        this.get('notify').error(translation.t('message.error.save').string);
      });
    }
  }
});
