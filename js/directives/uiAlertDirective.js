angular.module("collegeAnalysis").directive("uiAlert", function(){
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AECM",
        scope: {
            title: "@",
            message: "="
        },
        transclude: true   
    }
})