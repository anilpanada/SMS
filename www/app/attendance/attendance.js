moduleCtrl

.controller('AttendanceCtrl', function($scope, $rootScope, $state) {

$scope.attendance = [
{start:'2019-09-11', title: 'Absent' , backgroundColor: 'red', forenoon:'on', afternoon:'on'},
{start:'2019-09-12', title: 'Present' , backgroundColor: 'green', forenoon:'on', afternoon:'on'}
]

	var calendarEl = document.getElementById('attendancecalendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    	plugins: [ 'interaction', 'dayGrid' ],
    	header: {
		  left:   'prev,next title',
		  center: '',
		  right:  ''
		},
	    defaultDate: new Date(),
	    editable: true,
	    eventLimit: true, // allow "more" link when too many events
	    events: $scope.attendance,
	    eventClick: function(info) {
	      	console.log(info.event);
	      	$scope.pageInfo.new_action = 'viewTask';
	      	$scope.pageInfo.newProject = tasks.data2[info.event.id];
          $("html, body").animate({ scrollTop: 0 }, 100);
	      	$scope.$apply();
	    }
    });

    calendar.render();

});
