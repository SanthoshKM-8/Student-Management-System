import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Authentication from './authentication';

export default Authentication.extend({
  database: service(),

  model() {
    const students = this.database.get('students');
    // return this.database.students;
    return students;
  },
});
