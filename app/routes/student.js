import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Authentication from './authentication';

export default Authentication.extend({
  database: service(),

  model({ student_id }) {
    let currentStudent;
    this.database.students.forEach((student) => {
      if (student_id === student.id) {
        currentStudent = student;
      }
    });
    return currentStudent;
  },
});
