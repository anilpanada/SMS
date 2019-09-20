moduleCtrl

.controller('testCtrl', function($scope, $rootScope, $state, $ionicModal, Data, ApiService) {
	$scope.dailytest = Data.data;

	$scope.que_ans = [
	{question_type: 'choose', questions:[{question:'1', answer:'asdfas'}, {question:'2', answer:'wertwetwer'}, {question:'3', answer:'asdyuiyrtyfas'}]}, 
	{question_type: 'match', questions:[{question:'1', answer:'qwerwqetrqw'}, {question:'2', answer:'w34twrtew'}, {question:'3', answer:'bvmghfgjfghj'}]}	];

	$scope.pageInfo = {template: ''};
	$scope.selectedTest = function(obj){
		$scope.selected = obj;
		
	};

	$scope.readPageData = {};

	$scope.getReadData = function(id){
		$scope.readPageData = {};
		ApiService.get_daily_test_questions(id).then(function(res){
			$scope.readPageData = res.data;
		});
	};


$scope.reportPageData = {};

	$scope.getReportData = function(id){
		$scope.reportPageData = {};
		ApiService.get_daily_test_report(id).then(function(res){
			$scope.reportPageData = res.data;
		});
	};


$scope.reviewPageData = {};

	$scope.getReviewData = function(id, aid){
		$scope.reviewPageData = {};
		ApiService.get_daily_test_review(id, aid).then(function(res){
			$scope.reviewPageData = res.data;
		});
	};
	
})
