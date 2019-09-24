moduleCtrl

.controller('profileCtrl', function($scope, $rootScope, $state, Data) {
	$scope.profile=Data.data;

});

