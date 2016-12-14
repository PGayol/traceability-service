import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', {}, function() {
    this.route('event', { path: '/:event_id', resetNamespace: true });
  });
  this.route('scientists');
});

export default Router;
