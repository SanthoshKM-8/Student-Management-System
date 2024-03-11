import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Authentication from './authentication';

export default Authentication.extend({
  database: service(),
  store: service(),

  async model() {
    // const response = await fetch('api/students.json');
    // const { data } = await response.json();
    // const students = await this.store.findAll('student');
    // console.log(students);

    // MockApi
    // const response = await fetch('https://65eeabc108706c584d9be613.mockapi.io/students');
    // const students = await response.json();
    // console.log(response.json());
    const students = await this.store.findAll('student');
    // console.log(students);

    // const students = this.database.get('students');
    // return this.database.students;
    return students;
  },
});
