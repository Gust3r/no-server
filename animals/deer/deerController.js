angular.module("animalFarm").controller("deerController", function($scope, animalsService){

$scope.title = "Deer";

$scope.deer = animalsService.animalInfo[2];




})
