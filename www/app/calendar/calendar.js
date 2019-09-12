moduleCtrl

.controller('calendarCtrl', function($scope, $rootScope, $state) {

$scope.attendance = [
{start:'2019-10-02', title: 'Gandhi Jayanthi' , backgroundColor: 'red', calendar_type:'1'},
{start:'2019-10-03', title: '' , backgroundColor: 'green', calendar_type:'2'},
]

/*document.addEventListener('DOMContentLoaded', function() {*/
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

