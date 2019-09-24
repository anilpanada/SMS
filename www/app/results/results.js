moduleCtrl

.controller('resultsCtrl', function($scope, $rootScope, $state, $ionicModal, Data) {
	
	$scope.exams = Data.data;
	
	$scope.selectedExam = function(obj){
		$scope.selected = obj;
		$ionicModal.fromTemplateUrl('templates/modal.html', {
		    scope: $scope
		  }).then(function(modal) {
		    $scope.modal = modal;
		    $scope.modal.show();
		  });
	};
	

});

