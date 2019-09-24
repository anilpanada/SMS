moduleCtrl

.controller('selftestCtrl', function($scope, $rootScope, $state, Data, $ionicModal, ApiService) {
	$scope.selftest= Data.data;
	
	$scope.pageInfo = {template: ''};
	$scope.selectedTest = function(obj){
		$scope.selected = obj;
		
	};

	$scope.readPageData = {};

		$scope.getReadData = function(id){
			$scope.readPageData = {};
			ApiService.get_self_test_questions(id).then(function(res){
				$scope.readPageData = res.data;
			});
		};


	$scope.reportPageData = {};

		$scope.getReportData = function(id){
			$scope.reportPageData = {};
			ApiService.get_self_test_report(id).then(function(res){
				$scope.reportPageData = res.data;
			});
		};


	$scope.reviewPageData = {};

		$scope.getReviewData = function(id, aid){
			$scope.reviewPageData = {};
			ApiService.get_self_test_review(id, aid).then(function(res){
				$scope.reviewPageData = res.data;
			});
		};
}


.controller('WritestestCtrl', function($scope, $rootScope, $state, Data, $ionicModal, ApiService) {
	
});


