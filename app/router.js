import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('item', {path: 'item/:item_name'}, function() {
    this.route('nutrition');
  });
});

export default Router;
