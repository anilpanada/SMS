moduleCtrl

.controller('projectsCtrl', function($scope, $rootScope, $state, ionicDatePicker, ApiService, Data) {
	$scope.homeworks = Data.data;

	$scope.openDatePicker = function(){
		ionicDatePicker.openDatePicker(new Date($scope.homeworks.current));
	};

	$scope.changeDate = function(dt){
		ApiService.get_projects(dt).then(function(resp){
			$scope.homeworks = resp.data;
		});
	};

	$scope.get_date = function(dt){
		return new Date(dt);
	};

});
