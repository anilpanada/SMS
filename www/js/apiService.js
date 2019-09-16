moduleCtrl.factory('ApiService', function (httpService, $q, APIURL, $rootScope) {
	var apiService = {};
    
    apiService.notification = function(msg, type){
        /*$('body').pgNotification({
            style: 'flip',
            message: msg,
            position: 'top-middle',
            timeout: 1000,
            type: type
        }).show();*/
    };
    
	apiService.login = function (data) {
    	return httpService
        .post(APIURL+'student_login', data)
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.calendar = function (data) {
    	return httpService
        .post(APIURL+'get_calendar', data)
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.attendance = function (data) {
    	return httpService
        .post(APIURL+'get_student_attendance&user_id='+$rootScope.loggedInUserInfo.id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_daily_tests = function(){
    	return httpService
        .post(APIURL+'get_daily_tests&user_id='+$rootScope.loggedInUserInfo.id, {})
        .then(function (res) {
            return res['data'];
        });
    };
    
    return apiService;
});