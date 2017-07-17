angular.module("collegeAnalysis").controller('studentListCtrl', function($scope, $routeParams, studentsApiServices, subjectsApiServices) {
    $scope.subjectList = subjectsApiServices.getSubjects();
    $scope.studentList = studentsApiServices.getStudents();
    $scope.rp = $routeParams.id;
})