import Model, { attr } from '@ember-data/model';

// export default Model.extend({
// id: DS.attr('number'),
// firstName: attr('string'),
// lastName: attr("string"),
// dob: attr('date'),
// gender: attr('string'),
// address: attr('string'),
// phoneNo: attr('string'),
// email: attr('string'),
// });

export default class StudentModel extends Model {
  // @attr() id;
  @attr() firstName;
  @attr() lastName;
  @attr() dob;
  @attr() gender;
  @attr() address;
  @attr() phoneNo;
  @attr() email;
}
