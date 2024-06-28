// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }

    $scope.characters = 5;

    $http.get("https://dummyjson.com/comments")
    .then(function(result) {
        $scope.rules = result.data;
    })
    .catch(function (data, status) {
        console.log(data);
    });

    $scope.newRule = '';
    $scope.addRule = function() {
        $http.post("/api", {newRule: $scope.newRule})
        .then(function(result) {
            $scope.rules = result.data;
            $scope.newRule = '';
        })
        .catch(function (data, status) {
            console.log(data);
        });
    }
}]);
