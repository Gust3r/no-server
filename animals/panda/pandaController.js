angular.module("animalFarm").controller("pandaController", function($scope, animalsService){

$scope.title = "Red Panda";
$scope.redPanda = animalsService.animalInfo[4];



})
