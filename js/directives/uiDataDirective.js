angular.module("collegeAnalysis").directive("uiDate", function($filter){
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl){
            var _formatDate = function(date){
                date = date.replace(/[^0-9]+/g, "")
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + data.substring(2)
                }
                if(date.length > 5){
                    date = date.substring(0,5) + "/" + data.substring(5,9)
                }
                return date
            }
            
            element.bind("keyup", function(){
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            })

            ctrl.$parsers.push(function(value){
                if(value.length === 10){
                    var dateArray = value.split("/")
                    return new Date(dataArray[2], dataArray[1]-1, dateArray[0]).getTime()
                }
            })

            ctrl.$formatters.push(function(value){
                return $filter("date")(value, "dd/MM/yyyy")
            })
        }
    }
})