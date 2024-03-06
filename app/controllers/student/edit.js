import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    editStudent() {
      // let gender;
      // document.getElementsByName('gender').forEach(function (element) {
      //   if (element.checked) {
      //     gender = element.value;
      //   }
      // });
      // this.model.gender = gender;
      alert(`Student with rollNo ${this.model.id} updated successfully.`);
      this.router.transitionTo('student');
    },
  },
});
