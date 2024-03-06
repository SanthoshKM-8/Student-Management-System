import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    addStudent() {
      this.router.transitionTo('students.addStudent');
    },
  },
});
