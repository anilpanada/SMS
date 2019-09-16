moduleCtrl

.controller('testCtrl', function($scope, $rootScope, $state, $ionicModal, Data) {
	$scope.dailytest = Data.data;

	$scope.que_ans = [
	{question_type: 'choose', questions:[{question:'1', answer:'asdfas'}, {question:'2', answer:'wertwetwer'}, {question:'3', answer:'asdyuiyrtyfas'}]}, 
	{question_type: 'match', questions:[{question:'1', answer:'qwerwqetrqw'}, {question:'2', answer:'w34twrtew'}, {question:'3', answer:'bvmghfgjfghj'}]}	];

	$scope.pageInfo = {template: ''};
	$scope.selectedTest = function(obj){
		$scope.selected = obj;
		
	};

	

})
