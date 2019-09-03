moduleCtrl

.controller('fairnoteCtrl', function($scope, $rootScope, $state) {
	$scope.subjects = [
	{subject_name: 'tamil', chapters:[{cname:'1'}, {cname:'2'}, {cname:'3'}]}, 
	{subject_name: 'english', chapters:[{cname:'4'}, {cname:'5'}, {cname:'6'}]}
	];
	
	$scope.que_ans = [
	{question_type: 'choose', questions:[{question:'1', answer:'asdfas'}, {question:'2', answer:'wertwetwer'}, {question:'3', answer:'asdyuiyrtyfas'}]}, 
	{question_type: 'match', questions:[{question:'1', answer:'qwerwqetrqw'}, {question:'2', answer:'w34twrtew'}, {question:'3', answer:'bvmghfgjfghj'}]}	];

	$scope.pageInfo = {};

});
