angular.module("collegeAnalysis").directive("uiAccordions", function(){
    return {
        controller: function($scope, $element, $attrs){
            var accordions = []
            this.registerAccordion = function(accordion){
                accordions.push(accordion)
            }

            this.closeAll = function(){
                accordions.forEach(function(accordions){
                    accordion.isOpened = false
                })
            }
        }
    }
})

angular.module("collegeAnalysis").directive("uiAccordion", function(){
    return {
        templateUrl: "/view/accordion.html",
        scope:{
            title: "@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl){
            ctrl.registerAccordion(scope)
            scope.open = function(){
                ctrl.closeAll()
                scope.isOpened = true
            }
        }
    }
})