// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.name = 'Tony';

    // $timeout(function() {
    //     $scope.name = 'Everybody';
    // }, 3000);

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }

    $scope.$watch('handle', function(newValue, oldValue) {
        console.info("Changed !");
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
    });

    setTimeout(function() {
        $scope.$apply(function() {
            $scope.handle = 'newtwitterhandle';
            console.log('Scope changed !');
        })
    }, 3000)
}]);
