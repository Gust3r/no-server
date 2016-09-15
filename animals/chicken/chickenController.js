angular.module("animalFarm").controller("chickenController", function($scope, animalsService){

  $scope.title = "Chicken";
  $scope.chicken = animalsService.animalInfo[5];





})
