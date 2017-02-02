import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    module: {
      embedded: 'always'
    },
    parent: {
      embedded: 'always'
    },
    visibility: {
      embedded: 'always'
    },

    children: {
      embedded: 'always'
    },
    users: {
      embedded: 'always'
    }
  }
});
