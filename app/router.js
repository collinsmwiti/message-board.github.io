import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

//For nested route
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('message', {
    path: '/message/:message_id'
  });
});

export default Router;
