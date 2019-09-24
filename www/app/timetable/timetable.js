moduleCtrl

.controller('timetableCtrl', function($scope, $rootScope, $state, Data) {
	$scope.timetable=Data.data;
	$scope.days = [{i:1, d:'Monday'}, {i:2, d:'Tuesday'}, {i:3, d:'Wednesday'}, {i:4, d:'Thurday'}, {i:5, d:'Friday'}];
	$scope.periods = [1,2,3,4,5,6,7,8];
});
