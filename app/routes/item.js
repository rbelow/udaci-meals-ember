import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.get('/menu/' + params.item_name + '.json')
  }
});
