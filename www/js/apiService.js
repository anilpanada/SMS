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


    apiService.get_aptitude = function(){
        return httpService
        .post(APIURL+'get_aptitude&user_id='+$rootScope.loggedInUserInfo.id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_aptitude_questions = function(id){
        return httpService
        .post(APIURL+'get_aptitude_questions&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

     apiService.get_aptitude_report = function(id){
        return httpService
        .post(APIURL+'get_aptitude_report&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_aptitude_review = function(id, aid){
        return httpService
        .post(APIURL+'get_aptitude_review&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id+'&answer_id='+aid, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.write_aptitude = function(id, aid){
        return httpService
        .post(APIURL+'write_aptitude&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+id, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_homework = function(dt){
        return httpService
        .post(APIURL+'get_homework', {date: dt, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_class_notes = function(dt){
        return httpService
        .post(APIURL+'get_class_notes', {date: dt, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_projects = function(dt){
        return httpService
        .post(APIURL+'get_projects', {date: dt, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_time_table = function(dt){
        return httpService
        .post(APIURL+'get_time_table', {date: dt, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_exam_time_table = function(){
        return httpService
        .post(APIURL+'get_exam_time_table', {class: $rootScope.loggedInUserInfo.academic.class})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_results = function(){
        return httpService
        .post(APIURL+'get_results', {user_id: $rootScope.loggedInUserInfo.id, class: $rootScope.loggedInUserInfo.academic.class, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_profile = function(){
        return httpService
        .post(APIURL+'get_profile', {user_id: $rootScope.loggedInUserInfo.id, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_books = function(term, subject){
        return httpService
        .post(APIURL+'get_books', {term: term, subject: subject, user_id: $rootScope.loggedInUserInfo.id, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.get_subjects = function(){
        return httpService
        .post(APIURL+'get_subject', {user_id: $rootScope.loggedInUserInfo.id, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };

     apiService.get_vbooks = function(term, subject){
        return httpService
        .post(APIURL+'get_vbooks', {term: term, subject: subject, user_id: $rootScope.loggedInUserInfo.id, class_name: $rootScope.loggedInUserInfo.academic.class_name, section_name: $rootScope.loggedInUserInfo.academic.section_name})
        .then(function (res) {
            return res['data'];
        });
    };
   
    return apiService;
});