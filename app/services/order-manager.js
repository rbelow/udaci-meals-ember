import Ember from 'ember';

export default Ember.Service.extend({
  selectedDay: 'Monday',
  menuSelection: {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {}
  },

  setSelectedDay(day) {
    this.set('selectedDay', day);
  },
  chooseMenuOption(mealCategory, menuItemName) {
    // console.log(mealCategory);
    this.set('menuSelection.' + this.get('selectedDay') + '.' + mealCategory, menuItemName);
  },
  removeMenuOption(day, mealCategory) {
    this.set('menuSelection.' + day + '.' + mealCategory, '');
  }
});
