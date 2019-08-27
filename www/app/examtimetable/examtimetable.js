moduleCtrl

.controller('examtimetableCtrl', function($scope, $rootScope, $state) {
	var calendarEl = document.getElementById('calendar');

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
	    events: [{
    title: 'my event',
    duration: '02:00'
  }],
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
