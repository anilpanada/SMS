moduleCtrl

.controller('BooksCtrl', function($scope, $rootScope, $state, Data, ApiService) {
	$scope.books = Data.data;

});
