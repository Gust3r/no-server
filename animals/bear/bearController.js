angular.module("animalFarm").controller("bearController", function($scope, animalsService){

$scope.title = "Bear";
$scope.bear = animalsService.animalInfo[0];




})
