import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
  students: A([
    {
      id: '101',
      firstName: 'Harini',
      lastName: 'K K',
      dob: '2002-01-22',
      gender: 'Female',
      address: 'East Street, Madurai',
      phoneNo: '0987654321',
      email: 'kkharini@gmail.com',
    },
    {
      id: '102',
      firstName: 'Sabarish',
      lastName: 'K M',
      dob: '2002-10-03',
      gender: 'Male',
      address: 'North Street, Madurai',
      phoneNo: '1234567890',
      email: 'kmsabarish2000@gmail.com',
    },
    {
      id: '103',
      firstName: 'Santhosh',
      lastName: 'K M',
      dob: '2002-08-29',
      gender: 'Male',
      address: 'South Krishnan Kovil Street',
      phoneNo: '9688863161',
      email: 'kmsanthosh2002@gmail.com',
    },
  ]),
});
