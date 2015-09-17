var pApp = angular.module('pApp', ['ngRoute', 'ngAnimate']);
pApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',//pizza_list.html mapping
            controller: 'PizzaCtrl'
    	})
    	.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
    	.when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController'
    	});


});

pApp.controller('PizzaCtrl', function ($scope, $http){
$scope.pageClass = 'page-home';
$http.post('/pizza_list').success(function(data) {
$scope.pizzas = data;
$scope.sortField = 'pizzas.name';
$scope.reverse = true;
 });
});

 /*countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams){
   console.log($routeParams);
 });*/

/*pApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});*/

pApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

pApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});
