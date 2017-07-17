angular.module("collegeAnalysis").config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "view/studentList.html",
            controller: "studentListCtrl",
        })
        .when("/addNewStudent", {
            templateUrl: "view/saveStudent.html",
            controller: "saveStudentCtrl",
        })
        .when("/studentDetails/:id", {
            templateUrl: "view/studentDetails.html",
            controller: "studentDetailsCtrl",
        })
        .when("/error", {
            templateUrl: "view/detalhesContato.html",
        })
        .otherwise({redirectTo: "/"})
})