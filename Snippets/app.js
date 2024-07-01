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
        .otherwise({ redirectTo: '/' }); // Default route
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams',
    function($scope, $log, $routeParams) {
    
}]);

angularApp.directive("searchResult", function() {
    return {
        restrict: 'AECM', // This is the default one (Attribute and element)
        // C -> Class
        // M -> Comment
        templateUrl: `directives/searchresult.html`,
        replace: true,
        scope: {
            // personNameSpecial: "@personName",
            personName: "@", // Text
            personAddress: "@"
        }
    }
})
