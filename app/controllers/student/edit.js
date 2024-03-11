import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  store: service(),

  actions: {
    async editStudent() {
      const s = this.model;
      alert(`Student with rollNo ${s.id} updated successfully.`);
      await this.store.findRecord('student', s.id).then((student) => {
        student.set("firstName", s.firstName);
        student.save();
      });
      this.router.transitionTo('student');
    },
  },
});
