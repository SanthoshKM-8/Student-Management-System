import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    editStudent() {
      alert(`Student with rollNo ${this.model.id} updated successfully.`);
      this.router.transitionTo('student');
    },
  },
});
