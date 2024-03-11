import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  database: service(),
  router: service(),
  store: service(),
  id: '',
  firstName: '',
  lastName: '',
  dob: '',
  address: '',
  phoneNo: '',
  email: '',
  selectedGender: '',

  actions: {
    addStudent() {
      const student = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        dob: this.dob,
        gender: this.selectedGender,
        address: this.address,
        phoneNo: this.phoneNo,
        email: this.email,
      };
      console.log(student);
      this.store.createRecord('student', student).save();
      // this.database.students.pushObject(student);
      alert(`Student ${this.firstName} ${this.lastName} added successfully.`);
      this.router.transitionTo('students');
    },
  },
});
