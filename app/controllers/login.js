import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  authentication: service(),
  router: service(),
  username: '',

  actions: {
    userLogin() {
      let username = this.username;
      this.authentication.login(username);
      let previousTransition = this.previousTransition;
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.router.transitionTo('home');
      }
    },
  },
});
