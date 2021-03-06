import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('presentation', function() {
    this.route('confusion');
    this.route('clarity');
  });
  this.route('quiz', function() {});
  this.route('classic');
  this.route('named-arguments');
  this.route('template-only');
  this.route('angle-bracket');
  this.route('sparkles');
  this.route('resources');
});

export default Router;
