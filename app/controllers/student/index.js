import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  database: service(),

  actions: {
    editStudent(student_id) {
      this.router.transitionTo('student.edit');
    },

    deleteStudent(student) {
      if (
        confirm(`Do you want to delete ${student.firstName} student record?`)
      ) {
        this.database.students.removeObject(student);
        this.router.transitionTo('students');
      }
    },
  },
});
