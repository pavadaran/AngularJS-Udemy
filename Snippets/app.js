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
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    },

    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
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
            personObject: "=",  // Two way binding
            formattedAddressFunction: "&" // Function
        }
    }
})
