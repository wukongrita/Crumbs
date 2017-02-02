import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    activation: {
      embedded: 'always'
      // serialize: 'id',
      // deserialize: 'records'
    },

    menus: {
      // embedded: 'always'
      serialize: 'id',
      deserialize: 'records'
    }
  }
});
