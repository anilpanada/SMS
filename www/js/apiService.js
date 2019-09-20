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
    
   apiService.get_daily_test_questions = function(id){
        return httpService
        .post(APIURL+'get_daily_test_questions&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

     apiService.get_daily_test_report = function(id){
        return httpService
        .post(APIURL+'get_daily_test_report&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_daily_test_review = function(id, aid){
        return httpService
        .post(APIURL+'get_daily_test_review&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id+'&answer_id='+aid, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.write_daily_test = function(id, aid){
        return httpService
        .post(APIURL+'write_daily_test&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_gallery = function(){
        return httpService
        .post(APIURL+'get_gallery&user_id='+$rootScope.loggedInUserInfo.id, {})
        .then(function (res) {
            return res['data'];
        });
    };
    
    

     apiService.get_self_tests = function(){
        return httpService
        .post(APIURL+'get_self_tests&user_id='+$rootScope.loggedInUserInfo.id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_self_test_questions = function(id){
        return httpService
        .post(APIURL+'get_self_test_questions&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

     apiService.get_self_test_report = function(id){
        return httpService
        .post(APIURL+'get_self_test_report&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_self_test_review = function(id, aid){
        return httpService
        .post(APIURL+'get_self_test_review&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id+'&answer_id='+aid, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.write_self_test = function(id, aid){
        return httpService
        .post(APIURL+'write_self_test&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    return apiService;
});