import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: service('store'),

  notify: service('notify'),

  isSelectAll: false,

  isDelete: false,

  open: false,

  filter: null,
  filterParams: null,

  sort: null,
  sortParams: null,

  init() {
    this._super(...arguments);

    this.filter = {
      id: 0,
      items: [
        Ember.Object.create({
          id: 0,
          key: 'id',
          operator: '=',
          keyword: ''
        })
      ]
    };
    this.filterParams = [];

    this.sort = {
      id: 0,
      items: [
        Ember.Object.create({
          id: 0,
          key: 'id',
          type: 'asc'
        })
      ]
    };
    this.sortParams = [];
  },

  actions: {
    actRefresh() {
      this.sendAction('actRefresh', 1, this.filterParams, this.sortParams);
    },

    actSearchAdd(type, item) {
      let items = this.get(type + '.items'),
          position = items.indexOf(item) + 1,
          id = this.get(type + '.id'),
          data = {};

      id++;
      this.set(type + '.id', id);

      switch(type) {
        case 'filter':
          data = {
            id: id,
            key: 'id',
            operator: '=',
            keyword: ''
          };
          break;

        case 'sort':
          data = {
            id: id,
            key: 'id',
            type: 'asc'
          };
          break;
      }

      items.insertAt(position, Ember.Object.create(data));
    },

    actSearchRemove(type, item) {
      this.get(type + '.items').removeObject(item);
    },

    actSearchChange(type, item, attr, value) {
      let items = this.get(type + '.items'),
          target = items.findBy('id', item.id);

      target.set(attr, value);
    },

    actSearchGo() {
      let filters = this.get('filter.items'),
          sorts = this.get('sort.items'),
          i = 0;

      this.filterParams = [];
      this.sortParams = [];

      // setup for sort parameters
      i = 0;
      filters.forEach((filter) => {
        if (filter.keyword !== '') {
          this.filterParams.pushObject({
            field: filter.key,
            operator: filter.operator,
            keyword: filter.keyword
          });
        }

        i++;
      });

      // setup for sort parameters
      i = 0;
      sorts.forEach((sort) => {
        this.sortParams.pushObject({
          field: sort.key,
          type: sort.type
        });

        i++;
      });

      this.sendAction('actRefresh', 1, this.filterParams, this.sortParams);
    },

    actSearchReset() {
      this.set('filter.items', [
        Ember.Object.create({
          id: 0,
          key: 'id',
          operator: '=',
          keyword: ''
        })
      ]);

      this.set('sort.items', [
        Ember.Object.create({
          id: 0,
          key: 'id',
          type: 'asc'
        })
      ]);
    },

    actEditSelected(model) {
      this.sendAction('actEditSelected', model);
    },

    deleteSelected() {
      let selectedModels = this.get('selectedModels'),
          translation = this.i18n,
          promisesArray = [];

      if (selectedModels && selectedModels.length) {
        if (confirm(translation.t('confirm.delete'))) {

          // TODO: SHOULD CHANGE THIS WITH BULK DELETE
          selectedModels.forEach((item) => {
            promisesArray.push(item.destroyRecord());
          });

          Ember.RSVP.all(promisesArray).then(() => {
            this.set('isSelectAll', false);
            this.set('selectedModels', []);
            this.get('notify').error(translation.t('message.success.delete').string);

            this.sendAction('actRefresh');
          });
        }
      }
    },

    toggleChecked(newSelection, value, operation) {
      this.set('selectedModels', newSelection);

      if (operation === 'removed' && this.get('selectedModels').length < 1) {
        this.set('isDelete', false);
      } else {
        this.set('isDelete', true);
      }

      let isSelectAll = this.get('isSelectAll');

      if (isSelectAll) {
        this.set('isSelectAll', false);
      }
    },

    toggleCheckedAll() {
      let isSelectAll = this.get('isSelectAll'),
          selectedModels = this.get('model').slice();

      if (isSelectAll) {
        this.set('isSelectAll', false);
        this.set('selectedModels', []);
        this.set('isDelete', false);

      } else {
        this.set('isSelectAll', true);
        this.set('selectedModels', selectedModels);
        this.set('isDelete', true);
      }
    },

    actPaginationClicked(page) {
      this.set('isSelectAll', false);
      this.set('selectedModels', []);
      this.sendAction('actRefresh', page, this.filterParams, this.sortParams);
    }
  }
});
