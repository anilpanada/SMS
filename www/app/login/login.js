moduleCtrl

.controller('LoginCtrl', function($scope, $rootScope, $state, ApiService) {
	
	var authData = localStorage.getItem('sms_auth');

	if(!!authData){
		$state.go('home');
	}

	$scope.login = {};

	$scope.authenticate = function(){
		ApiService.login($scope.login).then(function(res){
			if(res.status == 'Success'){
				$rootScope.loggedInUserInfo = res.data;
                localStorage.setItem('sms_auth', JSON.stringify(res.data));
                $rootScope.$broadcast('user_logged_in', res.data);
                    
				ApiService.notification('Logged in successfully', 'success');
				$state.go('home');
			} else {
				ApiService.notification(res.msg, 'error');
			}
		});
	}
})

.controller('ForgetCtrl', function($scope, $rootScope, $state) {

});