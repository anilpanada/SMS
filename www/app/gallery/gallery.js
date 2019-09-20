moduleCtrl

.controller('galleryCtrl', function($scope, $rootScope, $state, Data) {
	$scope.gallery= Data.data;
});
