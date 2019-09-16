moduleCtrl

.controller('indexController', function($scope, $rootScope, $state) {

	var authData = localStorage.getItem('sms_auth');

	if(!!authData){
		$rootScope.loggedInUserInfo = JSON.parse(authData);
	} else if($state.current.name != 'login'){
		$state.go('login');
	}

	$rootScope.currentState = $state.current.name;
    $rootScope.currentStateDetails = $state.current;
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
        $rootScope.currentState = toState.name;
        $rootScope.currentStateDetails = toState
    });


    $rootScope.$on('user_logged_in', function(eve, data){
        $rootScope.loggedInUserInfo = data;
    });

});