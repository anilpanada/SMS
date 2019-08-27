moduleCtrl

.controller('projectsCtrl', function($scope, $rootScope, $state) {
	$scope.projects=[
		{period: 1, subject: 'Tamil', description: 'f hgfhf hfhgf hgfhgh '},
		{period: 2, subject: 'English', description: 'f hgfhf hfhgf hgfhgh ', attachment: 'img/logo.png'},
		{period: 3, subject: 'Social', description: 'f hgfhf hfhgf hgfhgh ', attachment: 'img/gallery-1.54367052183E+12.jpg'}
	];
$scope.date = new Date();

});
