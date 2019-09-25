moduleCtrl

.controller('neetjeetestCtrl', function($scope, $rootScope, $state, Data, $ionicModal, ApiService) {
	$scope.dailytest= Data.data;
	
	$scope.pageInfo = {template: ''};
	$scope.selectedTest = function(obj){
		$scope.selected = obj;
		
	};

	$scope.readPageData = {};

		$scope.getReadData = function(id){
			$scope.readPageData = {};
			ApiService.get_aptitude_questions(id).then(function(res){
				$scope.readPageData = res.data;
			});
		};


	$scope.reportPageData = {};

		$scope.getReportData = function(id){
			$scope.reportPageData = {};
			ApiService.get_aptitude_report(id).then(function(res){
				$scope.reportPageData = res.data;
			});
		};


	$scope.reviewPageData = {};

		$scope.getReviewData = function(id, aid){
			$scope.reviewPageData = {};
			ApiService.get_aptitude_review(id, aid).then(function(res){
				$scope.reviewPageData = res.data;
			});
		};
});


