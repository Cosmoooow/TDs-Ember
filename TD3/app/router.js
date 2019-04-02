import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact', function() {
    this.route('add');
    this.route('modify',{path: '/modify/:contact_id'});
  });
});

export default Router;
