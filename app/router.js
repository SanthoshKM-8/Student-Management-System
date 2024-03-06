import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('home');
  this.route('students', function () {
    this.route('addStudent');
  });
  this.route('student', { path: 'student/:student_id' }, function () {
    this.route('edit');
  });
  this.route('students-loading');
  this.route('about');
});
