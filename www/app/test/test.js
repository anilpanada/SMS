moduleCtrl

.controller('testCtrl', function($scope, $rootScope, $state, $ionicModal) {
	$scope.dailytest=[
		{date:'25/09/19', subject:'English', testname:'I English', total:'100', marks:'80', remark:'my pet, families'},
		{date:'26/09/19', subject:'English', testname:'2 English', total:'80', marks:'40', remark:'families'},
		
	];

	$scope.que_ans = [
	{question_type: 'choose', questions:[{question:'1', answer:'asdfas'}, {question:'2', answer:'wertwetwer'}, {question:'3', answer:'asdyuiyrtyfas'}]}, 
	{question_type: 'match', questions:[{question:'1', answer:'qwerwqetrqw'}, {question:'2', answer:'w34twrtew'}, {question:'3', answer:'bvmghfgjfghj'}]}	];

	$scope.pageInfo = {template: ''};
	$scope.selectedTest = function(obj){
		$scope.selected = obj;
		
	};

	

})
