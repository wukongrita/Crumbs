import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    activation: {
      embedded: 'always'
    },

    menus: {
      embedded: 'always'
    }
  }
});
