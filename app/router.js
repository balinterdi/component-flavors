import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('classic');
  this.route('named-arguments');
  this.route('template-only');
  this.route('angle-bracket');
});

export default Router;
