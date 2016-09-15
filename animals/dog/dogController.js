angular.module("animalFarm").controller("dogController", function($scope, animalsService){

  $scope.title = "Dogs"
  $scope.dog = animalsService.animalInfo[3]





})
