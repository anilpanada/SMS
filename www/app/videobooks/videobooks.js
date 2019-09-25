moduleCtrl

.controller('videobooksCtrl', function($scope, $rootScope, $state,  Data, ApiService) {
	$scope.subjects = Data.data;
	$scope.books = [];
	$scope.get_books = function(){
		if($scope.pageInfo.term && $scope.pageInfo.subject){
			ApiService.get_vbooks($scope.pageInfo.term, $scope.pageInfo.subject).then(function(a){
			$scope.books = a.data;
		})
		}		
	};

	$scope.pageInfo = {};

});
