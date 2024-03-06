import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authentication: service(),

  model() {
    return this.authentication;
  },
});
