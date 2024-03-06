import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  database: service(),

  model() {
    // const student_id = this.paramsFor('student');
    const student = this.modelFor('student');
    return student;
  },
});
