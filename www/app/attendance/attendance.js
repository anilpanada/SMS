moduleCtrl

.controller('AttendanceCtrl', function($scope, $rootScope, $state, Data) {

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
	    events: Data.data,
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
