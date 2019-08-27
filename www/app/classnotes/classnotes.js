moduleCtrl

.controller('ClassnotesCtrl', function($scope, $rootScope, $state) {
	$scope.classnotes=[
		{period: 1, notes: 'f hgfhf hfhgf hgfhgh '},
		{period: 2, notes: 'f hgfhf hfhgf hgfhgh ', attachment: 'img/logo.png'},
		{period: 3, notes: 'f hgfhf hfhgf hgfhgh ', attachment: 'img/gallery-1.54367052183E+12.jpg'}
	];
$scope.date = new Date();

});
