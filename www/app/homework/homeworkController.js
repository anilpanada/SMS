moduleCtrl

.controller('HomeworkCtrl', function($scope, $rootScope, $state) {
	$scope.homeworks=[
		{period: 1, homework: 'f hgfhf hfhgf hgfhgh '},
		{period: 2, homework: 'f hgfhf hfhgf hgfhgh ', attachment: 'img/logo.png'},
		{period: 3, homework: 'f hgfhf hfhgf hgfhgh ', attachment: 'img/gallery-1.54367052183E+12.jpg'}
	];
$scope.date = new Date();
});
