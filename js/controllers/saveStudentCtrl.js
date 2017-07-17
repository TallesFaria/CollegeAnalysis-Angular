angular.module("collegeAnalysis").controller('studentListCtrl', function($scope, $routeParams, studentsApiServices) {
    $scope.subjectList = [
        {name: "Digital Circuits", acronym: "EEA-21"},
        {name: "Object oriented Programming", acronym: "CES-22"},
        {name: "Discreet Structures for Computing", acronym: "CTC-20"},
        {name: "Basics Eletronic Circuits and Devices", acronym: "EEA-45"},
        {name: "Control Systems I", acronym: "EES-10"},
        {name: "Systems and Electromagnetism", acronym: "ELE-12"}
    ]
    $scope.saveStudent= function(student){
        studentsApiServices.saveStudent(angular.copy(student));
        delete $scope.student;
        $scope.studentList = studentsApiServices.getStudents();
    }
})