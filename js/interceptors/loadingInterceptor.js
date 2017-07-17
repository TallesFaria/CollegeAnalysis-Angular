angular.module("collegeAnalysis").factory("loadingInterceptor", function($q, $rootScope){
    return {
        request: function(config){
            $rootScope.loading = true;
            return config
        },
        responseError: function(rejection){
            $rootScope.loading = false
            return $q.reject(rejection)
        },
        response: function(response){
            $rootScope.loading = false
            return response
        },
        responseError: function(rejection){
            $rootScope.loading = false
            return $q.reject(rejection)
        }

    }
})