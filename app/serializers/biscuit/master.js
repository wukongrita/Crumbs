import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    // constants: {
    //   embedded: 'always'
    // },
    // dynamics: {
    //   embedded: 'always'
    // }
    details: {
      embedded: 'always'
    }
  }
});
