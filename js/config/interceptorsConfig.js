angular.module("collegeAnalysis").config(function($httpProvider){
    $httpProvider.interceptors.push("timestampInterceptors")
})