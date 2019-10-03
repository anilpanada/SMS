moduleCtrl.factory('httpService', httpRestService);

httpRestService.$inject = ['$http', '$q', '$rootScope', 'APIURL', '$timeout'];

function httpRestService($http, $q, $rootScope, APIURL, $timeout) {

    return {
        get: get,
        post: post
    }

    function get(url) {
        return $http.get(url);
    }

    function post(url, req) {
            var deferred = $q.defer(),
                apiPromise;

            if($rootScope.isOnline){
                apiPromise = $http.post(url, req, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});

                apiPromise.then(function(response){
                    var vv = url.split(APIURL);
                    localStorage.setItem('sms_sync_'+encodeURI(vv[1]), JSON.stringify(response));

                    deferred.resolve(response);
                }, function(response){
                    deferred.reject(response);
                });
            } else {
                $timeout(function(){
                    var vv = url.split(APIURL);
                    var data = localStorage.getItem('sms_sync_'+encodeURI(vv[1]));
                    if(data){
                        deferred.resolve(JSON.parse(data));
                    } else{
                        deferred.reject({});
                    }
                });
            }

            return deferred.promise;

        }

}