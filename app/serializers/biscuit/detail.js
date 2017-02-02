import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    parent: {
      embedded: 'always'
    },

    children: {
      embedded: 'always'
    }
  }
});
