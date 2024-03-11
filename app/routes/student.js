import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Authentication from './authentication';

export default Authentication.extend({
  database: service(),
  store: service(),

  async model({ student_id }) {
    // let currentStudent;
    // this.database.students.forEach((student) => {
    //   if (student_id === student.id) {
    //     currentStudent = student;
    //   }
    // });
    // return currentStudent;
    const student = await this.store.findRecord('student', student_id);
    // console.log(student.id);
    return student;
  },
});
