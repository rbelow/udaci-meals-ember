import Ember from 'ember';

export default Ember.Component.extend({
  orderManager: Ember.inject.service('order-manager'),

  actions: {
    remove(day, menuCategory) {
      this.get('orderManager').removeMenuOption(day, menuCategory);
    },
    setDayTo(day) {
      this.get('orderManager').setSelectedDay(day);
    }
  }
});
