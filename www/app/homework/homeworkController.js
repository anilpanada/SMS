moduleCtrl

.controller('HomeworkCtrl', function($scope, $rootScope, $state, ionicDatePicker, Data, ApiService) {
	$scope.homeworks = Data.data;

	$scope.openDatePicker = function(){
		ionicDatePicker.openDatePicker(new Date($scope.homeworks.current));
	};
	$scope.pageInfo = {tempcount: 0, load: true};
	$scope.changeDate = function(dt){
		$scope.pageInfo.tempcount = 0;
		$scope.pageInfo.load = 0;
		ApiService.get_homework(dt).then(function(resp){
			$scope.homeworks = resp.data;
			$scope.pageInfo.load = 1;
		});
	};

	$scope.get_date = function(dt){
		return new Date(dt);
	};

	$scope.goto_test= function(id){
		$rootScope.homeworktest = id;
		$state.go('test');
	}
});
