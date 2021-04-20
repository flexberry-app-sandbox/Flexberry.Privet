import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-privet-абв-l');
  this.route('i-i-s-privet-абв-e',
  { path: 'i-i-s-privet-абв-e/:id' });
  this.route('i-i-s-privet-абв-e.new',
  { path: 'i-i-s-privet-абв-e/new' });
});

export default Router;
