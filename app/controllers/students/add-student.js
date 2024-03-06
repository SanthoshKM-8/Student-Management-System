import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  database: service(),
  router: service(),
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
      // const id = document.getElementById('rollno').value;
      // const firstName = document.getElementById('firstname').value;
      // const lastName = document.getElementById('lastname').value;
      // const dob = document.getElementById('dob').value;
      // let gender;
      // console.log(this.selectedValue);
      // document.getElementsByName('gender').forEach(function (element) {
      //   if (element.checked) {
      //     gender = element.value;
      //   }
      // });
      // const address = document.getElementById('address').value;
      // const phoneNo = document.getElementById('phoneno').value;
      // const email = document.getElementById('email').value;
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
      this.database.students.pushObject(student);
      alert(`Student ${this.firstName} ${this.lastName} added successfully.`);
      this.router.transitionTo('students');
    },
  },
});
