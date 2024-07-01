// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .otherwise({ redirectTo: '/' }); // Default route
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.name = "John";

    $log.main = "Property from main";
    $log.log($log);
}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    $scope.num = $routeParams.num || 1;

    $log.second = "Property from second";
    $log.log($log);
}]);
