moduleCtrl

.controller('resultsCtrl', function($scope, $rootScope, $state, $ionicModal) {
	$scope.exams=[
		{examname:'Term 1', startdate: '25/07/19', enddate:'25/07/19', result: {tamil:'100', english:'100',maths:'100', social:'100', total:'400', grade:'A', remarks:'sdfasdf'}},
		{examname:'Term 2', startdate: '30/07/19', enddate: '30/07/19', result: {tamil:'100', english:'100',maths:'100', social:'100', total:'400', grade:'A', remarks:'sdfasdf'}}
	];

	
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

