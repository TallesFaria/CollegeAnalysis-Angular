angular.module("collegeAnalysis").factory("studentsAPI", function($http, config){
    var _getStudents = function() {
        var students = [
            {
                name: "Arthur", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ], 
                mean: 0,
                rank: 0
            },
            {
                name: "Liam", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Janete", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Elisa", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Jack Meyers", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Barbara", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Kelly", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Mattheus", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "George", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            },
            {
                name: "Bryan", 
                grades: [
                    {acronym: "EEA-21", grade: Math.random()*100},
                    {acronym: "CES-22", grade: Math.random()*100},
                    {acronym: "CTC-20", grade: Math.random()*100},
                    {acronym: "EEA-45", grade: Math.random()*100},
                    {acronym: "EES-10", grade: Math.random()*100},
                    {acronym: "ELE-12", grade: Math.random()*100},
                ],
                mean: 0,
                rank: 0
            }
        ]
        return students;
    }

    var _getStudent = function(id) {
        return $http.get(config.baseUrl + "/students/" + id);
    }

    var _saveStudent = function(contato) {
        return $http.post(config.baseUrl + "/students", contato);
    }

    return {
        getStudents: _getStudents,
        getStudent: _getStudent,
        saveStudent: _saveStudent
    }
})