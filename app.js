angular.module("animalFarm", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("home", {
      url:"/",
      controller:"homeController",
      templateUrl:"home/home.html"
    })
    .state("animals", {
      url:"/animals",
      controller:"animalsController",
      templateUrl:"./animals/animals.html"
    })
    .state("bear", {
      url:"/bear",
      controller:"bearController",
      templateUrl:"./animals/bear/bear.html"
    })
    .state("bigcat", {
      url:"/bigcat",
      controller:"bigcatController",
      templateUrl:"./animals/bigcat/bigcat.html"
    })
    .state("chicken", {
      url:"/chicken",
      controller:"chickenController",
      templateUrl:"./animals/chicken/chicken.html"
    })
    .state("deer", {
      url:"/deer",
      controller:"deerController",
      templateUrl:"./animals/deer/deer.html"
    })
    .state("dog", {
      url:"/dog",
      controller:"dogController",
      templateUrl:"./animals/dog/dog.html"
    })
    .state("panda", {
      url:"/redpanda",
      controller:"pandaController",
      templateUrl:"./animals/panda/panda.html"
    })











});
