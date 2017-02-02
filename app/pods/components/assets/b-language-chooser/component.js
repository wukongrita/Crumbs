import Ember from 'ember';

export default Ember.Component.extend({
  languages: [
    {
      key: 'en',
      name: 'English'
    },
    {
      key: 'id',
      name: 'Bahasa'
    },
  ],

  actions: {
    actChange() {
      let selectedLanguage = this.get('language');

      this.sendAction('actLanguageChange', selectedLanguage);
    }
  }
});
