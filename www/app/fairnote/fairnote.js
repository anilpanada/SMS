moduleCtrl

.controller('fairnoteCtrl', function($scope, $rootScope, $state, Data, ApiService) {
	$scope.subjects = Data.data;

	/*$scope.pageInfo = {};*/
	$scope.pageInfo = {};

	$scope.chapters = [];
	$scope.fairnotes = [];

	$scope.get_chapter = function(){
		if($scope.pageInfo.term && $scope.pageInfo.subject){
			ApiService.get_chapter($scope.pageInfo.term, $scope.pageInfo.subject).then(function(res){
				$scope.chapters = res.data;
			});
		}
	};

	$scope.get_fair_notes = function(){
		ApiService.get_fair_notes($scope.pageInfo).then(function(res){
			$scope.fairnotes = res.data;
			$scope.pageInfo.showquestion = true;
		});
	};
});
