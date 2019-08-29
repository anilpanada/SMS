moduleCtrl

.controller('timetableCtrl', function($scope, $rootScope, $state) {
	$scope.timetable=[
		{day: 'Monday', period1: 'English',  period2: 'tamil', period3: 'maths',period4: 'social', period5: 'science', period6: 'hindi', period7: 'evs', period8: 'PT'},
		{day: 'Tuesday', period1: 'English',  period2: 'tamil', period3: 'maths',period4: 'social', period5: 'science', period6: 'hindi', period7: 'evs', period8: 'PT'},
		{day: 'wednesday', period1: 'English',  period2: 'tamil', period3: 'maths',period4: 'social', period5: 'science', period6: 'hindi', period7: 'evs', period8: 'PT'},
		{day: 'thursday', period1: 'English',  period2: 'tamil', period3: 'maths',period4: 'social', period5: 'science', period6: 'hindi', period7: 'evs', period8: 'PT'},
		{day: 'friday', period1: 'English',  period2: 'tamil', period3: 'maths',period4: 'social', period5: 'science', period6: 'hindi', period7: 'evs', period8: 'PT'}
	];
});
