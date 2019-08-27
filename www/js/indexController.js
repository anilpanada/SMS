moduleCtrl

.controller('indexController', function($scope, $rootScope, $state) {
	$rootScope.currentState = $state.current.name;
    $rootScope.currentStateDetails = $state.current;
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
        $rootScope.currentState = toState.name;
        $rootScope.currentStateDetails = toState
    });


});