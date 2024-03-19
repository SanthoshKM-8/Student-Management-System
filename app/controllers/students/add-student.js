import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {keyResponder, onKey} from 'ember-keyboard';
import { tracked, cached } from '@glimmer/tracking';
import EmberObject, { computed, get, set } from "@ember/object";
import { A } from "@ember/array";

// @keyResponder
// export default class AddStudentController extends Controller {
//   @tracked 
//   isGood = false;
  // @tracked
  // ob = {
  //   name: 'Santhosh'
  // };
  // @tracked
  // arr = [{name: "Santhosh"}];
  // @cached
  // set iAmGood(value) {
  //   console.log("set");
  //   this.isGood = value;
  // } 
  
  // get iAmGood() {
  //   if(this.isGood) {
  //     console.log("Good");
  //   } else {
  //     console.log("Bad");
  //   }
    // return get(this,"isGood");
    // return this.ob;
  //   return this.isGood;
  // }

  

  // @onKey('Enter')
  // msg() {
    // this.ob.name = 'Sabarish';
    // set(this.ob,"name","priya");
    // this.ob = this.ob;
    // set(this.arr[0],"name","priya");
    // this.arr[0].name = "priya";
    // this.arr = this.arr;
    // console.log(this.ob);
    // set(this, "isGood", true);
    // this.iAmGood;
    // this.iAmGood;
    // console.log("Hello");
//   }
// }

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
