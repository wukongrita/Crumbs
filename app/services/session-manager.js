import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),

  store: service(),

  setCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const accessToken = this.get('session.data.authenticated.access_token');

      if (!Ember.isEmpty(accessToken)) {
        return this.get('store').findRecord('biscuit/user', '0', {
          include: 'menus'
        }).then((user) => {
          this.set('currentUser', user);
/*
          let menus = this.setCurrentMenu(this.get('currentUser.menus'));
          this.set('currentUser.menus', menus);
*/
          resolve();
        }, reject);
      }

      resolve();
    });
  },
/*
  setCurrentMenu(menus) {
    // convert to hierarchical menu structure
    let roots = [];

    if (menus) {
      let all = {},
          moduleTitle = '';

      menus.forEach(function(item) {
        all[item.id] = item;
      });

      Object.keys(all).forEach(function(id) {
        let item = all[id];
        if (item.parent_id === null) {
          if (moduleTitle !== item.module.title) {
            moduleTitle = item.module.title;

            roots.push(item.module);
          }

          roots.push(item);
        } else if (item.parent_id in all) {
          let p = all[item.parent_id];
          if (!('children' in p)) {
            p.children = [];
          }
          p.children.push(item);
        }
      });
    }

    return roots;
  }
*/
});
