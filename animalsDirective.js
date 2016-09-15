angular.module("animalFarm").directive("carouselDirective", function(animalsService){

  return {
    restrict: "AE",
    templateUrl: "./myDirective.html",

    link: function(scope, element, attribute){
      scope.images = animalsService.welcomeImage;
      element.css("box-shadow", "10px 10px 5px #888888");
      element.css("opacity", ".5")
    }



  }




})
