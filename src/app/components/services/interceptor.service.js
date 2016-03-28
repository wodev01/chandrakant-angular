(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .factory('myHttpInterceptor', myHttpInterceptor);

        function myHttpInterceptor($q,$cookies,$location){
            return {
                request : function(req){
                    var deferred = $q.defer();
                    if($cookies.get("auth_token")){
                        if($location.path()==='/login'){
                            $location.path('/dashboard');
                        }else{
                            deferred.resolve(req);
                        }

                    }else{
                        if($location.path()!=='/login'){
                            $location.path('/login');
                        }else{
                            deferred.resolve(req);
                        }
                    }
                    return deferred.promise;
                },
                response: function (response) {
                    // console.log(response); // Contains the data from the response.
                    // Return the response or promise.
                    return response || $q.when(response);
                },
                responseError: function (rejection) {
                    if(rejection.status === 404){
//                      $log.log("Status: ",rejection.status)
                        $location.path('/404');
//                        toastr.error("Page not found!!");
                    }

                    return $q.reject(rejection);
                }
            }
        }
})();