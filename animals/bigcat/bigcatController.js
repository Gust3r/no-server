angular.module("animalFarm").controller("bigcatController", function($scope, animalsService){

  $scope.title = "Big Cats"
  $scope.bigCat = animalsService.animalInfo[1];





})
