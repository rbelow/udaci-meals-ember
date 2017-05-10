import Ember from 'ember';

export default Ember.Component.extend({
  orderManager: Ember.inject.service('order-manager'),
  classNames: ['menu-item'],
  tagName: 'li',
  mealCategory: 'breakfast',
  actions: {
    chooseItem(menuItemName) {
      // console.log(menuItemName + ' ' + this.get('mealCategory'));
      this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
    },
    changeCategory(category) {
      // console.log(this.get('mealCategory'));
      this.set('mealCategory', category);
    }
  }
});
