angular.module("animalFarm").controller("animalsController", function($scope, animalsService){


$scope.animal = animalsService.animalInfo;


})
