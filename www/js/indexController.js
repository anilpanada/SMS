moduleCtrl

.controller('indexController', function($scope, $rootScope, $state, ApiService, $timeout) {

      $scope.removeOfflineFile = function(){
           var type = window.TEMPORARY;
           var size = 500*1024*1024;
           window.requestFileSystem(type, size, successCallback, errorCallback)

           function successCallback(fs) {
              fs.root.getFile('offline-data.txt', {create: false}, function(fileEntry) {

                 fileEntry.remove(function() {
                 }, errorCallback);
              }, errorCallback);
           }

           function errorCallback(error) {
              alert("ERROR: " + error.code)
           }
    }
    

	var authData = localStorage.getItem('sms_auth');
    $rootScope.loggedInUserInfo = {};
    $rootScope.isDevice = 1;

	if(!!authData){
		$rootScope.loggedInUserInfo = JSON.parse(authData);
        
	} else if($state.current.name != 'login'){
		$state.go('login');
	}

	$rootScope.currentState = $state.current.name;
    $rootScope.currentStateDetails = $state.current;
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        $scope.setOnlineStatus(); 
        $rootScope.currentState = toState.name;
        $rootScope.currentStateDetails = toState
    });


    $rootScope.$on('user_logged_in', function(eve, data){
        $rootScope.loggedInUserInfo = data;
        $scope.backUpData();
    });

    $scope.logout = function(){
        $rootScope.loggedInUserInfo = {};
        localStorage.removeItem('sms_auth');
        localStorage.removeItem('backUpData');
        $state.go('login');
    }

    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
    
    function onOffline() {
       $rootScope.isOnline = false;
       if(!$scope.$$phase) {
           $scope.$apply();
       }
    }

    function onOnline() {
       $rootScope.isOnline = true;
       if(!$scope.$$phase) {
           $scope.$apply();
       }

       $scope.syncOffineData();
    } 

    $scope.syncOffineData = function(){

        if(!$rootScope.isOnline) return;

        var insCachedPackage = localStorage.getItem('smsCachedTest');

        if(insCachedPackage){
            insCachedPackage = JSON.parse(insCachedPackage);
        } else {
            insCachedPackage = {};
        }

        angular.forEach(insCachedPackage, function(v,k){
            ApiService[v.action](v.data).then(function(){
                delete insCachedPackage[k];
                localStorage.setItem('smsCachedTest', JSON.stringify(insCachedPackage));
            });
        });
    };

    $scope.startQueue = function(qd){
        var filter = qd.filter(function(a){
            return a.bk === false;
        });

        if(filter.length){
            $rootScope.backupLoader = true;
            var prom;

            if(filter[0].noparams){
                prom = ApiService[filter[0].action]();
            } else if(filter[0].params2){
                prom = ApiService[filter[0].action](filter[0].params, filter[0].params2);
            } else {
                prom = ApiService[filter[0].action](filter[0].params);
            }

            prom.then(function(){
                filter[0].bk = true;
                localStorage.setItem('backUpData', JSON.stringify(qd));

                if($rootScope.loadBackup){
                  $scope.startQueue(qd);
                }
            });
        } else {
          $rootScope.backupLoader = false;
        }
    };

    $rootScope.backupLoader = false;
    $rootScope.loadBackup = true;
    $scope.createQueue = function(){

        $que = ['get_homework', 'attendance', 'get_subjects', 'calendar', 'get_class_notes', 'get_exam_time_table',
        'get_gallery', 'get_aptitude', 'get_profile', 'get_projects', 'get_results'];

        $quedata = [];

        angular.forEach($que, function(v,k){
            $quedata.push({action: v, noparams: {}, bk: false})
        });

        ApiService.get_daily_tests().then(function(res){
            angular.forEach(res.data, function(v,k){
              $quedata.push({action: 'get_daily_test_questions', params: v.id, bk: false});
              $quedata.push({action: 'get_daily_test_report', params: v.id, bk: false});

                angular.forEach(v.tests, function(v1,k1){
                  $quedata.push({action: 'get_daily_test_review', params: v.id, params2: v1.id, bk: false});
                });
            });

            ApiService.get_self_tests().then(function(res){
              angular.forEach(res.data, function(v,k){
                $quedata.push({action: 'get_self_test_questions', params: v.id, bk: false});
                $quedata.push({action: 'get_self_test_report', params: v.id, bk: false});

                angular.forEach(v.tests, function(v1,k1){
                  $quedata.push({action: 'get_self_test_review', params2: v.id, params2: v1.id, bk: false});
                });
              });

              localStorage.setItem('backUpData', JSON.stringify($quedata));
              if($rootScope.loadBackup){
                $scope.startQueue($quedata);
              }
            });
        });
        
    };


    $scope.changeBkStatus = function(fl){
      $rootScope.loadBackup = fl;
      $scope.backUpData();
    };

    $scope.backUpData = function(){
        var backUpData = localStorage.getItem('backUpData');

        if(backUpData){
            backUpData = JSON.parse(backUpData);
            if($rootScope.loadBackup){
              $scope.startQueue(backUpData);
            }
        } else {
            $scope.createQueue();
        }
    };

    $scope.setOnlineStatus = function(){
        $rootScope.isOnline = navigator.onLine;
        //$rootScope.isOnline = false;
    };

    if($rootScope.loggedInUserInfo.id){
        $scope.setOnlineStatus();

        $scope.syncOffineData();

        if($rootScope.isOnline){
            $scope.backUpData();
        }
    }

    $scope.reload = function(){
        $state.reload();
    };

    $scope.shuffle = function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    $scope.get_random_number = function(a, c){
        var dd = Math.floor(Math.random() * a) + 1;
        if(c.indexOf(dd) === -1){
            return dd;
        } else {
            return $scope.get_random_number(a, c);
        }
    };

    $scope.missing_letters = function(a){
        a = a.trim();
        var b =[];
        for(i=0;i<a.length;i++){
            b.push(a[i]);
        }
        var lcnt = (a.length%3 == 0) ? parseInt(a.length/3) : (parseInt(a.length/3) + 1);
        var c = [];
        for(i=0;i<lcnt;i++){
            var dd = $scope.get_random_number(a.length, c);
            c.push(dd);
            b[dd] = '_';
        }

        return b.join('');
    };

    $scope.jumbled_letters = function(a){
        a = a.trim();
        var b =[];
        for(i=0;i<a.length;i++){
            b.push(a[i]);
        }

        b = $scope.shuffle(b);
        return b.join('');
    };

    $scope.jumbled_words = function(a){
        a = a.trim().split(' ');
        a = $scope.shuffle(a);
        return a.join('');
    };




});