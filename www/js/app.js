// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','720kb.datepicker', 'ionic-datepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})


.value('APIURL', 'http://localhost/sms2019/api/?action=')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  
  .state('home', {
    url: '/home',
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'DashCtrl'
  })

  .state('homework', {
    url: '/homework',
    templateUrl: 'app/homework/homework.html',
    controller: 'HomeworkCtrl'
  })
  .state('attendance', {
    url: '/attendance',
    templateUrl: 'app/attendance/attendance.html',
    controller: 'AttendanceCtrl',
    resolve: {
        Data: function(ApiService, $stateParams) {
          return ApiService.attendance();
        }
    }
  })
.state('books', {
    url: '/books',
    templateUrl: 'app/books/books.html',
    controller: 'BooksCtrl'
  })
.state('calendar', {
    url: '/calendar',
    templateUrl: 'app/calendar/calendar.html',
    controller: 'calendarCtrl',
    resolve: {
        Data: function(ApiService, $stateParams) {
          return ApiService.calendar();
        }
    }
  })
.state('classnotes', {
    url: '/classnotes',
    templateUrl: 'app/classnotes/classnotes.html',
    controller: 'ClassnotesCtrl'
  })
.state('examtimetable', {
    url: '/examtimetable',
    templateUrl: 'app/examtimetable/examtimetable.html',
    controller: 'examtimetableCtrl'
  })
.state('fairnote', {
    url: '/fairnote',
    templateUrl: 'app/fairnote/fairnote.html',
    controller: 'fairnoteCtrl'
  })
.state('gallery', {
    url: '/gallery',
    templateUrl: 'app/gallery/gallery.html',
    controller: 'galleryCtrl'
  })
.state('neetjeetest', {
    url: '/neetjeetest',
    templateUrl: 'app/neetjeetest/neetjeetest.html',
    controller: 'neetjeetestCtrl'
  })
.state('profile', {
    url: '/profile',
    templateUrl: 'app/profile/profile.html',
    controller: 'profileCtrl'
  })
.state('projects', {
    url: '/projects',
    templateUrl: 'app/projects/projects.html',
    controller: 'projectsCtrl'
  })
.state('results', {
    url: '/results',
    templateUrl: 'app/results/results.html',
    controller: 'resultsCtrl'
  })
.state('selftest', {
    url: '/selftest',
    templateUrl: 'app/selftest/selftest.html',
    controller: 'selftestCtrl'
  })
.state('test', {
    url: '/test',
    templateUrl: 'app/test/test.html',
    controller: 'testCtrl',
    resolve: {
        Data: function(ApiService, $stateParams) {
          return ApiService.get_daily_tests();
        }
    }
  })
.state('timetable', {
    url: '/timetable',
    templateUrl: 'app/timetable/timetable.html',
    controller: 'timetableCtrl'
  })
.state('transport', {
    url: '/transport',
    templateUrl: 'app/transport/transport.html',
    controller: 'transportCtrl'
  })
.state('videobooks', {
    url: '/videobooks',
    templateUrl: 'app/videobooks/videobooks.html',
    controller: 'videobooksCtrl'
  })
.state('login', {
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller: 'LoginCtrl'
  })
.state('forgetpass', {
    url: '/forgetpass',
    templateUrl: 'app/login/forgetpass.html',
    controller: 'ForgetCtrl'
  })
.state('readtest', {
    url: '/readtest',
    templateUrl: 'app/test/readtest.html',
    controller: 'ReadtestCtrl'
  })
  .state('writetest', {
    url: '/writetest',
    templateUrl: 'app/test/writetest.html',
    controller: 'WritetestCtrl'
  })
  .state('report', {
    url: '/report',
    templateUrl: 'app/test/report.html',
    controller: 'ReportCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
