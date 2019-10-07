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


            if($rootScope.offlineData === undefined){
               var type = window.TEMPORARY;
               var size = 500*1024*1024;
               function successCallback(fs) {
                  fs.root.getFile('offline-data.txt', {}, function(fileEntry) {

                     fileEntry.file(function(file) {
                        var reader = new FileReader();

                        reader.onloadend = function(e) {
                         // alert(this.result);
                           $rootScope.offlineData = this.result ? JSON.parse(this.result) : {};
                            
                        };
                        reader.readAsText(file);
                     }, errorCallback);
                  }, errorCallback);
               }

               function errorCallback(error) {
                  //alert("ERROR: " + error.code)
                  $rootScope.offlineData = {};
               }

               window.requestFileSystem(type, size, successCallback, errorCallback);
           }

            if($rootScope.isOnline){
                apiPromise = $http.post(url, req, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});

                apiPromise.then(function(response){
                        var vv = url.split(APIURL);

                        $rootScope.offlineData['sms_sync_'+encodeURI(vv[1])] = response;

                            if($rootScope.isDevice){
                                var type = window.TEMPORARY;
                                var size = 500*1024*1024;
                                
                                function successCallback(fs) {
                                  fs.root.getFile('offline-data.txt', {create: true}, function(fileEntry) {

                                     fileEntry.createWriter(function(fileWriter) {
                                        fileWriter.onwriteend = function(e) {
                                           //alert('Write completed.');
                                        };

                                        fileWriter.onerror = function(e) {
                                           //alert('Write failed: ' + e.toString());
                                        };

                                        var blob = new Blob([JSON.stringify($rootScope.offlineData)], {type: 'text/plain'});
                                        fileWriter.write(blob);
                                             }, errorCallback);
                                  }, errorCallback);
                                }

                                function errorCallback(error) {
                                  //alert("ERROR: " + error.code)
                                }

                                window.requestFileSystem(type, size, successCallback, errorCallback);
                            }
                            

                    deferred.resolve(response);
                }, function(response){
                    deferred.reject(response);
                });
            } else {
                $timeout(function(){
                    var vv = url.split(APIURL);
                    var data = $rootScope.offlineData['sms_sync_'+encodeURI(vv[1])];
                    if(data){
                        deferred.resolve(data);
                    } else{
                        deferred.reject({});
                    }
                }, 2000);
            }

            return deferred.promise;

        }

}