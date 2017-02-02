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

  _loadData(page, filters, sorts) {
    this.setProperties('params', {
      page: page,
      filters: filters,
      sorts: sorts
    });

    this.get('store').query('biscuit/tenant', {
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

    this.set('modelForm', this.get('store').createRecord('biscuit/tenant'));
  },

  _edit(model) {
    // prepare for editing the record
    this.set('isEditing', true);

    this.get('store').findRecord('biscuit/tenant', model.id).then((result) => {
      this.set('modelForm', result);
    });
  },

  initialLoad: function() {
    let translation = this.i18n;

    // Define the Crud Table Properties
    this.set('crudTable', {
      columns: [
        Ember.Object.create({
          key: 'id',
          name: translation.t('field.id.name'),
          width: '20%',
          editAble: {
            key: 'id',
            status: true,
          }
        }),
        Ember.Object.create({
          key: 'description',
          name: translation.t('field.description.name')
        }),
/*
        {
          key: 'id',
          name: translation.t('field.id.name'),
          width: '20%',
          editAble: {
            key: 'id',
            status: true,
          }
        },
        {
          key: 'description',
          name: translation.t('field.description.name')
        }
*/
      ],
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

    submit(model) {
      let translation = this.i18n;

      // save the data
      model.save().then(() => {
        this.get('notify').success(translation.t('message.success.save').string);

        // show the list
        this.set('mode', 'list');

      }).catch(() => {
        this.get('notify').error(translation.t('message.error.save').string);
      });
    }
  }
});
