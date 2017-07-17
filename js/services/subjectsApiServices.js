angular.module("collegeAnalysis").service("subjectsApi", function($http, config){
    var _getSubjects = function() {
        var subjects = [
            {name: "Digital Circuits", acronym: "EEA-21"},
            {name: "Object oriented Programming", acronym: "CES-22"},
            {name: "Discreet Structures for Computing", acronym: "CTC-20"},
            {name: "Basics Eletronic Circuits and Devices", acronym: "EEA-45"},
            {name: "Control Systems I", acronym: "EES-10"},
            {name: "Systems and Electromagnetism", acronym: "ELE-12"}
        ]
        return subjects
    }

    return {
        getSubjects: _getSubjects
    }
})