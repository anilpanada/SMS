moduleCtrl

.controller('examtimetableCtrl', function($scope, $rootScope, $state, $ionicModal) {
	$scope.examtable=[
		{examname:'Term 1', startdate: '25/07/19', enddate:'05/08/19', exams: [{date:'25/07/2019', subject:'tamil', session:'forenoon', syllabus:'gfdgfdgf'},{date:'26/07/2019', subject:'social', session:'forenoon', syllabus:'gfdgfdgf'},{date:'28/07/2019', subject:'hindi', session:'forenoon', syllabus:'gfdgfdgf'},{date:'29/07/2019', subject:'english', session:'forenoon', syllabus:'gfdgfdgf'},{date:'30/07/2019', subject:'maths', session:'forenoon', syllabus:'gfdgfdgf'}]}
		
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
