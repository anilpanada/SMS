moduleCtrl

.controller('calendarCtrl', function($scope, $rootScope, $state, Data) {

	var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    	plugins: [ 'interaction', 'dayGrid' ],
    	header: {
		  left:   'prev',
		  center: 'title',
		  right:  'next'
		},
	    defaultDate: new Date(),
	    editable: true,
	    eventLimit: true, // allow "more" link when too many events
	    events: Data.data,
	    eventClick: function(info) {
	    	var ele = angular.element(document.querySelector('.fc-popover'));
	    	if(ele.hasClass('customised_popover')){
	    		angular.element(document.querySelector('#eventcolor')).removeClass('greenEvent');
    			angular.element(document.querySelector('#eventcolor')).removeClass('blueEvent');
    			angular.element(document.querySelector('#eventcolor')).removeClass('presentEvent');
    			angular.element(document.querySelector('#eventcolor')).removeClass('absentEvent');
	    		ele.removeClass('ng-hide');
	    		var monthNames = ["January", "February", "March", "April", "May", "June",
				  "July", "August", "September", "October", "November", "December"
				];

				var dt = monthNames[info.event.start.getMonth()]+' '+info.event.start.getDate()+', '+info.event.start.getFullYear();

				//ele.css({top: info.jsEvent.clientY, left: info.jsEvent.clientX});

				angular.element(document.querySelector('#cpdate')).text(dt);
				angular.element(document.querySelector('#cptitle')).text(info.event.title);
				angular.element(document.querySelector('#eventcolor')).addClass(info.event.classNames[1]);
	    	}
	    }
    });

    calendar.render();

    $scope.hidepopover = function(){
    	angular.element(document.querySelector('.fc-popover')).addClass('ng-hide');
    	angular.element(document.querySelector('#eventcolor')).removeClass('greenEvent');
    	angular.element(document.querySelector('#eventcolor')).removeClass('blueEvent');
    	angular.element(document.querySelector('#eventcolor')).removeClass('presentEvent');
    	angular.element(document.querySelector('#eventcolor')).removeClass('absentEvent');
    };
});

