angular.module("animalFarm").directive("videoDirective", function(animalsService){

  return {
    restrict: "AE",
    templateUrl: "./videoDirective.html",
    link: function(scope, element, atrribute) {
      scope.video = animalsService.video;
    }
  }




})
